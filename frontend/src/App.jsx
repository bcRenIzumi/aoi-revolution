import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { ApplicationProvider } from './context/ApplicationContext'
import ID_0001 from './page/app/ID_0001/ID_0001'
import ID_0002 from './page/app/ID_0002/ID_0002'
import ID_0003 from './page/app/ID_0003/ID_0003'
import ID_0004 from './page/app/ID_0004/ID_0004'

function App() {
    return (
        <ApplicationProvider>
            <Router basename="/aoi">
                <Routes>
                    <Route path="/ID_0001/*" element={<ID_0001 />} />
                    <Route path="/ID_0002/*" element={<ID_0002 />} />
                    <Route path="/ID_0003/*" element={<ID_0003 />} />
                    <Route path="/ID_0004/*" element={<ID_0004 />} />
                </Routes>
            </Router>
        </ApplicationProvider>
    )
}

export default App
