// Downloads every image used by src/data/media.ts + the athlete photos from the dev site into public/media/.
// Run on a machine that can reach the dev server:  npm run media:download
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const ORIGIN = 'http://54.236.221.108/wp-content/uploads/';
const media = readFileSync('src/data/media.ts', 'utf8');
const content = readFileSync('src/data/content.ts', 'utf8');

const paths = new Set([...media.matchAll(/\bm\('([^']+)'\)/g)].map((x) => x[1]));
for (const x of content.matchAll(/file:\s*'([^']+)'/g)) paths.add('2026/07/' + x[1]); // athlete photos

let ok = 0, fail = 0;
for (const p of paths) {
  const out = join('public/media', p);
  if (existsSync(out)) { ok++; continue; }
  try {
    const res = await fetch(ORIGIN + encodeURI(p));
    if (!res.ok) throw new Error(String(res.status));
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, Buffer.from(await res.arrayBuffer()));
    ok++;
  } catch (e) {
    fail++;
    console.warn('FAILED', p, String(e));
  }
}
console.log(`Done: ${ok} saved, ${fail} failed, ${paths.size} total.`);
