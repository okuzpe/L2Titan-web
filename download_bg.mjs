import fs from 'fs';
import https from 'https';
import path from 'path';

const imageUrl = 'https://images4.alphacoders.com/786/78660.jpg';
const outputPath = path.join('public', 'images', 'background.jpg');

const file = fs.createWriteStream(outputPath);

https.get(imageUrl, (response) => {
    response.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log('Download completed.');
    });
}).on('error', (err) => {
    fs.unlink(outputPath, () => { }); // Delete the file async. (But we don't check the result)
    console.error('Error downloading image:', err.message);
});
