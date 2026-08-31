// ============================================================
// 全站内容都在这一个文件里。改内容不用碰组件，改这里就行。
// 每个字段都是 { zh, en } 两份，页面右上角的语言按钮切换。
// ============================================================

// —— 改用户名后，只需要改这两个常量 + astro.config.mjs 里的 site ——
export const GITHUB_USER = 'cookies-an'; // 改用户名前是 littlexiaoan
export const SITE_URL = 'https://cookies-an.github.io';

export const profile = {
  name: 'Cookies An',
  nameZh: '安国斌',
  tagline: {
    zh: '测试开发工程师 · AI 方向',
    en: 'Test Development Engineer · AI',
  },
  status: {
    zh: '在职 · Pacvue',
    en: 'Now @ Pacvue',
  },
  intro: {
    zh: '2002 年 8 月生于四川乐山，现居无锡。做测试开发，方向是把 AI 真正落进研发流水线——不是拿 Prompt 碰运气，而是用工程化的方法去约束它、让它稳定产出。',
    en: 'Born August 2002 in Leshan, Sichuan. Now based in Wuxi. I work on test development, focused on landing AI inside real engineering pipelines — not prompt-tuning and hoping for the best, but constraining it with proper engineering so the output is dependable.',
  },
  meta: [
    { zh: '乐山 → 无锡', en: 'Leshan → Wuxi' },
    { zh: '软件工程 · 宜宾学院', en: 'Software Engineering · Yibin University' },
  ],
  now: [
    {
      zh: '维护开源 Chrome 扩展 Lingxi-translate',
      en: 'Maintaining Lingxi-translate, an open-source Chrome extension',
    },
    {
      zh: '补数据结构与算法的底子',
      en: 'Shoring up my data structures and algorithms fundamentals',
    },
  ],
  // 邮箱在页面里被拆开存放，构建产物中不出现完整地址，避免被最基础的爬虫直接抓走
  emailUser: 'anbin0831',
  emailDomain: '163.com',
  avatar: '/avatar.jpg',
};

export const skills = [
  {
    level: { zh: '精通 · 日常主力', en: 'Core · Daily driver' },
    bars: 3,
    items: [
      { zh: '测试用例设计与执行', en: 'Test case design & execution' },
      { zh: '接口自动化测试', en: 'API test automation' },
      { zh: 'UI 自动化测试', en: 'UI test automation' },
      { zh: 'AI 编码工具应用', en: 'AI coding tools' },
      { zh: '质量度量与缺陷管理', en: 'Quality metrics & defect management' },
    ],
  },
  {
    level: { zh: '熟练 · 能独立交付', en: 'Proficient · Ship solo' },
    bars: 2,
    items: [
      { zh: 'AI 提效小工具开发', en: 'Building AI productivity tools' },
      { zh: 'Chrome 扩展 (MV3)', en: 'Chrome Extensions (MV3)' },
      { zh: 'Java', en: 'Java' },
      { zh: 'TypeScript / JavaScript', en: 'TypeScript / JavaScript' },
    ],
  },
  {
    level: { zh: '了解 · 在学', en: 'Learning' },
    bars: 1,
    items: [{ zh: '数据结构与算法', en: 'Data structures & algorithms' }],
  },
];

export const projects = [
  {
    name: { zh: 'Lingxi-translate', en: 'Lingxi-translate' },
    role: { zh: '个人开源项目', en: 'Personal open-source project' },
    time: '2026',
    lead: {
      zh: '选中即译的 Chrome 扩展——8 个免费翻译引擎随时切换，一个挂了自动换下一个。',
      en: 'A select-to-translate Chrome extension — eight free engines you can switch between, with automatic failover when one dies.',
    },
    bullets: [
      {
        zh: '8 个引擎统一接口，自动降级：微软 → 百度 → MyMemory → Google',
        en: 'Eight engines behind one interface, auto-failover: Microsoft → Baidu → MyMemory → Google',
      },
      {
        zh: 'Manifest V3、零运行时依赖；请求直连翻译服务，不经过任何自建服务器',
        en: 'Manifest V3, zero runtime dependencies; requests go straight to the services, never through a server of mine',
      },
    ],
    stack: ['JavaScript', 'Chrome MV3', 'MIT'],
    link: `https://github.com/${GITHUB_USER}/Lingxi-translate`,
    linkNote: null,
  },
];

export const experience = [
  {
    org: { zh: 'Pacvue', en: 'Pacvue' },
    title: { zh: '测试开发工程师', en: 'Test Development Engineer' },
    time: { zh: '2026.08 — 至今', en: '2026.08 — present' },
    bullets: [
      { zh: '探索 AI 测试提效', en: 'Exploring AI-driven test efficiency' },
      {
        zh: '学习前沿 AI 项目的工程实践',
        en: 'Studying how frontier AI projects are engineered',
      },
    ],
  },
  {
    org: { zh: '美团', en: 'Meituan' },
    title: { zh: '测试开发工程师', en: 'Test Development Engineer' },
    time: '2024.06 — 2026.06',
    bullets: [],
    // 任职期间的主要产出，跟着经历走而不是单列成项目
    project: {
      name: { zh: 'AI 测试流水线提效工具', en: 'AI Test Pipeline Efficiency System' },
      role: { zh: '主导设计并开发', en: 'Led design & development' },
      time: '2026.01 — 2026.06',
      lead: {
        zh: '用软件工程的成熟方法论去治理 AI 的不确定性，而不是靠 Prompt 调优碰运气——这是它能从「AI 玩具」变成真正提效工具的关键。',
        en: 'Governing the uncertainty of AI with established software engineering methodology, rather than gambling on prompt tuning — that is what turns it from an AI toy into a tool that actually saves time.',
      },
      bullets: [
        {
          zh: '瞄准 AI 测试工具的四大通病：全链路断点多、多 Agent 协作混乱、幻觉泛滥、知识库难维护',
          en: 'Aimed at four chronic weaknesses: broken chains, chaotic multi-agent collaboration, rampant hallucination, unmaintainable knowledge bases',
        },
        {
          zh: '四个模块从业务流程、组织架构、质量管控、效率底座形成系统性解法',
          en: 'Four modules answering across business process, org structure, quality control and the efficiency foundation',
        },
      ],
      stack: ['Java', 'TypeScript', 'AI Agent', 'CI/CD'],
      note: { zh: '美团内部系统，不对外开放', en: 'Internal system at Meituan, not publicly accessible' },
    },
  },
  {
    org: { zh: '美团', en: 'Meituan' },
    title: { zh: '测试开发工程师 · 实习', en: 'Test Development Engineer · Intern' },
    time: '2023.07 — 2024.06',
    bullets: [],
  },
];

export const education = [
  {
    org: { zh: '宜宾学院', en: 'Yibin University' },
    title: { zh: '软件工程 · 本科', en: 'B.Eng. in Software Engineering' },
    time: '2020.10 — 2024.06',
    bullets: [],
  },
];

export const awards = [
  { zh: '2024 届四川省优秀大学毕业生', en: 'Outstanding Graduate of Sichuan Province, class of 2024' },
  {
    zh: '2023 年四川省大学生计算机设计大赛 三等奖',
    en: 'Third Prize, Sichuan Collegiate Computer Design Competition 2023',
  },
  { zh: '第六届字节跳动青训营 三等奖', en: 'Third Prize, 6th ByteDance Youth Training Camp' },
];

export const interests = {
  zh: '工作之外，吃饭睡觉打豆豆。',
  en: 'Outside of work: eat, sleep, mess around. Repeat.',
};

export const nav = [
  { id: 'about', zh: '关于', en: 'About' },
  { id: 'skills', zh: '技能', en: 'Skills' },
  { id: 'opensource', zh: '开源', en: 'Open Source' },
  { id: 'experience', zh: '经历', en: 'Experience' },
  { id: 'contact', zh: '联系', en: 'Contact' },
];
