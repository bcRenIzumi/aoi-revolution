# 1. README

## 根底にある思想

申請画面は、どれも内容が似通っています。それでいて種類が多いです。
そこで、本プロジェクトでは「内容が似ているものを以下に楽に数多く作れるか」を重要視しています。

よって、画面において

- 画面のデザインを全て共通の部品・フレームとする
- 画面の「内容」のみを新規作成の対象とする
- 画面の内容を設定するファイルはAI・人間・Reactの全てで扱いやすいjson形式

上記のような工夫をしています。

また、Web APIについても、設計書からAIで簡単に作れるように、ルールの整備をしています。

## 1.1. 使い方

### 1.1.1. フロントサーバーの立ち上げ方

1. nodeをインストールする
2. bashを開く
3. cd で /front 配下に移動する
4. npm i を実行する
5. npm run dev を実行する
6. front のサーバーが立ち上がる

### 1.1.2. バックエンドサーバーの立ち上げ方

1. api-server/src/main/resources/application.properties のAPI_ENVを"local"に設定し、データベース関連のプロパティも適切に設定する。
2. api-server/src/main/java/jp/co/benesse/xxx/Application.java を起動する

### APIの作り方

1. docs/02_設計書/01_OpenAPI/API一覧定義書 に追加したいAPIを記述
2. API一覧定義書を基にopenapi.yaml を作成（プロンプト例：「API一覧定義書をもとにopenapi.yamlを記述してください」）
3. docs/02_設計書/01_OpenAPI/openapi.yaml の内容をもとにAPIのソースコードを作成（プロンプト例：「APIの作成をお願いします」適用ルール：api-server/.cursor/rules/java_openapi2code.mdc）

### 申請画面の作り方

1. docs/02_設計書/02_画面定義書 に作成したい申請の名前のフォルダを作成
2. 作成したフォルダ内に、「ヘッダー」「フォーム」「情報セクション」の設定を記述
3. 記述した設計をもとに画面を作成（プロンプト例：「/${申請名}の設定をもとに、画面を作成してください」）

## 1.2. docsについて

プロジェクトの設計書・仕様書が格納されているディレクトリです。

### 1.2.1. 構成

- **01_データ設計/**: データベース関連の設計書
  - **01_モデル図/**: 概念データモデル、テーブル定義書
  - **02_DDL/**: データベース作成用SQLファイル（master/transaction別）
  - **pc-dx-form.md**: フォーム仕様書
- **02_設計書/**: アプリケーション設計書
  - **01_OpenAPI/**: API仕様書（OpenAPI 3.1.0形式）
  - **02_画面定義書/**: 画面別の設計書（header、form、infoSection別）

### 1.2.2. 設計書作成ルール

- OpenAPI仕様書は `copilot-java-rules.mdc` および `openapi-rules.mdc` に従って作成
- 画面定義書は各画面ID別にディレクトリを作成し、header/form/infoSectionの3つのMarkdownファイルで構成

## 1.3. api-serverについて

Spring Boot 3.2.3 + Java 17で構築されたRESTful APIサーバーです。

### 1.3.1. 技術スタック

- **Java**: 17
- **フレームワーク**: Spring Boot 3.2.3
- **データベース**: Microsoft SQL Server
- **ビルドツール**: Maven
- **ログ**: Log4j2
- **バリデーション**: Bean Validation
- **その他**: Lombok、Apache HttpClient、MyBatis Thymeleaf

### 1.3.2. アーキテクチャ

レイヤードアーキテクチャを採用し、以下の構成で実装：

```text
Controller → Facade → Service → Logic/Util → Dao → DB
          ↓         ↓         ↓              ↓
         Form      Dto       Dto           Entity
```

### 1.3.3. パッケージ構成

- **controller/**: リクエスト受付・レスポンス返却（open/secure別）
- **facade/**: ビジネスロジックの制御・調整
- **service/**: 共通ビジネスロジック
- **dao/**: データアクセス層（テーブル単位）
- **dto/**: データ転送オブジェクト（request/response/component別）
- **entity/**: データベースエンティティ（master/tran別）
- **common/**: 共通機能（annotation、constants、enums、exception、interceptor、util）
- **external/**: 外部システム連携

### 1.3.4. 設定ファイル

- **application.properties**: アプリケーション基本設定
- **error-messages.properties**: エラーメッセージ定義
- **validation-messages.properties**: バリデーションメッセージ定義
- **log4j2.xml**: ログ設定

### 1.3.5. 起動方法

1. `application.properties`の`API_ENV`環境変数を"local"に設定
2. データベース接続情報を環境変数で設定：
   - `DATABASE_URL`
   - `DATABASE_USERNAME` 
   - `DATABASE_PASSWORD`
3. `Application.java`を実行してサーバー起動
4. APIは`http://localhost:8080/api`で利用可能

### 1.3.6. 開発規約

- コーディング規約は`copilot-java-rules.mdc`に従う
- API仕様は`openapi-rules.mdc`に従って作成
- SQLファイルは`src/main/resources/sql`配下に配置

## 1.4. frontendについて

React 19 + Viteで構築されたモダンなWebフロントエンドアプリケーションです。

### 1.4.1. 技術スタック

- **React**: 19.1.0
- **ビルドツール**: Vite 6.3.5
- **ルーティング**: React Router DOM 7.6.3
- **スタイリング**: CSS（カスタムCSS）
- **リンター**: ESLint

### 1.4.2. アーキテクチャ

コンポーネントベースアーキテクチャを採用し、設定駆動型の画面構築を実現：

```text
Page → Frame → Component
  ↓      ↓        ↓
Config → Props → Render
```

### 1.4.3. ディレクトリ構成

- **page/**: 各画面のルーティング・状態管理（app/permit別）
- **common/**: 共通コンポーネント
  - **component/**: 再利用可能な基本コンポーネント
  - **frame/**: 画面フレーム（basic/file/confirm/complete/detail）
- **config/**: 画面設定ファイル（app/common/permit別）
- **context/**: Reactコンテキスト（状態管理）

### 1.4.4. 画面構成

各画面は以下のフレームで構成：

- **app-basic**: 基本情報入力画面
- **app-file**: ファイル添付画面
- **app-confirm**: 確認画面
- **app-complete**: 完了画面
- **app-detail**: 詳細表示画面

### 1.4.5. 設定駆動型開発

画面の構成要素を設定ファイルで定義：

- **headerConfig.js**: ヘッダー情報（タイトル・説明）
- **formConfig.js**: フォーム構成（セクション・フィールド定義）
- **infoSectionConfig.js**: 情報セクション（案内・リンク）

### 1.4.6. 起動方法

1. Node.jsをインストール
2. `frontend`ディレクトリに移動
3. `npm install`で依存関係をインストール
4. `npm run dev`で開発サーバー起動
5. アプリケーションは`http://localhost:5173/aoi`で利用可能

### 1.4.7. API連携

- Viteプロキシ設定により`/api`リクエストをバックエンド（localhost:8080）に転送
- `ApplicationContext`でアプリケーション状態を管理
- フォーム送信・API通信の共通処理を実装

### 1.4.8. 開発のポイント

- 設定ファイルの変更のみで新しい画面を追加可能
- 共通コンポーネントの再利用により開発効率を向上
- レスポンシブデザイン対応
