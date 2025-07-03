import React, { useState } from 'react';
import ButtonGroup from '../../../component/ButtonGroup';
import Header from '../../../component/Header';
import InfoSection from '../../../component/InfoSection';
import '../CSS/AppFile.css';
import FileSection from './FileSection';
import ServiceDescription from './ServiceDescription';

const AppFile = ({ headerConfig, infoConfig }) => {
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
        <div className="app-file">
            <div className="container-large">
                <Header title={headerConfig?.title} description={headerConfig?.description} />

                <div className="info-section">
                    <ServiceDescription />
                    <InfoSection infoConfig={infoConfig} />
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