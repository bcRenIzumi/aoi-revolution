-- ----------------------------------------------------------------------------
-- 社員マスタ
-- ----------------------------------------------------------------------------
CREATE TABLE M_EMPLOYEE (
    -- 社員ID
    id NVARCHAR(10) PRIMARY KEY,
    -- 企業ID
    company_id NVARCHAR(10) NOT NULL,
    -- 部門ID
    department_id NVARCHAR(10) NOT NULL,
    -- 拠点ID
    location_id NVARCHAR(10) NOT NULL,
    -- 社員番号
    employee_no NVARCHAR(20) NOT NULL,
    -- 氏名
    name NVARCHAR(100) NOT NULL,
    -- メールアドレス
    email NVARCHAR(200) NOT NULL,
    -- 電話番号
    phone NVARCHAR(20) NOT NULL,
    -- 役職
    position NVARCHAR(100),
    -- 有効フラグ
    is_active BIT NOT NULL,
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 外部キー制約
    CONSTRAINT FK_EMPLOYEE_COMPANY FOREIGN KEY (company_id) REFERENCES M_COMPANY(id),
    CONSTRAINT FK_EMPLOYEE_DEPARTMENT FOREIGN KEY (department_id) REFERENCES M_DEPARTMENT(id),
    CONSTRAINT FK_EMPLOYEE_LOCATION FOREIGN KEY (location_id) REFERENCES M_LOCATION(id)
);

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'社員マスタ',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'社員を一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'企業ID (M_COMPANY.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'company_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'部門ID (M_DEPARTMENT.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'department_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'拠点ID (M_LOCATION.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'location_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'社員番号',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'employee_no';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'社員の氏名',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'name';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'社員のメールアドレス',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'email';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'社員の電話番号',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'phone';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'社員の役職',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'position';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'1: 有効、0: 無効',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'is_active';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'M_EMPLOYEE',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 