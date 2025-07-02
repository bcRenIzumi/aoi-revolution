import React, { useState } from 'react';
import '../../App.css';
import '../CSS/AppFile.css';
import ButtonGroup from './ButtonGroup';
import FileSection from './FileSection';
import Header from './Header';
import InfoSection from './InfoSection';
import ServiceDescription from './ServiceDescription';

const AppFile = () => {
    const [attachedFiles, setAttachedFiles] = useState({});

    const handleFileAttach = (fileNumber, file) => {
        setAttachedFiles(prev => ({
            ...prev,
            [fileNumber]: file
        }));
    };

    const handleFileRemove = (fileNumber) => {
        setAttachedFiles(prev => {
            const newFiles = { ...prev };
            delete newFiles[fileNumber];
            return newFiles;
        });
    };

    const handleGoBack = () => {
        if (Object.keys(attachedFiles).length > 0) {
            if (window.confirm('入力内容が失われますが、前のページに戻りますか？')) {
                window.history.back();
            }
        } else {
            window.history.back();
        }
    };

    const handleSaveDraft = () => {
        const draftData = {
            timestamp: new Date().toISOString(),
            attachedFiles: Object.keys(attachedFiles).map(fileNumber => ({
                fileName: attachedFiles[fileNumber].name,
                fileSize: attachedFiles[fileNumber].size,
                fileNumber: fileNumber
            })),
            formType: 'PC新規手配申請'
        };

        localStorage.setItem('pc_application_draft', JSON.stringify(draftData));
        alert('下書きが保存されました');
    };

    const handleSubmit = () => {
        const hasAnyFile = Object.keys(attachedFiles).length > 0;

        if (!hasAnyFile) {
            alert('少なくとも1つのファイルを選択してください。');
            return;
        }

        if (window.confirm('申請内容を送信しますか？')) {
            alert('申請が正常に送信されました。ありがとうございます。');
        }
    };

    return (
        <div>
            <Header />

            <div className="container-large">
                <div className="form-header">
                    <div className="form-title">PC新規手配一元建置PC_DX現モデル申請</div>
                    <div className="form-subtitle">必要事項をご入力の上、送信ボタンを押してください</div>
                </div>

                <div className="info-section">
                    <ServiceDescription />
                    <InfoSection />
                </div>

                <div className="main-content">
                    <FileSection
                        attachedFiles={attachedFiles}
                        onFileAttach={handleFileAttach}
                        onFileRemove={handleFileRemove}
                    />

                    <ButtonGroup
                        onGoBack={handleGoBack}
                        onSaveDraft={handleSaveDraft}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppFile; 