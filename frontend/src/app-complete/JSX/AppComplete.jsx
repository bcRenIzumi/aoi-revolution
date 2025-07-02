import { useEffect } from 'react';
import '../CSS/AppComplete.css';
import CompletionContent from './CompletionContent';
import Header from './Header';
import StatusSidebar from './StatusSidebar';

const AppComplete = () => {
    // 申請一覧画面に遷移
    const goToApplicationList = () => {
        // 実際の実装では、申請一覧画面のURLに遷移
        alert('申請一覧画面に遷移します。');
        // window.location.href = '/application-list';
        console.log('申請一覧画面に遷移');
    };

    useEffect(() => {
        console.log('申請完了画面が読み込まれました');

        // 申請完了のアニメーション効果
        const successIcon = document.querySelector('.success-icon');
        const title = document.querySelector('.completion-title');
        const message = document.querySelector('.completion-message');

        // フェードインアニメーション
        setTimeout(() => {
            if (successIcon) {
                successIcon.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    successIcon.style.transform = 'scale(1)';
                }, 200);
            }
        }, 300);

        // 成功メッセージの表示アニメーション
        setTimeout(() => {
            if (title) {
                title.style.opacity = '0';
                title.style.transform = 'translateY(20px)';
                title.style.transition = 'all 0.5s ease';

                setTimeout(() => {
                    title.style.opacity = '1';
                    title.style.transform = 'translateY(0)';
                }, 100);
            }
        }, 500);

        setTimeout(() => {
            if (message) {
                message.style.opacity = '0';
                message.style.transform = 'translateY(20px)';
                message.style.transition = 'all 0.5s ease';

                setTimeout(() => {
                    message.style.opacity = '1';
                    message.style.transform = 'translateY(0)';
                }, 100);
            }
        }, 700);
    }, []);

    return (
        <div>
            <Header />
            <div className="main-container">
                <CompletionContent onGoToApplicationList={goToApplicationList} />
                <StatusSidebar />
            </div>
        </div>
    );
};

export default AppComplete; 