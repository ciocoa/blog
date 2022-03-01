module.exports = {
  title: 'WEB前端',
  description: 'WEB前端相关知识点面试点',
  head: [['link', { ref: 'icon', href: 'logo.png' }]],
  base: '/web/',
  themeConfig: {
    nav: [
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
          title: 'JavaScript',
          collapsable: false,
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
  }
}
