import React, { useRef, useState } from 'react';

const FileButton = ({ fileNumber, attachedFile, onFileAttach, onFileRemove }) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef(null);

    const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'image/png',
        'image/jpeg',
        'image/jpg'
    ];

    const allowedExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.png', '.jpg', '.jpeg'];

    const validateFile = (file) => {
        const maxSize = 10 * 1024 * 1024; // 10MB
        const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));

        if (file.size > maxSize) {
            alert('ファイルサイズが10MBを超えています。');
            return false;
        }

        if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
            alert('サポートされていないファイル形式です。PDF、Word、Excel、画像ファイルをご利用ください。');
            return false;
        }

        return true;
    };

    const handleFileSelect = (file) => {
        if (validateFile(file)) {
            onFileAttach(fileNumber, file);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (attachedFile) {
            if (window.confirm('ファイルを削除しますか？')) {
                onFileRemove(fileNumber);
            }
        } else {
            fileInputRef.current?.click();
        }
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileSelect(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsDragOver(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileSelect(files[0]);
        }
    };

    const getButtonClass = () => {
        let className = 'file-button';
        if (isDragOver) className += ' drag-over';
        if (attachedFile) className += ' file-attached';
        return className;
    };

    const getButtonContent = () => {
        if (attachedFile) {
            return `✅ ${attachedFile.name}`;
        }
        return `📁 添付ファイル${fileNumber}`;
    };

    const getButtonTitle = () => {
        if (attachedFile) {
            return `${attachedFile.name} (${(attachedFile.size / 1024 / 1024).toFixed(2)}MB)`;
        }
        return '';
    };

    return (
        <>
            <button
                className={getButtonClass()}
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                title={getButtonTitle()}
            >
                {getButtonContent()}
            </button>
            <input
                ref={fileInputRef}
                type="file"
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                onChange={handleFileInputChange}
            />
        </>
    );
};

export default FileButton; 