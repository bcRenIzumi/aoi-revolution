import { useState } from 'react'
import './SampleEntityForm.css'

function SampleEntityForm({ url }) {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        capacity: ''
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('') // 'success' or 'error'

    // 入力値の変更処理
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // フォームのリセット
    const resetForm = () => {
        setFormData({
            id: '',
            title: '',
            capacity: ''
        })
        setMessage('')
        setMessageType('')
    }

    // フォーム送信処理
    const handleSubmit = async (e) => {
        e.preventDefault()

        // バリデーション
        if (!formData.id.trim() || !formData.title.trim() || !formData.capacity.trim()) {
            setMessage('❌ 全ての項目を入力してください')
            setMessageType('error')
            return
        }

        if (isNaN(formData.capacity) || Number(formData.capacity) <= 0) {
            setMessage('❌ キャパシティは正の数値を入力してください')
            setMessageType('error')
            return
        }

        try {
            setLoading(true)
            setMessage('')

            // SampleEntityオブジェクトを作成
            const sampleEntity = {
                id: formData.id.trim(),
                title: formData.title.trim(),
                capacity: parseInt(formData.capacity)
            }

            // API呼び出し
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sampleEntity)
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const result = await response.text()

            if (result === 'success') {
                setMessage('✅ データの保存に成功しました！')
                setMessageType('success')
                // 成功時はフォームをリセット
                setTimeout(() => {
                    resetForm()
                }, 2000)
            } else {
                setMessage('⚠️ 保存処理で予期しない結果が返されました')
                setMessageType('error')
            }

        } catch (error) {
            console.error('Save error:', error)
            setMessage(`❌ エラーが発生しました: ${error.message}`)
            setMessageType('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="sample-entity-form">
            <div className="form-header">
                <h3>💾 SampleEntity データ保存</h3>
                <p>ID、タイトル、キャパシティを入力してデータを保存します</p>
            </div>

            <form onSubmit={handleSubmit} className="entity-form">
                <div className="form-group">
                    <label htmlFor="id">🆔 ID:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        placeholder="例: T001"
                        maxLength="10"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="title">📝 タイトル:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="例: page1"
                        maxLength="100"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">📊 キャパシティ:</label>
                    <input
                        type="number"
                        id="capacity"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        placeholder="例: 100"
                        min="1"
                        max="999999"
                        className="form-input"
                    />
                </div>

                <div className="form-actions">
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={loading}
                    >
                        {loading ? '💾 保存中...' : '💾 データ保存'}
                    </button>

                    <button
                        type="button"
                        onClick={resetForm}
                        className="reset-btn"
                        disabled={loading}
                    >
                        🔄 リセット
                    </button>
                </div>

                {/* メッセージ表示 */}
                {message && (
                    <div className={`message ${messageType}`}>
                        {message}
                    </div>
                )}
            </form>

            {/* 送信データプレビュー */}
            <div className="data-preview">
                <h4>📋 入力データプレビュー:</h4>
                <div className="preview-content">
                    <div className="preview-item">
                        <strong>ID:</strong> <span>{formData.id || '(未入力)'}</span>
                    </div>
                    <div className="preview-item">
                        <strong>Title:</strong> <span>{formData.title || '(未入力)'}</span>
                    </div>
                    <div className="preview-item">
                        <strong>Capacity:</strong> <span>{formData.capacity || '(未入力)'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SampleEntityForm 