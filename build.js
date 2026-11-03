// Inline every assets/* image as a base64 data URI → dist/index.html (single self-contained file)
const fs = require('fs'), path = require('path');
let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const refs = [...new Set(html.match(/assets\/[\w.-]+\.(png|jpg)/g) || [])];
for (const r of refs) {
  const mime = r.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const data = fs.readFileSync(path.join(__dirname, r)).toString('base64');
  html = html.split(r).join(`data:${mime};base64,${data}`);
}
fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), html);
console.log(`dist/index.html — ${(html.length / 1e6).toFixed(2)} MB, ${refs.length} images inlined`);
