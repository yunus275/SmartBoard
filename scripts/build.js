// Builds dist/ from src/ + public/  (used by Vercel and by the EXE build)
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), dist = path.join(root, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
for (const f of fs.readdirSync(path.join(root, 'public'))) fs.copyFileSync(path.join(root, 'public', f), path.join(dist, f));
let html = fs.readFileSync(path.join(root, 'src', 'app.html'), 'utf8');
html = html.replace('</head>', '<link rel="icon" href="icon.png">\n<meta name="description" content="Aymen Schoolboard - smart classroom whiteboard">\n</head>');
fs.writeFileSync(path.join(dist, 'index.html'), html);
// offline PDF engine (used by the EXE; the website uses the CDN)
const pj = path.join(root, 'node_modules', 'pdfjs-dist', 'build');
if (fs.existsSync(pj)) {
  fs.mkdirSync(path.join(dist, 'lib'), { recursive: true });
  for (const f of ['pdf.min.js', 'pdf.worker.min.js']) fs.copyFileSync(path.join(pj, f), path.join(dist, 'lib', f));
}
console.log('dist/ ready');
