import { Navigate, Route, Routes } from 'react-router-dom'
import AppBasic from '../../../common/frame/app-basic/JSX/AppBasic'
import AppComplete from '../../../common/frame/app-complete/JSX/AppComplete'
import AppConfirm from '../../../common/frame/app-confirm/JSX/AppConfirm'
import AppDetail from '../../../common/frame/app-detail/JSX/AppDetail'
import AppFile from '../../../common/frame/app-file/JSX/AppFile'
import { formConfig1 } from '../../../config/common/basicFormConfig'
import { formConfig2 } from '../../../config/app/ID_0001/formConfig'
import { headerConfig } from '../../../config/app/ID_0001/headerConfig'
import { infoSectionConfig } from '../../../config/app/ID_0001/infoSectionConfig'

function ID_0001() {
    return (
        <Routes>
            <Route path="page1" element={<AppBasic formConfig={formConfig1} headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
            <Route path="page2" element={<AppFile headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
            <Route path="page3" element={<AppConfirm headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
            <Route path="page4" element={<AppComplete headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
            <Route path="page5" element={<AppDetail formConfig={formConfig2} headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
            {/* ルートアクセス時はpage1にリダイレクト */}
            <Route path="/" element={<Navigate to="page1" replace />} />
        </Routes>
    )
}

export default ID_0001
