import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Pc from './request/Pc/Pc'

function App() {
    return (
        <Router basename="/aoi">
            <Routes>
                <Route path="/pc/*" element={<Pc />} />
            </Routes>
        </Router>
    )
}

export default App
