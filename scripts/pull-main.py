import subprocess
import os

os.chdir('/vercel/share/v0-project')

try:
    print('[v0] Fetching latest changes from remote...')
    subprocess.run(['git', 'fetch', 'origin'], check=True)
    
    print('[v0] Checking out main branch...')
    subprocess.run(['git', 'checkout', 'main'], check=True)
    
    print('[v0] Pulling latest changes from main...')
    subprocess.run(['git', 'pull', 'origin', 'main'], check=True)
    
    print('[v0] Checking current status...')
    result = subprocess.run(['git', 'status'], capture_output=True, text=True, check=True)
    print(result.stdout)
    
    print('[v0] Successfully updated from main branch!')
    
except subprocess.CalledProcessError as error:
    print(f'[v0] Error during git operations: {error}')
    exit(1)
