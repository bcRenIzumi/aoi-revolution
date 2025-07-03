import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonGroup = ({ onGoBack, onSaveDraft, onSubmit, isConfirmPage = false, pageNumber = 1 }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDraftSaving, setIsDraftSaving] = useState(false);
    const navigate = useNavigate();

    // ページ遷移のマッピング
    const pageRoutes = {
        1: 'basic',
        2: 'detail',
        3: 'file',
        4: 'confirm',
        5: 'complete'
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            if (onSubmit) {
                await onSubmit();
            }

            // すべてのページで次のページに遷移（確認ページ含む）
            if (pageNumber < 5) {
                const nextPage = pageRoutes[pageNumber + 1];
                navigate(`../${nextPage}`, { replace: true });
                // ページ遷移後、一番上にスクロール
                setTimeout(() => window.scrollTo(0, 0), 0);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoBack = () => {
        if (onGoBack) {
            onGoBack();
        } else if (pageNumber > 1) {
            // デフォルトの戻る処理：前のページに遷移
            const prevPage = pageRoutes[pageNumber - 1];
            navigate(`../${prevPage}`, { replace: true });
            // ページ遷移後、一番上にスクロール
            setTimeout(() => window.scrollTo(0, 0), 0);
        }
    };

    const handleSaveDraft = async () => {
        setIsDraftSaving(true);
        try {
            if (onSaveDraft) {
                await onSaveDraft();
            }
            // 2秒後に元の状態に戻す
            setTimeout(() => {
                setIsDraftSaving(false);
            }, 2000);
        } catch (error) {
            setIsDraftSaving(false);
        }
    };

    // ボタンテキストと処理の決定
    const submitButtonText = isConfirmPage ? '申請' : '次へ';
    const submittingText = isConfirmPage ? '送信中...' : '処理中...';

    return (
        <div className="button-group">
            {pageNumber > 1 && (
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleGoBack}
                    disabled={isSubmitting}
                >
                    戻る
                </button>
            )}
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
                {isSubmitting ? submittingText : submitButtonText}
            </button>
        </div>
    );
};

export default ButtonGroup; 