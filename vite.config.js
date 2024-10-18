import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  base: "/",
  build: {
    rollupOptions: {
      output: {
        // JavaScriptファイルを "assets/js" フォルダに出力
        entryFileNames: "assets/js/[name]-[hash].js",
        // JavaScriptチャンクファイルを "assets/js" フォルダに出力
        chunkFileNames: "assets/js/[name]-[hash].js",
        // CSSファイルを "assets/css" フォルダに出力
        assetFileNames: ({ name }) => {
          if (/\.(css)$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }
          // その他のアセットは "assets" フォルダに出力
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
