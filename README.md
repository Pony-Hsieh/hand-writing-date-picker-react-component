# 測驗繳交說明

## Scenario
- Task 1

## instruction to build and run the code
1. [github pages](https://pony-hsieh.github.io/hand-writing-date-picker-react-component/)
2. 本地端
   1. 安裝所需的 dependencies  
   `$ npm i`
   2. 運行開發環境  
   `$ npm run dev`

## 引用的第三方套件
1. [dayjs](https://www.npmjs.com/package/dayjs)
2. [normalize.css](https://www.npmjs.com/package/normalize.css)

## 如何確保一致的 coding style
- editor config
  - 統一跨平台的 coding style
- prettier
  - 排版程式碼
- stylelint
  - CSS linter 及排序 CSS 屬性
- eslint
  - 靜態分析 js 程式碼
- lint-staged
  - 讓 linter 只檢查被 git 暫存(被 git add) 的檔案
- husky
  - 方便配置、運行、共享 git hook 腳本
- 其他更詳細的用法、設定及選用理由，可參考 [之前的筆記](https://github.com/Pony-Hsieh/webpack-5-practice/tree/master/learn)

## 創建專案的方式
- 透過 vite 創建 React 專案  
  `$ npm create vite@latest`

## 其他
- 週一為一週的起始日
- 透過 CSS 達成 RWD
