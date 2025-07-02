const StatusSidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">ステータス</h2>

            <div className="status-section">
                <div className="status-header">申請</div>
                <div className="status-item">
                    <span className="status-label">申請状況</span>
                    <span className="status-badge">申請済</span>
                </div>
            </div>

            <div className="status-section">
                <div className="status-header">承認</div>
                <div className="status-item">
                    <span className="status-label">状況</span>
                    <span className="status-value">申請済</span>
                </div>
                <div className="date-info">申請日：2024/07/09 13:17:57</div>
            </div>

            <div className="approval-section">
                <div className="approval-header">1次上長承認</div>
                <div className="approval-item">
                    <span className="status-label">承認状況</span>
                    <span className="status-badge">承認待</span>
                </div>
                <div className="approval-item">
                    <span className="status-label">承認者：</span>
                    <span className="status-value"></span>
                </div>
            </div>
        </div>
    );
};

export default StatusSidebar; 