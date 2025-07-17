import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'orange-ui',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/message' },
    ]
  },
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components' }],
  },

});
