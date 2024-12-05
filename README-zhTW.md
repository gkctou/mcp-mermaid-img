# mcp-mermaid-img

讓 Claude 畫的圖表不再只是程式碼！輕鬆將 Mermaid 圖表轉換成漂亮的圖片檔 🎨

[English](README.md) | [Español](README-es.md) | [Français](README-fr.md) | [Deutsch](README-de.md) | [Italiano](README-it.md) | [Português](README-pt.md) | [Nederlands](README-nl.md)

## 為什麼需要這個工具？

使用 Claude Desktop 時，你是否遇到這樣的困擾：
- Claude 可以幫你畫出漂亮的流程圖、循序圖、甘特圖...
- 但就算用了 mcp-shell，存下來的還是 Mermaid 程式碼 😅
- 想要分享給同事或放進簡報，還得自己截圖（畫質還不太好）

別擔心！有了 mcp-mermaid-img，Claude 畫的圖表立刻變身成高畫質圖片！

## 超強功能

- 一鍵轉換：Mermaid 程式碼 → 高畫質圖片 URL
- 多種格式：SVG（超清晰）、PNG、JPEG、WebP、PDF 任你選
- 完全客製：支援各種主題、顏色、尺寸設定
- 即時預覽：Claude 對話中直接看到成品

## 開始使用

### 🎯 設定 Claude Desktop

1. 在你的 `claude_desktop_config.json` 中加入：

```json
{
  "mcpServers": {
    "mcp-mermaid-img": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-mermaid-img"
      ]
    }
  }
}
```

2. 重新啟動 Claude Desktop，工具就準備好了！🎉

### 💡 實際使用

跟 Claude 說：「把目前顯示的圖表，轉換成 SVG 檔案儲存到本地端」，就能一鍵搞定！

Claude 會自動：
1. 取得當前顯示的 Mermaid 程式碼
2. 使用 mermaid-to-file 工具轉換
3. 儲存成 SVG 檔案到你的下載資料夾
4. 在對話中顯示存檔結果

就是這麼簡單！你再也不用擔心圖表只能留在對話視窗裡了。

### 🛠️ MCP 工具說明

本套件提供三個強大的 MCP 工具：

#### 1. mermaid-to-url
將 Mermaid 圖表轉換成圖片 URL。適合：
- 在 AI/LLM 回應中直接顯示圖表
- 快速分享圖表連結
- 下載圖表檔案

#### 2. mermaid-to-file
自動將圖表儲存到下載資料夾或指定路徑：
- 支援相對路徑（存到下載資料夾）或絕對路徑
- 自動處理檔案副檔名
- 防止覆蓋既有檔案

#### 3. mermaid-to-svg
專門用於取得 SVG 格式的圖表：
- 直接取得 SVG 原始碼
- 適合嵌入網頁或文件
- 方便 AI 對話中進行後續的文件處理

---

## 給開發者的話 🔧

想在自己的專案中使用這個超強轉換功能？沒問題！

### 📦 安裝

```bash
npm install mcp-mermaid-img
```

### 💻 程式範例

```typescript
import { generateMermaidInkUrl } from 'mcp-mermaid-img';

// 基本使用
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;');

// 進階設定
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;', {
  type: 'svg',          // 輸出格式
  theme: 'dark',        // 主題風格
  bgColor: '!white',    // 背景顏色
  width: 800           // 圖片寬度
});
```

### ⚙️ 完整參數說明

#### type：輸出格式
- `svg`：SVG 向量格式（預設值）
  - 最佳畫質，完美支援縮放
  - 適合網頁和簡報使用
- `jpeg`：JPEG 圖片格式
  - 適合照片類型的圖表
  - 檔案較小，但可能有壓縮痕跡
- `png`：PNG 圖片格式
  - 無損壓縮，適合線條圖表
  - 保持清晰度的同時優化檔案大小
- `webp`：WebP 圖片格式
  - 現代網頁最佳選擇
  - 更好的壓縮效果，保持高畫質
- `pdf`：PDF 文件格式
  - 適合列印和文件整合
  - 支援特殊的版面設定

#### theme：主題風格
- `default`：預設主題
  - 通用配色，適合大多數場景
  - 清晰易讀的視覺效果
- `neutral`：中性主題
  - 黑白配色，適合正式場合
  - 列印時效果最佳
- `dark`：深色主題
  - 深色背景，淺色文字
  - 適合夜間模式或深色介面
- `forest`：森林主題
  - 綠色系配色
  - 給人自然、活力的感覺

#### bgColor：背景顏色
- 支援兩種格式：
  1. 十六進制色碼：如 `FF0000`（紅色）
  2. 命名顏色：使用 `!` 前綴，如 `!white`
- 不設定則使用主題預設背景色

#### width & height：圖片尺寸
- 單位：像素（pixels）
- 設定任一值都會觸發自動縮放
- 建議同時設定 scale 參數優化輸出品質

#### scale：縮放比例
- 值域：1 到 3 之間的數字
- 只在設定 width 或 height 時生效
- 數值越大，輸出圖片越清晰
- 超出範圍會拋出錯誤

#### PDF 專用設定
1. fit：自動調整
   - `true`：圖表自動適應頁面大小
   - `false`：使用指定的紙張大小
2. paper：紙張大小
   - 標準紙張尺寸：'a4'、'a3'、'letter' 等
   - 只在 fit=false 時生效
3. landscape：橫向模式
   - `true`：使用橫向排版
   - `false`：使用直向排版（預設）
   - 只在 fit=false 時生效

### 🌟 特色

- 零依賴：輕量化設計，不帶額外包袱
- TypeScript 支援：完整型別提示，開發更順暢
- 跨平台：瀏覽器、Node.js 環境都能用
- 彈性設計：支援各種客製化需求

### 🔄 完整介面定義

```typescript
interface MermaidInkOptions {
  // 輸出格式選擇
  type?: 'svg' | 'jpeg' | 'png' | 'webp' | 'pdf';
  
  // 主題風格設定
  theme?: 'default' | 'neutral' | 'dark' | 'forest';
  
  // 背景顏色（十六進制或命名顏色）
  bgColor?: string;
  
  // 圖片尺寸設定（像素）
  width?: number;
  height?: number;
  
  // 縮放比例（1-3）
  scale?: number;
  
  // PDF 專用設定
  fit?: boolean;        // 自動調整大小
  paper?: string;       // 紙張尺寸
  landscape?: boolean;  // 橫向模式
}
```

## 授權

MIT License - 放心使用，開心開發！
