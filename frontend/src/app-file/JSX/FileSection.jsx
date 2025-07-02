import React from 'react';
import FileButton from './FileButton';

const FileSection = ({ attachedFiles, onFileAttach, onFileRemove }) => {
    const fileButtons = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className="section">
            <h2 className="section-title">申請理由及び詳細</h2>
            <div className="file-grid">
                {fileButtons.map(fileNumber => (
                    <FileButton
                        key={fileNumber}
                        fileNumber={fileNumber}
                        attachedFile={attachedFiles[fileNumber]}
                        onFileAttach={onFileAttach}
                        onFileRemove={onFileRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default FileSection; 