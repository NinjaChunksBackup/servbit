const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BRAND = path.join(ROOT, 'public', 'brand');
const ZIP = path.join(BRAND, 'servbit-brand-assets.zip');

const files = fs
  .readdirSync(BRAND)
  .filter((f) => /^servbit-.*\.(svg|png)$/.test(f))
  .sort();

if (!files.length) {
  throw new Error('No servbit brand assets found. Run scripts/generate-brand-assets.js first.');
}

fs.rmSync(ZIP, { force: true });

// -X drops extended attributes so the archive has no macOS/Windows cruft.
execFileSync('tar', ['-a', '-c', '-f', ZIP, '-C', BRAND, ...files], { stdio: 'inherit' });

const kb = (fs.statSync(ZIP).size / 1024).toFixed(1);
console.log(
  `Packed ${files.length} brand assets into public/brand/servbit-brand-assets.zip (${kb} KB)`
);
