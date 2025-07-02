import { useState, useEffect } from 'react'
import './ApiDataDisplay.css'

function ApiDataDisplay({ url }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const jsonData = await response.json()
                setData(jsonData)
            } catch (err) {
                setError(err.message)
                console.error('Error fetching data:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const refreshData = async () => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const jsonData = await response.json()
                setData(jsonData)
            } catch (err) {
                setError(err.message)
                console.error('Error fetching data:', err)
            } finally {
                setLoading(false)
            }
        }

        await fetchData()
    }

    const renderJsonData = (obj, depth = 0) => {
        if (obj === null || obj === undefined) {
            return <span className="json-null">null</span>
        }

        if (typeof obj === 'string') {
            return <span className="json-string">"{obj}"</span>
        }

        if (typeof obj === 'number') {
            return <span className="json-number">{obj}</span>
        }

        if (typeof obj === 'boolean') {
            return <span className="json-boolean">{obj.toString()}</span>
        }

        if (Array.isArray(obj)) {
            return (
                <div className="json-array" style={{ marginLeft: `${depth * 20}px` }}>
                    <span className="json-bracket">[</span>
                    {obj.map((item, index) => (
                        <div key={index} className="json-array-item">
                            {renderJsonData(item, depth + 1)}
                            {index < obj.length - 1 && <span className="json-comma">,</span>}
                        </div>
                    ))}
                    <span className="json-bracket">]</span>
                </div>
            )
        }

        if (typeof obj === 'object') {
            return (
                <div className="json-object" style={{ marginLeft: `${depth * 20}px` }}>
                    <span className="json-bracket">{'{'}</span>
                    {Object.entries(obj).map(([key, value], index, array) => (
                        <div key={key} className="json-object-item">
                            <span className="json-key">"{key}"</span>
                            <span className="json-colon">: </span>
                            {renderJsonData(value, depth + 1)}
                            {index < array.length - 1 && <span className="json-comma">,</span>}
                        </div>
                    ))}
                    <span className="json-bracket">{'}'}</span>
                </div>
            )
        }

        return <span>{String(obj)}</span>
    }

    return (
        <div className="api-data-display">
            <div className="api-header">
                <h3>🌐 API Data from /api/sampleApi</h3>
                <button
                    className="refresh-button"
                    onClick={refreshData}
                    disabled={loading}
                >
                    {loading ? '🔄 Loading...' : '🔄 更新'}
                </button>
            </div>

            <div className="api-content">
                {loading && (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>データを取得中...</p>
                    </div>
                )}

                {error && (
                    <div className="error-container">
                        <p className="error-message">❌ エラー: {error}</p>
                        <button className="retry-button" onClick={refreshData}>
                            再試行
                        </button>
                    </div>
                )}

                {!loading && !error && data && (
                    <div className="json-container">
                        <div className="json-header">
                            <span className="json-title">📋 JSON Response:</span>
                        </div>
                        <div className="json-content">
                            {renderJsonData(data)}
                        </div>
                    </div>
                )}

                {!loading && !error && !data && (
                    <div className="no-data">
                        <p>データがありません</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ApiDataDisplay 