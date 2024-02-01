import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // ...
  site: 'https://denys7u7.github.io',
  integrations: [tailwind()],
});
