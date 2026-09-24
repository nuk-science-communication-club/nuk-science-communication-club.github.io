import { getCollection } from 'astro:content';

/** 加上 GitHub Pages 的 base 路徑，例：url('join') → /repo/join */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

/** 圖片路徑：外部網址原樣回傳，站內路徑加上 base */
export function asset(src?: string) {
  if (!src) return undefined;
  return /^https?:\/\//.test(src) ? src : url(src);
}

/** 取得所有已發布專案，新到舊排序 */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
