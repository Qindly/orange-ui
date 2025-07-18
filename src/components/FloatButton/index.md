---
group: 通用
---

# FloatButton 悬浮按钮

用于网站上的全局功能；
无论浏览到何处都可以看见的按钮。

## 基础用法

最简单的用法。

```tsx
/**
 * iframe: true
 * compact: true
 */
import { FloatButton } from '@qindy/orange-ui';

export default () => (
  <FloatButton icon="+" onClick={() => console.log('clicked')} />
);
```

## 形状

通过 `shape` 设置不同的形状，支持 `circle` (圆形) 和 `square` (方形)。

```jsx
/**
 * iframe: true
 * compact: true
 */
import { FloatButton } from '@qindy/orange-ui';

export default () => (
  <>
    <FloatButton shape="circle" icon="+" />
    <FloatButton shape="square" icon="✎" />
  </>
);
```

## 描述功能

可以通过 `description` 设置文字内容，当鼠标悬停时会显示。

```jsx
/**
 * iframe: true
 * compact: true
 */
import { FloatButton } from '@qindy/orange-ui';

export default () => <FloatButton icon="?" description="联系客服" />;
```

## 不同尺寸

设置 `size` 可以使用不同大小的悬浮按钮。

```jsx
/**
 * iframe: true
 * compact: true
 */
import { FloatButton } from '@qindy/orange-ui';

export default () => (
  <>
    <FloatButton size="large" icon="+" />
    <FloatButton size="small" icon="+" />
  </>
);
```

## 自定义位置

通过设置 `position` 属性可以自定义悬浮按钮的位置。

```jsx
/**
 * iframe: true
 * compact: true
 */
import { FloatButton } from '@qindy/orange-ui';

export default () => (
  <FloatButton icon="+" position={{ bottom: 100, right: 100 }} />
);
```

## 不同类型

支持多种类型，通过 `variant` 设置不同的样式。

```jsx
/**
 * iframe: true
 * compact: true
 */
import { FloatButton } from '@qindy/orange-ui';

export default () => (
  <>
    <FloatButton variant="primary" icon="+" />
    <FloatButton variant="success" icon="✓" />
    <FloatButton variant="warning" icon="!" />
    <FloatButton variant="danger" icon="×" />
  </>
);
```

## API

| 参数        | 说明             | 类型                                                                | 默认值                      |
| ----------- | ---------------- | ------------------------------------------------------------------- | --------------------------- |
| shape       | 设置按钮形状     | `'circle' \| 'square'`                                              | `'circle'`                  |
| size        | 设置按钮大小     | `'large' \| 'small'`                                                | `'large'`                   |
| variant     | 设置按钮类型     | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'`      | `'default'`                 |
| icon        | 设置图标         | `React.ReactNode`                                                   | -                           |
| description | 文字描述         | `React.ReactNode`                                                   | -                           |
| position    | 设置按钮位置     | `{ top?: number; right?: number; bottom?: number; left?: number; }` | `{ bottom: 24, right: 24 }` |
| onClick     | 点击按钮时的回调 | `() => void`                                                        | -                           |
| disabled    | 是否禁用         | `boolean`                                                           | `false`                     |
