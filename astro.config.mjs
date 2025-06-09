import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://Tony0117Y.github.io/Portfolio",
  base: "/",
});
