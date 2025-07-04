import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AppBasic from '../../../common/frame/app-basic/JSX/AppBasic'
import AppComplete from '../../../common/frame/app-complete/JSX/AppComplete'
import AppConfirm from '../../../common/frame/app-confirm/JSX/AppConfirm'
import AppDetail from '../../../common/frame/app-detail/JSX/AppDetail'
import AppFile from '../../../common/frame/app-file/JSX/AppFile'
import { formConfig } from '../../../config/app/ID_0004/formConfig'
import { headerConfig } from '../../../config/app/ID_0004/headerConfig'
import { infoSectionConfig } from '../../../config/app/ID_0004/infoSectionConfig'
import { formConfig1 } from '../../../config/common/basicFormConfig'

// スクロール位置をリセットするコンポーネント
const ScrollToTop = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
};

function ID_0004() {
    const location = useLocation();

    // ブラウザの戻るボタン押下時の処理
    useEffect(() => {
        const handlePopstate = (event) => {
            console.log('Browser back button pressed on ID_0004:', location.pathname);
            // 必要に応じてデータの整合性チェックや状態の復元処理をここに追加
        };

        window.addEventListener('popstate', handlePopstate);
        return () => window.removeEventListener('popstate', handlePopstate);
    }, [location.pathname]);

    return (
        <ScrollToTop>
            <Routes>
                <Route path="basic" element={<AppBasic
                    formConfig={formConfig1}
                    headerConfig={headerConfig}
                    infoConfig={infoSectionConfig}
                    pageNumber={1}
                />} />
                <Route path="detail" element={<AppDetail
                    formConfig={formConfig}
                    headerConfig={headerConfig}
                    infoConfig={infoSectionConfig}
                    pageNumber={2}
                />} />
                <Route path="file" element={<AppFile
                    headerConfig={headerConfig}
                    infoConfig={infoSectionConfig}
                    pageNumber={3}
                />} />
                <Route path="confirm" element={<AppConfirm
                    headerConfig={headerConfig}
                    infoConfig={infoSectionConfig}
                    basicFormConfig={formConfig1}
                    formConfig={formConfig}
                    pageNumber={4}
                />} />
                <Route path="complete" element={<AppComplete
                    headerConfig={headerConfig}
                    infoConfig={infoSectionConfig}
                    pageNumber={5}
                />} />
                {/* ルートアクセス時はbasicにリダイレクト */}
                <Route path="/" element={<Navigate to="basic" replace />} />
            </Routes>
        </ScrollToTop>
    )
}

export default ID_0004 