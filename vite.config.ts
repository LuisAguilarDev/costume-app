import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: { noExternal: true },
  preview: {
    port: 4001,
    strictPort: true,
  },
  server: {
    port: 4001,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:4001',
  },
});
