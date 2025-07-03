-- ============================================================================
-- 統合DDLファイル
-- 作成日: 2024-03-21
-- ============================================================================

-- ----------------------------------------------------------------------------
-- マスターテーブル
-- ----------------------------------------------------------------------------

USE [your_database_name]
GO

-- 既存のテーブルが存在する場合は削除
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[M_APP_TYPE]') AND type in (N'U'))
DROP TABLE [dbo].[M_APP_TYPE]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[M_COMPANY]') AND type in (N'U'))
DROP TABLE [dbo].[M_COMPANY]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[M_DELIVERY_DATE]') AND type in (N'U'))
DROP TABLE [dbo].[M_DELIVERY_DATE]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[M_DEPARTMENT]') AND type in (N'U'))
DROP TABLE [dbo].[M_DEPARTMENT]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[M_EMPLOYEE]') AND type in (N'U'))
DROP TABLE [dbo].[M_EMPLOYEE]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[M_INSTALLATION_TYPE]') AND type in (N'U'))
DROP TABLE [dbo].[M_INSTALLATION_TYPE]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[M_LOCATION]') AND type in (N'U'))
DROP TABLE [dbo].[M_LOCATION]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[M_NETWORK_ENV]') AND type in (N'U'))
DROP TABLE [dbo].[M_NETWORK_ENV]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[M_PC_MODEL]') AND type in (N'U'))
DROP TABLE [dbo].[M_PC_MODEL]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[T_APP_INFO]') AND type in (N'U'))
DROP TABLE [dbo].[T_APP_INFO]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[T_BASIC_INFO]') AND type in (N'U'))
DROP TABLE [dbo].[T_BASIC_INFO]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[T_FILE_INFO]') AND type in (N'U'))
DROP TABLE [dbo].[T_FILE_INFO]
GO

IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[T_PC_REQUEST]') AND type in (N'U'))
DROP TABLE [dbo].[T_PC_REQUEST]
GO

-- テーブル作成を開始します 

-- ----------------------------------------------------------------------------
-- 申請種別マスタ
-- ----------------------------------------------------------------------------
CREATE TABLE M_APP_TYPE (
    -- 申請種別ID
    id NVARCHAR(10) PRIMARY KEY,
    -- 申請種別名
    name NVARCHAR(100) NOT NULL,
    -- 申請種別説明
    description NVARCHAR(500),
    -- 有効フラグ
    is_active BIT NOT NULL,
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL
);
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請種別マスタ',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_APP_TYPE';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請種別を一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_APP_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'id';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請種別の名称',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_APP_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'name';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請種別の詳細説明',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_APP_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'description';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'1: 有効、0: 無効',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_APP_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'is_active';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_APP_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'created_at';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_APP_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'updated_at';
GO

-- ----------------------------------------------------------------------------
-- 企業マスタ
-- ----------------------------------------------------------------------------
CREATE TABLE M_COMPANY (
    -- 企業ID
    id NVARCHAR(10) PRIMARY KEY,
    -- 企業名
    name NVARCHAR(100) NOT NULL,
    -- 有効フラグ
    is_active BIT NOT NULL,
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL
);
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'企業マスタ',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'企業を一意に識別する業務ID',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY',
    @level2type = N'COLUMN',
    @level2name = N'id';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'企業の正式名称',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY',
    @level2type = N'COLUMN',
    @level2name = N'name';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'1: 有効、0: 無効',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY',
    @level2type = N'COLUMN',
    @level2name = N'is_active';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY',
    @level2type = N'COLUMN',
    @level2name = N'created_at';
GO

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY',
    @level2type = N'COLUMN',
    @level2name = N'updated_at';
GO 