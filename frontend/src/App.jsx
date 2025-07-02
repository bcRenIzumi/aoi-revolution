import './App.css'
import PCApplicationForm from './components/PCApplicationForm'

function App() {
    return (
        <>
            {/* PC申請フォーム */}
            <PCApplicationForm url="/api/pc-application" />
        </>
    )
}

export default App
