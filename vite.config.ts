import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: { noExternal: true },
  preview: {
    strictPort: true,
    port: 80,
  },
  server: {
    watch: {
      usePolling: true,        // Enable polling to detect changes
      interval: 300            // Check for changes every 300ms (adjust if needed)
    },
    port: 80,
    strictPort: true,
    host: true,
  }
});
