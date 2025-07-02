const CompletionContent = ({ onGoToApplicationList }) => {
    return (
        <div className="content-area">
            <div className="page-title">PC新規手配申請 一元調達PC_DX型モデル申請</div>

            <div className="success-icon"></div>

            <h1 className="completion-title">申請完了</h1>

            <p className="completion-message">申請完了しました。</p>

            <button className="action-button" onClick={onGoToApplicationList}>
                申請一覧を見る
            </button>

            <p className="action-description">クリックすると申請一覧アプリが立ち上がります。</p>
        </div>
    );
};

export default CompletionContent; 