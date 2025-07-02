import React from 'react';

const InfoSection = () => {
    return (
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
                        <a href="https://bnhd.sharepoint.com/sites/bgportal/intra/O3651/PC_Schedule.pdf"
                            className="info-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            ベネッセ一元調達パソコン納品スケジュール
                        </a>
                    </div>

                    <div className="info-block">
                        <h4>📖 申込マニュアル</h4>
                        <p>申込マニュアルは以下をご確認ください。</p>
                        <a href="https://bnhd.sharepoint.com/sites/bgportal/intra/O3651/PC_Order_BCmodel_kyoutusoudan.pdf"
                            className="info-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            一元調達PC（ベネッセモデル）申込マニュアル
                        </a>
                    </div>

                    <div className="info-block">
                        <h4>💻 操作方法</h4>
                        <a href="https://bnhd.sharepoint.com/sites/PJ949/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FPJ949%2FShared%20Documents%2F001%EF%BC%8EPJ%E5%85%A8%E4%BD%93%E7%AE%A1%E7%90%86%2F101%2E%20%E6%96%B0UI%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%2F%E3%80%90%E5%85%B1%E9%80%9A%E7%94%B3%E8%AB%8B%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%80%91%E7%94%B3%E8%AB%8B%E8%80%85%E5%90%91%E3%81%91%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%ABV2%2E0%2Epdf&parent=%2Fsites%2FPJ949%2FShared%20Documents%2F001%EF%BC%8EPJ%E5%85%A8%E4%BD%93%E7%AE%A1%E7%90%86%2F101%2E%20%E6%96%B0UI%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB&p=true&ga=1"
                            className="info-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            申請アプリの操作方法はこちら
                        </a>
                    </div>
                </div>
            </details>
        </div>
    );
};

export default InfoSection; 