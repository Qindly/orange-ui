---
group: 数据展示
title: Card 卡片
---

# Card 卡片

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 基本用法

基础的卡片用法。

```tsx
import React from 'react';
import { Card } from '@qindy/orange-ui';

export default () => (
  <Card title="卡片标题">
    <p>这是卡片的内容区域。</p>
    <p>可以包含任何内容，如文字、图片、列表等。</p>
  </Card>
);
```

## 不同尺寸

可通过 size 属性指定卡片的尺寸。支持 small、medium 和 large 三种尺寸。

```tsx
import React from 'react';
import { Card } from '@qindy/orange-ui';

export default () => (
  <>
    <Card size="small" title="小尺寸卡片">
      <p>这是小尺寸的卡片内容。</p>
    </Card>
    <Card size="medium" title="中尺寸卡片">
      <p>这是中尺寸的卡片内容。</p>
    </Card>
    <Card size="large" title="大尺寸卡片">
      <p>这是大尺寸的卡片内容。</p>
    </Card>
  </>
);
```

## 不同颜色

可通过 variant 属性指定卡片的颜色主题。

```tsx
import React from 'react';
import { Card } from '@qindy/orange-ui';

export default () => (
  <>
    <Card variant="default" title="默认卡片">
      <p>默认颜色的卡片。</p>
    </Card>
    <Card variant="primary" title="主要卡片">
      <p>主要颜色的卡片。</p>
    </Card>
    <Card variant="success" title="成功卡片">
      <p>成功颜色的卡片。</p>
    </Card>
    <Card variant="warning" title="警告卡片">
      <p>警告颜色的卡片。</p>
    </Card>
    <Card variant="danger" title="危险卡片">
      <p>危险颜色的卡片。</p>
    </Card>
    <Card variant="info" title="信息卡片">
      <p>信息颜色的卡片。</p>
    </Card>
  </>
);
```

## 带操作区域

## 渐变背景与动效

支持通过 `gradient` 启用渐变背景，形式同 `Button`（预设/字符串/对象/数组）。

```tsx
import React from 'react';
import { Card } from '@qindy/orange-ui';

export default () => (
  <>
    {/* 预设 */}
    <Card title="红色" gradient="red" hoverable bordered={false}>
      <p>预设红色渐变</p>
    </Card>
    <Card title="蓝色" gradient="blue" hoverable bordered={false}>
      <p>预设蓝色渐变</p>
    </Card>

    {/* 对象与数组 */}
    <Card
      title="对象渐变"
      gradient={{ from: '#0ea5e9', to: '#0369ae', angle: 120 }}
      hoverable
      bordered={false}
    >
      <p>对象渐变</p>
    </Card>
    <Card
      title="多段渐变"
      gradient={['#ef4444', '#b91c1c', '#7f1d1d']}
      hoverable
      bordered={false}
    >
      <p>数组多段渐变</p>
    </Card>
  </>
);
```

> 渐变启用时，卡片文字颜色自动设为白色；`hoverable` 下会加深并提升阴影。

通过 actions 属性可以添加操作按钮。

```tsx
import React from 'react';
import { Card, Button } from '@qindy/orange-ui';

export default () => (
  <Card
    title="带操作的卡片"
    actions={[
      <Button key="edit" size="small">
        编辑
      </Button>,
      <Button key="delete" size="small" variant="danger">
        删除
      </Button>,
    ]}
  >
    <p>这是一个带有操作按钮的卡片。</p>
  </Card>
);
```

## 带图片

通过 cover 属性可以添加封面图片。

```tsx
import React from 'react';
import { Card } from '@qindy/orange-ui';

export default () => (
  <Card
    title="带图片的卡片"
    cover={<img alt="示例图片" src="https://picsum.photos/800/600" />}
  >
    <p>这是一个带有封面图片的卡片。</p>
  </Card>
);
```

## 可悬停

通过 hoverable 属性可以让卡片在悬停时有阴影效果。

```tsx
import React from 'react';
import { Card } from '@qindy/orange-ui';

export default () => (
  <Card title="可悬停卡片" hoverable>
    <p>鼠标悬停时会有阴影效果。</p>
  </Card>
);
```

## 可点击

通过 onClick 属性可以让卡片可点击。

```tsx
import React from 'react';
import { Card } from '@qindy/orange-ui';

export default () => (
  <Card title="可点击卡片" onClick={() => alert('卡片被点击了！')}>
    <p>点击这个卡片会触发事件。</p>
  </Card>
);
```

## 无边框

通过 bordered 属性可以移除边框。

```tsx
import React from 'react';
import { Card } from '@qindy/orange-ui';

export default () => (
  <Card title="无边框卡片" bordered={false}>
    <p>这是一个没有边框的卡片。</p>
  </Card>
);
```

## 带额外内容

通过 extra 属性可以在标题右侧添加额外内容。

```tsx
import React from 'react';
import { Card, Button } from '@qindy/orange-ui';

export default () => (
  <Card title="带额外内容的卡片" extra={<Button size="small">更多</Button>}>
    <p>标题右侧有额外的按钮。</p>
  </Card>
);
```

## API

### Card Props

| 参数      | 说明         | 类型                | 可选值                                                | 默认值  |
| --------- | ------------ | ------------------- | ----------------------------------------------------- | ------- |
| title     | 卡片标题     | ReactNode           | —                                                     | —       |
| children  | 卡片内容     | ReactNode           | —                                                     | —       |
| actions   | 操作按钮列表 | ReactNode[]         | —                                                     | —       |
| size      | 卡片尺寸     | string              | small / medium / large                                | medium  |
| variant   | 卡片颜色主题 | string              | default / primary / success / warning / danger / info | default |
| bordered  | 是否显示边框 | boolean             | —                                                     | true    |
| hoverable | 是否可悬停   | boolean             | —                                                     | false   |
| loading   | 是否显示加载 | boolean             | —                                                     | false   |
| cover     | 封面图片     | ReactNode           | —                                                     | —       |
| extra     | 额外内容     | ReactNode           | —                                                     | —       |
| onClick   | 点击回调     | () => void          | —                                                     | —       |
| style     | 自定义样式   | React.CSSProperties | —                                                     | —       |
| className | 自定义类名   | string              | —                                                     | —       |
