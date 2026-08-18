import fs from 'node:fs';
import path from 'node:path';

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const partialPattern = /<!--\s*partial:([a-z-]+)\s*-->/g;

const htmlPartials = () => ({
  name: 'html-partials',
  transformIndexHtml: {
    order: 'pre',
    handler(html, context) {
      const partialsDirectory = path.resolve('src/partials');

      return html.replace(partialPattern, (marker, name) => {
        const partialPath = path.join(partialsDirectory, `${name}.html`);

        if (!fs.existsSync(partialPath)) {
          throw new Error(`HTML partial not found for ${marker}`);
        }

        if (typeof this.addWatchFile === 'function') {
          this.addWatchFile(partialPath);
        } else {
          context.server?.watcher.add(partialPath);
        }
        return fs.readFileSync(partialPath, 'utf8');
      });
    },
  },
});

export default defineConfig({
  base: './',
  plugins: [htmlPartials(), tailwindcss()],
  server: {
    port: 3000,
  },
});
