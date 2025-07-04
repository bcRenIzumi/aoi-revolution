import React, { useState } from 'react';
import { useApplication } from '../../../../context/ApplicationContext';
import ButtonGroup from '../../../component/ButtonGroup';
import Header from '../../../component/Header';
import InfoSection from '../../../component/InfoSection';
import '../CSS/AppConfirm.css';
import ConfirmationContent from './ConfirmationContent';

const AppConfirm = ({ headerConfig, infoConfig, basicFormConfig, formConfig, pageNumber }) => {
    const { submitApplication } = useApplication();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmitApplication = async () => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            await submitApplication();
            console.log('申請が正常に送信されました');
        } catch (error) {
            console.error('申請送信でエラーが発生しました:', error);
            alert('申請送信でエラーが発生しました。もう一度お試しください。');
        } finally {
            setIsSubmitting(false);
        }
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