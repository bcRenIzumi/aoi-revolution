import React, { useRef } from 'react';
import ButtonGroup from '../../../component/ButtonGroup';
import Header from '../../../component/Header';
import InfoSection from '../../../component/InfoSection';
import '../CSS/AppDetail.css';
import ApplicationForm from './ApplicationForm';

const AppDetail = () => {
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
            <Header />
            <div className="form-container">
                <InfoSection />
                <ApplicationForm
                    ref={formRef}
                    onSubmit={handleFormSubmit}
                    onDraftSave={handleDraftSave}
                />
                <ButtonGroup
                    onDraftSave={handleDraftSaveClick}
                    onSubmit={handleSubmitClick}
                />
            </div>
        </div>
    );
};

export default AppDetail; 