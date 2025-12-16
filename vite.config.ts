
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'sonner@2.0.3': 'sonner',
        'react-hook-form@7.55.0': 'react-hook-form',
        'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png': path.resolve(__dirname, './src/assets/9bb62c518e31aa9f806ab4341886470dd2d122c6.png'),
        'figma:asset/90f71b77ff8f7feaaf19a1f5fd379bf272f74375.png': path.resolve(__dirname, './src/assets/90f71b77ff8f7feaaf19a1f5fd379bf272f74375.png'),
        'figma:asset/7038329c1420eb31999dbbb4c9e9c35c9bd51f77.png': path.resolve(__dirname, './src/assets/7038329c1420eb31999dbbb4c9e9c35c9bd51f77.png'),
        '@jsr/supabase__supabase-js@2.49.8': '@jsr/supabase__supabase-js',
        '@jsr/supabase__supabase-js@2': '@jsr/supabase__supabase-js',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });