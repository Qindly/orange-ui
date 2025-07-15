---
title: Input输入框 # 配置页面标题,同时生成 <title> 标签
---

<!-- 其他 Markdown 内容 -->

# Input 输入框

通过鼠标或键盘输入字符。

## 基本用法

基础的输入框用法。

```tsx
import { Input } from 'orange-ui';

export default () => (
  <>
    <Input placeholder="请输入内容" />
    <Input placeholder="请输入内容" variant="primary" />
    <Input placeholder="请输入内容" variant="success" />
    <Input placeholder="请输入内容" variant="warning" />
    <Input placeholder="请输入内容" variant="danger" />
    <Input placeholder="请输入内容" variant="info" />
  </>
);
```

## 不同尺寸

可通过 size 属性指定输入框的尺寸。支持 small、medium 和 large 三种尺寸。

```tsx
import { Input } from 'orange-ui';

export default () => (
  <>
    <Input size="small" placeholder="Small" />
    <Input size="medium" placeholder="Medium" />
    <Input size="large" placeholder="Large" />

    <div style={{ marginTop: '16px' }}>
      <Input size="small" variant="primary" placeholder="Small Primary" />
      <Input size="medium" variant="primary" placeholder="Medium Primary" />
      <Input size="large" variant="primary" placeholder="Large Primary" />
    </div>
  </>
);
```

## 禁用状态

通过 disabled 属性指定是否禁用输入框。

```tsx
import { Input } from 'orange-ui';

export default () => (
  <>
    <Input disabled placeholder="禁用状态" />
  </>
);
```

## 报错状态

下方呈现报错状态。

```tsx
import { Input } from 'orange-ui';

export default () => (
  <>
    <Input error="请输入正确的内容" placeholder="错误状态" />
    <Input error="密码不能为空" type="password" placeholder="密码错误" />
  </>
);
```

## 可清空

使用 clearable 属性即可得到一个可清空的输入框。

```tsx
import { Input } from 'orange-ui';

export default () => (
  <>
    <Input clearable placeholder="可清空" />
  </>
);
```

## 密码框

使用 showPassword 属性即可得到一个可切换显示隐藏的密码框。

```tsx
import { Input } from 'orange-ui';

export default () => (
  <>
    <Input type="password" showPassword placeholder="请输入密码" />
  </>
);
```

## 数字框

限制只输入数字，可带增减按钮。

```tsx
import { Input } from 'orange-ui';

export default () => (
  <>
    <Input type="number" placeholder="请输入数字" />
  </>
);
```

## 字数显示

会显示字数的多少，然后限制多少字。

```tsx
import { Input } from 'orange-ui';

export default () => (
  <>
    <Input showCount placeholder="无限制字符" />
    <Input maxLength={20} showCount placeholder="最多输入20个字符" />
  </>
);
```

## 回车事件

监听回车键事件，按下回车后好，会在监听页面看到内容。

```tsx
import { Input } from 'orange-ui';

export default () => (
  <Input
    placeholder="按回车键触发事件"
    onPressEnter={(e) => {
      console.log('按下了回车键', e.target.value);
    }}
  />
);
```

## API

### Input Props

| 参数         | 说明                 | 类型     | 可选值                                                | 默认值  |
| ------------ | -------------------- | -------- | ----------------------------------------------------- | ------- |
| size         | 输入框尺寸           | string   | small / medium / large                                | medium  |
| variant      | 输入框类型           | string   | default / primary / success / warning / danger / info | default |
| type         | 输入框类型           | string   | text / password / number / email / tel / url / search | text    |
| disabled     | 是否禁用             | boolean  | —                                                     | false   |
| clearable    | 是否可清空           | boolean  | —                                                     | false   |
| showPassword | 是否显示密码切换按钮 | boolean  | —                                                     | false   |
| maxLength    | 最大输入长度         | number   | —                                                     | —       |
| showCount    | 是否显示字数统计     | boolean  | —                                                     | false   |
| error        | 错误信息             | string   | —                                                     | —       |
| onPressEnter | 按下回车键的回调     | function | —                                                     | —       |
| onClear      | 清空按钮的回调       | function | —                                                     | —       |
| placeholder  | 输入框占位文本       | string   | —                                                     | —       |
| value        | 输入框的值           | string   | —                                                     | —       |
| onChange     | 输入框值改变时的回调 | function | —                                                     | —       |
