const moment = require("moment");

module.exports =  {
    '@vuepress/active-header-links':{
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    },
    '@vuepress/pwa':{
        serviceWorker: true,
        updatePopup: true
    },
    '@vuepress/back-to-top':{

    },
    '@vuepress/last-updated':{
        transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            moment.locale(lang)
            return moment(timestamp).format('LLLL')
          }
    },
    'vuepress-plugin-permalink-pinyin':{

    },
    'vuepress-plugin-auto-sidebar':{
        sort: {
            mode: "asc",
            readmeFirst: true,
            readmeFirstForce: false
        },
        title: {
            mode: "titlecase",
            map: {}
        },
        sidebarDepth: 3,
        collapse: {
            open: false,
            collapseList: [],
            uncollapseList: []
        },
        ignore: [],
        removeEmptyGroup: false,
        git: {
            trackStatus: 'all'
        }
    },
}
