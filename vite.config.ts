import { defineConfig } from 'vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), visualizer({
    open: true, // 빌드 후 자동 브라우저 결과 열기
    gzipSize: true,
    brotliSize: true,
  })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.gif'], // 이미지 파일 포함
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@app',
        replacement: path.resolve(__dirname, 'src/app'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@home',
        replacement: path.resolve(__dirname, 'src/pages/home'),
      },
      {
        find: '@shared',
        replacement: path.resolve(__dirname, 'src/shared'),
      },
      {
        find: '@icon',
        replacement: path.resolve(__dirname, 'src/shared/assets/icon'),
      },
      {
        find: '@img',
        replacement: path.resolve(__dirname, 'src/shared/assets/img'),
      },
    ],
  },
});
