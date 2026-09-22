import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getBasePath() {
  if (process.env.BASE_PATH) {
    return process.env.BASE_PATH.endsWith("/")
      ? process.env.BASE_PATH
      : `${process.env.BASE_PATH}/`;
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
    return `/${repo}/`;
  }
  if (process.env.NODE_ENV === "production") {
    return "/calha-pro-design/";
  }
  return "/";
}

const base = getBasePath();

export default defineConfig({
  base,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    outDir: "dist/client",
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      router: {
        basepath: base,
      },
      prerender: {
        enabled: true,
      },
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
