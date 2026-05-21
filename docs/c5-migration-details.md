# C5 功能迁移记录

本记录用于说明将旧版 `c5.zip` 中已验证的视觉/交互能力迁移到 `nezha-bitjebe` 新版本时涉及的改动点、注意事项和排查结论。

## 迁移范围

本次迁移共包含三类功能：

1. 点击粒子特效
2. 毛玻璃视觉样式
3. 日语 `ja-JP` 国际化

同时补充了 c5 旧版中已修改过的首页时间区样式，以及详情页顶部概览卡片的圆角细节。

---

## 1. 点击粒子特效

### 来源

旧版成功包：`c5.zip`

旧版打包后核心函数：

- `k2()`：React 点击粒子组件
- `A2(x, y)`：生成点击粒子数据

旧版挂载位置：主应用布局组件中，位于背景层之前。

等价源码级位置：

```tsx
return (
  <ErrorBoundary>
    <ClickParticles />
    {customBackgroundImage && <div ... />}
    {customMobileBackgroundImage && <div ... />}
    ...
  </ErrorBoundary>
)
```

### 行为细节

- 监听 `pointerdown`
- 监听 `touchstart`
- 监听 `touchmove`
- 监听 `touchend`
- 鼠标只响应左键
- 触摸滑动超过 `10px` 不触发，避免滚动误触
- `30ms` 节流
- 每次点击生成 `22` 个粒子
- 粒子飞行半径：`160 * 0.35 ~ 160`
- 粒子大小：`5 - 0.8 ~ 5 + 1.4`
- 动画时长：`700ms ~ 920ms`
- 粒子层：`position: fixed; inset: 0; pointer-events: none; z-index: 9999`

### 重要排查结论

一开始点击特效不显示，最终确认是浏览器/PWA/资源缓存导致。无痕窗口可正常显示。

后续测试建议：

- 使用无痕窗口
- 清理站点缓存
- 修改资源文件名或 hash
- 避免只改 dist 内容但保持旧 hashed 文件名

---

## 2. 毛玻璃视觉样式

### 核心样式

```css
.glass-panel {
  background: #ffffff6b;
  border: 1px solid rgba(255,255,255,.34);
  box-shadow: 0 14px 40px #0f172a1a, inset 0 1px #ffffff61;
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
}

.dark .glass-panel {
  background: #18181b52;
  border: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 18px 42px #00000038, inset 0 1px #ffffff0d;
}

.glass-chip {
  background: #ffffff57;
  border: 1px solid rgba(255,255,255,.28);
  box-shadow: 0 8px 24px #0f172a14, inset 0 1px #ffffff57;
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
}

.dark .glass-chip {
  background: #18181b3d;
  border: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 10px 28px #0000002e, inset 0 1px #ffffff0d;
}

.glass-chip-active {
  background: #ffffff70;
  border: 1px solid rgba(255,255,255,.3);
  box-shadow: 0 10px 28px #0f172a18, inset 0 1px #ffffff66;
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
}

.dark .glass-chip-active {
  background: #27272a70;
  border: 1px solid rgba(255,255,255,.1);
  box-shadow: 0 10px 28px #00000030, inset 0 1px #ffffff10;
}
```

### 覆盖区域

应覆盖：

- 首页服务器统计卡片
- 服务器卡片
- 服务监控卡片
- 详情页图表卡片
- 顶部按钮，包括主题、语言、搜索、背景切换、后台入口
- 上传/下载小标签
- 地图 tooltip
- 详情页顶部概览卡片
- 详情页 Detail / Network 切换标签

### 详情页顶部概览卡片

该区域对应源码组件：

```txt
src/components/ServerDetailOverview.tsx
```

官方默认条件类类似：

```tsx
className={cn({
  "bg-card/70 p-4 rounded-[10px]": customBackgroundImage,
})}
```

c5 旧版中应为：

```tsx
className={cn({
  "glass-panel rounded-[22px] p-4": customBackgroundImage,
})}
```

注意：如果 Tailwind 未生成 `rounded-[22px]`，需要补充：

```css
.rounded-\[22px\] {
  border-radius: 22px;
}
```

---

## 3. 首页概览时间区

### c5 旧版行为

c5 旧版中，首页顶部时间区域已被修改：

- 去掉 `👋 概览`
- 去掉 `当前时间 / whereTheTimeIs`
- 只保留大号动态时间

旧版等价结构：

```tsx
<section className="mt-10 flex flex-col md:mt-16 header-timer">
  <div className="flex items-center">
    <NumberFlowGroup>
      <div
        style={{ fontVariantNumeric: "tabular-nums" }}
        className="flex items-baseline text-[2.05rem] font-semibold leading-none tracking-tight md:text-[2.4rem]"
      >
        ...
      </div>
    </NumberFlowGroup>
  </div>
</section>
```

新版本官方默认结构仍包含：

```tsx
<p>👋 {t("overview")}</p>
<p>{t("whereTheTimeIs")}</p>
```

迁移 c5 视觉时需要删除这些文字区，并恢复大号时间样式。

### 缺失 CSS 注意事项

如果新版本 CSS 中没有 Tailwind 任意字号类，需要补充：

```css
.text-\[2\.05rem\] {
  font-size: 2.05rem;
}

@media (min-width: 768px) {
  .md\:text-\[2\.4rem\] {
    font-size: 2.4rem;
  }
}
```

---

## 4. 日语 ja-JP

### i18n 注册

需要在资源表中加入：

```js
"ja-JP": {
  translation: jaJP,
}
```

### 语言选择器

语言列表中加入：

```tsx
{ name: t("language.ja-JP"), code: "ja-JP" }
```

### 语言名称映射

各语言包中的 `language` 字段建议补充：

```json
"ja-JP": "日本語"
```

或按对应语言翻译，例如德语中可以是 `Japanisch`。

---

## 5. 构建与缓存建议

### 不推荐长期手动 patch dist

手动修改 dist 虽然可快速验证，但容易遇到缓存问题：

- 内容改了，hashed 文件名没变
- 浏览器继续使用旧 JS/CSS
- PWA 或 CDN 缓存旧资源

### 推荐源码级修改后重新构建

建议在源码层修改：

- `src/components/ClickParticles.tsx`
- `src/App.tsx`
- `src/index.css`
- `src/i18n.js`
- `src/components/LanguageSwitcher.tsx`
- `src/locales/*/translation.json`
- `src/components/Header.tsx`
- `src/components/ServerDetailOverview.tsx`

然后重新执行构建，让 Vite 生成新的 hashed 资源。

---

## 6. 当前最终验证包

本地最终 dist 验证包名称：

```txt
nezha-dash-theme-v1.1.4-c5-features-final-v3.zip
```

该包已包含：

- 点击特效
- 毛玻璃
- 日语 ja-JP
- c5 大号时间区
- 详情页顶部概览卡片圆角修复
- 缓存规避资源文件名
