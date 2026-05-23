# komari-nezha

这是我基于 [BITJEBE/nezha-BITJEBE](https://github.com/BITJEBE/nezha-BITJEBE) 修改的 [Komari Monitor](https://github.com/komari-monitor/komari) 自定义主题个人版。

本仓库主要用于保存我的个人定制内容、实验性视觉调整和后续维护记录。

## 个人定制内容

- **点击粒子特效**：点击或轻触页面时显示彩色粒子爆散动画。
- **毛玻璃视觉优化**：卡片、按钮、标签、详情页顶部概览等区域使用更轻、更透明的玻璃拟态效果。
- **Hover 扫光效果**：毛玻璃区域悬停时增加轻微斜向高光动画。
- **日语支持**：新增 `ja-JP` 语言资源与语言切换入口。
- **c5 风格时间区**：首页顶部使用大号动态时间显示。
- **首页控制区精简**：只保留全球地图按钮，隐藏其它控制项。
- **详情页顶部概览优化**：增加毛玻璃、圆角和更协调的视觉样式。

## 使用方法

从本仓库 Releases 下载主题 zip 文件，然后在 Komari 管理面板中上传：

```txt
Komari 管理面板 -> 主题管理 -> 上传主题
```

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

将 `dist/` 与 `komari-theme.json` 一起打包为 zip 后上传到 Komari 即可。

## 上游来源

本项目是在以下项目基础上的个人修改版：

- 上游改版：[BITJEBE/nezha-BITJEBE](https://github.com/BITJEBE/nezha-BITJEBE)
- 原始主题：[Akizon77/nezha-dash-v1](https://github.com/Akizon77/nezha-dash-v1)
- 监控后端：[Komari Monitor](https://github.com/komari-monitor/komari)

感谢上游作者和相关项目。

## 说明

本仓库不是从零开发的独立主题，而是个人使用需求下的定制修改版。  
上游原有功能和基础结构归属于对应原项目。

## 许可证

MIT
