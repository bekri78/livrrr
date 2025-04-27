import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "/livrrr/", // Assurez-vous que cela corresponde au nom de votre dépôt
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});