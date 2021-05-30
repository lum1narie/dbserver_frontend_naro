import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  proxy: {
    "^/api": {
      target: process.env.VUE_APP_SERVER,
      rewrite: (path) => path.replace(/^\/api/, "/"),
    },
  },
});
