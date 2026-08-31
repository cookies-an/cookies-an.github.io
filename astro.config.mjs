// @ts-check
import { defineConfig } from 'astro/config';

// 用户主页站点：仓库名必须等于 GitHub 用户名。
// 如果以后改了用户名，只需要同步改这里和 src/data/site.js 的 github 字段。
export default defineConfig({
  site: 'https://cookies-an.github.io',
  build: { inlineStylesheets: 'auto' },
});
