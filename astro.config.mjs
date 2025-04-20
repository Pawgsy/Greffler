import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site:"https://greffler.de",
    outDir:"./docs",
    cacheDir:"./buildcache"
});
