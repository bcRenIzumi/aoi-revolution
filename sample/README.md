# フォーム自動生成システム

このシステムはMarkdown形式のフォーム定義から、自動的にHTMLフォームを生成します。

## 🚀 使用方法

### 1. Markdownでフォームを定義

`docs/` ディレクトリに以下の形式でMarkdownファイルを作成します：

```markdown
# フォームタイトル

## セクション名
| フィールド名 | 形式       | 必須 | 備考                    |
| ------------ | ---------- | ---- | ----------------------- |
| フィールド1  | テキスト   | ●    | -                       |
| フィールド2  | プルダウン | ●    | 選択肢1/選択肢2/選択肢3 |

## アクション
| ボタン名 | 種類         | 動作         |
| -------- | ------------ | ------------ |
| 送信     | メインボタン | フォーム送信 |

## レイアウト
- **2列表示**: フィールド1・フィールド2
```

### 2. HTMLフォームを生成

以下のコマンドを実行してHTMLを生成します：

```bash
cd sample/scripts
node generate-form.js ../docs/page-1.md ../html/generated-form.html
```

## 📝 フォーム定義の書き方

### サポートされるフィールド形式

| 形式             | HTML要素                  | 備考                            |
| ---------------- | ------------------------- | ------------------------------- |
| テキスト         | `<input type="text">`     | 通常のテキスト入力              |
| メール           | `<input type="email">`    | メールアドレス入力              |
| 日付             | `<input type="date">`     | 日付選択                        |
| プルダウン       | `<select>`                | 備考欄に選択肢を`/`区切りで記載 |
| チェックボックス | `<input type="checkbox">` | チェックボックス                |

### 必須項目の指定

必須項目は「必須」列に `●` を記載します。

### 特殊な備考

- `自動生成・読み取り専用`: フィールドを読み取り専用にします
- `選択肢1/選択肢2/選択肢3`: プルダウンの選択肢を指定します

### フィールドIDの命名規則

日本語のフィールド名は自動的に英語のIDに変換されます：

| 日本語フィールド名 | 生成されるID      |
| ------------------ | ----------------- |
| 申請番号           | applicationNumber |
| 申請日             | applicationDate   |
| 氏名               | applicantName     |
| メールアドレス     | email             |

## 🎨 カスタマイズ

### テンプレートの変更

`templates/form-template.html` を編集することで、生成されるHTMLの見た目やスタイルを変更できます。

### フィールドマッピングの追加

`scripts/generate-form.js` の `fieldNameMapping` オブジェクトを編集することで、新しいフィールド名のマッピングを追加できます。

## 📁 ファイル構成

```
sample/
├── docs/               # Markdownフォーム定義
│   └── page-1.md
├── html/               # 生成されたHTMLファイル
├── scripts/            # 生成スクリプト
│   └── generate-form.js
├── templates/          # HTMLテンプレート
│   └── form-template.html
└── README.md
```

## 🔧 セットアップ

1. Node.jsがインストールされていることを確認
2. 必要な依存関係はありません（標準ライブラリのみ使用）

## 📋 例

### 入力（Markdown）
```markdown
# PC申請フォーム

## 基本情報
| フィールド名 | 形式       | 必須 | 備考                   |
| ------------ | ---------- | ---- | ---------------------- |
| 申請番号     | テキスト   | -    | 自動生成・読み取り専用 |
| 氏名         | テキスト   | ●    | -                      |
| 部門         | プルダウン | ●    | 営業部/開発部/総務部   |
```

### 出力（HTML）
```html
<div class="section">
    <h2 class="section-title">基本情報</h2>
    <div class="form-group">
        <label for="applicationNumber">申請番号</label>
        <input type="text" id="applicationNumber" name="applicationNumber" readonly>
    </div>
    <div class="form-group">
        <label for="applicantName">氏名<span class="required">*</span></label>
        <input type="text" id="applicantName" name="applicantName" required>
    </div>
    <div class="form-group">
        <label for="department">部門<span class="required">*</span></label>
        <select id="department" name="department" required>
            <option value="">選択してください</option>
            <option value="営業部">営業部</option>
            <option value="開発部">開発部</option>
            <option value="総務部">総務部</option>
        </select>
    </div>
</div>
```

## 🤝 貢献

このシステムは継続的に改善されています。新しい機能の提案やバグ報告は歓迎します。 