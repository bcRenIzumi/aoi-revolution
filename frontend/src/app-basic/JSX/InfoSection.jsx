import React from 'react';

const InfoSection = () => {
    return (
        <>
            <div className="info-section">
                <div className="service-description">
                    <p>ベネッセグループの執務用のWindowsPCを、<strong>一元調達PCベネッセモデル(DX型)</strong>として提供しています。</p>
                </div>

                <details className="collapsible-section">
                    <summary className="section-header">
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
            </div>
        </>
    );
};

export default InfoSection; 