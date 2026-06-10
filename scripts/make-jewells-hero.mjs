// One-off: hero compuesto para jewells-lvl2 (fuente 490px -> canvas 1350x810 sin pixelado).
// Fondo = mismo screenshot blur + oscurecido; centro = original a ~x1.42.
// Uso: node scripts/make-jewells-hero.mjs
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = 'C:/Users/Omar/Pictures/Screenshots/jewells_lvl2.png';
const out = path.join(__dirname, 'img-src', 'jewells-lvl2.png');

const W = 1350;
const H = 810;

const bg = await sharp(src)
  .resize(W, H, { fit: 'cover' })
  .blur(16)
  .modulate({ brightness: 0.45, saturation: 0.9 })
  .toBuffer();

const fg = await sharp(src)
  .resize({ height: 534, kernel: 'lanczos3' })
  .sharpen({ sigma: 0.8 })
  .toBuffer();

const fgMeta = await sharp(fg).metadata();

await sharp(bg)
  .composite([
    {
      input: fg,
      left: Math.round((W - fgMeta.width) / 2),
      top: Math.round((H - fgMeta.height) / 2),
    },
  ])
  .png()
  .toFile(out);

console.log(`OK ${out} (${W}x${H}, fg ${fgMeta.width}x${fgMeta.height})`);
