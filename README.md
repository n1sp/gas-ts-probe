## 概要
Google Apps Script (GAS) + TypeScript を使ったプロジェクトの雛形（テンプレート）

## Version
- clasp v3.1.0
- TypeScript v5.9.3

## Setup
1. このリポジトリ右上の「Use this template」ボタンをクリック
2. 新しいリポジトリを作成

### 作成したリポジトリをクローン
```bash
git clone https://github.com/yourname/your-new-repo.git
cd your-new-repo
```

### 依存をインストール
```bash
npm install
```

### GAS ログイン
```bash
npx clasp login
```

### GAS にプロジェクトを作成
```bash
clasp create --type standalone --title "ProjectName"
```

### 生成されたファイルを修正
rootDirプロパティの値を編集してビルド先を指定(.clasp.json)
```json
  "rootDir": "./dist",
```

timeZoneプロパティの値を編集してタイムゾーンを東京に設定(appscript.json)
```json
  "timeZone": "Asia/Tokyo",
```

appscript.jsonをdistディレクトリに移動
```bash
mv appsscript.json ./dist/appsscript.json
```

### ビルド デプロイ
```bash
npm run deploy
```

## プロジェクト構成（ビルド後）
```
/dist
  └─ main.js          # 自動生成される
  └─ appsscript.json  # 生成後、移動させる
/src
  └─ App.ts           # ここにロジックを書いていく
  └─ main.ts
.clasp.json
.esbuild.js
package-lock.json
package.json
tsconfig.json
.gitignore
```
