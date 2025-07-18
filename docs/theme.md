# 主题定制

orange-ui 支持通过 CSS 变量或自定义样式覆盖进行主题定制。

## 方式一：CSS 变量

可以在全局样式中覆盖 CSS 变量：

```css
:root {
  --orange-primary-color: #faad14;
  /* 其他变量 */
}
```

## 方式二：自定义样式

也可以通过覆盖组件的 className 来实现更细粒度的样式定制。
