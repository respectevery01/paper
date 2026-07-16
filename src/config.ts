export const SITE = {
  website: "https://weekly.jask.dev", // replace this with your deployed domain
  author: "Jask",
  profile: "https://weekly.jask.dev",
  desc: "链周志是 Jask 的 Web3 深度分析站点。链周志 Vol 每周快评追踪行业大事，深潜系列用五千字以上长文拆解项目本质。第一时间、独立判断、不搬运通稿。",
  title: "链周志",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
