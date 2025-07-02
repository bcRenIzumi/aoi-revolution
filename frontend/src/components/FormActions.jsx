import './FormActions.css'

function FormActions({
    onDraftSave,
    onNext,
    loading = false,
    draftButtonText = "下書き保存",
    nextButtonText = "次へ",
    disabled = false,
    message,
    messageType
}) {
    return (
        <>
            {/* ボタン */}
            <div className="form-actions">
                <button
                    type="button"
                    onClick={onDraftSave}
                    className="draft-btn"
                    disabled={disabled || loading}
                >
                    {draftButtonText}
                </button>
                <button
                    type="submit"
                    onClick={onNext}
                    className="next-btn"
                    disabled={disabled || loading}
                >
                    {nextButtonText}
                </button>
            </div>

            {/* メッセージ表示 */}
            {message && (
                <div className={`message ${messageType}`}>
                    {message}
                </div>
            )}
        </>
    )
}

export default FormActions 