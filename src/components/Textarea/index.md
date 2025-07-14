---
title: Textarea # 配置页面标题,同时生成 <title> 标签
---

<!-- 其他 Markdown 内容 -->

# Textarea 文本域

用于输入多行文本信息。

## 基本用法

基础的文本域用法。

```tsx
import { Textarea } from 'orange-ui';

export default () => (
  <>
    <Textarea placeholder="请输入多行文本" />
    <Textarea placeholder="请输入多行文本" variant="primary" />
    <Textarea placeholder="请输入多行文本" variant="success" />
    <Textarea placeholder="请输入多行文本" variant="warning" />
    <Textarea placeholder="请输入多行文本" variant="danger" />
    <Textarea placeholder="请输入多行文本" variant="info" />
  </>
);
```

## 不同尺寸

可通过 size 属性指定文本域的尺寸。支持 small、medium 和 large 三种尺寸。

```tsx
import { Textarea } from 'orange-ui';

export default () => (
  <>
    <Textarea size="small" placeholder="Small" />
    <Textarea size="medium" placeholder="Medium" />
    <Textarea size="large" placeholder="Large" />

    <div style={{ marginTop: '16px' }}>
      <Textarea size="small" variant="primary" placeholder="Small Primary" />
      <Textarea size="medium" variant="primary" placeholder="Medium Primary" />
      <Textarea size="large" variant="primary" placeholder="Large Primary" />
    </div>
  </>
);
```

## 禁用状态

通过 disabled 属性指定是否禁用文本域。

```tsx
import { Textarea } from 'orange-ui';

export default () => (
  <>
    <Textarea disabled placeholder="禁用状态" />
  </>
);
```

## 报错状态

下方呈现报错状态。

```tsx
import { Textarea } from 'orange-ui';

export default () => (
  <>
    <Textarea error="请输入正确的内容" placeholder="错误状态" />
  </>
);
```

## 可清空

使用 clearable 属性即可得到一个可清空的文本域。

```tsx
import { Textarea } from 'orange-ui';

export default () => (
  <>
    <Textarea clearable placeholder="可清空" />
  </>
);
```

## 字数显示

会显示字数的多少，然后限制多少字。

```tsx
import { Textarea } from 'orange-ui';

export default () => (
  <>
    <Textarea showCount placeholder="无限制字符" />
    <Textarea maxLength={100} showCount placeholder="最多输入100个字符" />
  </>
);
```

## 自适应高度

autoSize 属性适用于文本域，并且只有高度会自动变化。另外可以设定最小行数和最大行数。

```tsx
import { Textarea } from 'orange-ui';

export default () => (
  <>
    <Textarea autoSize placeholder="自适应高度" />
    <Textarea autoSize minRows={3} maxRows={5} placeholder="最小3行，最大5行" />
    <Textarea autoSize showCount placeholder="自适应高度 + 字数统计" />
  </>
);
```

## 指定行数

通过 rows 属性指定文本域的初始行数。

```tsx
import { Textarea } from 'orange-ui';

export default () => (
  <>
    <Textarea rows={3} placeholder="3行文本域" />
    <Textarea rows={5} placeholder="5行文本域" />
    <Textarea rows={10} placeholder="10行文本域" />
  </>
);
```

## API

### Textarea Props

| 参数        | 说明                 | 类型     | 可选值                                                | 默认值  |
| ----------- | -------------------- | -------- | ----------------------------------------------------- | ------- |
| size        | 文本域尺寸           | string   | small / medium / large                                | medium  |
| variant     | 文本域类型           | string   | default / primary / success / warning / danger / info | default |
| disabled    | 是否禁用             | boolean  | —                                                     | false   |
| clearable   | 是否可清空           | boolean  | —                                                     | false   |
| maxLength   | 最大输入长度         | number   | —                                                     | —       |
| showCount   | 是否显示字数统计     | boolean  | —                                                     | false   |
| autoSize    | 自适应高度           | boolean  | —                                                     | false   |
| minRows     | 最小行数             | number   | —                                                     | 3       |
| maxRows     | 最大行数             | number   | —                                                     | 10      |
| rows        | 文本域行数           | number   | —                                                     | 3       |
| error       | 错误信息             | string   | —                                                     | —       |
| onClear     | 清空按钮的回调       | function | —                                                     | —       |
| placeholder | 文本域占位文本       | string   | —                                                     | —       |
| value       | 文本域的值           | string   | —                                                     | —       |
| onChange    | 文本域值改变时的回调 | function | —                                                     | —       |
