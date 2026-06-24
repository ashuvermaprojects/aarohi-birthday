import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
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
