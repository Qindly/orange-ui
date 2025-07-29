import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'orange-ui',
    nav: [
      { title: '指南', link: '/introduce' },
      { title: '组件', link: '/components/message' },
    ],
    menu: {
      '/': [
        {
          title: '指南',
          children: [
            { title: '介绍', link: '/introduce' },
            { title: '快速开始', link: '/quick-start' },
            { title: '按需引入', link: '/import-on-demand' },
          ],
        },
        {
          title: '工具',
          children: [
            { title: '安装', link: '/install' },
            { title: '构建', link: '/build' },
            { title: '贡献指南', link: '/contributing' },
          ],
        },
      ],
    },
  },
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components' }],
  },
})