# CLAUDE.md

此文件為 Claude Code (claude.ai/code) 在此儲存庫中工作時提供指引。

## 專案概述

這是一個使用 React、Vite 和 TypeScript 建立的個人作品集網站。網站具有雙語支援（英文/中文）、深色模式，並整合了 Vercel Analytics 和 Speed Insights。

## 開發指令

```bash
# 安裝依賴套件
npm i

# 啟動開發伺服器（在 port 3000 執行，自動開啟瀏覽器）
npm run dev

# 建置正式版本
npm run build

# 預覽正式版本
npm run preview
```

## 架構

### 技術堆疊

- **框架**: React 18 with Vite 6
- **建置工具**: Vite with SWC plugin 快速編譯
- **樣式**: Tailwind CSS with shadcn/ui components
- **UI 元件**: Radix UI primitives (Accordion, Dialog, Dropdown, etc.)
- **國際化**: i18next with react-i18next 支援英文/中文翻譯
- **主題**: next-themes 支援深色模式
- **分析**: Vercel Analytics and Speed Insights

### 專案結構

```
src/
├── components/
│   ├── ui/              # shadcn/ui 元件（Button, Card, Dialog 等）
│   ├── figma/           # Figma 專用元件（ImageWithFallback）
│   ├── Header.tsx       # 導航列，含主題切換和語言切換
│   ├── Hero.tsx         # 首頁區塊，含社群連結
│   ├── About.tsx        # 關於我區塊
│   ├── Skills.tsx       # 技能展示區塊
│   ├── Projects.tsx     # 專案作品集
│   ├── Contact.tsx      # 聯絡表單和資訊
│   ├── Footer.tsx       # 頁尾，含社群連結
│   └── Bubbles.tsx      # 背景動畫元件
├── i18n/
│   ├── i18n.ts         # i18next 設定檔
│   ├── en.json         # 英文翻譯
│   └── zh.json         # 中文翻譯
├── App.tsx             # 主要應用元件，含各區塊佈局
├── main.tsx            # React 應用程式入口
└── index.css           # 全域 Tailwind 樣式
```

### 關鍵架構模式

**元件佈局**: App.tsx 以單頁佈局方式呈現各區塊：Header（固定）→ Hero → About → Skills → Projects → Contact → Footer。所有區塊透過錨點連結使用平滑捲動導航。

**國際化流程**: i18n 在 src/i18n/i18n.ts 中初始化，具備瀏覽器語言偵測功能。預設語言為中文（`zh`）。語言狀態在 Header.tsx 中管理，使用自訂切換按鈕。所有使用者介面文字使用 `useTranslation()` hook，翻譯鍵值來自 en.json/zh.json。

**主題管理**: 深色模式在 Header.tsx 中手動處理（不使用 next-themes provider）。主題狀態持久化至 localStorage，鍵值為 "theme"。實作會在元件掛載時檢查系統偏好設定，並在 document root 套用 "dark" class。

**圖片處理**: ImageWithFallback 元件（src/components/figma/ImageWithFallback.tsx）處理圖片載入錯誤，顯示後備的 SVG 佔位圖。主要用於外部圖片（Unsplash URLs）。

**樣式系統**: 使用 Tailwind utility classes 搭配 shadcn/ui 元件變體。`@` 別名指向 `./src` 目錄（在 vite.config.ts 中設定）。深色模式 class 遵循 `dark:class-name` 模式。

**導航**: 平滑捲動透過 Header.tsx 中的 `element.scrollIntoView({ behavior: 'smooth' })` 實作。行動版導航使用可折疊選單，搭配漢堡圖示。

### Vite 設定說明

- Port: 開發伺服器在 port 3000 執行
- Aliases: 設定了大量套件版本別名以正確解析依賴項
- Path alias: `@` → `./src`
- Build target: esnext
- SWC plugin 用於 React 編譯（比 Babel 更快）

### 翻譯檔案

所有使用者介面字串必須同時新增至 `src/i18n/en.json` 和 `src/i18n/zh.json`。翻譯鍵值遵循 snake_case 命名（例如 `hero_title`、`btn_getInTouch`）。Header 導航項目動態使用 "Home"、"About"、"Skills"、"Projects"、"Contact" 的翻譯鍵值。

### 社群連結與聯絡方式

社群連結硬編碼於 Hero.tsx 和 Footer.tsx 中：

- GitHub: https://github.com/chriscollective
- LinkedIn: https://www.linkedin.com/in/chris-du-978143273/
- Email: alex@example.com（Hero.tsx 中的佔位文字）

更新聯絡資訊時，請在程式碼庫中搜尋這些 URL。
