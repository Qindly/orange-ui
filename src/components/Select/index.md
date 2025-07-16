---
title: Select 下拉选择器
---

# Select 下拉选择器

弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 基本用法

基础的下拉选择用法。

```tsx
import React from 'react';
import { Select } from 'orange-ui';

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
];

export default () => <Select options={options} placeholder="请选择水果" />;
```

## 不同尺寸

可通过 size 属性指定下拉选择器的尺寸。支持 small、medium 和 large 三种尺寸。

```tsx
import React from 'react';
import { Select } from 'orange-ui';

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
];

export default () => (
  <>
    <Select size="small" options={options} placeholder="Small" />
    <Select size="medium" options={options} placeholder="Medium" />
    <Select size="large" options={options} placeholder="Large" />
  </>
);
```

## 禁用状态

通过 disabled 属性指定是否禁用下拉选择器。

```tsx
import React from 'react';
import { Select } from 'orange-ui';

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
];

export default () => (
  <Select disabled options={options} placeholder="禁用状态" />
);
```

## 多选

通过 multiple 属性可以多选。

```tsx
import React from 'react';
import { Select } from 'orange-ui';

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
];

export default () => (
  <Select multiple options={options} placeholder="多选水果" />
);
```

## 带搜索框

通过 searchable 属性可以开启搜索。

```tsx
import React from 'react';
import { Select } from 'orange-ui';

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
];

export default () => (
  <Select searchable options={options} placeholder="搜索水果" />
);
```

## 自定义选项内容

可以自定义 options 的 label 内容。

```tsx
import React from 'react';
import { Select } from 'orange-ui';

const options = [
  { label: <span style={{ color: 'red' }}>苹果</span>, value: 'apple' },
  { label: <b>香蕉</b>, value: 'banana' },
  { label: '橙子', value: 'orange' },
];

export default () => <Select options={options} placeholder="自定义内容" />;
```

## 错误状态

通过 error 属性显示错误提示。

```tsx
import React from 'react';
import { Select } from 'orange-ui';

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
];

export default () => (
  <Select error="请选择水果" options={options} placeholder="错误状态" />
);
```

## API

### Select Props

| 参数        | 说明           | 类型                          | 可选值             | 默认值  |
| ----------- | -------------- | ----------------------------- | ------------------ | ------- | --------- | --- | --- |
| options     | 选项列表       | { label, value, disabled? }[] | —                  | —       |
| value       | 选中值（受控） | string                        | number             | (string | number)[] | —   | —   |
| onChange    | 选中值变化回调 | (value) => void               | —                  | —       |
| placeholder | 占位符         | string                        | —                  | 请选择  |
| disabled    | 是否禁用       | boolean                       | —                  | false   |
| multiple    | 是否多选       | boolean                       | —                  | false   |
| searchable  | 是否可搜索     | boolean                       | —                  | false   |
| size        | 选择器尺寸     | string                        | small/medium/large | medium  |
| error       | 错误提示       | string                        | —                  | —       |
| style       | 自定义样式     | React.CSSProperties           | —                  | —       |
| className   | 自定义类名     | string                        | —                  | —       |
