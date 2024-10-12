import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const process = require('process');

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env, // Define process.env globally
    process: JSON.stringify(process), // Provide the process object
  },
});
