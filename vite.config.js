import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: true, // Allows access from other devices on the network
    allowedHosts: ["andreysoft.cfd", "localhost"],
  },
});
