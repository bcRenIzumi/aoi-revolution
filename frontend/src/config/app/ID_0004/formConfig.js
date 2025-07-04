export const formConfig = {
    sections: [
        {
            key: 'user-info',
            title: '使用者情報',
            fields: [
                {
                    type: 'select',
                    name: 'companyLocation',
                    label: '会社の場所',
                    required: false,
                    placeholder: '会社の場所を選択してください',
                    apiUrl: '/api/secure/company/location'
                },
                {
                    type: 'text',
                    name: 'remarks',
                    label: '備考',
                    required: false,
                    placeholder: '備考を入力してください'
                }
            ]
        }
    ]
}; 