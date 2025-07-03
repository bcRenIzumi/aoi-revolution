-- ----------------------------------------------------------------------------
-- 申請情報テーブル
-- ----------------------------------------------------------------------------
CREATE TABLE T_APP_INFO (
    -- 申請情報ID
    id NVARCHAR(20) PRIMARY KEY,
    -- 申請種別ID
    app_type_id NVARCHAR(10) NOT NULL,
    -- 申請者ID
    applicant_id NVARCHAR(10) NOT NULL,
    -- 申請ステータス
    status NVARCHAR(20) NOT NULL,
    -- 申請日時
    applied_at DATETIME2 NOT NULL,
    -- 承認日時
    approved_at DATETIME2,
    -- 却下日時
    rejected_at DATETIME2,
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 外部キー制約
    CONSTRAINT FK_APP_INFO_APP_TYPE FOREIGN KEY (app_type_id) REFERENCES M_APP_TYPE(id),
    CONSTRAINT FK_APP_INFO_EMPLOYEE FOREIGN KEY (applicant_id) REFERENCES M_EMPLOYEE(id)
);

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請情報テーブル',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_APP_INFO';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請を一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_APP_INFO',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請種別ID (M_APP_TYPE.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_APP_INFO',
    @level2type = N'COLUMN',
    @level2name = N'app_type_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請者ID (M_EMPLOYEE.id)',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_APP_INFO',
    @level2type = N'COLUMN',
    @level2name = N'applicant_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請のステータス（申請中、承認済、却下等）',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_APP_INFO',
    @level2type = N'COLUMN',
    @level2name = N'status';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請が行われた日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_APP_INFO',
    @level2type = N'COLUMN',
    @level2name = N'applied_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請が承認された日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_APP_INFO',
    @level2type = N'COLUMN',
    @level2name = N'approved_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請が却下された日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_APP_INFO',
    @level2type = N'COLUMN',
    @level2name = N'rejected_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_APP_INFO',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'cpxapladmin',
    @level1type = N'TABLE',
    @level1name = N'T_APP_INFO',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 