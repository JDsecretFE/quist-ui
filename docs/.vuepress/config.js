module.exports = {
	base: '/quist-ui/',
	title: 'Quist-UI',
	description: '快应用UI组件库，简洁，易用，高效',
	head: [
		['link', { rel: 'icon', href: 'favicon.ico' }]
	],
	themeConfig: {
		displayAllHeaders: true,
		sidebarDepth: 0,
    nav: [
      { text: '指南', link: '/' },
      { text: 'Changelog', link: '../guide/CHANGELOG.md' },
      { text: 'GitHub', link: 'https://github.com/JDsecretFE/quist-ui' },
		],
		sidebar: [
			{
        title: '介绍',
        collapsable: false,
        children: [
          '/guide/'
        ]
			},
			{
				title: '基础组件',
        children: [
					'/guide/progress',
					'/guide/steps'
        ]
			},
			{
				title: '表单组件',
        children: [
					'/guide/button',
					'/guide/checkbox',
					'/guide/radio',
					'/guide/switch',
					'/guide/input',
					'/guide/rate',
					'/guide/slider'
        ]
			},
			{
				title: '功能组件',
        children: [
					'/guide/counter',
					'/guide/loading',
					'/guide/swiper',
					'/guide/indexlist',
					'/guide/picker',
					'/guide/tabs'
        ]
			},
			{
				title: '提示反馈',
        children: [
					'/guide/drawer',
					'/guide/toast',
					'/guide/dialog'
        ]
			},
			{
				title: 'Changelog',
        children: [
					'/guide/CHANGELOG'
        ]
			}
    ]
  }
}