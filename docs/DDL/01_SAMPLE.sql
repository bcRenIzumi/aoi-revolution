CREATE TABLE M_COURSE (
    -- コースコード(コードでプライベートか判断?)
    CODE NVARCHAR(64) PRIMARY KEY,
    -- コース名
    NAME NVARCHAR(255) NOT NULL,
    -- 登録日
    CREATED_AT datetime2 DEFAULT dateadd(hour, 9, SYSUTCDATETIME()) NOT NULL,
    -- 更新日
    UPDATED_AT datetime2 DEFAULT dateadd(hour, 9, SYSUTCDATETIME()) NOT NULL,
);

EXEC sp_addextendedproperty 
@name=N'MS_Description', 
@value=N'コースマスタ' , 
@level0type=N'SCHEMA',
@level0name=N'cpxapladmin', 
@level1type=N'TABLE',
@level1name=N'M_COURSE';


EXEC sp_addextendedproperty 
@name = N'MS_Description',
@value = N'コースコード',
@level0type = N'SCHEMA',
@level0name = N'cpxapladmin',
@level1type = N'TABLE',
@level1name = N'M_COURSE',
@level2type = N'COLUMN',
@level2name = N'CODE';

EXEC sp_addextendedproperty 
@name=N'MS_Description', 
@value=N'コース名' , 
@level0type=N'SCHEMA',
@level0name=N'cpxapladmin', 
@level1type=N'TABLE',
@level1name=N'M_COURSE', 
@level2type=N'COLUMN',
@level2name=N'NAME';

EXEC sp_addextendedproperty 
@name=N'MS_Description', 
@value=N'登録日' , 
@level0type=N'SCHEMA',
@level0name=N'cpxapladmin', 
@level1type=N'TABLE',
@level1name=N'M_COURSE', 
@level2type=N'COLUMN',
@level2name=N'CREATED_AT';

EXEC sp_addextendedproperty 
@name=N'MS_Description', 
@value=N'更新日' , 
@level0type=N'SCHEMA',
@level0name=N'cpxapladmin', 
@level1type=N'TABLE',
@level1name=N'M_COURSE', 
@level2type=N'COLUMN',
@level2name=N'UPDATED_AT';

