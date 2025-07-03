-- ----------------------------------------------------------------------------
-- 導入区分マスタ
-- ----------------------------------------------------------------------------
CREATE TABLE M_INSTALLATION_TYPE (
    -- 導入区分ID
    id NVARCHAR(10) PRIMARY KEY,
    -- 導入区分名
    name NVARCHAR(100) NOT NULL,
    -- 導入区分説明
    description NVARCHAR(500),
    -- 有効フラグ
    is_active BIT NOT NULL,
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL
);

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'導入区分マスタ',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_INSTALLATION_TYPE';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'導入区分を一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_INSTALLATION_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'導入区分の名称',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_INSTALLATION_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'name';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'導入区分の詳細説明',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_INSTALLATION_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'description';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'1: 有効、0: 無効',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_INSTALLATION_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'is_active';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_INSTALLATION_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_INSTALLATION_TYPE',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 