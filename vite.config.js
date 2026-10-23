import {defineConfig} from 'vite';
export default defineConfig({esbuild:{jsx:'automatic'},build:{rollupOptions:{output:{manualChunks:{motion:['gsap','lenis'],react:['react','react-dom']}}}}});
