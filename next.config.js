/** @type {import('next').NextConfig} */
const nextConfig = {
  // 支持 MDX 作为页面文件
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  // 输出静态文件（关键：GitHub Pages 仅支持静态文件）
  output: 'export',
  // 若部署到仓库子路径（如 https://xxx.github.io/xxx/），需配置基础路径
  basePath: '/你的仓库名', // 比如仓库名是 mdx-demo，就写 '/mdx-demo'
};

// 集成 MDX 插件
const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
