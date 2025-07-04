export const formConfig2 = {
    sections: [
        {
            key: 'user-info',
            title: '使用者情報',
            fields: [
                {
                    type: 'select',
                    name: 'userName',
                    label: '氏名（選択）',
                    placeholder: '氏名を選択してください',
                    apiUrl: '/api/secure/employee/list'
                },
                {
                    type: 'text',
                    name: 'remarks',
                    label: '備考',
                    placeholder: '備考を入力してください'
                }
            ]
        }
    ]
}; 