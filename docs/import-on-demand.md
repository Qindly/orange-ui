# 按需引入

orange-ui 支持按需加载，推荐配合 babel-plugin-import 或类似工具实现。

## 配置示例（以 babel 为例）

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@你的npm用户名/orange-ui',
        libraryDirectory: 'es',
        style: true, // 自动引入样式
      },
      '@orange-ui',
    ],
  ],
};
```
