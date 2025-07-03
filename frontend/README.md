# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Frontend 構成

このプロジェクトはReact + Viteを使用した設定ベースのアプリケーションフレームワークです。

### フォルダ構成（一部ファイルについても説明）

```text
frontend/
├── src/                     # ソースコード
│   ├── main.jsx            # アプリケーションエントリーポイント
│   ├── App.jsx             # ルートコンポーネント（ルーティング設定）
│   ├── App.css             # アプリケーション全体のスタイル
│   ├── common/             # 共通
│   │   ├── component/      # 再利用可能なコンポーネント
│   │   │   ├── Header.jsx              # ページヘッダー
│   │   │   ├── InfoSection.jsx         # 情報セクション（メニュー・ご案内）
│   │   │   ├── FormField.jsx           # 汎用フォーム入力要素
│   │   │   ├── CommonApplicationForm.jsx # 設定ベース申請フォーム
│   │   │   └── ButtonGroup.jsx         # ボタングループ
│   │   └── frame/          # ページフレーム
│   │       ├── app-basic/              # 基本申請ページ
│   │       ├── app-detail/             # 詳細申請ページ
│   │       ├── app-file/               # ファイル添付ページ
│   │       ├── app-confirm/            # 確認ページ
│   │       └── app-complete/           # 完了ページ
│   ├── config/             # 設定ファイル
│   │   ├── common/         # アプリケーション間で共通の設定
│   │   │   └── basicFormConfig.js     # 基本申請ページの設定
│   │   ├── app/            # 申請系のアプリケーション
│   │   │   ├── ID_0001/                # アプリケーションID_0001用設定
│   │   │   │   ├── formConfig.js      # フォーム設定
│   │   │   │   ├── headerConfig.js     # ヘッダー設定
│   │   │   │   └── infoSectionConfig.js # 情報セクション設定
│   │   │   └── ID_0002/                # アプリケーションID_0002用設定
│   │   └── permit/          # 許可系のアプリケーション
│   └── page/               # ページコンポーネント
│       ├── app/            # アプリケーション別ページ
│       │   ├── ID_0001/                # アプリケーションID_0001
│       │   │   └── ID_0001.jsx         # ルーティング定義
│       │   └── ID_0002/                # アプリケーションID_0002
│       └── permit/          # 申込関連ページ
├── package.json            # 依存関係とスクリプト定義
├── vite.config.js          # Vite設定
└── README.md               # このファイル
```

### 各フォルダ・ファイルの役割

#### エントリーポイント

- **`main.jsx`**: アプリケーションのエントリーポイント。ReactアプリをDOMにマウント
- **`App.jsx`**: ルートコンポーネント。アプリケーション全体のルーティングを定義
- **`App.css`**: アプリケーション全体の共通スタイル

#### 共通コンポーネント (`src/common/`)

**`component/`**: 複数のページで再利用される汎用コンポーネント

- **`Header.jsx`**: ページヘッダーコンポーネント（タイトル・説明表示）
- **`InfoSection.jsx`**: 折りたたみ可能な情報セクション（設定ベース）
- **`FormField.jsx`**: 汎用フォーム入力要素（text, email, select, radio等対応）
- **`CommonApplicationForm.jsx`**: 設定ファイルベースでフォームを構築する共通コンポーネント
- **`ButtonGroup.jsx`**: 送信・保存・戻るボタンなどのボタングループ

**`frame/`**: 各ページの枠組みを提供するフレームコンポーネント

- **`app-basic/`**: 基本申請ページのフレーム
- **`app-detail/`**: 詳細申請ページのフレーム
- **`app-file/`**: ファイル添付ページのフレーム
- **`app-confirm/`**: 申請確認ページのフレーム
- **`app-complete/`**: 申請完了ページのフレーム

#### 設定ファイル (`src/config/`)

**設定ベースアーキテクチャ**: コンポーネントの表示内容や動作を外部ファイルで制御

**`app/ID_XXXX/`**: アプリケーション固有の設定

- **`formConfig1.js`**: 基本フォームの設定（フィールド定義、バリデーション等）
- **`formConfig2.js`**: 詳細フォームの設定
- **`headerConfig.js`**: ヘッダーの設定（タイトル、説明文）
- **`infoSectionConfig.js`**: 情報セクションの設定（ブロック内容、リンク等）

#### ページコンポーネント (`src/page/`)

**`app/ID_XXXX/`**: アプリケーション固有のページとルーティング

- **`ID_0001.jsx`**: アプリケーションID_0001のルーティング定義とページ遷移制御

### 設計思想

#### 設定ベースアーキテクチャ

- フォームの構成、ヘッダーの内容、情報セクションの表示内容を全て設定ファイルで制御
- コンポーネントはロジックのみを担当し、表示内容は設定から取得
- 新しいアプリケーションは設定ファイルを追加するだけで構築可能

#### Props駆動設計

- 各コンポーネントは必要な設定をpropsで受け取る
- 親コンポーネント（ページレベル）で設定を読み込み、子コンポーネントに引き渡し
- コンポーネント間の依存関係を最小化

#### 再利用可能な構造

- 共通コンポーネントは複数のアプリケーションで再利用
- フレームコンポーネントは一貫したレイアウトとUXを提供
- 設定ファイルの差し替えで異なるアプリケーションを実現

## 開発ガイド

### 新しいアプリケーションの追加

1. 申請系であれば`src/config/app/` に、許可系であれば`src/config/permit/`に新しいIDフォルダを作成
2. 必要な設定ファイル（formConfig, headerConfig等）を作成
3. 申請系であれば`src/page/app/` に、許可系であれば`src/page/permit/`に対応するページコンポーネントを作成
4. `App.jsx` にルーティングを追加

### フォームフィールドの追加

`FormField.jsx` で対応する新しいフィールドタイプを追加し、設定ファイルで利用

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
