"use client"

import { ReactNode, useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function SectionCard({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <div id={id} className="rounded-[32px] border border-black/10 bg-[#f7f7f2] p-8 md:p-10">
      {children}
    </div>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string
  title: string
  text?: string
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <span className="inline-block rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-600 mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-[#10210f]">{title}</h2>
      {text && (
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 md:text-lg">{text}</p>
      )}
    </div>
  )
}

export function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-black/10 bg-white p-6">
      <h3 className="text-lg font-bold text-[#10210f]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  )
}

export function StepCard({
  number,
  title,
  text,
}: {
  number: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-[24px] border border-black/10 bg-white p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25a244] font-bold text-white mx-auto mb-4">
        {number}
      </div>
      <h3 className="font-bold text-[#10210f]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  )
}

export function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-[24px] border border-black/10 bg-white p-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3"
      >
        <span className="text-left font-bold text-[#10210f]">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="mt-4 text-sm leading-6 text-gray-600">{a}</p>}
    </div>
  )
}

export function PanelCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[24px] border border-black/10 bg-[#f7f7f2] p-6">
      {children}
    </div>
  )
}

export function Input({
  placeholder,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      placeholder={placeholder}
      className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400"
      {...props}
    />
  )
}
