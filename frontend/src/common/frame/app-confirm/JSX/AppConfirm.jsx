import React from 'react';
import ButtonGroup from '../../../component/ButtonGroup';
import Header from '../../../component/Header';
import InfoSection from '../../../component/InfoSection';
import '../CSS/AppConfirm.css';
import ConfirmationContent from './ConfirmationContent';

const AppConfirm = ({ headerConfig, infoConfig, basicFormConfig, formConfig }) => {
    const handleGoBack = () => {
        if (window.confirm('前のページに戻りますか？')) {
            window.history.back();
        }
    };

    const handleSaveDraft = () => {
        // 下書きデータの作成
        const draftData = {
            timestamp: new Date().toISOString(),
            formType: 'PC新規手配申請'
        };

        // ローカルストレージに保存
        localStorage.setItem('pc_application_draft', JSON.stringify(draftData));

        // 保存完了のメッセージ
        alert('下書きが保存されました');
    };

    const handleSubmitApplication = () => {
        if (window.confirm('申請内容を送信しますか？送信後は修正できません。')) {
            // 送信処理のシミュレーション
            const submitPromise = new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });

            submitPromise.then(() => {
                alert('申請が正常に送信されました。\n申請番号: AOI2024/000001\n\n承認状況は申請一覧画面でご確認いただけます。');
                console.log('申請一覧画面に遷移');
            });
        }
    };

    return (
        <div className="app-confirm">
            <div className="container">
                <Header title={headerConfig?.title} description={headerConfig?.description} />
                <InfoSection infoConfig={infoConfig} />
                <div className="main-content">
                    <ConfirmationContent
                        basicFormConfig={basicFormConfig}
                        formConfig={formConfig}
                    />
                    <ButtonGroup
                        onGoBack={handleGoBack}
                        onSaveDraft={handleSaveDraft}
                        onSubmit={handleSubmitApplication}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppConfirm; 