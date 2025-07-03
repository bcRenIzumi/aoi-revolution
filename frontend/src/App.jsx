import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ID_0001 from './page/app/ID_0001/ID_0001'
import ID_0002 from './page/app/ID_0002/ID_0002'

function App() {
    return (
        <Router basename="/aoi">
            <Routes>
                <Route path="/ID_0001/*" element={<ID_0001 />} />
                <Route path="/ID_0002/*" element={<ID_0002 />} />
            </Routes>
        </Router>
    )
}

export default App
