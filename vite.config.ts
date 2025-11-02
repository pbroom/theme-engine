import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	root: 'ui',
	plugins: [
        tailwindcss(),
        react(),
	],
	build: {
		outDir: 'build/ui',
		emptyOutDir: false,
	},
	base: '',
});


