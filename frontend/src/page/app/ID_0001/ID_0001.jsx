import { Route, Routes } from 'react-router-dom'
import AppBasic from '../../../common/frame/app-basic/JSX/AppBasic'
import AppComplete from '../../../common/frame/app-complete/JSX/AppComplete'
import AppConfirm from '../../../common/frame/app-confirm/JSX/AppConfirm'
import AppDetail from '../../../common/frame/app-detail/JSX/AppDetail'
import AppFile from '../../../common/frame/app-file/JSX/AppFile'
import { formConfig1 } from '../../../config/app/ID_0001/formConfig1'
import { formConfig2 } from '../../../config/app/ID_0001/formConfig2'
import { headerConfig } from '../../../config/app/ID_0001/headerConfig'
import { infoSectionConfig } from '../../../config/app/ID_0001/infoSectionConfig'

function Pc() {
    return (
        <Routes>
            <Route path="app-basic" element={<AppBasic formConfig={formConfig1} headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
            <Route path="app-file" element={<AppFile headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
            <Route path="app-confirm" element={<AppConfirm headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
            <Route path="app-complete" element={<AppComplete headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
            <Route path="app-detail" element={<AppDetail formConfig={formConfig2} headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
            {/* デフォルトルート - app-basicにリダイレクト */}
            <Route path="/" element={<AppBasic formConfig={formConfig1} headerConfig={headerConfig} infoConfig={infoSectionConfig} />} />
        </Routes>
    )
}

export default Pc
