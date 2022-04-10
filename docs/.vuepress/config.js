module.exports = {
  title: 'Ciocola Blog',
  lang: 'zh-CN',
  description: 'Welcome to Ciocola`s blog',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  theme: 'gungnir',
  themeConfig: {
    repo: 'https://ciocola-blog.vercel.app/',
    docsDir: 'docs',
    docsBranch: 'main',
    hitokoto: 'https://v1.hitokoto.cn?c=d&c=i',
    personalInfo: {
      name: 'Ciocola',
      avatar: 'avatar.jpg',
      description: 'いつか、私がヒトじゃなくなっても',
      sns: {
        github: 'Ciocola',
        email: 'ciocoae@gmail.com',
        rss: 'rss.xml',
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
      ga: 'G-HTZMX5P8NC',
      ba: '7d3a5e9374ece3e1ba65c8538b9ef500',
      rss: {
        siteURL: 'https://ciocola-blog.vercel.app/',
        copyright: 'Ciocola 2022'
      }
    },
    homeHeaderImages: [
      {
        path: '/images/home/banner1.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/images/home/banner2.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/images/home/banner3.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/images/home/banner4.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      },
      {
        path: '/images/home/banner5.jpg',
        mask: 'rgba(0, 0, 0, .3)'
      }
    ],
    pages: {
      tags: {
        subtitle: 'Black Sheep Wall',
        bgImage: {
          path: '/images/pages/tags.jpg',
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
        link: 'https://github.com/ciocola/blog',
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
        songIds: ['1410370185', '1334259177'],
        playlist: '11641012',
        showPlaylist: false,
        disabledNetEaseMusic: false,
        serverUrl: 'https://cloud-music-api-teal.vercel.app/',
        localSongs: {
          coverUrl: '',
          songs: [
            {
              path: '/music/Goodbye Happiness - 宇多田ヒカル.mp3',
              songName: 'Goodbye Happiness',
              cover: '/music/Goodbye Happiness.jpg'
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
          url: '/live2d/ninti/model.json'
        },
        display: {
          position: 'right',
          width: '220px',
          height: '400px',
          xOffset: '0px',
          yOffset: '0px'
        },
        mobile: {
          show: false
        },
        react: {
          opacity: 1
        }
      }
    ]
  ]
}
