import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
    { url: 'https://images8.alphacoders.com/398/398973.jpg', filename: 'news-1.jpg' },
    { url: 'https://images2.alphacoders.com/209/20921.jpg', filename: 'news-2.jpg' },
    { url: 'https://images5.alphacoders.com/332/332448.jpg', filename: 'news-3.jpg' }
];

const downloadImage = (url, filename) => {
    const outputPath = path.join('public', 'images', filename);
    const file = fs.createWriteStream(outputPath);

    https.get(url, (response) => {
        if (response.statusCode !== 200) {
            console.error(`Failed to download ${url}: Status Code ${response.statusCode}`);
            return;
        }
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filename}`);
        });
    }).on('error', (err) => {
        fs.unlink(outputPath, () => { });
        console.error(`Error downloading ${url}:`, err.message);
    });
};

images.forEach(img => downloadImage(img.url, img.filename));
