module.exports = {
  lang: 'zh-CN',
  title: 'WEB前端',
  description: 'WEB前端相关知识点面试点',
  head: [['link', { rel: 'icon', href: '/web/logo.png' }]],
  base: '/web/',
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'logo.png',
    navbar: [
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/css/' },
      { text: 'JS', link: '/js/' },
      { text: 'VUE', link: '/vue/' },
      { text: 'Github', link: 'https://github.com/ciocola/web' }
    ],
    sidebar: {
      '/js/': [
        {
          children: [
            'README.md',
            'string',
            'array',
            'dom&bom',
            'closure',
            'prototype',
            'event_loop',
            'event',
            'recursion',
            'copy',
            'ajax',
            'this',
            'debounce_throttle',
            'single_sign'
          ]
        }
      ],
      '/vue/': [
        {
          children: ['README.md', 'v_if', 'lifecycle', 'model', 'communication', 'nexttick', 'mixin', 'slot']
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search'
          }
        }
      }
    ]
  ]
}
