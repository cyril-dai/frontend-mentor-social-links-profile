import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

// https://vite.dev/config/
export default defineConfig({
  base: isProd ? "/frontend-mentor-social-links-profile/" : "",
  server: {
    port: 3000,
    host: "localhost",
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
