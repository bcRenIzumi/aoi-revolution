import React, { useState } from 'react';
import ButtonGroup from '../../../component/ButtonGroup';
import Header from '../../../component/Header';
import InfoSection from '../../../component/InfoSection';
import '../CSS/AppFile.css';
import FileSection from './FileSection';
import ServiceDescription from './ServiceDescription';

const AppFile = ({ headerConfig, infoConfig, pageNumber }) => {
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
        console.log('ファイル情報が下書き保存されました');
    };

    const handleSubmit = () => {
        console.log('ファイル情報を送信:', attachedFiles);
    };

    return (
        <div className="app-file">
            <div className="container-large">
                <Header
                    title={headerConfig.title}
                    description={headerConfig.description}
                    pageNumber={pageNumber}
                />

                <div className="info-section">
                    <ServiceDescription />
                    <InfoSection config={infoConfig} />
                </div>

                <div className="main-content">
                    <FileSection
                        attachedFiles={attachedFiles}
                        onFileAttach={handleFileAttach}
                        onFileRemove={handleFileRemove}
                    />

                    <ButtonGroup
                        onSaveDraft={handleSaveDraft}
                        onSubmit={handleSubmit}
                        isConfirmPage={false}
                        pageNumber={pageNumber}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppFile; 