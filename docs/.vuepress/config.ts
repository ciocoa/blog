import { defineUserConfig } from 'vuepress'
import type { GungnirThemeOptions } from 'vuepress-theme-gungnir'

export default defineUserConfig<GungnirThemeOptions>({
  title: "Cioco's Blog",
  lang: 'zh-CN',
  description: "Welcome to Cioco's blog",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['meta', { name: 'application-name', content: 'Cioco Blog' }],
    ['meta', { name: 'msapplication-TileColor', content: '#377bb5' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Cioco Blog' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: '#FFFFFF' }]
  ],
  theme: 'gungnir',
  themeConfig: {
    navbarTitle: 'HOME',
    repo: 'https://blog.cioco.tk',
    docsDir: 'docs',
    docsBranch: 'main',
    hitokoto: 'https://v1.hitokoto.cn?c=d&c=i',
    personalInfo: {
      name: 'Ciocoa',
      avatar: '/avatar.jpg',
      description: 'いつか、私がヒトじゃなくなっても',
      sns: {
        github: 'Ciocoa',
        linkedin: '',
        facebook: '',
        twitter: '',
        email: 'ciocoae@gmail.com',
        weibo: '',
        zhihu: '',
        rss: '/rss.xml'
      }
    },
    themePlugins: {
      katex: true,
      giscus: {
        repo: 'ciocoa/blog',
        repoId: 'R_kgDOG6qVrw',
        category: 'Announcements',
        categoryId: 'DIC_kwDOG6qVr84CN9bR'
      },
      mdPlus: { all: true },
      ga: 'G-X668NS0BK8',
      ba: '3c5ae988925dd9380f8c7437acf60bfc',
      rss: {
        siteURL: 'https://blog.cioco.tk/',
        copyright: 'Ciocoa 2022'
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
        icon: 'hi-solid-home'
      },
      {
        text: 'Tags',
        link: '/tags/',
        icon: 'hi-solid-tag'
      },
      {
        text: 'Links',
        icon: 'hi-solid-link',
        children: [
          {
            text: 'VuePress',
            link: 'https://v2.vuepress.vuejs.org/zh',
            icon: 'ri-vuejs-line'
          },
          {
            text: 'Gungnir',
            link: 'https://v2-vuepress-theme-gungnir.vercel.app/',
            icon: 'fa-cat'
          }
        ]
      },
      {
        text: 'About',
        link: '/about/',
        icon: 'fa-paw'
      },
      {
        text: 'Github',
        link: 'https://github.com/ciocoa/blog',
        icon: 'oi-rocket'
      }
    ],
    footer:
      'Copyright &copy; 2022 <a href="https://github.com/ciocoa" target="_blank">Ciocoa</a><br />Powered by <a href="https://github.com/vuepress/vuepress-next" target="_blank">VuePress</a> & <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>'
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
        disabledNetEaseMusic: true,
        disableSpace: false,
        serverUrl: 'https://music.api.cioco.tk/',
        localSongs: {
          coverUrl: '',
          songs: [
            {
              path: '/music/Goodbye Happiness - 宇多田ヒカル.mp3',
              songName: 'Goodbye Happiness - 宇多田ヒカル',
              cover: '/music/Goodbye Happiness - 宇多田ヒカル.jpeg'
            },
            {
              path: '/music/怪物 - YOASOBI.mp3',
              songName: '怪物 - YOASOBI',
              cover: '/music/怪物 - YOASOBI.jpeg'
            },
            {
              path: '/music/群青 - YOASOBI.mp3',
              songName: '群青 - YOASOBI',
              cover: '/music/群青 - YOASOBI.jpeg'
            },
            {
              path: '/music/三原色 - YOASOBI.mp3',
              songName: '三原色 - YOASOBI',
              cover: '/music/三原色 - YOASOBI.jpeg'
            },
            {
              path: '/music/夜に駆ける - YOASOBI.mp3',
              songName: '夜に駆ける - YOASOBI',
              cover: '/music/夜に駆ける - YOASOBI.jpeg'
            },
            {
              path: '/music/アンコール - YOASOBI.mp3',
              songName: 'アンコール - YOASOBI',
              cover: '/music/アンコール - YOASOBI.jpeg'
            },
            {
              path: '/music/たぶん - YOASOBI.mp3',
              songName: 'たぶん - YOASOBI',
              cover: '/music/たぶん - YOASOBI.jpeg'
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
})
