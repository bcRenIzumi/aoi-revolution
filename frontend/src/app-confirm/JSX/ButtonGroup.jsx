import React, { useState } from 'react';

const ButtonGroup = ({ onGoBack, onSaveDraft, onSubmit }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDraftSaving, setIsDraftSaving] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await onSubmit();
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSaveDraft = async () => {
        setIsDraftSaving(true);
        try {
            await onSaveDraft();
            // 2秒後に元の状態に戻す
            setTimeout(() => {
                setIsDraftSaving(false);
            }, 2000);
        } catch (error) {
            setIsDraftSaving(false);
        }
    };

    return (
        <div className="button-group">
            <button
                type="button"
                className="btn btn-secondary"
                onClick={onGoBack}
                disabled={isSubmitting}
            >
                戻る
            </button>
            <button
                className={`btn btn-outline-primary ${isDraftSaving ? 'btn-draft-saved' : ''}`}
                onClick={handleSaveDraft}
                disabled={isSubmitting || isDraftSaving}
            >
                {isDraftSaving ? '保存完了' : '下書き保存'}
            </button>
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
            >
                {isSubmitting ? '送信中...' : '申請'}
            </button>
        </div>
    );
};

export default ButtonGroup; 