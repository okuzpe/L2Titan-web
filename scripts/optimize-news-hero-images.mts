/**
 * Genera WebP optimizados para portadas de noticias (home / listados).
 * Ejecutar tras cambiar los PNG/JPG fuente: npm run optimize:images
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

const jobs: { input: string; output: string; maxWidth: number }[] = [
  { input: 'BaiumEvent.png', output: 'BaiumEvent.webp', maxWidth: 960 },
  { input: 'valakas-past-event.png', output: 'valakas-past-event.webp', maxWidth: 960 },
  { input: 'infinitum-tower.jpg', output: 'infinitum-tower.webp', maxWidth: 960 },
];

for (const job of jobs) {
  const inPath = path.join(imagesDir, job.input);
  const outPath = path.join(imagesDir, job.output);
  await sharp(inPath)
    .resize({ width: job.maxWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(outPath);
  console.log(`OK ${job.output} ← ${job.input}`);
}
