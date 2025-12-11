import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Permet au site de fonctionner dans un sous-dossier (ex: GitHub Pages)
});