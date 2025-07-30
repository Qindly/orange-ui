---
title: 快速开始
order: 2
---

# 快速开始

## 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0 或 pnpm >= 7.0.0
- React >= 16.9.0

## 安装

### 使用 npm

```bash
npm install @qindy/orange-ui
```

### 使用 yarn

```bash
yarn add @qindy/orange-ui
```

### 使用 pnpm

```bash
pnpm add @qindy/orange-ui
```

## 基础使用

### 1. 引入组件

````markdown
# 构建

## 构建组件库

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```
````

## 构建文档

```bash
npm run docs:build
# 或
yarn docs:build
# 或
pnpm docs:build
```

## 常见问题

### 依赖安装失败

```bash
npm cache clean --force
rm -rf node_modules
npm install
```

```

## 下一步

- 🎨 [组件展示](/components) - 浏览所有可用组件
- 🔧 [按需引入](/import-on-demand) - 优化打包体积
- 📖 [API 文档](/api) - 查看详细的 API 说明
```
