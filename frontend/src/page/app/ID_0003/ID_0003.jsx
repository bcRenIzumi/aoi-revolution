import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AppBasic from '../../../common/frame/app-basic/JSX/AppBasic'
import AppComplete from '../../../common/frame/app-complete/JSX/AppComplete'
import AppConfirm from '../../../common/frame/app-confirm/JSX/AppConfirm'
import AppDetail from '../../../common/frame/app-detail/JSX/AppDetail'
import AppFile from '../../../common/frame/app-file/JSX/AppFile'
import { formConfig2 } from '../../../config/app/ID_0003/formConfig'
import { headerConfig } from '../../../config/app/ID_0003/headerConfig'
import { infoSectionConfig } from '../../../config/app/ID_0003/infoSectionConfig'
import { formConfig1 } from '../../../config/common/basicFormConfig'

// スクロール位置をリセットするコンポーネント
const ScrollToTop = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
};

function ID_0003() {
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
                    formConfig={formConfig2}
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
                    formConfig={formConfig2}
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

export default ID_0003 