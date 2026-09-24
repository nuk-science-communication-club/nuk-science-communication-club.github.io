// ───────────────────────────────────────────────
// 全站共用資訊：換屆或資訊異動時只要改這個檔案
// ───────────────────────────────────────────────
export const site = {
  name: '國立高雄大學科學傳播社',
  shortName: '高大科傳社',
  nameEn: 'NUK Science Communication Club',
  title: '國立高雄大學科學傳播社｜NUK Science Communication Club',
  description:
    '做酷科技，把科學帶出去。從科技實作、自走車與科學工作坊，到國中科學社團、科普活動及社員專案。',
  slogan: '做酷科技，把科學帶出去。',
  sloganEn: 'MAKE. SHARE. CREATE.',

  // TODO: 換成社團正式資訊
  email: 'nuk.scicomm@example.com',
  instagram: 'https://www.instagram.com/',
  instagramHandle: '@nuk_scicomm',

  meeting: {
    day: '每週三',
    time: '18:00–20:00',
    place: '理學院 508 創客教室',
    who: '高大大一至大三學生',
    fee: '免社費',
  },

  // 聯絡表單：到 https://formspree.io 建立表單後把網址貼在這裡（例：https://formspree.io/f/xxxxxx）
  // 留空則會改用 Email 寄信的方式送出。
  formEndpoint: '',

  // Google Analytics 4 評估 ID（例：G-XXXXXXXXXX），留空則不載入
  gaId: '',
};

export const categories = {
  school: { label: '校園科學教育', en: 'School Program' },
  outreach: { label: '科普推廣', en: 'Outreach' },
  workshop: { label: '工作坊', en: 'Workshop' },
  event: { label: '大型活動協作', en: 'Event Support' },
  member: { label: '社員專案', en: 'Member Project' },
} as const;

export type CategoryKey = keyof typeof categories;

// 活動地圖：x / y 為示意地圖上的百分比位置
export const mapPoints = [
  { name: '國立高雄大學', note: '我們的基地', x: 47, y: 62, home: true },
  { name: '蚵寮國中', note: '科學社團課程', x: 30, y: 30 },
  { name: '彌陀國中', note: '科學社團課程', x: 29, y: 44 },
  { name: '燕巢國中', note: '科學社團課程', x: 63, y: 40 },
  { name: '鳳翔國中', note: '科學社團課程', x: 58, y: 80 },
];
