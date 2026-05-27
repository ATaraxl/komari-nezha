# Komari Nezha

一个基于 `nezha-BITJEBE` 的 Komari 监控主题个人修改版。  
主打轻量毛玻璃视觉、点击粒子特效、c5 风格大号时间显示和更简洁的首页控制区。

> 纯 AI 辅助修改，无人工污染痕迹（确信）。

## 特性

- ✨ **点击粒子特效** - 点击或轻触页面时显示彩色粒子爆散动画，支持桌面和移动端。
- 🧊 **轻量毛玻璃效果** - 卡片、按钮、标签、详情页顶部概览等区域使用更通透的玻璃拟态样式。
- 🌟 **Hover 扫光动画** - 毛玻璃区域悬停时有轻微斜向高光划过。
- 🕒 **c5 风格时间区** - 首页顶部使用大号动态时间，弱化冗余说明文字。
- 🗺️ **首页控制区精简** - 首页控制区只保留全球地图按钮，界面更干净。
- 🇯🇵 **日语支持** - 新增 `ja-JP` 语言资源与语言切换入口。
- 🧩 **详情页视觉优化** - 详情页顶部概览卡片加入毛玻璃、圆角和更协调的背景融合。
- 📱 **响应式保留** - 继承上游主题的移动端适配和 Komari 数据展示能力。

## 安装

1. 从 [Releases](../../releases) 页面下载最新版本的 ZIP 文件。
2. 进入 Komari 管理面板。
3. 打开主题管理并上传 ZIP 文件。
4. 在 Komari 中启用该主题。

## 从源码构建

```bash
git clone https://github.com/ATaraxl/komari-nezha.git
cd komari-nezha
npm install
npm run build
```

构建产物位于：

```txt
dist/
```

将 `dist/` 与 `komari-theme.json` 一起打包为 ZIP 后上传到 Komari。

## 项目结构

```txt
komari-nezha/
├── src/                       # 主题源码
│   ├── components/            # 页面组件与视觉组件
│   ├── locales/               # 多语言资源，包含 ja-JP
│   ├── pages/                 # 页面入口
│   ├── index.css              # 全局样式与毛玻璃效果
│   └── i18n.js                # i18n 注册
├── public/                    # 静态资源
├── docs/                      # 修改记录与迁移说明
├── komari-theme.json          # Komari 主题配置
├── package.json
└── README.md
```

## 主要修改点

本仓库不是从零开发的独立主题，而是在上游主题基础上的个人视觉定制版。主要修改集中在：

- `src/components/ClickParticles.tsx`：点击粒子特效。
- `src/index.css`：毛玻璃、扫光动画、时间尺寸、首页控制区精简。
- `src/components/Header.tsx`：c5 风格大号时间。
- `src/components/ServerDetailOverview.tsx`：详情页顶部概览卡片视觉优化。
- `src/components/LanguageSwitcher.tsx` 与 `src/i18n.js`：新增日语入口。
- `src/locales/ja-JP/translation.json`：日语语言包。

更详细的迁移说明见：

```txt
docs/c5-migration-details.md
```

## 配置说明

主题配置仍主要沿用上游 `komari-theme.json`，支持自定义背景图、移动端背景图、Logo、插图、链接、地图、服务监控、行内卡片等配置项。

本个人版额外偏向以下视觉组合：

- 建议搭配自定义背景图使用毛玻璃效果。
- 首页默认视觉更适合深色/二次元/插画类背景。
- 如果测试时看不到点击特效或新样式，请使用无痕窗口或清理浏览器/PWA 缓存。

## 上游来源

本项目基于以下项目修改：

- 上游改版：[BITJEBE/nezha-BITJEBE](https://github.com/BITJEBE/nezha-BITJEBE)
- 原始主题：[Akizon77/nezha-dash-v1](https://github.com/Akizon77/nezha-dash-v1)
- 监控后端：[Komari Monitor](https://github.com/komari-monitor/komari)

感谢上游作者和相关项目。

## 说明

本仓库是个人使用需求下的 AI 辅助定制修改版。  
上游原有功能和基础结构归属于对应原项目。

## 许可证

MIT
