(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{277:function(_,v,i){"use strict";i.r(v);var t=i(2),l=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"内置-japi"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内置-japi"}},[_._v("#")]),_._v(" 内置 JAPI")]),_._v(" "),v("p",[_._v("地图内置 japi 插件的文档")]),_._v(" "),v("p",[_._v("网址 http://japi.war3rpg.top/ 点击查看 可以收藏起来")]),_._v(" "),v("p",[_._v("仓库 https://github.com/w4454962/embedded-japi-plugin 可以随时获得文档的更新")]),_._v(" "),v("p",[_._v("lua 交流 有需要的同学可以在群里讨论\n旧群被封，新 lua 地图群 1019770872")]),_._v(" "),v("hr"),_._v(" "),v("ul",[v("li",[v("p",[_._v("内置文档 阿七 火鸟")])]),_._v(" "),v("li",[v("p",[_._v("域名 / 服务器维护 火鸟")])]),_._v(" "),v("li",[v("p",[_._v("服务器 天天 RPG")])])]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("内置 lua 引擎基于 ydlua 进行扩展，请先阅读")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"/lua-engine"}},[_._v("ydlua 引擎文档")])])]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("文档分类 所有接口都通用 1.24e 1.26 1.27")]),_._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/Japi/"}},[_._v("Japi")])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/Lua/"}},[_._v("Lua")])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/Script/界面/"}},[_._v("界面")])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/Script/例子/"}},[_._v("例子")])],1)]),_._v(" "),v("hr"),_._v(" "),v("h2",{attrs:{id:"更新日志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新日志"}},[_._v("#")]),_._v(" 更新日志")]),_._v(" "),v("p",[_._v("内置 1.48 版本更新内容:")]),_._v(" "),v("ol",[v("li",[_._v("新增 修改单位移动类型 japi (刷新寻路视野飞行高度) * "),v("RouterLink",{attrs:{to:"/1.48/修改单位移动类型.html"}},[_._v("点击这里")])],1),_._v(" "),v("li",[_._v("新增 修改单位碰撞体积大小 japi (刷新寻路) "),v("RouterLink",{attrs:{to:"/1.48/修改单位碰撞体积大小.html"}},[_._v("点击这里")])],1),_._v(" "),v("li",[_._v("新增 获取物品技能 handle 的 japi * "),v("RouterLink",{attrs:{to:"/1.48/获取物品技能handle.html"}},[_._v("点击这里")])],1),_._v(" "),v("li",[_._v("新增 jass.message 里 本地发布 物品命令 "),v("RouterLink",{attrs:{to:"/Script/例子/智能施法.html"}},[v("em",[_._v("点击这里")])])],1),_._v(" "),v("li",[_._v("修复 特效渲染， 必须在屏幕内的特效才会进行渲染")]),_._v(" "),v("li",[_._v("ui 增强 FrameSetTexture 接口 可以修改 SimpleTexture 控件的图片")]),_._v(" "),v("li",[_._v("ui 增强 FrameSetText 接口 可以修改 SimpleString 控件的文本")]),_._v(" "),v("li",[_._v("ui 增强 FrameShow 接口 可以对 Simple 类型的控件使用 隐藏 / 显示原生 ui")]),_._v(" "),v("li",[_._v("ui 增强 FrameSetEnable 接口可以对 Simple 类型的控件使用 屏蔽 / 恢复 事件")]),_._v(" "),v("li",[_._v("新增 ui 接口 获取框选按钮的 japi")]),_._v(" "),v("li",[_._v("新增 ui 接口 获取 buff 按钮的 japi")]),_._v(" "),v("li",[_._v("新增 ui 接口 动态 绑定 / 解除 任意 frame 控件 在 原生魔兽 ui simple 类型控件下")]),_._v(" "),v("li",[_._v("新增 ui 接口 FrameIsShow 可以判断 simple/frame 控件是否显示")]),_._v(" "),v("li",[_._v("新增 ui 接口 获取左下角农民按钮的 japi")]),_._v(" "),v("li",[_._v("新增 ui 接口 修改 / 获取 原生按钮贴图的 japi")]),_._v(" "),v("li",[_._v("新增 ui 接口 修改 / 获取 Simple 类型控件的 父控件")]),_._v(" "),v("li",[_._v("新增 ui 接口 获取技能按钮的 右下角 ui 接口")]),_._v(" "),v("li",[_._v("新增 ui 接口 获取技能按钮的 右下角数字文本控件 ui 接口")]),_._v(" "),v("li",[_._v("重写 message.get_select_list () 从 ui 上进行异或获取框选单位 不会再有延迟了。")])]),_._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/1.48/"}},[v("strong",[_._v("1.48 版本")])])],1)]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("内置 1.47 版本更新内容")]),_._v(" "),v("ol",[v("li",[_._v("新增 japi 获取玩家 11 跟网易平台的 uid 接口")]),_._v(" "),v("li",[_._v("新增 lua 异步获取当前玩家选择单位列表")]),_._v(" "),v("li",[_._v("新增 japi 获取特效颜色的接口")]),_._v(" "),v("li",[_._v("修复 japi 设置特效颜色 ui 设置模型颜色 接口的透明通道无效的问题")]),_._v(" "),v("li",[_._v("新增 japi 设置 单位、特效、ui 模型 的 粒子缩放的接口")]),_._v(" "),v("li",[_._v("新增 japi 动态修改 ui frame 控件 解锁、锁定 屏幕限制接口")]),_._v(" "),v("li",[_._v("增强 所有特效接口都加一层类型保护， 防止填入错误的 handle 而崩溃，并隐藏渲染特效崩溃时提示")]),_._v(" "),v("li",[_._v("修复 lua 引擎 日志打印太长会崩溃的 bug")])]),_._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/1.47/"}},[v("strong",[_._v("1.47 版本")])])],1)]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("内置 1.46 版本更新内容")]),_._v(" "),v("ol",[v("li",[_._v("新增 绑定特效接口")]),_._v(" "),v("li",[_._v("新增 解除特效绑定接口")]),_._v(" "),v("li",[_._v("修复 播放特效动画接口名字错误的问题")]),_._v(" "),v("li",[_._v("修复 获取 ui 文本控件宽高错误的 bug")]),_._v(" "),v("li",[_._v("增强 j2b 加密的强度")]),_._v(" "),v("li",[_._v("修复 先 j2b 再 slk 部分地图丢失字符串的问题。")]),_._v(" "),v("li",[_._v("修正 内置的 api 可以对 simple 控件设置位置 跟缩放")]),_._v(" "),v("li",[_._v("重写 japi.FrameSetScale 使其对子控件生效")]),_._v(" "),v("li",[_._v("修复 ui 模型绑特效 绑点错误的 bug")]),_._v(" "),v("li",[_._v("去掉对 xp 支持， 放弃 xp 用户。")]),_._v(" "),v("li",[_._v("ui 自动同步事件 进行合并 减少队列时长")])]),_._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/1.46/"}},[v("strong",[_._v("1.46 版本")])])],1)]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("内置 1.45 版本更新内容")]),_._v(" "),v("ol",[v("li",[_._v("新增 播放 ui 模型字符串动画")]),_._v(" "),v("li",[_._v("新增 获取 ui 模型所有动画名 动画时长")]),_._v(" "),v("li",[_._v("新增 添加 ui 模型绑点特效")]),_._v(" "),v("li",[_._v("新增 移除 ui 模型绑点特效")]),_._v(" "),v("li",[_._v("新增 播放 特效 handle 的字符串名动画")]),_._v(" "),v("li",[_._v("优化 ui 滚动面板的效率")]),_._v(" "),v("li",[_._v("修复 获取 ui 模型 z 轴 api 错误的 bug")])]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("内置 1.44 版本更新内容")]),_._v(" "),v("ol",[v("li",[_._v("新增 获取 frame 父控件（"),v("RouterLink",{attrs:{to:"/1.44/获取父控件.html"}},[_._v("点击查看")]),_._v("） 以及 遍历子控件的 api （"),v("RouterLink",{attrs:{to:"/1.44/获取子控件.html"}},[_._v("点击查看")]),_._v("）")],1),_._v(" "),v("li",[_._v("新增 新的 3d ui 模型控件 以及一系列 api （"),v("RouterLink",{attrs:{to:"/Script/界面/模型2.html"}},[_._v("点击查看")]),_._v("）")],1),_._v(" "),v("li",[_._v("新增 设置控件显示视口的方法 可以做遮罩 滚动面板 （"),v("RouterLink",{attrs:{to:"/1.44/设置控件视口.html"}},[_._v("点击查看")]),_._v("）")],1),_._v(" "),v("li",[_._v("新增 获取当前魔兽 是否窗口化（"),v("RouterLink",{attrs:{to:"/1.44/获取是否窗口化模式.html"}},[_._v("点击查看")]),_._v("）， 设置窗口大小 （"),v("RouterLink",{attrs:{to:"/1.44/设置窗口大小.html"}},[_._v("点击查看")]),_._v("）")],1),_._v(" "),v("li",[_._v("新增 获取当前鼠标指示器状态 （"),v("RouterLink",{attrs:{to:"/Lua/message/目标指示器.html"}},[_._v("点击查看")]),_._v("）")],1),_._v(" "),v("li",[_._v("新增 获取商店选择玩家的单位 （"),v("RouterLink",{attrs:{to:"/1.44/获取商店目标.html"}},[_._v("点击查看")]),_._v("）")],1),_._v(" "),v("li",[_._v("修复 部分用户 j2b 加密时崩溃的 bug")])]),_._v(" "),v("hr"),_._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/1.44/"}},[v("strong",[_._v("1.44 版本")])])],1)])])}),[],!1,null,null,null);v.default=l.exports}}]);