---
title: Message 全局提示
group: 反馈
---

# Message 全局提示

用于主动操作后的全局反馈提示，通常在页面顶部居中显示，点击按钮后弹出消息。

## 基本用法

最简单的用法，3 秒后自动消失。

```tsx
import React from 'react';
import { MessageApi, Button } from 'orange-ui';

export default () => (
  <Button onClick={() => MessageApi.info('操作成功！')}>显示消息</Button>
);
```

## 不同类型

通过 MessageApi 的不同方法设置不同的提示类型。

```tsx
import React from 'react';
import { MessageApi, Button } from 'orange-ui';

export default () => (
  <>
    <Button variant="info" onClick={() => MessageApi.info('这是信息提示')}>
      信息
    </Button>
    <Button variant="success" onClick={() => MessageApi.success('操作成功！')}>
      成功
    </Button>
    <Button
      variant="warning"
      onClick={() => MessageApi.warning('这是警告提示')}
    >
      警告
    </Button>
    <Button variant="danger" onClick={() => MessageApi.error('这是错误提示')}>
      错误
    </Button>
  </>
);
```

## 可关闭

通过 `closable` 属性让消息可手动关闭。

```tsx
import React from 'react';
import { MessageApi, Button } from 'orange-ui';

export default () => (
  <Button onClick={() => MessageApi.info('这条消息可以关闭', 3, true)}>
    显示可关闭消息
  </Button>
);
```

## 自定义时长

通过 `duration` 属性设置显示时长（单位：秒），为 0 时不会自动关闭。

```tsx
import React from 'react';
import { MessageApi, Button } from 'orange-ui';

export default () => (
  <Button onClick={() => MessageApi.info('5秒后自动关闭', 5)}>
    显示5秒消息
  </Button>
);
```

## API

### MessageApi 方法

| 方法    | 说明     | 参数                                                      |
| ------- | -------- | --------------------------------------------------------- |
| info    | 信息提示 | content: ReactNode, duration?: number, closable?: boolean |
| success | 成功提示 | content: ReactNode, duration?: number, closable?: boolean |
| warning | 警告提示 | content: ReactNode, duration?: number, closable?: boolean |
| error   | 错误提示 | content: ReactNode, duration?: number, closable?: boolean |

> 例：`MessageApi.info('内容', 3, true)`
