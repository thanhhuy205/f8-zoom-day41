import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => ({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  base: command === "build" ? "/f8-zoom-day41/" : "/",
}));
