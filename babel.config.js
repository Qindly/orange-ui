// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-react', // 如果你用 React/JSX
    '@babel/preset-typescript' // 如果你用 TypeScript
  ],
};