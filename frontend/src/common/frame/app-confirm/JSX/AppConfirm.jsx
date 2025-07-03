import React from 'react';
import ButtonGroup from '../../../component/ButtonGroup';
import Header from '../../../component/Header';
import InfoSection from '../../../component/InfoSection';
import '../CSS/AppConfirm.css';
import ConfirmationContent from './ConfirmationContent';

const AppConfirm = ({ headerConfig, infoConfig, basicFormConfig, formConfig, pageNumber }) => {
    const handleSubmitApplication = () => {
        console.log('申請を送信しました');
        // 申請送信処理をここに実装
    };

    const handleSaveDraft = () => {
        console.log('確認内容を下書き保存しました');
        // 下書き保存処理をここに実装
    };

    return (
        <div className="app-confirm">
            <div className="container">
                <Header
                    title={headerConfig?.title}
                    description={headerConfig?.description}
                    pageNumber={pageNumber}
                />
                <InfoSection config={infoConfig} />
                <div className="main-content">
                    <ConfirmationContent
                        basicFormConfig={basicFormConfig}
                        formConfig={formConfig}
                    />
                    <ButtonGroup
                        onSaveDraft={handleSaveDraft}
                        onSubmit={handleSubmitApplication}
                        isConfirmPage={true}
                        pageNumber={pageNumber}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppConfirm; 