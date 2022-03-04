const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  title: 'Blog',
  description: '',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: `favicon.ico` }],
    ['meta', { name: 'application-name', content: 'Blog' }],
    ['meta', { name: 'theme-color', content: '#377bb5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#377bb5' }]
  ],
  theme: 'gungnir',
  themeConfig: {
    repo: 'ciocola.github.io/blog/',
    docsDir: 'docs',
    docsBranch: 'main',
    hitokoto: 'https://v1.hitokoto.cn?c=d&c=i', // enable hitokoto (一言) or not?
    // personal information
    personalInfo: {
      name: 'Ciocola',
      avatar: '/img/avatar.png',
      description: 'いつか、私がヒトじゃなくなっても',
      sns: {
        github: 'Ciocola',
        email: 'acgsx@live.com'
      }
    },
    // header images on home page
    homeHeaderImages: [
      {
        path: '/img/home/1.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/img/home/2.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/img/home/3.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/img/home/4.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/img/home/5.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      }
    ],
    // other pages
    pages: {
      tags: {
        subtitle: 'Black Sheep Wall',
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)'
        }
      }
    },
    themePlugins: {},
    navbar: [
      {
        text: 'Home',
        link: '/',
        icon: 'fa-fort-awesome'
      },
      {
        text: 'About',
        link: '/about/',
        icon: 'fa-paw'
      },
      {
        text: 'Tags',
        link: '/tags/',
        icon: 'fa-tag'
      },
      {
        text: 'Links',
        link: '/links/',
        icon: 'fa-satellite-dish'
      },
      {
        text: 'Github',
        link: 'https://github.com/ciocola',
        icon: 'oi-rocket'
      }
    ],
    sidebar: {},
    footer: `
      &copy; <a href="https://github.com/ciocola" target="_blank">Ciocola</a> 2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },
  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  },
  plugins: [
    [
      'meting',
      {
        meting: {
          server: 'netease', // 音乐源
          type: 'playlist', // 资源类型
          mid: '2539599584' // 资源 id
        },
        aplayer: {
          lrcType: 3
        }
      }
    ]
  ]
}
