import { defineConfig, PluginOption } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteImagemin from 'vite-plugin-imagemin';
import svgr from 'vite-plugin-svgr';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

import path from 'path';
import * as fs from 'fs';

const mainDeps = {
  main: [
    'react',
    'react-router-dom',
    'react-dom',
    '@reduxjs/toolkit',
    '@reduxjs/toolkit/query/react',
  ],
  common: ['swiper', 'swiper/react', '@react-spring/web'],
};
function renderChunks() {
  const chunks: Record<string, string[]> = {};

  const pagesDir = path.resolve(__dirname, 'src/pages');
  const pages = fs
    .readdirSync(pagesDir)
    .filter(p => fs.statSync(path.join(pagesDir, p)).isDirectory());

  pages.forEach(page => {
    chunks[page] = [path.join(pagesDir, page)];
  });

  return chunks;
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    svgr(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    visualizer({
      template: 'treemap',
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'analyst.html',
    }) as PluginOption,
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          ...mainDeps,
          ...renderChunks(),
        },
      },
    },
  },
});
