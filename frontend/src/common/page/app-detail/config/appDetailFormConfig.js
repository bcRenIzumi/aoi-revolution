export const appDetailFormConfig = {
    sections: [
        {
            key: 'device-info',
            title: '機器情報',
            fields: [
                {
                    type: 'select',
                    name: 'deviceManagementCompany',
                    label: '管理会社',
                    required: true,
                    placeholder: '管理会社を選択してください',
                    apiUrl: '/api/management-companies'
                },
                {
                    type: 'select',
                    name: 'desiredDeliveryDate',
                    label: '希望納品日',
                    required: true,
                    placeholder: '希望納品日を選択してください',
                    apiUrl: '/api/delivery-dates'
                }
            ]
        },
        {
            key: 'admin-info',
            title: '管理者情報',
            fields: [
                {
                    type: 'text',
                    name: 'adminDepartment',
                    label: '部門名',
                    required: true,
                    placeholder: '部門名を入力してください'
                },
                {
                    type: 'text',
                    name: 'adminBeamsId',
                    label: 'BeAMSID',
                    required: true,
                    placeholder: 'BeAMSIDを入力してください',
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
        },
        {
            key: 'delivery-info',
            title: '納品先情報',
            fields: [
                {
                    type: 'select',
                    name: 'networkEnvironment',
                    label: 'ネットワーク利用環境',
                    required: true,
                    placeholder: 'ネットワーク利用環境を選択してください',
                    options: [
                        { value: 'dhcp', label: 'DHCP' }
                    ],
                    description: 'ベネッセネットワークが利用可能な場合、DHCPを選択してください'
                },
                {
                    type: 'text',
                    name: 'specifiedIpAddress',
                    label: '指定IPアドレス',
                    placeholder: 'IPアドレスを入力してください'
                },
                {
                    type: 'select',
                    name: 'deliveryCompany',
                    label: '社名',
                    required: true,
                    placeholder: '社名を選択してください'
                },
                {
                    type: 'select',
                    name: 'deliverySite',
                    label: '拠点',
                    required: true,
                    placeholder: '拠点を選択してください',
                    options: [
                        { value: 'other', label: 'その他' }
                    ]
                },
                {
                    type: 'text',
                    name: 'deliveryZipCode',
                    label: '住所〒',
                    placeholder: '郵便番号を入力してください',
                    description: '納品先が"その他"の時は手入力してください'
                },
                {
                    type: 'textarea',
                    name: 'deliveryAddress',
                    label: '住所',
                    rows: 3,
                    placeholder: '住所を入力してください',
                    description: '納品先が"その他"の時は手入力してください'
                },
                {
                    type: 'text',
                    name: 'deliveryFloor',
                    label: 'フロア',
                    placeholder: 'フロアを入力してください'
                },
                {
                    type: 'textarea',
                    name: 'deliveryDepartment',
                    label: '部門名',
                    rows: 3,
                    placeholder: '部門名を入力してください'
                },
                {
                    type: 'text',
                    name: 'recipient',
                    label: '受取担当者',
                    required: true,
                    placeholder: '受取担当者名を入力してください'
                },
                {
                    type: 'tel',
                    name: 'recipientPhone',
                    label: '受取先電話番号',
                    required: true,
                    placeholder: '電話番号を入力してください',
                    description: '内線・外線番号のどちらでも可能です'
                },
                {
                    type: 'select',
                    name: 'installationCategory',
                    label: '導入区分',
                    placeholder: '導入区分を選択してください'
                },
                {
                    type: 'select',
                    name: 'selectedModel',
                    label: '選択機種番号',
                    required: true,
                    placeholder: '選択機種番号を選択してください',
                    description: '一元調達パソコンラインナップ'
                },
                {
                    type: 'text',
                    name: 'applicationQuantity',
                    label: '申請台数',
                    required: true,
                    placeholder: '申請台数を入力してください',
                    description: '2台以上申請をする場合、管理者・使用者・設置場所・納品先等の情報は全て同一となります'
                },
                {
                    type: 'text',
                    name: 'applicationReason',
                    label: '申請理由',
                    required: true,
                    placeholder: '申請理由を入力してください'
                },
                {
                    type: 'text',
                    name: 'currentPcManagementNumber',
                    label: '現行PC管理番号',
                    placeholder: '管理番号を入力してください',
                    description: 'PCに貼付の管理番号シールを参照ください'
                },
                {
                    type: 'date',
                    name: 'currentPcContractEndDate',
                    label: '現行PCの契約終了日',
                    description: 'PCに貼付の管理番号シールを参照ください'
                }
            ]
        }
    ]
}; 