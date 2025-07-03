-- ----------------------------------------------------------------------------
-- PC申請情報テーブル
-- ----------------------------------------------------------------------------
CREATE TABLE T_PC_REQUEST (
    -- PC申請ID
    id NVARCHAR(20) PRIMARY KEY,
    -- 申請情報ID
    app_info_id NVARCHAR(20) NOT NULL,
    -- PCモデルID
    pc_model_id NVARCHAR(10) NOT NULL,
    -- 希望納品日ID
    delivery_date_id NVARCHAR(10) NOT NULL,
    -- ネットワーク環境ID
    network_env_id NVARCHAR(10) NOT NULL,
    -- 導入区分ID
    installation_type_id NVARCHAR(10) NOT NULL,
    -- 備考
    remarks NVARCHAR(1000),
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 外部キー制約
    CONSTRAINT FK_PC_REQUEST_APP_INFO FOREIGN KEY (app_info_id) REFERENCES T_APP_INFO(id),
    CONSTRAINT FK_PC_REQUEST_PC_MODEL FOREIGN KEY (pc_model_id) REFERENCES M_PC_MODEL(id),
    CONSTRAINT FK_PC_REQUEST_DELIVERY_DATE FOREIGN KEY (delivery_date_id) REFERENCES M_DELIVERY_DATE(id),
    CONSTRAINT FK_PC_REQUEST_NETWORK_ENV FOREIGN KEY (network_env_id) REFERENCES M_NETWORK_ENV(id),
    CONSTRAINT FK_PC_REQUEST_INSTALLATION_TYPE FOREIGN KEY (installation_type_id) REFERENCES M_INSTALLATION_TYPE(id)
);

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PC申請情報テーブル',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PC申請を一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請情報ID (T_APP_INFO.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'app_info_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PCモデルID (M_PC_MODEL.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'pc_model_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'希望納品日ID (M_DELIVERY_DATE.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'delivery_date_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ネットワーク環境ID (M_NETWORK_ENV.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'network_env_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'導入区分ID (M_INSTALLATION_TYPE.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'installation_type_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請に関する補足情報',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'remarks';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 