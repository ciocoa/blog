module.exports = {
  lang: 'zh-CN',
  title: 'WEB前端',
  description: 'WEB前端相关知识点面试点',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  base: '/web/',
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'logo.png',
    navbar: [
      {
        text: 'JavaScript',
        link: '/javascript/'
      },
      {
        text: 'Github',
        link: 'https://github.com/ciocola/web'
      }
    ],
    sidebar: {
      '/javascript/': [
        {
          text: 'JavaScript',
          collapsible: false,
          children: [
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
