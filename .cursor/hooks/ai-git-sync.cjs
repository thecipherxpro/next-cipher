/**
 * Cursor `stop` hook + manual runner: stage, commit, and push after agent work.
 *
 * Hook: runs when the agent loop ends (only if status is `completed` or `error`).
 * Manual: `npm run git:sync` or `node .cursor/hooks/ai-git-sync.cjs --manual`
 *
 * Opt out: set environment variable CURSOR_AUTO_GIT_SYNC=0
 * Requires: git, remote `origin`, and configured user.name / user.email for commits.
 */
const { execFileSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const REPO_ROOT = path.resolve(__dirname, "..", "..")

function readStdin() {
  return new Promise((resolve) => {
    const chunks = []
    process.stdin.setEncoding("utf8")
    process.stdin.on("data", (c) => chunks.push(c))
    process.stdin.on("end", () => resolve(chunks.join("")))
  })
}

function git(args, opts = {}) {
  execFileSync("git", args, {
    cwd: REPO_ROOT,
    stdio: opts.silent ? "pipe" : "inherit",
    ...opts,
  })
}

function gitOut(args) {
  return execFileSync("git", args, {
    cwd: REPO_ROOT,
    encoding: "utf8",
    stdio: ["pipe", "pipe", "pipe"],
  }).trim()
}

function done() {
  process.stdout.write(`${JSON.stringify({})}\n`)
}

async function main() {
  const manual = process.argv.includes("--manual")

  let payload = {}
  if (!manual) {
    try {
      const raw = await readStdin()
      if (raw.trim()) payload = JSON.parse(raw)
    } catch {
      payload = {}
    }
    if (payload.status === "aborted") {
      done()
      return
    }
  }

  if (!manual && process.env.CURSOR_AUTO_GIT_SYNC === "0") {
    done()
    return
  }

  if (!fs.existsSync(path.join(REPO_ROOT, ".git"))) {
    done()
    return
  }

  try {
    const dirty = gitOut(["status", "--porcelain"])
    if (!dirty) {
      done()
      return
    }

    git(["add", "-A"])

    const staged = gitOut(["diff", "--cached", "--name-only"])
    if (!staged) {
      done()
      return
    }

    const msg = `chore(agent): sync ${new Date().toISOString()}`
    try {
      git(["commit", "-m", msg])
    } catch {
      done()
      return
    }

    const branch = gitOut(["branch", "--show-current"]) || "main"
    try {
      git(["push", "-u", "origin", branch])
    } catch (e) {
      console.error("[ai-git-sync] push failed — check auth and remote.", e?.message || e)
    }
  } catch (e) {
    console.error("[ai-git-sync]", e?.message || e)
  }

  done()
}

main()
