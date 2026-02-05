# 山岸研究室 ウェブサイト

東京農工大学 山岸研究室の公式ウェブサイト

**サイトURL**: https://yamagishi-lab.vercel.app

---

## コンテンツの編集方法

このサイトのコンテンツは **Sanity Studio** を使って編集できます。プログラミングの知識は不要です。

### Sanity Studio へのアクセス

1. ブラウザで以下のURLにアクセス：
   - **https://yamagishi-lab.vercel.app/studio**

2. Sanityアカウントでログイン

3. 左側のメニューから編集したい項目を選択

---

## 編集できるコンテンツ

### News（ニュース）
研究室からのお知らせを管理します。

| 項目 | 説明 |
|------|------|
| Date | 日付（YYYY-MM-DD形式） |
| Title (Japanese) | 日本語のタイトル |
| Title (English) | 英語のタイトル |

**操作手順：**
1. 左メニューから「News」を選択
2. 新規追加：右上の「＋」ボタン
3. 編集：一覧から該当項目をクリック
4. 保存：右下の「Publish」ボタン

---

### Publications（論文）
研究室の論文リストを管理します。

| 項目 | 説明 |
|------|------|
| Authors | 著者名 |
| Title | 論文タイトル |
| Journal | 掲載誌名 |
| Year | 発表年 |
| DOI | DOIリンク（https://doi.org/... 形式） |
| Note | 備考（受賞論文など） |
| Display Order | 表示順（小さい数字が上に表示） |

---

### Awards（受賞歴）
受賞情報を管理します。

| 項目 | 説明 |
|------|------|
| Date | 受賞日 |
| Title (Japanese) | 日本語の受賞名 |
| Title (English) | 英語の受賞名 |
| Display Order | 表示順 |

---

### Research Areas（研究分野）
研究内容のページを管理します。

| 項目 | 説明 |
|------|------|
| Title | 研究分野のタイトル（日英） |
| Image | 研究分野の画像 |
| Summary | Challenge / Approach / Outcome の要約 |
| Full Description | 詳細説明（段落ごとに入力） |
| Display Order | 表示順 |

**画像のアップロード：**
1. 「Image」フィールドをクリック
2. 「Upload」を選択してファイルを選ぶ
3. 推奨サイズ：横800px × 縦600px 程度

---

### Team Members（メンバー）
研究室メンバーを管理します。

| 項目 | 説明 |
|------|------|
| Name | 氏名（日英） |
| Role | 役職（日英） |
| Category | 分類（Faculty/PhD/Master/Bachelor/Alumni） |
| Research Focus | 研究テーマ（日英） |
| Photo | プロフィール写真 |
| Email | メールアドレス（任意） |
| Display Order | 表示順 |

---

## よくある質問

### Q: 変更がサイトに反映されない
**A:** 「Publish」ボタンを押しましたか？下書き状態では公開サイトに反映されません。

### Q: 画像がぼやける
**A:** 元画像の解像度が低い可能性があります。推奨サイズ以上の画像をアップロードしてください。

### Q: 日本語と英語、両方入力が必要？
**A:** はい。日本語サイト・英語サイト両方で表示するため、両方の入力をお願いします。

### Q: 間違えて削除してしまった
**A:** 一度削除すると復元できません。削除前に内容をメモしておくことをお勧めします。

---

## 開発者向け情報

### 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| アニメーション | Framer Motion |
| CMS | Sanity |
| ホスティング | Vercel |
| 多言語対応 | 日本語 / 英語 |

### ローカル開発

```bash
# リポジトリをクローン
git clone https://github.com/FallseF/yamagishi-lab.git
cd yamagishi-lab

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

http://localhost:3000 でサイトを確認できます。

### 環境変数

`.env.local` ファイルを作成：

```
NEXT_PUBLIC_SANITY_PROJECT_ID=8kch9h5v
NEXT_PUBLIC_SANITY_DATASET=production
```

### Vercelへのデプロイ

GitHub連携なしでCLIから直接デプロイする方法：

```bash
# Vercelにログイン（クライアントのアカウント）
vercel login

# プロダクションデプロイ
vercel --prod
```

### Sanity初期データのインポート

1. Sanity管理画面でAPIトークンを作成
   - https://www.sanity.io/manage/project/8kch9h5v/api
   - Permissions: Editor

2. スクリプトを実行
   ```bash
   SANITY_API_TOKEN='your-token' node scripts/import-to-sanity.mjs
   ```

3. 使用後はトークンを削除

### プロジェクト構成

```
src/
├── app/
│   ├── [locale]/          # 多言語ルーティング
│   │   ├── page.tsx       # トップページ
│   │   ├── research/      # 研究ページ
│   │   ├── team/          # チームページ
│   │   ├── achievements/  # 業績ページ
│   │   ├── news/          # ニュースページ
│   │   └── contact/       # お問い合わせページ
│   └── studio/            # Sanity Studio
├── components/            # UIコンポーネント
├── sanity/               # Sanity設定・スキーマ
├── dictionaries/         # 多言語辞書（静的テキスト）
└── lib/                  # ユーティリティ
```

### 関連リンク

- **Sanity管理画面**: https://www.sanity.io/manage/project/8kch9h5v
- **Vercelダッシュボード**: https://vercel.com/yamagishilabhps-projects/yamagishi-lab
- **GitHubリポジトリ**: https://github.com/FallseF/yamagishi-lab

---

## お問い合わせ

ウェブサイトに関するお問い合わせ：
- 横田研究室 青木
- Email: aoki@ntech.t.u-tokyo.ac.jp
