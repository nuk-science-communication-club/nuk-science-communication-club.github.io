// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 部署到 GitHub Pages 時由 workflow 自動帶入 SITE / BASE。
// 例：https://<帳號>.github.io/<repo名稱>  →  SITE=https://<帳號>.github.io  BASE=/<repo名稱>
// 若使用自訂網域或 <帳號>.github.io 這個 repo，BASE 維持 "/" 即可。
export default defineConfig({
  site: process.env.SITE || 'https://example.github.io',
  base: process.env.BASE || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
