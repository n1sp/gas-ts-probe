## 概要
Google Apps Script (GAS) + TypeScript を使ったプロジェクトの雛形（テンプレート）

## Version
- npm v10.5.2
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

### スクリプトIDを設定
```json:.clasp.json
  scriptId:"[ここにIDを入れる]"
```

appsscript.sample.jsonをappscript.jsonにリネーム
```bash
mv ./dist/appsscript.sample.json ./dist/appsscript.json
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
