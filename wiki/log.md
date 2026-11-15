# 變更紀錄

> 只能往後加，不可改寫或刪除既有紀錄。每筆格式：`## [YYYY-MM-DD] 動作 | 標題`（動作：init / ingest / update / lint）。

## [2026-11-15] init | 建立專案骨架
- 新增：AGENTS.md、CLAUDE.md、.nojekyll、index.html、templates/recipe-template.html、assets/style.css、assets/script.js、wiki/index.md、wiki/log.md
- 建立空資料夾：raw/、wiki/recipes/、recipes/、assets/images/（以 .gitkeep 保留）
- 網頁風格待討論，style.css 目前為暫定樣式

## [2026-11-15] ingest | 蛋炒飯 (egg-fried-rice)
- 來源：raw/蛋炒飯.txt
- 新增／修改：wiki/recipes/egg-fried-rice.md、recipes/egg-fried-rice.html、index.html、wiki/index.md
- 待補欄位：準備時間、烹飪時間、油的份量
- 待確認：原文「鹽 白胡椒少許」解讀為鹽、白胡椒各少許；「油」出現在步驟中，已列入食材清單

## [2026-11-15] ingest | 玉米濃湯 (corn-soup)
- 來源：raw/玉米濃湯.txt
- 新增／修改：wiki/recipes/corn-soup.md、recipes/corn-soup.html、index.html、wiki/index.md
- 待補欄位：份數、鹽的份量、調太白粉用的水量
- 待確認：「調太白粉用的水」出現在步驟中，已列入食材清單

## [2026-11-15] ingest | 鮮奶酪 (milk-pudding)
- 來源：raw/鮮奶酪.txt
- 新增／修改：wiki/recipes/milk-pudding.md、recipes/milk-pudding.html、index.html、wiki/index.md
- 待補欄位：準備時間、烹飪時間、份數、糖的份量、泡吉利丁用的冰水量
- 待確認：原文「上面可以淋蜂蜜或放水果」屬於可選做法，歸入小秘訣而非步驟

## [2026-11-15] update | 食譜模板
- 修改：templates/recipe-template.html，份數前加上「份數：」文字

## [2026-11-15] update | 套用網頁風格「午後陶器」
- 選定 style-preview 的風格 C，寫入 AGENTS.md 第 2 節（配色、字型、版面規則），並同步更新 3.1、3.3、7.1 佔位符說明、第 8、9 節
- 修改：assets/style.css、templates/recipe-template.html、index.html、recipes/egg-fried-rice.html、recipes/corn-soup.html、recipes/milk-pudding.html
- 食譜內容未變動；刪除 style-preview/ 資料夾

## [2026-11-15] update | 分類調整：改為西餐上菜順序
- 分類由「主食／甜點／湯品」改為「前菜 appetizer／湯品 soup／沙拉 salad／主餐 main／甜點 dessert／飲品 drink」
- 「主食」改名為「主餐」，代碼維持 main；新增前菜、沙拉、飲品及其配色（杏桃、橄欖、奶茶）
- 重新分類：蛋炒飯 主食 → 主餐；玉米濃湯（湯品）、鮮奶酪（甜點）不變
- 首頁標籤與卡片、wiki/index.md 改依上菜順序排列；沒有食譜的分類照樣顯示標籤
- script.js 改為從標籤按鈕自動讀取分類代碼
- AGENTS.md 更新 2.1、3.1、3.2、第 4、6、7.1、8、9 節，並新增 7.5「新增或修改分類的流程」
- 修改：AGENTS.md、assets/style.css、assets/script.js、index.html、wiki/index.md、wiki/recipes/egg-fried-rice.md、recipes/egg-fried-rice.html

## [2026-11-16] ingest | 味噌湯 (miso-soup)
- 來源：raw/味增湯.txt
- 新增／修改：wiki/recipes/miso-soup.md、recipes/miso-soup.html、index.html、wiki/index.md
- 待補欄位：準備時間、烹飪時間、份數
- 待確認：raw 檔名為「味增湯」，內文菜名為「味噌湯」，菜名採內文寫法；原文最後一行「味噌放進去之後不要再煮滾」屬於注意事項，歸入小秘訣而非步驟
