import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  tanstackStart: {
    server: { entry: "server" },
  },
  // Allow requests from tunneling hosts (e.g. localtunnel) and listen on all interfaces
  server: {
    host: true,
    // allow all hosts so tunneled domains are accepted
    allowedHosts: "all",
  },
});
