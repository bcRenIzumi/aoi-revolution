export const appBasicFormConfig = {
    sections: [
        {
            key: 'basic-info',
            title: '基本情報',
            fields: [
                {
                    type: 'row',
                    key: 'basic-info-row1',
                    fields: [
                        {
                            type: 'text',
                            name: 'applicationNumber',
                            label: '申請番号',
                            readOnly: true,
                            defaultValue: ''
                        },
                        {
                            type: 'date',
                            name: 'applicationDate',
                            label: '申請日',
                            required: true,
                            defaultValue: ''
                        }
                    ]
                },
                {
                    type: 'text',
                    name: 'subject',
                    label: '件名',
                    required: true,
                    placeholder: '件名を入力してください'
                }
            ]
        },
        {
            key: 'applicant-info',
            title: '申請者情報',
            fields: [
                {
                    type: 'row',
                    key: 'applicant-info-row1',
                    fields: [
                        {
                            type: 'text',
                            name: 'company',
                            label: '所属会社',
                            required: true,
                            placeholder: '株式会社〇〇'
                        },
                        {
                            type: 'text',
                            name: 'applicantName',
                            label: '氏名',
                            required: true,
                            placeholder: '山田 太郎'
                        }
                    ]
                },
                {
                    type: 'row',
                    key: 'applicant-info-row2',
                    fields: [
                        {
                            type: 'select',
                            name: 'department',
                            label: '所属部門',
                            required: true,
                            placeholder: '部門を選択してください',
                            options: [
                                { value: 'general', label: '総務部' },
                                { value: 'hr', label: '人事部' },
                                { value: 'it', label: '情報システム部' },
                                { value: 'sales', label: '営業部' },
                                { value: 'marketing', label: 'マーケティング部' },
                                { value: 'finance', label: '経理部' },
                                { value: 'development', label: '開発部' },
                                { value: 'other', label: 'その他' }
                            ]
                        },
                        {
                            type: 'text',
                            name: 'section',
                            label: '所属課',
                            placeholder: '第1課'
                        }
                    ]
                },
                {
                    type: 'row',
                    key: 'applicant-info-row3',
                    fields: [
                        {
                            type: 'email',
                            name: 'email',
                            label: 'メールアドレス',
                            required: true,
                            placeholder: 'taro.yamada@domain.co.jp'
                        },
                        {
                            type: 'text',
                            name: 'employeeNumber',
                            label: '社員番号',
                            required: true,
                            placeholder: 'bc0099451'
                        }
                    ]
                },
                {
                    type: 'tel',
                    name: 'extension',
                    label: '内線番号',
                    placeholder: '46163'
                }
            ]
        },
        {
            key: 'approver-info',
            title: '承認者情報',
            fields: [
                {
                    type: 'select',
                    name: 'supervisor',
                    label: '上司から選択',
                    required: true,
                    placeholder: '上司を選択してください',
                    options: [
                        { value: 'tanaka', label: '田中 次郎（部長）' },
                        { value: 'sato', label: '佐藤 花子（課長）' },
                        { value: 'suzuki', label: '鈴木 一郎（係長）' },
                        { value: 'other', label: 'その他' }
                    ]
                },
                {
                    type: 'row',
                    key: 'approver-info-row1',
                    fields: [
                        {
                            type: 'select',
                            name: 'approver1',
                            label: '承認者１',
                            required: true,
                            placeholder: '承認者１を選択してください',
                            options: [
                                { value: 'dept_manager', label: '部門長' },
                                { value: 'section_chief', label: '課長' },
                                { value: 'supervisor', label: '係長' },
                                { value: 'custom', label: 'その他指定' }
                            ]
                        },
                        {
                            type: 'select',
                            name: 'approver2',
                            label: '承認者２',
                            placeholder: '承認者２を選択してください（任意）',
                            options: [
                                { value: 'general_manager', label: '本部長' },
                                { value: 'director', label: '取締役' },
                                { value: 'president', label: '社長' },
                                { value: 'custom', label: 'その他指定' }
                            ]
                        }
                    ]
                },
                {
                    type: 'checkbox-group',
                    key: 'agreement-group',
                    fields: [
                        {
                            type: 'checkbox',
                            name: 'publicFlag',
                            label: '公開フラグ'
                        },
                        {
                            type: 'checkbox',
                            name: 'agreement',
                            label: '上記内容に相違なく、申請いたします。',
                            required: true
                        }
                    ]
                }
            ]
        }
    ]
}; 