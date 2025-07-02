import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AppBasic from './app-basic/JSX/AppBasic'
import AppComplete from './app-complete/JSX/AppComplete'
import AppConfirm from './app-confirm/JSX/AppConfirm'
import AppDetail from './app-detail/JSX/AppDetail'
import AppFile from './app-file/JSX/AppFile'
import './App.css'

function App() {
    return (
        <Router basename="/sample-vite/dist">
            <Routes>
                <Route path="/pc/app-basic" element={<AppBasic />} />
                <Route path="/pc/app-file" element={<AppFile />} />
                <Route path="/pc/app-confirm" element={<AppConfirm />} />
                <Route path="/pc/app-complete" element={<AppComplete />} />
                <Route path="/pc/app-detail" element={<AppDetail />} />
                {/* デフォルトルート - /pc/app-basicにリダイレクト */}
                <Route path="/" element={<AppBasic />} />
            </Routes>
        </Router>
    )
}

export default App
