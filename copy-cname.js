import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.join(__dirname, 'CNAME');
const destPath = path.join(__dirname, 'dist', 'CNAME');

fs.copyFileSync(srcPath, destPath);
console.log('CNAME file copied to dist folder!');
