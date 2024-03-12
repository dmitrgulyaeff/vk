import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    babel({ extensions: ['.ts', '.tsx'], babelHelpers: 'bundled' }),
    react(),
  ],
  server: {
    port: 3030,
  },
  preview: {
    host: "0.0.0.0",
    port: 5675,
  },
});
