# 快速开始

## 安装

使用 npm 安装：

```bash
npm install orange-ui
```

使用 yarn 安装：

```bash
yarn add orange-ui
```

使用 pnpm 安装：

```bash
pnpm add orange-ui
```

## 全量引入

```js
import { createRoot } from 'react-dom/client';
import OrangeUI from 'orange-ui';
import 'orange-ui/dist/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

#### 按需引入（docs/import-on-demand.md）

````markdown
# 按需引入

推荐使用 babel-plugin-import 或 unplugin-auto-import 实现按需加载。

## 示例

```js
import { Button } from 'orange-ui';
```
````

````

#### 安装（docs/install.md）

```markdown
# 安装

## 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0 或 pnpm >= 7.0.0

## 开发环境设置

克隆仓库：

```bash
git clone https://github.com/your-username/orange-ui.git
cd orange-ui
````

安装依赖：

```bash
npm install
# 或
yarn
# 或
pnpm install
```

````

#### 构建（docs/build.md）

```markdown
# 构建

## 构建组件库

```bash
npm run build
# 或
yarn build
# 或
pnpm build
````

## 构建文档

```bash
npm run docs:build
# 或
yarn docs:build
# 或
pnpm docs:build
```

````

#### 贡献指南（docs/contributing.md）

```markdown
# 贡献指南

欢迎参与 orange-ui 的开发与维护！

## 开发工具推荐

- VSCode
- ESLint
- Prettier
- TypeScript
- Vitest

## VSCode 配置

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript", "react"],
  "typescript.tsdk": "node_modules/typescript/lib"
}
````

## 常见问题

### 依赖安装失败

```bash
npm cache clean --force
rm -rf node_modules
npm install
```

```

---

### 3. 检查 docs 目录下文件是否齐全

如有缺失（如 install.md），请新建对应文件，并填入上述内容。

---

这样配置后，你的文档界面会和你图片中的分组、内容一致，且内容完整、结构清晰。如果需要我帮你自动补全 .dumirc.ts 和缺失的 md 文件，请告知！
```
