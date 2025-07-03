-- ----------------------------------------------------------------------------
-- PC申請情報テーブル
-- ----------------------------------------------------------------------------
CREATE TABLE T_PC_REQUEST (
    -- PC申請ID
    id NVARCHAR(20) PRIMARY KEY,
    -- 申請情報ID
    app_info_id NVARCHAR(20) NOT NULL,
    -- 管理会社ID
    company_id NVARCHAR(10) NOT NULL,
    -- 希望納品日ID
    delivery_date_id NVARCHAR(10) NOT NULL,
    -- 管理者部門名
    manager_dept NVARCHAR(100) NOT NULL,
    -- 管理者ID
    manager_id NVARCHAR(10) NOT NULL,
    -- 管理者氏名
    manager_name NVARCHAR(50) NOT NULL,
    -- 費用負担先コード
    cost_code NVARCHAR(20),
    -- 使用者部門名
    user_dept NVARCHAR(100),
    -- 使用者ID
    user_id NVARCHAR(10),
    -- 使用者氏名
    user_name NVARCHAR(50),
    -- 設置拠点ID
    location_id NVARCHAR(10) NOT NULL,
    -- 設置フロア
    floor NVARCHAR(50),
    -- 設置拠点その他
    other_loc NVARCHAR(200),
    -- 設置場所詳細
    loc_detail NVARCHAR(200),
    -- ネットワーク環境ID
    network_env_id NVARCHAR(10) NOT NULL,
    -- 指定IPアドレス
    ip_address NVARCHAR(15),
    -- 納品先社名ID
    dlv_comp_id NVARCHAR(10) NOT NULL,
    -- 納品先拠点ID
    dlv_loc_id NVARCHAR(10) NOT NULL,
    -- 納品先郵便番号
    dlv_postal NVARCHAR(8),
    -- 納品先住所
    dlv_address NVARCHAR(200),
    -- 納品先フロア
    dlv_floor NVARCHAR(50),
    -- 納品先部門名
    dlv_dept NVARCHAR(100),
    -- 受取担当者名
    receiver NVARCHAR(50) NOT NULL,
    -- 受取担当者電話番号
    receiver_tel NVARCHAR(20) NOT NULL,
    -- 導入区分ID
    installation_type_id NVARCHAR(10),
    -- PCモデルID
    pc_model_id NVARCHAR(10) NOT NULL,
    -- 申請台数
    quantity INT NOT NULL,
    -- 申請理由
    reason NVARCHAR(1000) NOT NULL,
    -- 現行PC管理番号
    current_pc_no NVARCHAR(20),
    -- 現行PC契約終了日
    current_end DATE,
    -- 申請状態
    status NVARCHAR(20) NOT NULL,
    -- 申請日
    request_date DATE NOT NULL,
    -- 承認日
    approve_date DATE,
    -- 承認者ID
    approver_id NVARCHAR(10),
    -- 有効フラグ
    is_active BIT NOT NULL DEFAULT 1,
    -- 作成日時
    created_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日時
    updated_at DATETIME2 DEFAULT DATEADD(HOUR, 9, SYSUTCDATETIME()) NOT NULL,
    -- 外部キー制約
    CONSTRAINT FK_PC_REQUEST_APP_INFO FOREIGN KEY (app_info_id) REFERENCES T_APP_INFO(id),
    CONSTRAINT FK_PC_REQUEST_COMPANY FOREIGN KEY (company_id) REFERENCES M_COMPANY(id),
    CONSTRAINT FK_PC_REQUEST_DELIVERY_DATE FOREIGN KEY (delivery_date_id) REFERENCES M_DELIVERY_DATE(id),
    CONSTRAINT FK_PC_REQUEST_MANAGER FOREIGN KEY (manager_id) REFERENCES M_EMPLOYEE(id),
    CONSTRAINT FK_PC_REQUEST_USER FOREIGN KEY (user_id) REFERENCES M_EMPLOYEE(id),
    CONSTRAINT FK_PC_REQUEST_LOCATION FOREIGN KEY (location_id) REFERENCES M_LOCATION(id),
    CONSTRAINT FK_PC_REQUEST_NETWORK_ENV FOREIGN KEY (network_env_id) REFERENCES M_NETWORK_ENV(id),
    CONSTRAINT FK_PC_REQUEST_DLV_COMPANY FOREIGN KEY (dlv_comp_id) REFERENCES M_COMPANY(id),
    CONSTRAINT FK_PC_REQUEST_DLV_LOCATION FOREIGN KEY (dlv_loc_id) REFERENCES M_LOCATION(id),
    CONSTRAINT FK_PC_REQUEST_INSTALLATION_TYPE FOREIGN KEY (installation_type_id) REFERENCES M_INSTALLATION_TYPE(id),
    CONSTRAINT FK_PC_REQUEST_PC_MODEL FOREIGN KEY (pc_model_id) REFERENCES M_PC_MODEL(id),
    CONSTRAINT FK_PC_REQUEST_APPROVER FOREIGN KEY (approver_id) REFERENCES M_EMPLOYEE(id)
);

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PC申請情報テーブル',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PC申請を一意に識別するID',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請情報ID (T_APP_INFO.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'app_info_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'管理会社ID (M_COMPANY.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'company_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'希望納品日ID (M_DELIVERY_DATE.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'delivery_date_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'管理者部門名',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'manager_dept';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'管理者ID (M_EMPLOYEE.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'manager_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'管理者氏名',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'manager_name';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'費用負担先コード',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'cost_code';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'使用者部門名',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'user_dept';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'使用者ID (M_EMPLOYEE.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'user_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'使用者氏名',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'user_name';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'設置拠点ID (M_LOCATION.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'location_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'設置フロア',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'floor';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'その他の設置拠点詳細',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'other_loc';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'設置場所の詳細情報',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'loc_detail';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'ネットワーク環境ID (M_NETWORK_ENV.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'network_env_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'指定IPアドレス',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'ip_address';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'納品先の社名ID (M_COMPANY.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'dlv_comp_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'納品先の拠点ID (M_LOCATION.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'dlv_loc_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'納品先の郵便番号',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'dlv_postal';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'納品先の住所',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'dlv_address';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'納品先のフロア',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'dlv_floor';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'納品先の部門名',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'dlv_dept';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'受取担当者の氏名',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'receiver';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'受取担当者の電話番号',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'receiver_tel';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'導入区分ID (M_INSTALLATION_TYPE.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'installation_type_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'PCモデルID (M_PC_MODEL.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'pc_model_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請PC台数',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'quantity';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請理由',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'reason';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'現行PCの管理番号',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'current_pc_no';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'現行PCの契約終了日',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'current_end';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請の現在の状態',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'status';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請が行われた日付',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'request_date';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'申請が承認された日付',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'approve_date';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'承認者ID (M_EMPLOYEE.id)',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'approver_id';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'有効フラグ（1: 有効、0: 無効）',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'is_active';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'作成日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'created_at';

EXEC sp_addextendedproperty 
    @name = N'MS_Description',
    @value = N'更新日時',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'T_PC_REQUEST',
    @level2type = N'COLUMN',
    @level2name = N'updated_at'; 