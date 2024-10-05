import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        changeOrigin: true,
        configure: (proxy, options) => {
            // proxy willbe an instance of 'http-proxy'
        }
      },
    },
  },
});
