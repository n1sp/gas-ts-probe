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

### TypeScript をビルド／バンドル
```bash
npm run build
```

### clasp を使って GAS にデプロイ
```bash
npx clasp login
npx clasp push
```

## プロジェクト構成（ビルド後）
```
/dist
  └─ main.js      # 自動生成される
/src
  └─ App.ts       # ここにロジックを書いていく
  └─ main.ts
.clasp.json
.esbuild.js
package-lock.json
package.json
tsconfig.json
.gitignore
```
