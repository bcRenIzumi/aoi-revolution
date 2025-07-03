-- ----------------------------------------------------------------------------
-- ネットワーク環境マスタ
-- ----------------------------------------------------------------------------
CREATE TABLE M_NETWORK_ENV (
    -- ネットワーク環境ID
    id NVARCHAR(10) PRIMARY KEY,
    -- ネットワーク環境名
    name NVARCHAR(100) NOT NULL,
    -- ネットワーク環境説明
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
    @value = N'ネットワーク環境マスタ',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_NETWORK_ENV';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ネットワーク環境を一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_NETWORK_ENV',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ネットワーク環境の名称',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_NETWORK_ENV',
    @level2type = N'COLUMN',
    @level2name = N'name';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ネットワーク環境の詳細説明',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_NETWORK_ENV',
    @level2type = N'COLUMN',
    @level2name = N'description';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'1: 有効、0: 無効',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_NETWORK_ENV',
    @level2type = N'COLUMN',
    @level2name = N'is_active';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_NETWORK_ENV',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_NETWORK_ENV',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 