---
title: Tooltip 文字提示
group: 数据展示
---

# Tooltip 文字提示

鼠标移入、聚焦或点击元素时，弹出气泡式的文字提示。

## 基本用法

```tsx
import React from 'react';
import { Tooltip, Button } from '@qindy/orange-ui';

export default () => (
  <Tooltip title="提示内容">
    <Button>悬停显示提示</Button>
  </Tooltip>
);
```

## 不同位置

通过 `placement` 属性设置提示框的位置。

```tsx
import React from 'react';
import { Tooltip, Button } from '@qindy/orange-ui';

export default () => (
  <>
    <Tooltip title="上方" placement="top">
      <Button>上</Button>
    </Tooltip>
    <Tooltip title="下方" placement="bottom">
      <Button>下</Button>
    </Tooltip>
    <Tooltip title="左侧" placement="left">
      <Button>左</Button>
    </Tooltip>
    <Tooltip title="右侧" placement="right">
      <Button>右</Button>
    </Tooltip>
  </>
);
```

## 禁用状态

通过 `disabled` 属性禁用提示。

```tsx
import React from 'react';
import { Tooltip, Button } from '@qindy/orange-ui';

export default () => (
  <Tooltip title="不会显示" disabled>
    <Button>禁用提示</Button>
  </Tooltip>
);
```

## 自定义内容

支持传入任意 ReactNode 作为内容。

```tsx
import React from 'react';
import { Tooltip, Button } from '@qindy/orange-ui';

export default () => (
  <Tooltip title={<span style={{ color: 'yellow' }}>自定义内容</span>}>
    <Button>自定义</Button>
  </Tooltip>
);
```

## API

| 参数      | 说明       | 类型          | 可选值                      | 默认值 |
| --------- | ---------- | ------------- | --------------------------- | ------ |
| title     | 提示内容   | ReactNode     | —                           | —      |
| placement | 气泡位置   | string        | top / bottom / left / right | top    |
| disabled  | 是否禁用   | boolean       | —                           | false  |
| children  | 触发元素   | ReactNode     | —                           | —      |
| style     | 自定义样式 | CSSProperties | —                           | —      |
| className | 自定义类名 | string        | —                           | —      |

---

如需更多自定义功能或动画，欢迎随时告知！
