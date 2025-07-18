---
title: Button # 配置页面标题,同时生成 <title> 标签
---

<!-- 其他 Markdown 内容 -->

# Button 按钮

## 基本用法

使用 variant、appearance、radius 和 size 来定义按钮的样式。

```tsx
import { Button } from '@qindy/orange-ui';

export default () => (
  <>
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="success">Success</Button>
    <Button variant="info">Info</Button>

    <div style={{ marginTop: '16px' }}>
      <Button appearance="plain">Plain</Button>
      <Button appearance="plain" variant="primary">
        Primary
      </Button>
      <Button appearance="plain" variant="danger">
        Danger
      </Button>
      <Button appearance="plain" variant="warning">
        Warning
      </Button>
      <Button appearance="plain" variant="success">
        Success
      </Button>
      <Button appearance="plain" variant="info">
        Info
      </Button>
    </div>

    <div style={{ marginTop: '16px' }}>
      <Button radius="round">Round</Button>
      <Button radius="round" variant="primary">
        Primary
      </Button>
      <Button radius="round" variant="danger">
        Danger
      </Button>
      <Button radius="round" variant="warning">
        Warning
      </Button>
      <Button radius="round" variant="success">
        Success
      </Button>
      <Button radius="round" variant="info">
        Info
      </Button>
    </div>

    <div style={{ marginTop: '16px' }}>
      <Button radius="circle">O</Button>
      <Button radius="circle" variant="primary">
        P
      </Button>
      <Button radius="circle" variant="danger">
        D
      </Button>
      <Button radius="circle" variant="warning">
        W
      </Button>
      <Button radius="circle" variant="success">
        S
      </Button>
      <Button radius="circle" variant="info">
        I
      </Button>
    </div>
  </>
);
```

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 loading 属性为 true 来显示加载中状态。

```tsx
import { Button } from '@qindy/orange-ui';
export default () => (
  <>
    <Button icon={<span>👍</span>}>带图标</Button>
    <Button loading>加载中</Button>
  </>
);
```

## 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

```tsx
import { Button } from '@qindy/orange-ui';
export default () => (
  <>
    <Button disabled>Default</Button>
    <Button variant="primary" disabled>
      Primary
    </Button>
    <Button variant="danger" disabled>
      Danger
    </Button>
    <Button variant="warning" disabled>
      Warning
    </Button>
    <Button variant="success" disabled>
      Success
    </Button>
    <Button variant="info" disabled>
      Info
    </Button>
  </>
);
```

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。
使用 size 属性额外配置尺寸，可使用 small、medium 和 large 三种值。

```tsx
import { Button } from '@qindy/orange-ui';

export default () => (
  <>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>

    <div style={{ marginTop: '16px' }}>
      <Button size="small" variant="primary">
        Small Primary
      </Button>
      <Button size="medium" variant="primary">
        Medium Primary
      </Button>
      <Button size="large" variant="primary">
        Large Primary
      </Button>
    </div>
  </>
);
```

## API

### Button Props

| 参数       | 说明                 | 类型      | 可选值                                                            | 默认值  |
| ---------- | -------------------- | --------- | ----------------------------------------------------------------- | ------- |
| variant    | 按钮类型             | string    | default / primary / secondary / success / danger / warning / info | default |
| appearance | 按钮外观             | string    | solid / plain                                                     | solid   |
| size       | 按钮尺寸             | string    | small / medium / large                                            | small   |
| radius     | 按钮圆角             | string    | small / medium / large / round / circle                           | small   |
| disabled   | 是否禁用按钮         | boolean   | —                                                                 | false   |
| loading    | 是否显示加载状态     | boolean   | —                                                                 | false   |
| icon       | 按钮图标             | ReactNode | —                                                                 | —       |
| onClick    | 点击按钮时的回调函数 | function  | —                                                                 | —       |
| children   | 按钮内容             | ReactNode | —                                                                 | —       |
