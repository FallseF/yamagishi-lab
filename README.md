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

## Sanity Studio での編集

**URL**: https://yamagishi-lab.vercel.app/studio

### 操作手順
1. Sanityアカウントでログイン
2. 左メニューから項目を選択
3. 編集後「Publish」ボタンで公開

### 編集可能なコンテンツ

| コンテンツ | 主な項目 |
|-----------|---------|
| News | 日付、タイトル（日英） |
| Publications | 著者、タイトル、掲載誌、DOI、備考 |
| Awards | 日付、受賞名（日英） |
| Research Areas | タイトル、画像、要約、詳細説明 |
| Team Members | 氏名、役職、写真、研究テーマ |

### 注意事項
- 「Publish」を押さないと公開されない
- 日本語・英語の両方を入力する
- 削除は復元不可

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
