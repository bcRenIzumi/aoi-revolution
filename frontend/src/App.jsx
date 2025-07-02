import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AppBasic from './app-basic/JSX/AppBasic'
import AppConfirm from './app-confirm/JSX/AppConfirm'
import AppFile from './app-file/JSX/AppFile'
import './App.css'

function App() {
    return (
        <Router basename="/sample-vite/dist">
            <Routes>
                <Route path="/pc/app-basic" element={<AppBasic />} />
                <Route path="/pc/app-file" element={<AppFile />} />
                <Route path="/pc/app-confirm" element={<AppConfirm />} />
                {/* デフォルトルート - /pc/app-basicにリダイレクト */}
                <Route path="/" element={<AppBasic />} />
            </Routes>
        </Router>
    )
}

export default App
