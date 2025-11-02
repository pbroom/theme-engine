import fs from 'fs';
import path from 'path';

const manifestPath = path.resolve(process.cwd(), 'manifest.json');

if (!fs.existsSync(manifestPath)) {
	console.error('manifest.json not found');
	process.exit(1);
}

const data = fs.readFileSync(manifestPath, 'utf-8');
const manifest = JSON.parse(data);

manifest.ui = 'build/ui/index.html';

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 4) + '\n');
console.log('Updated manifest.ui -> build/ui/index.html');


