import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'orange-ui',
  },
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components' }],
  },
});
