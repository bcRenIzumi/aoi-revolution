import React, { useState } from 'react';

const ButtonGroup = ({ onGoBack, onSaveDraft, onSubmit }) => {
    const [isDraftSaving, setIsDraftSaving] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSaveDraft = async () => {
        setIsDraftSaving(true);
        onSaveDraft();

        setTimeout(() => {
            setIsDraftSaving(false);
        }, 2000);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        onSubmit();

        setTimeout(() => {
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className="button-group">
            <button
                className="btn btn-secondary"
                onClick={onGoBack}
                disabled={isSubmitting}
            >
                戻る
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={handleSaveDraft}
                disabled={isDraftSaving || isSubmitting}
            >
                {isDraftSaving ? '保存中...' : '下書き保存'}
            </button>
            <button
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={isSubmitting || isDraftSaving}
            >
                {isSubmitting ? '送信中...' : '次へ'}
            </button>
        </div>
    );
};

export default ButtonGroup; 