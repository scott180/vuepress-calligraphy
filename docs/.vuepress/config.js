module.exports = {
  // 页面标题
  title: '徐书法',
  // 网页描述
  description: '无为徐生 书法练习轨迹',
  base: '/vuepress-calligraphy/',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true,
	extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
  themeConfig: {
    // 所有页面自动生成侧边栏
    sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/scott180/vuepress-calligraphy',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: false,
    // 导航
    nav: [
	  { text: '书法', items: [
          { text: '书法名帖', link: '/书法/书法名帖'}, 
		  { text: '多宝塔碑', link: '/书法/多宝塔碑'},
          { text: '《兜沙经》书法', link: '/书法/《兜沙经》书法'}, 
          { text: '《心经》书法', link: '/书法/《心经》书法'},
          { text: '灵飞经', link: '/书法/灵飞经'},
          { text: '文徵明-小楷千字文', link: '/书法/文徵明-小楷千字文'},
          { text: '文徵明-小楷《草堂十志》', link: '/书法/文徵明-小楷《草堂十志》'}
        ]
      },
      { text: '练习', items: [
          { text: '古文诗词', link: '/练习/古文诗词'}, 
          { text: '笔名汉字频率分析', link: '/练习/笔名汉字频率分析'},
          { text: '书法练习轨迹ReadMe', link: '/练习/书法练习轨迹ReadMe'},
          { text: '书法练习轨迹--明月几时有', link: '/练习/书法练习轨迹--明月几时有'}
        ]
      },
      { text: '作者', link: '/作者/无为徐生'}
  ]},
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue'
      }
    }
  }
}