import React, { useState } from 'react';

const InfoSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <details className="collapsible-section" open={isOpen}>
            <summary className="section-header" onClick={toggleSection}>
                <span className="section-icon">📋</span>
                メニュー・ご案内
            </summary>
            <div className="section-content">
                <div className="info-block">
                    <h4>📅 納品スケジュール</h4>
                    <p>現在申込可能な納品日と申請受付締め切り日は以下をご確認ください。</p>
                    <a href="#" className="info-link">ベネッセ一元調達パソコン納品スケジュール</a>
                </div>

                <div className="info-block">
                    <h4>📖 申込マニュアル</h4>
                    <p>申込マニュアルは以下をご確認ください。</p>
                    <a href="#" className="info-link">一元調達PC（ベネッセモデル）申込マニュアル</a>
                </div>

                <div className="info-block">
                    <h4>💻 操作方法</h4>
                    <a href="#" className="info-link">申請アプリの操作方法はこちら</a>
                </div>
            </div>
        </details>
    );
};

export default InfoSection; 