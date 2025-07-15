---
title: Message 全局提示
---

# Message 全局提示

用于主动操作后的全局反馈提示，通常在页面顶部居中显示，点击按钮后弹出消息。

## 基础用法

最简单的用法，3 秒后自动消失。

```tsx
import React, { useState } from 'react';
import { Message, Button } from 'orange-ui';

export default () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>显示消息</Button>
      {show && <Message content="操作成功！" onClose={() => setShow(false)} />}
    </>
  );
};
```

## 不同类型

通过 `type` 属性设置不同的提示类型。

```tsx
import React, { useState } from 'react';
import { Message, Button } from 'orange-ui';

export default () => {
  const [type, setType] = useState();
  return (
    <>
      <Button onClick={() => setType('info')}>信息</Button>
      <Button onClick={() => setType('success')}>成功</Button>
      <Button onClick={() => setType('warning')}>警告</Button>
      <Button onClick={() => setType('error')}>错误</Button>
      {type && (
        <Message
          type={type}
          content={`这是${type}消息`}
          onClose={() => setType(undefined)}
        />
      )}
    </>
  );
};
```

## 可关闭

通过 `closable` 属性让消息可手动关闭。

```tsx
import React, { useState } from 'react';
import { Message, Button } from 'orange-ui';

export default () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>显示可关闭消息</Button>
      {show && (
        <Message
          content="这条消息可以关闭"
          closable
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};
```

## 自定义时长

通过 `duration` 属性设置显示时长（单位：秒），为 0 时不会自动关闭。

```tsx
import React, { useState } from 'react';
import { Message, Button } from 'orange-ui';

export default () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>显示5秒消息</Button>
      {show && (
        <Message
          content="5秒后自动关闭"
          duration={5}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};
```

## API

### Message Props

| 参数      | 说明           | 类型                                        | 默认值 |
| --------- | -------------- | ------------------------------------------- | ------ |
| type      | 消息类型       | 'info' \| 'success' \| 'warning' \| 'error' | 'info' |
| content   | 消息内容       | ReactNode                                   | -      |
| duration  | 显示时长（秒） | number                                      | 3      |
| closable  | 是否可关闭     | boolean                                     | false  |
| onClose   | 关闭时回调     | () => void                                  | -      |
| style     | 自定义样式     | React.CSSProperties                         | -      |
| className | 自定义类名     | string                                      | -      |
