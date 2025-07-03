import React, { useRef } from 'react';
import ButtonGroup from '../../../component/ButtonGroup';
import CommonApplicationForm from '../../../component/CommonApplicationForm';
import Header from '../../../component/Header';
import InfoSection from '../../../component/InfoSection';
import '../CSS/AppDetail.css';

const AppDetail = ({ formConfig, headerConfig, infoConfig, pageNumber }) => {
    const formRef = useRef();

    const handleFormSubmit = (formData) => {
        console.log('Form submitted:', formData);
        // ここで実際の送信処理を実装
    };

    const handleDraftSave = (formData) => {
        console.log('Draft saved:', formData);
        // ここで下書き保存処理を実装
    };

    const handleSubmitClick = () => {
        if (formRef.current) {
            formRef.current.submitForm();
        }
    };

    const handleDraftSaveClick = () => {
        if (formRef.current) {
            formRef.current.saveAsDraft();
        }
    };

    return (
        <div className="container">
            <Header
                title={headerConfig?.title}
                description={headerConfig?.description}
                pageNumber={pageNumber}
            />
            <div className="form-container">
                <InfoSection infoConfig={infoConfig} />
                <CommonApplicationForm
                    ref={formRef}
                    formConfig={formConfig}
                    onSubmit={handleFormSubmit}
                    onDraftSave={handleDraftSave}
                />
                <ButtonGroup
                    onDraftSave={handleDraftSaveClick}
                    onSubmit={handleSubmitClick}
                    isConfirmPage={false}
                    pageNumber={pageNumber}
                />
            </div>
        </div>
    );
};

export default AppDetail; 