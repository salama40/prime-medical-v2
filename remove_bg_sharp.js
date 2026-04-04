import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const files = [
    { input: 'public/images/gloves.png', output: 'public/images/gloves_nobg.png' },
    { input: 'public/images/mask.png', output: 'public/images/mask_nobg.png' },
    { input: 'public/images/overhead.png', output: 'public/images/overhead_nobg.png' },
    { input: 'public/images/shoes.png', output: 'public/images/shoes_nobg.png' }
];

async function removeWhiteBackground() {
    console.log('Starting white background removal...');

    for (const file of files) {
        try {
            if (!fs.existsSync(file.input)) {
                console.error(`Input file not found: ${file.input}`);
                continue;
            }

            console.log(`Processing ${file.input}...`);

            // Get raw pixel data
            const { data, info } = await sharp(file.input)
                .ensureAlpha()
                .raw()
                .toBuffer({ resolveWithObject: true });

            const pixelCount = info.width * info.height;
            let transparentCount = 0;

            // Iterate over every pixel
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                // Check if pixel is near white
                // Threshold: > 240 (adjustable)
                if (r > 240 && g > 240 && b > 240) {
                    data[i + 3] = 0; // Set alpha to 0 (fully transparent)
                    transparentCount++;
                }
            }

            console.log(`Made ${transparentCount} pixels transparent (${Math.round(transparentCount / pixelCount * 100)}%)`);

            // Save back to PNG
            await sharp(data, {
                raw: {
                    width: info.width,
                    height: info.height,
                    channels: 4
                }
            })
                .png()
                .toFile(file.output);

            console.log(`Saved: ${file.output}`);

        } catch (err) {
            console.error(`Error processing ${file.input}:`, err);
        }
    }

    console.log('Complete.');
}

removeWhiteBackground();
