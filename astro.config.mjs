// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://not-cooper.github.io",
  base: "/personal-website",
  integrations: [preact()],
});