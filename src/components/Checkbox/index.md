---
title: Checkbox 多选框
---

# Checkbox 多选框

用于在一组可选项中进行多项选择。单独使用可以表示两种状态之间的切换，和 Switch 类似。区别在于 Switch 会直接触发状态改变，而 Checkbox 一般用于状态标记，需要和提交操作配合。

## 基本用法

最简单的用法。

```tsx
import { Checkbox } from 'orange-ui';

export default () => <Checkbox defaultChecked>选项A</Checkbox>;
```

## 受控用法

通过 checked 和 onChange 实现受控。

```tsx
import React, { useState } from 'react';
import { Checkbox } from 'orange-ui';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox checked={checked} onChange={setChecked}>
      受控Checkbox
    </Checkbox>
  );
};
```

## Checkbox.Group 分组

一组多选框配合使用。

```tsx
import React, { useState } from 'react';
import { Checkbox } from 'orange-ui';

export default () => {
  const [checkedList, setCheckedList] = useState(['A']);
  return (
    <Checkbox.Group value={checkedList} onChange={setCheckedList}>
      <Checkbox value="A">A</Checkbox>
      <Checkbox value="B">B</Checkbox>
      <Checkbox value="C">C</Checkbox>
    </Checkbox.Group>
  );
};
```

## 使用 options 批量渲染

通过 options 属性快速渲染一组多选框。

```tsx
import React, { useState } from 'react';
import { Checkbox } from 'orange-ui';

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange', disabled: true },
];

export default () => {
  const [checkedList, setCheckedList] = useState(['apple']);
  return (
    <Checkbox.Group
      options={options}
      value={checkedList}
      onChange={setCheckedList}
    />
  );
};
```

## 禁用状态

可以通过 disabled 属性禁用单个或整组 Checkbox。

```tsx
import { Checkbox } from 'orange-ui';

export default () => (
  <>
    <Checkbox disabled>不可选</Checkbox>
    <Checkbox.Group disabled defaultValue={['B']}>
      <Checkbox value="A">A</Checkbox>
      <Checkbox value="B">B</Checkbox>
    </Checkbox.Group>
  </>
);
```

## 半选状态

通过 indeterminate 属性设置半选状态，常用于“全选”功能。

```tsx
import React, { useState } from 'react';
import { Checkbox } from 'orange-ui';

export default () => {
  const [checkedList, setCheckedList] = useState(['A']);
  const options = ['A', 'B', 'C'];
  const allChecked = checkedList.length === options.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < options.length;

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        checked={allChecked}
        onChange={(checked) => setCheckedList(checked ? options : [])}
      >
        全选
      </Checkbox>
      <Checkbox.Group value={checkedList} onChange={setCheckedList}>
        {options.map((item) => (
          <Checkbox key={item} value={item}>
            {item}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </>
  );
};
```

## 垂直排列

通过 direction="vertical" 实现垂直排列。

```tsx
import { Checkbox } from 'orange-ui';

export default () => (
  <Checkbox.Group direction="vertical" defaultValue={['1']}>
    <Checkbox value="1">选项一</Checkbox>
    <Checkbox value="2">选项二</Checkbox>
    <Checkbox value="3">选项三</Checkbox>
  </Checkbox.Group>
);
```

## API

### Checkbox Props

| 参数           | 说明         | 类型                        | 默认值 |
| -------------- | ------------ | --------------------------- | ------ |
| checked        | 是否选中     | boolean                     | -      |
| defaultChecked | 初始是否选中 | boolean                     | -      |
| disabled       | 是否禁用     | boolean                     | false  |
| indeterminate  | 是否半选     | boolean                     | false  |
| onChange       | 变化时回调   | (checked, e) => void        | -      |
| children       | 多选框内容   | ReactNode                   | -      |
| style          | 自定义样式   | React.CSSProperties         | -      |
| className      | 自定义类名   | string                      | -      |
| value          | 多选框的值   | string \| number \| boolean | -      |

### Checkbox.Group Props

| 参数         | 说明           | 类型                            | 默认值     |
| ------------ | -------------- | ------------------------------- | ---------- |
| value        | 当前选中值数组 | (string \| number \| boolean)[] | -          |
| defaultValue | 初始选中值数组 | (string \| number \| boolean)[] | -          |
| disabled     | 是否禁用       | boolean                         | false      |
| options      | 批量渲染选项   | { label, value, disabled? }[]   | -          |
| onChange     | 变化时回调     | (checkedList) => void           | -          |
| children     | 自定义子项     | ReactNode                       | -          |
| style        | 自定义样式     | React.CSSProperties             | -          |
| className    | 自定义类名     | string                          | -          |
| direction    | 排列方向       | 'horizontal' \| 'vertical'      | horizontal |
