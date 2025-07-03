import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Pc from './page/app/ID_0001/ID_0001'

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
