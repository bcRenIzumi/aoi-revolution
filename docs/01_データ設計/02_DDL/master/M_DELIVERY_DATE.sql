-- ----------------------------------------------------------------------------
-- 希望納品日マスタ
-- ----------------------------------------------------------------------------
CREATE TABLE M_DELIVERY_DATE (
    -- 希望納品日ID
    id NVARCHAR(10) PRIMARY KEY,
    -- 希望納品日
    delivery_date DATE NOT NULL,
    -- 有効フラグ
    is_active BIT NOT NULL,
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL
);

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'希望納品日マスタ',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_DELIVERY_DATE';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'希望納品日を一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_DELIVERY_DATE',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'希望納品日',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_DELIVERY_DATE',
    @level2type = N'COLUMN',
    @level2name = N'delivery_date';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'1: 有効、0: 無効',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_DELIVERY_DATE',
    @level2type = N'COLUMN',
    @level2name = N'is_active';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_DELIVERY_DATE',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_DELIVERY_DATE',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 