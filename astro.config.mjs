// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://dapper-torrone-7e13dc.netlify.app/',
  integrations: [preact()]
});