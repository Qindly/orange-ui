import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/orange-ui/',
  publicPath: '/orange-ui/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'orange-ui',
 
    nav: [
      { title: '指南', link: '/introduce' },
      { title: '组件', link: '/components/message' },
      { title: '快速开始', link: '/quick-start' },
    ],
  },
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components' }],
  },
})

