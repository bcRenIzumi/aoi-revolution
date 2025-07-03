-- ----------------------------------------------------------------------------
-- 基本情報テーブル
-- ----------------------------------------------------------------------------
CREATE TABLE T_BASIC_INFO (
    -- 基本情報ID
    id NVARCHAR(20) PRIMARY KEY,
    -- 申請情報ID
    app_info_id NVARCHAR(20) NOT NULL,
    -- 企業ID
    company_id NVARCHAR(10) NOT NULL,
    -- 部門ID
    department_id NVARCHAR(10) NOT NULL,
    -- 拠点ID
    location_id NVARCHAR(10) NOT NULL,
    -- 利用者名
    user_name NVARCHAR(100) NOT NULL,
    -- 利用者メールアドレス
    user_email NVARCHAR(200) NOT NULL,
    -- 利用者電話番号
    user_phone NVARCHAR(20) NOT NULL,
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 外部キー制約
    CONSTRAINT FK_BASIC_INFO_APP_INFO FOREIGN KEY (app_info_id) REFERENCES T_APP_INFO(id),
    CONSTRAINT FK_BASIC_INFO_COMPANY FOREIGN KEY (company_id) REFERENCES M_COMPANY(id),
    CONSTRAINT FK_BASIC_INFO_DEPARTMENT FOREIGN KEY (department_id) REFERENCES M_DEPARTMENT(id),
    CONSTRAINT FK_BASIC_INFO_LOCATION FOREIGN KEY (location_id) REFERENCES M_LOCATION(id)
);

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'基本情報テーブル',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'基本情報を一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請情報ID (T_APP_INFO.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO',
    @level2type = N'COLUMN',
    @level2name = N'app_info_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'企業ID (M_COMPANY.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO',
    @level2type = N'COLUMN',
    @level2name = N'company_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'部門ID (M_DEPARTMENT.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO',
    @level2type = N'COLUMN',
    @level2name = N'department_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'拠点ID (M_LOCATION.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO',
    @level2type = N'COLUMN',
    @level2name = N'location_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PC利用者の氏名',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO',
    @level2type = N'COLUMN',
    @level2name = N'user_name';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PC利用者のメールアドレス',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO',
    @level2type = N'COLUMN',
    @level2name = N'user_email';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PC利用者の電話番号',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO',
    @level2type = N'COLUMN',
    @level2name = N'user_phone';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_BASIC_INFO',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 