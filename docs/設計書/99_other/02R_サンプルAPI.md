<!-- omit in toc -->
# ユーザー情報取得API

## 1. 概要

- ユーザーに関連する情報を一括で取得するAPI。
- ユーザーID、ニックネーム、生年月日を取得する。
- ユーザ属性情報を取得する。
- ユーザの下記の情報を取得する
  - ゼミ会員連携済みフラグ
  - 契約メンテフラグ
  - 保護者メールアドレス登録有無
  - 有料プラン登録歴

> URL: /v1/with-auth/users

## 2. インプット・アウトプット

定義箇所：docs-example\openapi\99_other\02_users.yaml

## 3. 処理

### 3.1. 会員情報の存在チェック

inputDto.userIdが取得できない場合（会員情報を登録していないユーザーの場合）、処理終了する。（エラー処理：No.2）

### 3.2. ユーザーの属性情報の取得

ユーザーが登録したM_STATIC_ATTRIBUTE_KINDの情報（属性種別）を以下のクエリで取得する。  
具体的な項目は以下の通り。

- エリア
- 文理
- コース
- 学年
- 学習科目
- 先生
- 模試対策科目
- 志望大学
- 大学の種類

```sql
    SELECT
        T_USER_ATTRIBUTE.USER_ID AS USER_ID,
        T_USER_ATTRIBUTE.ATTRIBUTE_KIND AS KIND_CODE,
        T_USER_ATTRIBUTE.ATTRIBUTE_CODE AS ATTRIBUTE_CODE,
        M_STATIC_ATTRIBUTE.NAME AS ATTRIBUTE_NAME,
        M_STATIC_ATTRIBUTE_KIND.INPUT_TYPE AS INPUT_TYPE
    FROM
        T_USER_ATTRIBUTE
        INNER JOIN
        M_STATIC_ATTRIBUTE ON M_STATIC_ATTRIBUTE.CODE = T_USER_ATTRIBUTE.ATTRIBUTE_CODE
        INNER JOIN
        M_STATIC_ATTRIBUTE_KIND ON M_STATIC_ATTRIBUTE_KIND.CODE = T_USER_ATTRIBUTE.ATTRIBUTE_KIND
        INNER JOIN
        T_USER_BASIC_INFO ON T_USER_BASIC_INFO.ID = T_USER_ATTRIBUTE.USER_ID
    WHERE 
        T_USER_ATTRIBUTE.USER_ID = /*[# mb:p="userId"]*/
        AND T_USER_ATTRIBUTE.IS_DELETED = 0
UNION

    SELECT
        T_USER_ATTRIBUTE_TEXT.USER_ID AS USER_ID,
        T_USER_ATTRIBUTE_TEXT.ATTRIBUTE_KIND AS KIND_CODE,
        NULL AS ATTRIBUTE_CODE,
        T_USER_ATTRIBUTE_TEXT.ATTRIBUTE_VALUE AS ATTRIBUTE_NAME,
        M_STATIC_ATTRIBUTE_KIND.INPUT_TYPE AS INPUT_TYPE
    FROM
        T_USER_ATTRIBUTE_TEXT
        INNER JOIN
        M_STATIC_ATTRIBUTE_KIND ON M_STATIC_ATTRIBUTE_KIND.CODE = T_USER_ATTRIBUTE_TEXT.ATTRIBUTE_KIND
        INNER JOIN
        T_USER_BASIC_INFO ON T_USER_BASIC_INFO.ID = T_USER_ATTRIBUTE_TEXT.USER_ID
    WHERE 
        T_USER_ATTRIBUTE_TEXT.USER_ID = /*[# mb:p="userId"]*/ 
        AND T_USER_ATTRIBUTE_TEXT.IS_DELETED = 0

```

### 3.3. 保護者メールアドレスを取得する

【対象テーブル】

| No  | テーブル       |
| --- | -------------- |
| 1   | メールアドレス |

【検索情報】

| No  | 検索条件項目 | 対象テーブル   | 条件 | Inputパラメータ   |
| --- | ------------ | -------------- | ---- | ----------------- |
| 1   | ユーザーID   | メールアドレス | =    | input．ユーザーID |
| 2   | メール種別   | メールアドレス | =    | "PARENT"          |

【取得情報】

SELECT結果の件数。

### 3.4. 契約情報を取得する

#### 3.4.1. 契約情報テーブルより取得する

input情報をもとに、契約情報テーブルから契約情報を取得する。

【対象テーブル】

| No  | テーブル |
| --- | -------- |
| 1   | 契約情報 |

【検索情報】

| No  | 検索条件項目 | 対象テーブル | 条件 | Inputパラメータ   |
| --- | ------------ | ------------ | ---- | ----------------- |
| 1   | ユーザーID   | 契約情報     | =    | input．ユーザーID |

【取得情報】

SELECT結果の件数。

### 3.5. アウトプット用DTOの作成

アウトプットDTOの構造は以下のとおりである。

| レベル | 論理名                             | 物理名           | 型                             | 要素数           | データ概要                                                     |
| ------ | ---------------------------------- | ---------------- | ------------------------------ | ---------------- | -------------------------------------------------------------- |
| 1      | アウトプットDTO                    | userGetOutputDto | DTO                            | 1                | アウトプットDTO                                                |
| 2      | ユーザー情報のリスト               | users            | List\<UserDto>                 | 1                | セッションに登録されているユーザー                             |
| 3      | ユーザー属性情報（トラン）のマップ | userAttributes   | Map\<String, UserAttributeDto> | 属性情報の個数分 | key：属性種別コード, value：UserAttributeDtoまたはそのリスト   |
| 4      | ユーザー属性コード                 | code             | String                         | 1                | UserAttributeDtoのフィールド。属性コードを表す                 |
| 4      | ユーザー属性値                     | value            | String                         | 1                | UserAttributeDtoのフィールド。属性種別と属性コードに対応する値 |

#### 3.5.1. ユーザーの属性情報の加工

上記のクエリで取得した値のリストに対して、以下のようにマップに加工し、レベル3：userAttributesを作成する。

| キー                                | バリュー                                                                     |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| T_USER_ATTRIBUTE.ATTRIBUTE_KINDの値 | UserAttributeDto：T_USER_ATTRIBUTE.ATTRIBUTE_KINDとNAME （ユーザーの設定値） |

ただし、`INPUT_TYPE=CHECKBOX`の場合は（例）ROUTE_STUDY_CLASS_OPTIONSの要素のように、UserAttributeDtoのリストをuserAttributeにセットする。

（例）

```json
{
  "userAttributes":{
    "T_USER_ATTRIBUTE.ATTRIBUTE_KIND":{
      "code": "T_USER_ATTRIBUTE.ATTRIBUTE_KIND",
      "value": "NAME"
    },
    "ROUTE_TEACHER_SELECTION":{
      "code": "ROUTE_TEACHER_SELECTION_03",
      "value": "笠原先生"
    },
    "ROUTE_STUDY_CLASS_OPTIONS":[
      {
        "code": "ROUTE_CLASS_OPTIONS_E00",
        "value": "英語"
      },
      {
        "code": "ROUTE_CLASS_OPTIONS_M00",
        "value": "数学"
      },
      {
        "code": "ROUTE_CLASS_OPTIONS_RP1",
        "value": "物理基礎"
      },
      {
        "code": "ROUTE_CLASS_OPTIONS_RQ1",
        "value": "化学基礎"
      }
    ]
  }
}
```

#### 3.5.2. 会員情報のセット

下記の会員情報をアウトプット用DTOにセットする。

- nickname
- courseCode
- birthday
- zemiLinkedFlag：input.ゼミ会員連携済みフラグ
- contractMaintenanceFlag： input.契約メンテフラグ
- hasParentEmail： [保護者メールアドレスを取得する](#33-保護者メールアドレスを取得する)の結果が0件の場合、false, それ以外はtrue
- hasPaidPlanHistory： [契約情報テーブルより取得する](#341-契約情報テーブルより取得する)の結果が0件の場合、false, それ以外はtrue

（例）

```json
{
  "nickname": "たろうさん",
  "courseCode": "route",
  "birthday": "20080101",
  "zemiLinkedFlag": true,
  "contractMaintenanceFlag": false,
  "hasParentEmail": true,
  "hasPaidPlanHistory": false,
  "userAttributes":{
    "T_USER_ATTRIBUTE.ATTRIBUTE_KIND":{
      "code": "T_USER_ATTRIBUTE.ATTRIBUTE_KIND",
      "value": "NAME"
    },
    "ROUTE_TEACHER_SELECTION":{
      "code": "ROUTE_TEACHER_SELECTION_03",
      "value": "笠原先生"
    },
    "ROUTE_STUDY_CLASS_OPTIONS":[
      {
        "code": "ROUTE_CLASS_OPTIONS_E00",
        "value": "英語"
      },
      {
        "code": "ROUTE_CLASS_OPTIONS_M00",
        "value": "数学"
      },
      {
        "code": "ROUTE_CLASS_OPTIONS_RP1",
        "value": "物理基礎"
      },
      {
        "code": "ROUTE_CLASS_OPTIONS_RQ1",
        "value": "化学基礎"
      }
    ]
  }
}
```

#### 3.5.3. 正常終了処理

加工したuserAttributesをアウトプット用DTOにセットし、返却して処理終了。

## 4. エラー処理

| No  | ステータスコード | エラー種別 | メッセージ                                        | 補足                                 |
| --- | ---------------- | ---------- | ------------------------------------------------- | ------------------------------------ |
| 1   | 400              | 2000       | パラメータエラーです。                            | バリデーションチェックでエラーの場合 |
| 2   | 500              | 5504       | \{DB名\}の\{取得/登録/更新/削除\}に失敗しました。 | BLSのDB取得・更新件数想定外          |
| 3   | 400              | 3007       | 対象の\{DB名\}が存在しません。                    |                                      |
| 4   | 500              | 9999       | 想定外のエラーが発生しました。                    | 上記以外の想定外のエラーの場合       |
