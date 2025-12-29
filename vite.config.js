import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000 // 1 MB
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow external access
    port: 5173, //  Vite Port
    allowedHosts: [".ngrok-free.app"], // Allow ngrok site
    strictPort: true,
  },
});
