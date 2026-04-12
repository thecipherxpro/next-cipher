import { execSync } from 'child_process';

try {
  console.log('Pulling latest changes from git...');
  const result = execSync('git pull origin main', { cwd: '/vercel/share/v0-project' }).toString();
  console.log(result);
  console.log('Git pull completed successfully');
} catch (error) {
  console.error('Error pulling from git:', error.message);
}
