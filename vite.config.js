import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: [autoprefixer({})],
      },
    },
    base:
      mode === 'production'
        ? '/hand-writing-date-picker-react-component/'
        : '/',
  };
});
