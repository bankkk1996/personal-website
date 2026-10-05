// Renders the React app to static HTML at build time so the page has real content without JS
// (search engines, link previews). The client then hydrates it.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';

const { render } = await import('./dist-ssr/entry-server.js');
const template = readFileSync('dist/index.html', 'utf8');
writeFileSync('dist/index.html', template.replace('<!--app-html-->', render()));
rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerendered dist/index.html');
