export const formConfig2 = {
    sections: [
        {
            key: 'device-info',
            title: '機器情報',
            fields: [
                {
                    type: 'select',
                    name: 'height',
                    label: '高さ',
                    required: true,
                    placeholder: '高さを選択してください',
                    apiUrl: '/api/height-options'
                },
                {
                    type: 'select',
                    name: 'stepLevels',
                    label: '段数',
                    required: true,
                    placeholder: '段数を選択してください',
                    apiUrl: '/api/step-levels'
                },
                {
                    type: 'select',
                    name: 'managementCompany',
                    label: '管理会社',
                    required: true,
                    placeholder: '管理会社を選択してください',
                    apiUrl: '/api/secure/company/list'
                }
            ]
        },
        {
            key: 'admin-info',
            title: '管理者情報',
            fields: [
                {
                    type: 'text',
                    name: 'homeCenterName',
                    label: 'ホームセンター名',
                    required: true,
                    placeholder: 'ホームセンター名を入力してください'
                },
                {
                    type: 'text',
                    name: 'centerId',
                    label: 'センターID',
                    required: true,
                    placeholder: 'センターIDを入力してください',
                    description: 'z系IDは管理者に設定できません'
                },
                {
                    type: 'select',
                    name: 'adminName',
                    label: '氏名',
                    required: true,
                    placeholder: '氏名を選択してください',
                    description: 'BeAMSIDの入力後に表示される氏名は変更しないでください'
                },
                {
                    type: 'text',
                    name: 'costBurdenCode',
                    label: '指定費用負担先コード',
                    placeholder: '費用負担先コードを入力してください',
                    description: '対象はBCのみです。管理者の経理コードと同じ場合は、入力しないでください'
                }
            ]
        },
        {
            key: 'user-info',
            title: '使用者情報',
            fields: [
                {
                    type: 'text',
                    name: 'userDepartment',
                    label: '部門名',
                    placeholder: '部門名を入力してください'
                },
                {
                    type: 'text',
                    name: 'userBeamsId',
                    label: 'BeAMSID',
                    placeholder: 'BeAMSIDを入力してください'
                },
                {
                    type: 'select',
                    name: 'userName',
                    label: '氏名（選択）',
                    placeholder: '氏名を選択してください'
                },
                {
                    type: 'text',
                    name: 'userNameFree',
                    label: '氏名（フリー入力）',
                    placeholder: '氏名を入力してください'
                }
            ]
        },
        {
            key: 'installation-info',
            title: '設置情報',
            fields: [
                {
                    type: 'select',
                    name: 'installationSite',
                    label: '拠点',
                    required: true,
                    placeholder: '拠点を選択してください',
                    options: [
                        { value: 'other', label: 'その他' }
                    ]
                },
                {
                    type: 'text',
                    name: 'installationFloor',
                    label: 'フロア',
                    placeholder: 'フロアを入力してください'
                },
                {
                    type: 'textarea',
                    name: 'installationSiteOther',
                    label: '拠点（その他）',
                    rows: 3,
                    placeholder: '拠点の詳細を入力してください',
                    description: '拠点が「その他」の場合のみ入力してください'
                },
                {
                    type: 'textarea',
                    name: 'installationDetail',
                    label: '場所詳細',
                    rows: 3,
                    placeholder: '場所の詳細を入力してください',
                    description: '管理に必要な場合のみ入力してください'
                }
            ]
        }
    ]
}; 