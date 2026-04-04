import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function upscaleLogo() {
    try {
        console.log('🎨 Starting logo upscaling to HD quality...');

        const inputPath = path.join(__dirname, 'public', 'images', 'prime-logo-transparent.png');
        const outputPath = path.join(__dirname, 'public', 'images', 'prime-logo-hd.png');

        console.log(`📂 Input: ${inputPath}`);
        console.log(`📂 Output: ${outputPath}`);

        // Read the image
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        console.log(`📊 Original size: ${metadata.width}x${metadata.height}`);

        // Upscale to 4x (if original is ~600px, this will be ~2400px)
        const targetWidth = metadata.width * 4;
        const targetHeight = metadata.height * 4;

        console.log(`📊 Target size: ${targetWidth}x${targetHeight}`);
        console.log('⏳ Processing (this may take a moment)...');

        await image
            .resize(targetWidth, targetHeight, {
                kernel: 'lanczos3', // Best quality for upscaling
                fit: 'fill'
            })
            .png({
                quality: 100,
                compressionLevel: 6,
                adaptiveFiltering: true
            })
            .toFile(outputPath);

        const stats = fs.statSync(outputPath);
        console.log('✅ Logo upscaled successfully!');
        console.log(`💾 Saved to: ${outputPath}`);
        console.log(`📊 File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    } catch (error) {
        console.error('❌ Error upscaling logo:', error.message);
        process.exit(1);
    }
}

upscaleLogo();
