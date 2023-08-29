import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://sequelize.org/img/logo.svg'],
  autoAlias: false,
  themeConfig: {
    name: 'Sequelize',
    logo: 'https://sequelize.org/img/logo.svg',
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/zizhuspot/sequelize-cn',
      twitter: 'https://twitter.com/luozhu2021'
    },
    hd: { rules: [] },
    footer: '<a href="/sitemap.xml" target="_blank">站点地图</a> | <a href="https://t.zsxq.com/0fDyODCQs" target="_blank">紫竹赚美刀</a><br/>Made with ❤️ by <a href="https://github.com/zizhuspot" target="_blank">紫竹翻译计划</a>'
  },
  theme: {
    '@c-primary': '#3b76c3',
  },
  publicPath: '/',
  analytics: {
    // ga_v2: '',
  },
  // sitemap: {
    // hostname: 'https://sequelize-cn.js.org',
  // },
  hash: true,
  exportStatic: {},
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7029815294762181', async: true, crossorigin: 'anonymous'},
  ]
});
