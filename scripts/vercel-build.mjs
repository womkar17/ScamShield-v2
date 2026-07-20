import { execSync } from 'child_process';
import { mkdirSync, cpSync, writeFileSync, existsSync, rmSync } from 'fs';
import { join } from 'path';

const OUTPUT = '.vercel/output';

// Clean previous output
if (existsSync(OUTPUT)) rmSync(OUTPUT, { recursive: true });

// 1. Build the Vite client
console.log('📦 Building client...');
execSync('cd client && npm install && npm run build', { stdio: 'inherit' });

// 2. Create Build Output API directory structure
console.log('🏗️  Creating Vercel Build Output API structure...');
mkdirSync(join(OUTPUT, 'static'), { recursive: true });

// 3. Copy static files from client/dist to .vercel/output/static/
console.log('📂 Copying static files...');
cpSync('client/dist', join(OUTPUT, 'static'), { recursive: true });

// 4. Bundle the Express API function with esbuild
const funcDir = join(OUTPUT, 'functions/api/index.func');
mkdirSync(funcDir, { recursive: true });

console.log('⚡ Bundling api/index.js with esbuild...');
execSync(
  `npx -y esbuild api/index.js --bundle --platform=node --target=node20 --format=esm --outfile=${join(funcDir, 'index.mjs')} --banner:js="import { createRequire } from 'module'; const require = createRequire(import.meta.url);"`,
  { stdio: 'inherit' }
);

// Write function config
writeFileSync(join(funcDir, '.vc-config.json'), JSON.stringify({
    runtime: 'nodejs18.x',
    handler: 'index.mjs',
    launcherType: 'Nodejs',
    supportsResponseStreaming: false,
    maxDuration: 30
  }, null, 2));
console.log('✅ API function bundled: api/index.func');

// 5. Bundle simple standalone functions (test, ping)
for (const name of ['test', 'ping']) {
  const dir = join(OUTPUT, `functions/api/${name}.func`);
  mkdirSync(dir, { recursive: true });
  cpSync(`api/${name}.js`, join(dir, 'index.mjs'));
  writeFileSync(join(dir, '.vc-config.json'), JSON.stringify({
    runtime: 'nodejs18.x',
    handler: 'index.mjs',
    launcherType: 'Nodejs',
    supportsResponseStreaming: false
  }, null, 2));
  console.log(`✅ Function bundled: api/${name}.func`);
}

// 6. Write the top-level config.json with routing rules
writeFileSync(join(OUTPUT, 'config.json'), JSON.stringify({
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/api/(.*)', dest: '/api/index' },
    { src: '/(.*)', dest: '/index.html' }
  ]
}, null, 2));

console.log('');
console.log('🚀 Vercel Build Output API structure created!');
console.log('   Static files: .vercel/output/static/');
console.log('   Functions:    .vercel/output/functions/api/');
console.log('   Config:       .vercel/output/config.json');

// Debug: print the full output structure
import { readdirSync, statSync, readFileSync } from 'fs';
function listDir(dir, indent = '') {
  try {
    for (const item of readdirSync(dir)) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        if (item === 'static' || item === 'node_modules') {
          console.log(`${indent}📁 ${item}/ (${readdirSync(fullPath).length} files)`);
        } else {
          console.log(`${indent}📁 ${item}/`);
          listDir(fullPath, indent + '  ');
        }
      } else {
        console.log(`${indent}📄 ${item} (${stat.size} bytes)`);
      }
    }
  } catch(e) { console.log(`${indent}[error listing: ${e.message}]`); }
}
console.log('\n📋 Build output structure:');
listDir('.vercel/output');
console.log('\n📄 config.json contents:');
console.log(readFileSync('.vercel/output/config.json', 'utf8'));
console.log('\n📄 api/index.func/.vc-config.json:');
console.log(readFileSync('.vercel/output/functions/api/index.func/.vc-config.json', 'utf8'));
