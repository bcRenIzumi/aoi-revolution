-- ----------------------------------------------------------------------------
-- ファイル情報テーブル
-- ----------------------------------------------------------------------------
CREATE TABLE T_FILE_INFO (
    -- ファイル情報ID
    id NVARCHAR(20) PRIMARY KEY,
    -- 申請情報ID
    app_info_id NVARCHAR(20) NOT NULL,
    -- ファイル名
    file_name NVARCHAR(200) NOT NULL,
    -- ファイルパス
    file_path NVARCHAR(500) NOT NULL,
    -- ファイルサイズ（バイト）
    file_size BIGINT NOT NULL,
    -- MIMEタイプ
    mime_type NVARCHAR(100) NOT NULL,
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 外部キー制約
    CONSTRAINT FK_FILE_INFO_APP_INFO FOREIGN KEY (app_info_id) REFERENCES T_APP_INFO(id)
);

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ファイル情報テーブル',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_FILE_INFO';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ファイル情報を一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_FILE_INFO',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請情報ID (T_APP_INFO.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_FILE_INFO',
    @level2type = N'COLUMN',
    @level2name = N'app_info_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'アップロードされたファイルの元のファイル名',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_FILE_INFO',
    @level2type = N'COLUMN',
    @level2name = N'file_name';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ファイルの保存パス',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_FILE_INFO',
    @level2type = N'COLUMN',
    @level2name = N'file_path';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ファイルのサイズ（バイト単位）',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_FILE_INFO',
    @level2type = N'COLUMN',
    @level2name = N'file_size';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ファイルのMIMEタイプ',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_FILE_INFO',
    @level2type = N'COLUMN',
    @level2name = N'mime_type';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_FILE_INFO',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_FILE_INFO',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 