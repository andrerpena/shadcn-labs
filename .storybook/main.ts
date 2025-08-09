import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const require = createRequire(import.meta.url);
const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/addon-themes")
  ],
  "framework": {
    "name": getAbsolutePath("@storybook/react-vite"),
    "options": {}
  },
  viteFinal: async (config) => {
    // Use dynamic import instead of require for ESM compatibility
    const { default: tailwindcssPostcss } = await import('@tailwindcss/postcss');
    
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': join(dirName, '../src'),
        },
      },
      css: {
        postcss: {
          plugins: [tailwindcssPostcss],
        },
      },
    });
  }
};
export default config;