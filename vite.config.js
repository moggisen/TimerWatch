import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/TimerWatch/', // 🔹 Byt ut "min-vite-app" mot ditt GitHub-repo-namn
});
