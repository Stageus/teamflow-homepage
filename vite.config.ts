import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: [ 
      { find: "@app", replacement: "/src/app" },      
      { find: "@pages", replacement: "/src/pages" },      
      { find: "@widgets", replacement: "/src/widgets" },      
      { find: "@features", replacement: "/src/features" },      
      { find: "@shared", replacement: "/src/shared" },      
    ]
  },
})
