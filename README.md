# 山岸研究室 ウェブサイト

https://yamagishi-lab.vercel.app

---

## 編集方法の使い分け

| 作業内容 | 方法 |
|---------|------|
| ニュース追加・編集 | Sanity Studio |
| 論文・受賞歴の更新 | Sanity Studio |
| 研究分野の説明・画像変更 | Sanity Studio |
| メンバーの追加・編集 | Sanity Studio |
| レイアウト・デザイン変更 | コード変更（GitHub） |
| 新しいページ・セクション追加 | コード変更（GitHub） |
| 地図URL・固定テキスト変更 | コード変更（GitHub） |

---

## Sanity Studio でのコンテンツ編集

### アクセス方法

1. ブラウザで https://yamagishi-lab.vercel.app/studio を開く
2. Sanityアカウントでログイン
3. 左側のメニューから編集したい項目をクリック

---

### ニュースを追加する

1. 左メニューから「News」をクリック
2. 画面右上の「＋」ボタンをクリック
3. 以下を入力：
   - **Date**: 日付を選択（例：2026-02-05）
   - **Title → Japanese**: 日本語のタイトル
   - **Title → English**: 英語のタイトル
4. 画面右下の「Publish」ボタンをクリック

---

### 論文を追加する

1. 左メニューから「Publication」をクリック
2. 画面右上の「＋」ボタンをクリック
3. 以下を入力：
   - **Authors**: 著者名（例：K. Yamagishi, T. Suzuki, ...）
   - **Title**: 論文タイトル
   - **Journal**: 掲載誌名と年（例：Adv. Mater., 33, 2008062 (2021)）
   - **Year**: 発表年（数字のみ）
   - **DOI**: DOIリンク（例：https://doi.org/10.1002/adma.202008062）
   - **Note**: 備考（受賞論文の場合など、任意）
   - **Display Order**: 表示順（1が一番上）
4. 「Publish」をクリック

---

### 受賞歴を追加する

1. 左メニューから「Award」をクリック
2. 画面右上の「＋」ボタンをクリック
3. 以下を入力：
   - **Date**: 受賞日（例：2024.03）
   - **Title → Japanese**: 日本語の受賞名
   - **Title → English**: 英語の受賞名
   - **Display Order**: 表示順
4. 「Publish」をクリック

---

### 研究分野を編集する

1. 左メニューから「Research Area」をクリック
2. 編集したい研究分野をクリック
3. 編集可能な項目：
   - **Title**: タイトル（日英）
   - **Image**: 研究画像（クリックして「Upload」でアップロード）
   - **Summary**: Challenge / Approach / Outcome の要約
   - **Full Description**: 詳細説明（段落ごとに「Add item」で追加）
4. 「Publish」をクリック

**画像の推奨サイズ**: 横800px × 縦600px 程度

---

### メンバーを追加する

1. 左メニューから「Team Member」をクリック
2. 画面右上の「＋」ボタンをクリック
3. 以下を入力：
   - **Name**: 氏名（日英）
   - **Role**: 役職（日英）
   - **Category**: 分類を選択（Faculty / PhD / Master / Bachelor / Alumni）
   - **Research Focus**: 研究テーマ（日英）
   - **Photo**: プロフィール写真（任意）
   - **Email**: メールアドレス（任意）
   - **Display Order**: 表示順
4. 「Publish」をクリック

---

### 既存の項目を編集する

1. 左メニューから該当カテゴリをクリック
2. 一覧から編集したい項目をクリック
3. 内容を編集
4. 「Publish」をクリック

---

### 項目を削除する

1. 削除したい項目を開く
2. 画面右上の「...」メニューをクリック
3. 「Delete」を選択
4. 確認画面で「Delete now」をクリック

**注意**: 削除すると復元できません

---

### よくあるトラブル

**Q: 編集したのにサイトに反映されない**
→「Publish」ボタンを押しましたか？押さないと下書き状態のままです。

**Q: 日本語サイトには表示されるが英語サイトに表示されない**
→ English欄が空欄になっていませんか？日英両方の入力が必要です。

**Q: 画像がぼやけて表示される**
→ 元画像の解像度が低い可能性があります。推奨サイズ以上の画像を使用してください。

---

## 開発者向け

### 技術スタック
Next.js 16 / TypeScript / Tailwind CSS / Sanity / Vercel

### セットアップ

```bash
git clone https://github.com/FallseF/yamagishi-lab.git
cd yamagishi-lab
npm install
npm run dev
```

### 環境変数（.env.local）

```
NEXT_PUBLIC_SANITY_PROJECT_ID=8kch9h5v
NEXT_PUBLIC_SANITY_DATASET=production
```

### デプロイ

```bash
vercel login  # クライアントのアカウント
vercel --prod
```

### Sanityデータインポート

```bash
# APIトークン作成: https://www.sanity.io/manage/project/8kch9h5v/api
SANITY_API_TOKEN='token' node scripts/import-to-sanity.mjs
```

### 関連リンク
- Sanity: https://www.sanity.io/manage/project/8kch9h5v
- Vercel: https://vercel.com/yamagishilabhps-projects/yamagishi-lab
- GitHub: https://github.com/FallseF/yamagishi-lab

---

## 問い合わせ

横田研究室 青木 / aoki@ntech.t.u-tokyo.ac.jp
