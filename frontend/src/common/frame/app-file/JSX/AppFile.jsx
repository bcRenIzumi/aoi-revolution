import React, { useEffect, useState } from 'react';
import { useApplication } from '../../../../context/ApplicationContext';
import ButtonGroup from '../../../component/ButtonGroup';
import Header from '../../../component/Header';
import InfoSection from '../../../component/InfoSection';
import '../CSS/AppFile.css';
import FileSection from './FileSection';
import ServiceDescription from './ServiceDescription';

const AppFile = ({ headerConfig, infoConfig, pageNumber }) => {
    const { fileData, updateFileData } = useApplication();
    const [attachedFiles, setAttachedFiles] = useState(fileData);

    // Contextが更新されたらローカル状態も更新
    useEffect(() => {
        setAttachedFiles(fileData);
    }, [fileData]);

    const handleFileAttach = (fileNumber, file) => {
        const newAttachedFiles = {
            ...attachedFiles,
            [fileNumber]: file
        };
        setAttachedFiles(newAttachedFiles);
        updateFileData(newAttachedFiles);
    };

    const handleFileRemove = (fileNumber) => {
        const newFiles = { ...attachedFiles };
        delete newFiles[fileNumber];
        setAttachedFiles(newFiles);
        updateFileData(newFiles);
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

    // ファイル選択の必須チェックを削除し、次のページへの遷移はButtonGroupに任せる
    const handleSubmit = () => {
        console.log('ファイル情報を送信:', attachedFiles);
        // ButtonGroupが自動的に次のページに遷移する
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