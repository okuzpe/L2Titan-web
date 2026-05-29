/**
 * WebP para noticias: card (~600), mid (~768, 2× en grid), hero (~900).
 * Calidad ajustada para PSI "image delivery". Tras cambiar fuentes: npm run optimize:images
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');
/** Fuentes pesadas que NO se sirven (solo generan webp): fuera de public/ para no inflar el deploy. */
const sourcesDir = path.resolve(__dirname, 'img-src');

const sources: { input: string; base: string; dir?: string }[] = [
  { input: 'BaiumEvent.png', base: 'BaiumEvent', dir: sourcesDir },
  { input: 'valakas-past-event.png', base: 'valakas-past-event', dir: sourcesDir },
  { input: 'infinitum-tower.jpg', base: 'infinitum-tower' },
];

const qualityCard = 64;
const qualityMid = 66;
const qualityHero = 64;

for (const { input, base, dir } of sources) {
  const inPath = path.join(dir ?? imagesDir, input);
  const img = sharp(inPath);

  await img
    .clone()
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: qualityCard, effort: 5 })
    .toFile(path.join(imagesDir, `${base}-card.webp`));
  console.log(`OK ${base}-card.webp ← ${input}`);

  await img
    .clone()
    .resize({ width: 768, withoutEnlargement: true })
    .webp({ quality: qualityMid, effort: 5 })
    .toFile(path.join(imagesDir, `${base}-mid.webp`));
  console.log(`OK ${base}-mid.webp ← ${input}`);

  await img
    .clone()
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: qualityHero, effort: 5 })
    .toFile(path.join(imagesDir, `${base}.webp`));
  console.log(`OK ${base}.webp ← ${input}`);
}
