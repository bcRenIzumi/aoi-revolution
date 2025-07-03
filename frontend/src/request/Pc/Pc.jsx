import { Route, Routes } from 'react-router-dom'
import AppBasic from '../../common/page/app-basic/JSX/AppBasic'
import AppComplete from '../../common/page/app-complete/JSX/AppComplete'
import AppConfirm from '../../common/page/app-confirm/JSX/AppConfirm'
import AppDetail from '../../common/page/app-detail/JSX/AppDetail'
import AppFile from '../../common/page/app-file/JSX/AppFile'

function Pc() {
    return (
        <Routes>
            <Route path="app-basic" element={<AppBasic />} />
            <Route path="app-file" element={<AppFile />} />
            <Route path="app-confirm" element={<AppConfirm />} />
            <Route path="app-complete" element={<AppComplete />} />
            <Route path="app-detail" element={<AppDetail />} />
            {/* デフォルトルート - app-basicにリダイレクト */}
            <Route path="/" element={<AppBasic />} />
        </Routes>
    )
}

export default Pc
