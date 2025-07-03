import React, { useEffect, useState } from 'react';

const FormField = ({
    field,
    value,
    error,
    onChange,
    formData
}) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    // APIからオプションを取得
    useEffect(() => {
        if (field.apiUrl) {
            fetchOptions();
        }
    }, [field.apiUrl]);

    const fetchOptions = async () => {
        setLoading(true);
        try {
            const response = await fetch(field.apiUrl);
            const data = await response.json();

            console.log('API Response:', data);

            // APIレスポンスのdata配列を取得
            const apiData = data.data || [];

            // オプション形式に変換
            const formattedOptions = apiData.map(item => {
                // selectedOptionPropertiesが指定されている場合はそれを使用、なければデフォルト動作
                if (field.selectedOptionProperties) {
                    const valueProperty = field.selectedOptionProperties.value;
                    const labelProperty = field.selectedOptionProperties.label;
                    return {
                        value: item[valueProperty] || '',
                        label: item[labelProperty] || ''
                    };
                } else {
                    // デフォルト動作：1番目のプロパティをvalueとlabelの両方に使用
                    const keys = Object.keys(item);
                    const labelValue = item[keys[0]] || '';
                    return {
                        value: labelValue,
                        label: labelValue
                    };
                }
            });

            setOptions(formattedOptions);
        } catch (error) {
            console.error('Failed to fetch options:', error);
            setOptions([]);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value: inputValue, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : inputValue;
        onChange(name, newValue);
    };

    const renderField = () => {
        const commonProps = {
            id: field.name,
            name: field.name,
            value: value || '',
            onChange: handleInputChange,
            required: field.required,
            placeholder: field.placeholder,
            readOnly: field.readOnly,
            className: field.className
        };

        switch (field.type) {
            case 'text':
            case 'email':
            case 'tel':
            case 'date':
                return (
                    <input
                        type={field.type}
                        {...commonProps}
                    />
                );

            case 'textarea':
                return (
                    <textarea
                        {...commonProps}
                        rows={field.rows || 3}
                    />
                );

            case 'select':
                return (
                    <select {...commonProps}>
                        {options.map((option, index) => (
                            <option key={`${option.value || 'empty'}-${index}`} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );

            case 'checkbox':
                return (
                    <input
                        type="checkbox"
                        id={field.name}
                        name={field.name}
                        checked={value || false}
                        onChange={handleInputChange}
                        required={field.required}
                    />
                );

            case 'radio':
                return (
                    <div className="radio-group">
                        {field.options?.map(option => (
                            <div key={option.value} className="radio-item">
                                <input
                                    type="radio"
                                    id={`${field.name}_${option.value}`}
                                    name={field.name}
                                    value={option.value}
                                    checked={value === option.value}
                                    onChange={handleInputChange}
                                    required={field.required}
                                />
                                <label htmlFor={`${field.name}_${option.value}`}>
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className={`form-group ${field.className || ''}`}>
            {field.type !== 'checkbox' && (
                <label htmlFor={field.name}>
                    {field.label}
                    {field.required && <span className="required">*</span>}
                </label>
            )}

            {field.type === 'checkbox' && (
                <div className="checkbox-item">
                    {renderField()}
                    <label htmlFor={field.name}>
                        {field.label}
                        {field.required && <span className="required">*</span>}
                    </label>
                </div>
            )}

            {field.type !== 'checkbox' && renderField()}

            {loading && <div className="loading">読み込み中...</div>}
            {error && <div className="error-message">{error}</div>}
            {field.description && <div className="description">{field.description}</div>}
        </div>
    );
};

export default FormField; 