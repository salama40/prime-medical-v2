import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function removeBgFromLogo() {
    try {
        console.log('🎨 Starting background removal for logo...');

        const inputPath = path.join(__dirname, 'public', 'images', 'prime-logo-original.jpg');
        const outputPath = path.join(__dirname, 'public', 'images', 'prime-logo-transparent.png');

        console.log(`📂 Input: ${inputPath}`);
        console.log(`📂 Output: ${outputPath}`);

        // Convert to file:// URL
        const inputUrl = new URL(`file:///${inputPath.replace(/\\/g, '/')}`);

        console.log('⏳ Processing image (this may take a minute)...');

        const blob = await removeBackground(inputUrl.href);
        const buffer = Buffer.from(await blob.arrayBuffer());

        fs.writeFileSync(outputPath, buffer);

        console.log('✅ Background removed successfully!');
        console.log(`💾 Saved to: ${outputPath}`);
        console.log(`📊 File size: ${(buffer.length / 1024).toFixed(2)} KB`);

    } catch (error) {
        console.error('❌ Error removing background:', error.message);
        process.exit(1);
    }
}

removeBgFromLogo();
