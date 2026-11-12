// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sagersolutions.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Old multi-page URLs now live as sections of the home page.
  redirects: {
    '/investments': '/#portfolio',
    '/local-maine-initiatives': '/#portfolio',
    '/web3-crypto-initiatives': '/#portfolio',
    '/consultancy': '/#work',
    '/about': '/#background',
    '/contact': '/#contact',
  },
});
