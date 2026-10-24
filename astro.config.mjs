// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shant-esmralda.github.io',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa', 'hy'],
    routing: { prefixDefaultLocale: false },
  },
});
