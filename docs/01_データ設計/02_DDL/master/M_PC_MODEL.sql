-- ----------------------------------------------------------------------------
-- PCモデルマスタ
-- ----------------------------------------------------------------------------
CREATE TABLE M_PC_MODEL (
    -- PCモデルID
    id NVARCHAR(10) PRIMARY KEY,
    -- PCモデル名
    name NVARCHAR(100) NOT NULL,
    -- メーカー名
    manufacturer NVARCHAR(100) NOT NULL,
    -- CPU
    cpu NVARCHAR(100) NOT NULL,
    -- メモリ（GB）
    memory_gb INT NOT NULL,
    -- ストレージ種別
    storage_type NVARCHAR(50) NOT NULL,
    -- ストレージ容量（GB）
    storage_gb INT NOT NULL,
    -- 画面サイズ（インチ）
    screen_size DECIMAL(4,1) NOT NULL,
    -- OS
    os NVARCHAR(100) NOT NULL,
    -- 詳細説明
    description NVARCHAR(1000),
    -- 有効フラグ
    is_active BIT NOT NULL,
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL
);

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PCモデルマスタ',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PCモデルを一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PCモデルの名称',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'name';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PCのメーカー名',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'manufacturer';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'CPUの型番',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'cpu';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'メモリ容量（GB）',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'memory_gb';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ストレージの種類（SSD/HDD等）',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'storage_type';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ストレージ容量（GB）',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'storage_gb';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'画面サイズ（インチ）',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'screen_size';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'OSの種類とバージョン',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'os';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PCモデルの詳細説明',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'description';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'1: 有効、0: 無効',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'is_active';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'M_PC_MODEL',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 