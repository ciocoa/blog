module.exports = {
  title: 'Blog',
  description: '',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'apple-touch-icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'Ciocola Blog' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Ciocola Blog' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
    ['meta', { name: 'msapplication-TileColor', content: '#377bb5' }]
  ],
  theme: 'gungnir',
  themeConfig: {
    repo: 'ciocola.github.io/blog/',
    docsDir: 'docs',
    docsBranch: 'main',
    hitokoto: 'https://v1.hitokoto.cn?c=d&c=i',
    personalInfo: {
      name: 'Ciocola',
      avatar: '/img/avatar.png',
      description: 'いつか、私がヒトじゃなくなっても',
      sns: {
        github: 'Ciocola',
        email: 'ciocoae@gmail.com',
        rss: '/rss.xml',
        bilibili: { icon: 'ri-bilibili-line', link: 'https://www.bilibili.com/' }
      }
    },
    themePlugins: {
      katex: true,
      giscus: {
        repo: 'ciocola/blog',
        repoId: 'R_kgDOG6qVrw',
        category: 'Announcements',
        categoryId: 'DIC_kwDOG6qVr84CN9bR'
      },
      mdPlus: { all: true },
      ga: 'G-P6TCP1HV59',
      ba: '7bfe3a1231089afb293ccbe7614db836',
      rss: {
        siteURL: 'https://ciocola.github.io/blog/',
        copyright: 'Ciocola 2022'
      }
    },
    homeHeaderImages: [
      {
        path: '/img/home/banner1.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/img/home/banner2.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/img/home/banner3.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/img/home/banner4.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/img/home/banner5.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      }
    ],
    pages: {
      tags: {
        subtitle: 'Black Sheep Wall',
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)'
        }
      }
    },
    sidebar: [],
    navbar: [
      {
        text: 'Home',
        link: '/',
        icon: 'fa-fort-awesome'
      },
      {
        text: 'Tags',
        link: '/tags/',
        icon: 'fa-tag'
      },
      {
        text: 'Links',
        icon: 'fa-satellite-dish',
        children: [
          {
            text: 'VuePress',
            link: 'https://v2.vuepress.vuejs.org/zh/',
            icon: 'ri-vuejs-line'
          }
        ]
      },
      {
        text: 'Github',
        link: 'https://github.com/ciocola',
        icon: 'oi-rocket'
      }
    ],
    footer:
      'Copyright &copy; 2022 <a href="https://github.com/ciocola" target="_blank">Ciocola</a><br />Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> & <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>'
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
      'player',
      {
        songIds: ['1909014602', '1410370185', '1334259177', '525238081'],
        playlist: '2829816518',
        showPlaylist: false,
        disabledNetEaseMusic: false,
        serverUrl: 'https://cloud-music-api-teal.vercel.app/',
        localSongs: {
          coverUrl: '',
          songs: [
            {
              path: 'http://59.110.45.28/m/api/url/yqd/id/59f3vn9em5NHWLD-AUSSL_XBEqaIkOgU3LMCvEvAU-ZXWSw/format/128000',
              songName: 'Goodbye Happiness',
              cover: 'https://p4.music.126.net/Pqn7Sq2kzm2CyIRCVMdZgw==/18298072510006679.jpg'
            }
          ]
        }
      }
    ],
    [
      'live2d-plus',
      {
        enable: true,
        model: {
          url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json'
        },
        display: {
          position: 'right',
          width: '135px',
          height: '300px',
          xOffset: '65px',
          yOffset: '10px'
        },
        mobile: {
          show: false
        },
        react: {
          opacity: 0.8
        }
      }
    ]
  ]
}
