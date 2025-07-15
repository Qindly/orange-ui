---
title: Radio 单选框
---

# Radio 单选框

用于在多个备选项中选中单个状态。和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基本用法

最简单的用法。

```tsx
import { Radio } from 'orange-ui';

export default () => <Radio defaultChecked>选项A</Radio>;
```

## 受控用法

通过 value 和 onChange 实现受控。

```tsx
import React, { useState } from 'react';
import { Radio } from 'orange-ui';

export default () => {
  const [value, setValue] = useState('A');
  return (
    <>
      <Radio value="A" checked={value === 'A'} onChange={() => setValue('A')}>
        A
      </Radio>
      <Radio value="B" checked={value === 'B'} onChange={() => setValue('B')}>
        B
      </Radio>
    </>
  );
};
```

## Radio.Group 分组

一组互斥的 Radio 配合使用。

```tsx
import React, { useState } from 'react';
import { Radio } from 'orange-ui';

export default () => {
  const [value, setValue] = useState('B');
  return (
    <Radio.Group value={value} onChange={setValue}>
      <Radio value="A">A</Radio>
      <Radio value="B">B</Radio>
      <Radio value="C">C</Radio>
    </Radio.Group>
  );
};
```

## 使用 options 批量渲染

通过 options 属性快速渲染一组单选框。

```tsx
import React, { useState } from 'react';
import { Radio } from 'orange-ui';

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '梨子', value: 'pear' },
  { label: '草莓', value: 'strawberry' },
  { label: '橙子', value: 'orange', disabled: true },
];

export default () => {
  const [value, setValue] = useState('apple');
  return <Radio.Group options={options} value={value} onChange={setValue} />;
};
```

## 禁用状态

可以通过 disabled 属性禁用单个或整组 Radio。

```tsx
import { Radio } from 'orange-ui';

export default () => (
  <>
    <Radio value="A" disabled>
      不可选
    </Radio>
    <Radio.Group disabled defaultValue="B">
      <Radio value="A">A</Radio>
      <Radio value="B">B</Radio>
    </Radio.Group>
  </>
);
```

## 垂直排列

通过 direction="vertical" 实现垂直排列。

```tsx
import { Radio } from 'orange-ui';

export default () => (
  <Radio.Group direction="vertical" defaultValue="1">
    <Radio value="1">选项一</Radio>
    <Radio value="2">选项二</Radio>
    <Radio value="3">选项三</Radio>
  </Radio.Group>
);
```

## API

### Radio Props

| 参数           | 说明         | 类型                        | 默认值 |
| -------------- | ------------ | --------------------------- | ------ |
| value          | 单选框的值   | string \| number \| boolean | -      |
| checked        | 是否选中     | boolean                     | -      |
| defaultChecked | 初始是否选中 | boolean                     | -      |
| disabled       | 是否禁用     | boolean                     | false  |
| onChange       | 变化时回调   | (value, e) => void          | -      |
| children       | 单选框内容   | ReactNode                   | -      |
| style          | 自定义样式   | React.CSSProperties         | -      |
| className      | 自定义类名   | string                      | -      |

### Radio.Group Props

| 参数         | 说明         | 类型                          | 默认值     |
| ------------ | ------------ | ----------------------------- | ---------- |
| value        | 当前选中值   | string \| number \| boolean   | -          |
| defaultValue | 初始选中值   | string \| number \| boolean   | -          |
| disabled     | 是否禁用     | boolean                       | false      |
| onChange     | 变化时回调   | (value) => void               | -          |
| options      | 批量渲染选项 | { label, value, disabled? }[] | -          |
| children     | 自定义子项   | ReactNode                     | -          |
| direction    | 排列方向     | 'horizontal' \| 'vertical'    | horizontal |
| style        | 自定义样式   | React.CSSProperties           | -          |
| className    | 自定义类名   | string                        | -          |
