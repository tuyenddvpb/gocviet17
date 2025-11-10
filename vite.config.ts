import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // nếu bạn deploy ở root domain
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
