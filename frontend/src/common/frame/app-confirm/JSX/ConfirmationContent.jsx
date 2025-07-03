import React from 'react';

const ConfirmationContent = () => {
    const formData = {
        applicationNumber: 'AOI2024/000001',
        name: '川 見 太郎',
        department: '情報システム部',
        company: '株式会社ベネッセコーポレーション',
        email: 'kawami@benesse.co.jp',
        employeeNumber: 'bc0109695',
        reason: '新規入社',
        quantity: '1台',
        reasonDetail: '新規入社に伴うPC手配をお願いします。業務開始予定日は2024年4月1日です。',
        reasonCategory: '新規入社',
        reasonCategoryDetail: '正社員',
        startDate: '2024年4月1日',
        endDate: '未定',
        confirmation: '承認済み',
        disposal: 'なし',
        reuse: 'なし',
        location: '東京本社 5階 情報システム部',
        adminSetting: '管理者権限なし',
        approver: '田中 太郎（部長）',
        urgency: '中',
        attachment1: '新規入社通知書.pdf (2.1MB)',
        attachment2: '申請書類.docx (1.8MB)',
        attachment3: '未添付',
        notes: '業務上必要なソフトウェアのインストールもお願いします。詳細は別途ご相談させていただきます。'
    };

    const FormRow = ({ label, value, isHighlight = false }) => (
        <div className="form-row">
            <div className="form-label">{label}</div>
            <div className="form-value">
                {isHighlight ? (
                    <span className="value-highlight">{value}</span>
                ) : (
                    value
                )}
            </div>
        </div>
    );

    return (
        <div className="confirmation-content">
            <h2 className="section-title">申請内容</h2>

            <FormRow label="申請番号" value={formData.applicationNumber} isHighlight={true} />
            <FormRow label="氏名" value={formData.name} />
            <FormRow label="部署" value={formData.department} />
            <FormRow label="所属会社" value={formData.company} />
            <FormRow label="メールアドレス" value={formData.email} />
            <FormRow label="社員番号" value={formData.employeeNumber} />
            <FormRow label="申請理由" value={formData.reason} />
            <FormRow label="申請台数" value={formData.quantity} isHighlight={true} />
            <FormRow label="申請理由詳細" value={formData.reasonDetail} />
            <FormRow label="申請理由カテゴリ" value={formData.reasonCategory} />
            <FormRow label="申請理由カテゴリ詳細" value={formData.reasonCategoryDetail} />
            <FormRow label="利用開始予定日" value={formData.startDate} />
            <FormRow label="利用終了予定日" value={formData.endDate} />
            <FormRow label="申請者確認事項" value={formData.confirmation} />
            <FormRow label="廃棄予定" value={formData.disposal} />
            <FormRow label="再利用" value={formData.reuse} />
            <FormRow label="設置場所" value={formData.location} />
            <FormRow label="管理者設定" value={formData.adminSetting} />
            <FormRow label="承認者" value={formData.approver} />
            <FormRow label="緊急度" value={formData.urgency} />
            <FormRow
                label="添付ファイル1"
                value={`✅ ${formData.attachment1}`}
                isHighlight={true}
            />
            <FormRow
                label="添付ファイル2"
                value={`✅ ${formData.attachment2}`}
                isHighlight={true}
            />
            <FormRow label="添付ファイル3" value={formData.attachment3} />
            <FormRow label="備考" value={formData.notes} />
        </div>
    );
};

export default ConfirmationContent; 