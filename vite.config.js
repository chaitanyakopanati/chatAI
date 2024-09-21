import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add your aliases if needed
    },
  },
  server: {
    hmr: {
      overlay: false, // This disables the overlay error display if needed
    },
  },
});
