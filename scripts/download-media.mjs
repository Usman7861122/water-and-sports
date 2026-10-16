// Downloads every image used by src/data/media.ts + the athlete photos from the dev site into public/media/.
// Run on a machine that can reach the dev server:  npm run media:download
import { readFileSync, mkdirSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';

const ORIGIN = 'http://54.236.221.108/wp-content/uploads/';
const media = readFileSync('src/data/media.ts', 'utf8');
const content = readFileSync('src/data/content.ts', 'utf8');

const paths = new Set([...media.matchAll(/\bm\('([^']+)'\)/g)].map((x) => x[1]));
for (const x of content.matchAll(/file:\s*'([^']+)'/g)) paths.add('2026/07/' + x[1]); // athlete photos

let ok = 0, fail = 0;
for (const p of paths) {
  const out = join('public/media', p);
  if (existsSync(out) && statSync(out).size > 1000) { ok++; continue; } // tiny files are failed downloads (403 pages)
  let done = false, lastErr = '';
  for (let attempt = 1; attempt <= 4 && !done; attempt++) {
    try {
      const res = await fetch(ORIGIN + encodeURI(p), { signal: AbortSignal.timeout(60000) });
      if (!res.ok) throw new Error(String(res.status));
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, Buffer.from(await res.arrayBuffer()));
      done = true;
    } catch (e) {
      lastErr = String(e?.cause?.code ?? e);
      await new Promise((r) => setTimeout(r, 1500 * attempt)); // the dev server is slow; wait and retry
    }
  }
  if (done) ok++;
  else { fail++; console.warn('FAILED', p, lastErr); }
}
console.log(`Done: ${ok} saved, ${fail} failed, ${paths.size} total.`);
