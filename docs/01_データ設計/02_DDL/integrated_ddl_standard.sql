-- ============================================================================
-- 統合DDLファイル（標準SQL版）
-- 作成日: 2024-03-21
-- ============================================================================

-- ----------------------------------------------------------------------------
-- マスターテーブル
-- ----------------------------------------------------------------------------

DROP TABLE IF EXISTS M_APP_TYPE;
DROP TABLE IF EXISTS M_COMPANY;
DROP TABLE IF EXISTS M_DELIVERY_DATE;
DROP TABLE IF EXISTS M_DEPARTMENT;
DROP TABLE IF EXISTS M_EMPLOYEE;
DROP TABLE IF EXISTS M_INSTALLATION_TYPE;
DROP TABLE IF EXISTS M_LOCATION;
DROP TABLE IF EXISTS M_NETWORK_ENV;
DROP TABLE IF EXISTS M_PC_MODEL;

DROP TABLE IF EXISTS T_APP_INFO;
DROP TABLE IF EXISTS T_BASIC_INFO;
DROP TABLE IF EXISTS T_FILE_INFO;
DROP TABLE IF EXISTS T_PC_REQUEST;

-- ----------------------------------------------------------------------------
-- 申請種別マスタ
-- ----------------------------------------------------------------------------
CREATE TABLE M_APP_TYPE (
    -- 申請種別ID
    id VARCHAR(10) PRIMARY KEY,
    -- 申請種別名
    name VARCHAR(100) NOT NULL,
    -- 申請種別説明
    description VARCHAR(500),
    -- 有効フラグ
    is_active BOOLEAN NOT NULL,
    -- 作成日時
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -- 更新日時
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE M_APP_TYPE IS '申請種別マスタ';
COMMENT ON COLUMN M_APP_TYPE.id IS '申請種別を一意に識別するID';
COMMENT ON COLUMN M_APP_TYPE.name IS '申請種別の名称';
COMMENT ON COLUMN M_APP_TYPE.description IS '申請種別の詳細説明';
COMMENT ON COLUMN M_APP_TYPE.is_active IS '1: 有効、0: 無効';
COMMENT ON COLUMN M_APP_TYPE.created_at IS '作成日時';
COMMENT ON COLUMN M_APP_TYPE.updated_at IS '更新日時';

-- ----------------------------------------------------------------------------
-- 企業マスタ
-- ----------------------------------------------------------------------------
CREATE TABLE M_COMPANY (
    -- 企業ID
    id VARCHAR(10) PRIMARY KEY,
    -- 企業名
    name VARCHAR(100) NOT NULL,
    -- 有効フラグ
    is_active BOOLEAN NOT NULL,
    -- 作成日時
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -- 更新日時
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE M_COMPANY IS '企業マスタ';
COMMENT ON COLUMN M_COMPANY.id IS '企業を一意に識別する業務ID';
COMMENT ON COLUMN M_COMPANY.name IS '企業の正式名称';
COMMENT ON COLUMN M_COMPANY.is_active IS '1: 有効、0: 無効';
COMMENT ON COLUMN M_COMPANY.created_at IS '作成日時';
COMMENT ON COLUMN M_COMPANY.updated_at IS '更新日時'; 