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

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'企業マスタ',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'企業を一意に識別する業務ID',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'企業の正式名称',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY',
    @level2type = N'COLUMN',
    @level2name = N'name';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'1: 有効、0: 無効',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY',
    @level2type = N'COLUMN',
    @level2name = N'is_active';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_COMPANY',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 