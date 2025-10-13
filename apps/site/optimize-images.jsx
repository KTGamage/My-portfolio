import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  const publicDir = path.join(__dirname, 'public');
  const images = [];
  
  // Find all image files
  function findImages(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findImages(filePath);
      } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
        images.push(filePath);
      }
    });
  }
  
  findImages(publicDir);
  console.log(`Found ${images.length} images to optimize`);
  
  for (const imagePath of images) {
    try {
      const ext = path.extname(imagePath).toLowerCase();
      const name = path.basename(imagePath, ext);
      const dir = path.dirname(imagePath);
      
      console.log(`Processing: ${path.relative(publicDir, imagePath)}`);
      
      // Create WebP version (70% quality)
      const webpPath = path.join(dir, `${name}.webp`);
      await sharp(imagePath)
        .webp({ quality: 70 })
        .toFile(webpPath);
      
      // Compressed original (80% quality)
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(imagePath)
          .jpeg({ quality: 80, mozjpeg: true })
          .toFile(imagePath);
      } else if (ext === '.png') {
        await sharp(imagePath)
          .png({ compressionLevel: 8 })
          .toFile(imagePath);
      }
      
      console.log(`✓ Optimized: ${path.relative(publicDir, imagePath)}`);
      console.log(`  Created: ${path.relative(publicDir, webpPath)}`);
      
    } catch (error) {
      console.log(`✗ Failed: ${imagePath}`, error.message);
    }
  }
  
  console.log('\n🎉 Image optimization completed!');
  console.log('📁 WebP versions created for all images');
  console.log('📁 Original images optimized and compressed');
}

// Run the optimization
optimizeImages().catch(console.error);