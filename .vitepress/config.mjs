import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "107Studio",
  description: "A VitePress Site",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",

    nav: [
      { text: '首页', link: '/' },
      { text: 'WB专区', items: [
        { text: '圣言录', link: 'docs/wangbin/essay' },
        { text: '小说', link: 'docs/wangbin/novel' },
        { text: '学士学位论文', link: 'docs/wangbin/thesis' }
      ]},
      { text: '呕心沥血集', items: [
        { text: '全集', link: 'docs/dedication/total'},
        { text: '注释全集', link: 'docs/dedication/annotation'},
        { text: '英语试题', link: 'docs/dedication/englishexam' }
      ]},
      { text: '将军专区', items:[
        { text: '将军首页', link: 'docs/general/index' },
        { text: '将军作文纸条', link: 'docs/general/zhitiao' }
      ]},
      { text: '抽象人物志', items: [
        { text: '抽象人物志：将军', link: 'docs/biography/general' },
        { text: '抽象人物志：田师', link: 'docs/biography/tianshi' },
      ]},
      { text: '其他', link: 'docs/other'},
      { text: '关于', link: 'docs/about'}
    ],

    sidebar: false,
    
    aside: "left",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/a107studio/a107studio.github.io' }
    ],

    footer: {
      copyright: "Copyright @ 2021-Present 107Studio"
    },
    
    search: {
      provider: "local",
      options:{
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "没有找到结果",
            resetButtonTitle: "重置搜索",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      }
    },

    outlineTitle: "文章目录",
    outline: [2,5]
  }
})
