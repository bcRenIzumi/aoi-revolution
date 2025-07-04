import React, { useRef } from 'react';
import ButtonGroup from '../../../component/ButtonGroup';
import CommonApplicationForm from '../../../component/CommonApplicationForm';
import Header from '../../../component/Header';
import InfoSection from '../../../component/InfoSection';
import '../CSS/AppBasic.css';

const AppBasic = ({ formConfig, headerConfig, infoConfig, pageNumber }) => {
    const formRef = useRef();

    const handleFormSubmit = (formData) => {
        console.log('Basic form submitted:', formData);
        // ここで実際の送信処理を実装
    };

    const handleDraftSave = (formData) => {
        console.log('Basic form draft saved:', formData);
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
                    formType="basic"
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

export default AppBasic; 