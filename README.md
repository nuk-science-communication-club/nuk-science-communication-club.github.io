# 高雄大學科學傳播社 官方網站

> 做酷科技，把科學帶出去。MAKE. SHARE. CREATE.

使用 [Astro](https://astro.build) 製作的靜態網站，部署在 GitHub Pages。
**新增活動不用改程式**，只要新增一個 Markdown 檔。

## 本機預覽

需要 Node.js 20 以上。

```bash
npm install      # 第一次才需要
npm run dev      # 開啟 http://localhost:4321
npm run build    # 輸出到 dist/
```

## 幹部最常做的事

### 1. 新增一個活動／專案

1. 複製 `src/content/projects/_TEMPLATE.md`
2. 改檔名，例如 `2027-summer-camp.md`（英文小寫＋連字號，**檔名就是網址** → `/projects/2027-summer-camp`）
3. 填寫欄位（範本裡每個欄位都有說明），活動內容寫在 `---` 下方
4. 照片放到 `public/images/projects/<資料夾>/`，在 `coverImage`、`gallery` 填路徑
5. commit + push 到 `main`，約 1～2 分鐘後網站自動更新

新增後，**Projects、Archive、首頁最新活動、相關活動** 都會自動出現。

| category | 顯示為 |
| --- | --- |
| `school` | 校園科學教育 |
| `outreach` | 科普推廣 |
| `workshop` | 工作坊 |
| `event` | 大型活動協作 |
| `member` | 社員專案 |

> ⚠️ 不是高雄大學科學傳播社主辦的活動，`involvement` 請寫「活動協作」「活動支援」或「志工／工作人員」，不要寫「主辦」。

### 2. 照片原則

- 優先：**人在做事情**（教學、操作、實驗、討論）→ 成果物 → 活動現場 → 大合照放最後
- 上傳前先壓縮成 **WebP**、寬度 1600px 以內（可用 [squoosh.app](https://squoosh.app)）
- 沒有照片的地方網站會顯示藍色佔位圖，提醒要補照片

### 3. 更改社課時間、Email、IG、表單

全部在 `src/data/site.ts`：

- `email`、`instagram`、`instagramHandle`
- `meeting`（時間、地點、招募對象）
- `formEndpoint`：到 [Formspree](https://formspree.io) 建立免費表單後貼上網址；留空則合作表單會開啟訪客的 Email 軟體
- `gaId`：Google Analytics 4 評估 ID
- `mapPoints`：首頁地圖上的學校位置

FAQ 在 `src/pages/join.astro` 最上面的 `faq` 陣列。

## 部署到 GitHub Pages（第一次）

1. 在 GitHub 建立 repo（例如 `nuk-scicomm`），把這個資料夾 push 上去
2. Repo → **Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**
3. 之後每次 push 到 `main` 都會自動部署（設定在 `.github/workflows/deploy.yml`）
4. 網址會是 `https://<帳號>.github.io/<repo名稱>/`，網址前綴會自動處理

使用自訂網域：在 `public/` 放一個 `CNAME` 檔，內容寫網域名稱，並在 Pages 設定中填入同樣網域。

## 專案結構

```
src/
├── content/projects/   ← 所有活動與專案（Markdown）
├── data/               ← site.ts 全站資訊、journey.ts 成長路徑、nav.ts 選單
├── pages/              ← 各頁面（index / projects / join / collaborate / archive / about）
├── components/         ← 共用元件
├── layouts/Layout.astro← SEO、Open Graph、GA
└── styles/global.css   ← 顏色、字體等設計變數
public/                 ← 圖片、favicon、og-image.png
```

## 目前待補（上線前）

- [ ] `src/data/site.ts` 的 Email 換成正式資訊
- [ ] 所有活動的實際照片、日期、成果數據（標示 ✏️ 的段落）
- [ ] Greenmind 的正式介紹與外部連結
- [ ] 大型活動的主辦單位名稱
- [ ] FAQ 中標示「待確認」的答案
- [ ] 正式社團 Logo（目前 `src/components/Logo.astro` 為暫用圖形）
