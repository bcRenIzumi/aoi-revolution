import { useEffect, useState } from 'react'
import './FormField.css'

function FormField({
    type = 'text',           // 'text', 'email', 'select', 'checkbox'
    label,                   // ラベル文字列
    name,                    // フィールド名
    value,                   // 現在の値
    onChange,                // 変更ハンドラ
    required = false,        // 必須項目か
    readonly = false,        // 読み取り専用か
    apiEndpoint,            // API URL
    placeholder,            // プレースホルダー
    options = [],           // 選択肢（select用）
    disabled = false        // 無効化
}) {
    const [isLoading, setIsLoading] = useState(false)
    const [apiOptions, setApiOptions] = useState([])
    const [error, setError] = useState('')

    // APIからデータを取得
    const fetchApiData = async () => {
        if (!apiEndpoint) return

        try {
            setIsLoading(true)
            setError('')

            // モックAPI呼び出し
            await new Promise(resolve => setTimeout(resolve, 1000))

            // タイプに応じてモックデータを返す
            if (type === 'select') {
                // 選択肢のモックデータ
                const mockOptions = [
                    { value: 'option1', label: 'オプション1' },
                    { value: 'option2', label: 'オプション2' },
                    { value: 'option3', label: 'オプション3' }
                ]
                setApiOptions(mockOptions)
            } else if (type === 'text' || type === 'email') {
                // テキストフィールドの初期値（読み取り専用の場合）
                if (readonly && onChange) {
                    const mockValue = `API取得値_${Math.random().toString(36).substr(2, 9)}`
                    onChange({ target: { name, value: mockValue } })
                }
            }

        } catch (err) {
            setError(`API取得エラー: ${err.message}`)
        } finally {
            setIsLoading(false)
        }
    }

    // APIエンドポイントが指定されている場合、マウント時にデータ取得
    useEffect(() => {
        if (apiEndpoint) {
            fetchApiData()
        }
    }, [apiEndpoint])

    // 入力フィールドのレンダリング
    const renderInput = () => {
        const commonProps = {
            name,
            value: value || '',
            onChange,
            disabled: disabled || isLoading || readonly,
            className: `form-input ${readonly ? 'readonly' : ''}`,
            placeholder: isLoading ? '読み込み中...' : placeholder
        }

        switch (type) {
            case 'text':
            case 'email':
                return (
                    <input
                        type={type}
                        {...commonProps}
                    />
                )

            case 'select':
                const selectOptions = apiEndpoint ? apiOptions : options
                return (
                    <select
                        name={name}
                        value={value || ''}
                        onChange={onChange}
                        disabled={disabled || isLoading || readonly}
                        className={`form-select ${readonly ? 'readonly' : ''}`}
                    >
                        <option value="">{isLoading ? '読み込み中...' : '選択してください'}</option>
                        {selectOptions.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )

            case 'checkbox':
                return (
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            name={name}
                            checked={value || false}
                            onChange={onChange}
                            disabled={disabled || isLoading || readonly}
                            className="form-checkbox"
                        />
                    </div>
                )

            default:
                return <input {...commonProps} />
        }
    }

    return (
        <div className="form-row">
            <label className={`form-label ${required ? 'required' : ''}`}>
                {label}
            </label>
            <div className="form-input-container">
                {renderInput()}
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    )
}

export default FormField 