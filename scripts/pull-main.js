import { execSync } from 'child_process';

try {
  console.log('[v0] Starting git pull from main branch...');
  
  // Fetch all branches to ensure we have the latest
  execSync('git fetch origin', { cwd: '/vercel/share/v0-project', stdio: 'inherit' });
  console.log('[v0] Fetch completed');
  
  // Pull from main branch
  execSync('git pull origin main', { cwd: '/vercel/share/v0-project', stdio: 'inherit' });
  console.log('[v0] Pull from main completed successfully');
  
  // Show current status
  const status = execSync('git status', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
  console.log('[v0] Current git status:\n', status);
  
} catch (error) {
  console.error('[v0] Error during git pull:', error.message);
  process.exit(1);
}
