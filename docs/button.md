---
title: Button 按钮
group: 通用
---

# Button 按钮
## 基本用法

```tsx
import { Button } from '../src/components/Button';

export default () => (
  <>
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="success">Success</Button>
    <Button variant="info">Info</Button>
    <br /><br />
    <Button appearance="plain">Plain</Button>
    <Button appearance="plain" variant="primary">Primary</Button>
    <Button appearance="plain" variant="danger">Danger</Button>
    <Button appearance="plain" variant="warning">Warning</Button>
    <Button appearance="plain" variant="success">Success</Button>
    <Button appearance="plain" variant="info">Info</Button>
    <br /><br />
    <Button radius="round">Round</Button>
    <Button radius="round" variant="primary">Primary</Button>
    <Button radius="round" variant="danger">Danger</Button>
    <Button radius="round" variant="warning">Warning</Button>
    <Button radius="round" variant="success">Success</Button>
    <Button radius="round" variant="info">Info</Button>
    <br /><br />
    <Button radius="circle">O</Button>
    <Button radius="circle" variant="primary">P</Button>
    <Button radius="circle" variant="danger">D</Button>
    <Button radius="circle" variant="warning">W</Button>
    <Button radius="circle" variant="success">S</Button>
    <Button radius="circle" variant="info">I</Button>
   </>
);
```

