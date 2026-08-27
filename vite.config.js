import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Za GitHub Pages u podfolderu pokreni: BASE=/naziv-repoa/ npm run build
const base = process.env.BASE || '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    emptyOutDir: true,
    cssCodeSplit: false,
    reportCompressedSize: false
  },
  ssr: { noExternal: [] }
});
