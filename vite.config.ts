import { defineConfig, PluginOption } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteImagemin from 'vite-plugin-imagemin';
import svgr from 'vite-plugin-svgr';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react';

const mainDeps = {
  main: [
    'react',
    'react-router-dom',
    'react-dom',
    '@reduxjs/toolkit',
    '@reduxjs/toolkit/query/react',
  ],
  swiper: ['swiper', 'swiper/react'],
  reactSpring: ['@react-spring/web'],
};

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
        },
      },
    },
  },
});
