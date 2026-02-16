import { Jimp } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgPath = path.resolve(__dirname, 'src/assets/logo.png');

async function main() {
    try {
        const image = await Jimp.read(imgPath);
        const width = image.bitmap.width;
        const height = image.bitmap.height;

        const colorCounts = {};

        // Sample 1000 random pixels
        for (let i = 0; i < 1000; i++) {
            const x = Math.floor(Math.random() * width);
            const y = Math.floor(Math.random() * height);
            const color = image.getPixelColor(x, y);
            const rgba = {
                r: (color >>> 24) & 0xFF,
                g: (color >>> 16) & 0xFF,
                b: (color >>> 8) & 0xFF,
                a: color & 0xFF
            };

            // Skip transparent or very light/dark pixels if desired
            if (rgba.a < 255) continue;

            const hex = '#' + ((1 << 24) + (rgba.r << 16) + (rgba.g << 8) + rgba.b).toString(16).slice(1);
            colorCounts[hex] = (colorCounts[hex] || 0) + 1;
        }

        const sorted = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
        console.log('Top Colors:', sorted.slice(0, 5));

    } catch (err) {
        console.error(err);
    }
}

main();
