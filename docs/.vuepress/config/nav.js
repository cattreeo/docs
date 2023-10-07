module.exports = [
    {
        text: '首页', link: '/', icon: 'reco-home'
    },
    {
        text: '本站指南', link: '/guide/', icon: 'reco-eye'
    },
    {
        text: '数据库',
        icon: 'reco-api',
        items: [
            {
                text: 'MySQL',
                items: [
                    { text: 'MySQL基础篇', link: '/数据库/MySQL/MySQL基础篇' },
                    { text: 'MySQL进阶篇', link: '/数据库/MySQL/MySQL进阶篇' },
                ]
            }
        ]
    },
    {
        text: '实用工具', link: '/实用工具/', icon: 'reco-category',
        items: [
            { text: '合集', link: '/实用工具/' },
            {
                text: '分类',
                items: [
                    { text: '压缩软件', link: '/实用工具/压缩软件/' },
                    { text: '音乐软件', link: '/实用工具/音乐软件/' },
                    { text: '截图软件', link: '/实用工具/截图软件/' },
                    { text: '视频播放器', link: '/实用工具/播放器软件/' },
                ]
            },
        ]
    },
    {
        text: '打赏', link: '/打赏/', icon: 'reco-three'
    },
    {
        text: '时间轴', link: '/timeline/', icon: 'reco-date'
    },
    {
        text: 'GitHub', icon: 'reco-github',
        link: 'https://github.com/cattreeo/docs/tree/main'
    }
]