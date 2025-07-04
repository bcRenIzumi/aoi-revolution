import React from 'react';
import Header from '../../../component/Header';
import InfoSection from '../../../component/InfoSection';
import '../CSS/AppComplete.css';
import CompletionContent from './CompletionContent';
import StatusSidebar from './StatusSidebar';

const AppComplete = ({ headerConfig, infoConfig, pageNumber }) => {
    // 申請一覧画面に遷移
    const goToApplicationList = () => {
        // 実際の実装では、申請一覧画面のURLに遷移
        alert('申請一覧画面に遷移します。');
        // window.location.href = '/application-list';
        console.log('申請一覧画面に遷移');
    };

    return (
        <div className="app-complete">
            <Header
                title={headerConfig?.title}
                description={headerConfig?.description}
                pageNumber={pageNumber}
            />
            <InfoSection config={infoConfig} />
            <div className="main-container">
                <div className="content-area">
                    <CompletionContent onGoToApplicationList={goToApplicationList} />
                </div>
                <div className="sidebar">
                    <StatusSidebar />
                </div>
            </div>
        </div>
    );
};

export default AppComplete; 