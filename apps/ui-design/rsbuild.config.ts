import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';
import * as path from "path";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact(),pluginLess()],

  source: {
    entry: {
      index: ['./src/index.tsx'],
    },

     /**
     * support inversify @injectable() and @inject decorators
     */
     decorators: {
      version: 'legacy',
    },
  },

  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },

  tools: {
    rspack: {
      /**
       * ignore warnings from @coze-editor/editor/language-typescript
       */
      ignoreWarnings: [/Critical dependency: the request of a dependency is an expression/],
    },
  },
});
