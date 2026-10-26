// Génère public/og.png (1200x630) et public/apple-touch-icon.png (180x180). Usage : npm run og
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const font = (p) => `data:font/woff2;base64,${readFileSync(p).toString('base64')}`;
const ys = font('node_modules/@fontsource/young-serif/files/young-serif-latin-400-normal.woff2');
const sg = font('node_modules/@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2');
const cv = font('node_modules/@fontsource-variable/caveat/files/caveat-latin-wght-normal.woff2');
const css = `@font-face{font-family:Y;src:url(${ys})}@font-face{font-family:S;src:url(${sg});font-weight:100 900}@font-face{font-family:C;src:url(${cv});font-weight:400 700}
*{margin:0;box-sizing:border-box}body{font-family:S;color:#1b2226}`;

const og = `<style>${css}
.w{width:1200px;height:630px;background-color:#f7f7f4;background-image:linear-gradient(#e2e3dd 2px,transparent 2px),linear-gradient(90deg,#e2e3dd 2px,transparent 2px);background-size:70px 70px;display:grid;grid-template-columns:1.5fr 1fr;align-items:center;gap:40px;padding:60px 70px}
.n{font-family:Y;font-size:40px;color:#11505c}
h1{font-family:Y;font-weight:400;font-size:66px;line-height:1.05;color:#11505c;margin-top:18px}
.s{margin-top:26px;font-size:27px}
.e{background:#f2dc9c;border:3px solid #b8891a;padding:26px 30px 30px;transform:rotate(-3deg);font-family:C;position:relative}
.e:before{content:'';position:absolute;top:-10px;left:50%;width:20px;height:20px;margin-left:-10px;border-radius:50%;background:#a8432c;border:3px solid #1b2226}
.e p{font-size:58px;font-weight:600;line-height:1}
.e b{display:block;font-size:76px;color:#a8432c;margin-top:8px}
.e span{display:block;font-family:S;font-size:22px;margin-top:10px;color:#11505c;font-weight:600}
</style><div class="w"><div><p class="n">Chez Lam</p>
<h1>Le traiteur asiatique de Montmorency, en famille depuis 37 ans</h1><p class="s">85 rue des Chesneaux · 01 39 64 27 86</p></div>
<div class="e"><p>La vitrine du jour</p><b>4,7/5</b><span>46 avis Google</span></div></div>`;

const icon = `<style>${css}body{width:180px;height:180px;background:#11505c;display:grid;place-items:center;position:relative}
p{font-family:Y;color:#f7f7f4;font-size:104px;line-height:1;margin-top:-28px}i{position:absolute;left:38px;right:38px;bottom:26px;height:30px;background:#d9a41e;clip-path:polygon(0 0,100% 0,88% 100%,12% 100%)}</style><p>L</p><i></i>`;

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1200, height: 630 } });
await pg.setContent(og); await pg.waitForTimeout(400);
await pg.screenshot({ path: 'public/og.png' });
await pg.setViewportSize({ width: 180, height: 180 });
await pg.setContent(icon); await pg.waitForTimeout(300);
await pg.screenshot({ path: 'public/apple-touch-icon.png' });
await b.close();
console.log('og.png et apple-touch-icon.png générés');
