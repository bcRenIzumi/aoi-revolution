import { useState } from 'react'
import './App.css'
import ApiDataDisplay from './components/ApiDataDisplay'
import SampleEntityForm from './components/SampleEntityForm'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            {/* SampleEntity データ保存フォーム */}
            <SampleEntityForm url="/api/save" />

            {/* API データ表示コンポーネント */}
            <ApiDataDisplay url="/api/sampleApi" />
        </>
    )
}

export default App
