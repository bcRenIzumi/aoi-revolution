import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useApplication } from '../../context/ApplicationContext';
import FormField from './FormField';

const CommonApplicationForm = forwardRef(({
    formConfig,
    onSubmit,
    onDraftSave,
    initialData = {},
    formType = 'basic' // 'basic' or 'detail'
}, ref) => {
    const { basicForm, detailForm, updateBasicForm, updateDetailForm } = useApplication();

    // Contextから初期データを取得
    const contextData = formType === 'basic' ? basicForm : detailForm;

    // 初期フォームデータを生成（メモ化）
    const initialFormData = useMemo(() => {
        const formData = {};
        formConfig.sections.forEach(section => {
            section.fields.forEach(field => {
                if (field.type === 'row') {
                    field.fields.forEach(rowField => {
                        formData[rowField.name] =
                            contextData[rowField.name] ||
                            initialData[rowField.name] ||
                            rowField.defaultValue || '';
                    });
                } else {
                    formData[field.name] =
                        contextData[field.name] ||
                        initialData[field.name] ||
                        field.defaultValue || '';
                }
            });
        });
        return formData;
    }, [formConfig, contextData, initialData]);

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isInitialized, setIsInitialized] = useState(false);

    // 初期化完了後のみContextを更新
    useEffect(() => {
        if (!isInitialized) {
            setIsInitialized(true);
            return;
        }

        const timeoutId = setTimeout(() => {
            if (formType === 'basic') {
                updateBasicForm(formData);
            } else {
                updateDetailForm(formData);
            }
        }, 300); // debounce時間を少し延長

        return () => clearTimeout(timeoutId);
    }, [formData, formType, updateBasicForm, updateDetailForm, isInitialized]);

    // Contextデータが変更された時にローカル状態を更新
    useEffect(() => {
        if (isInitialized) {
            setFormData(prevFormData => {
                const needsUpdate = Object.keys(contextData).some(
                    key => contextData[key] !== prevFormData[key]
                );
                return needsUpdate ? { ...prevFormData, ...contextData } : prevFormData;
            });
        }
    }, [contextData, isInitialized]);

    const handleInputChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // エラーをクリア
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        formConfig.sections.forEach(section => {
            section.fields.forEach(field => {
                if (field.type === 'row') {
                    field.fields.forEach(rowField => {
                        if (rowField.required && !formData[rowField.name]) {
                            newErrors[rowField.name] = `${rowField.label}は必須です`;
                        }
                    });
                } else {
                    if (field.required && !formData[field.name]) {
                        newErrors[field.name] = `${field.label}は必須です`;
                    }
                }
            });
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    const handleDraftSave = () => {
        onDraftSave(formData);
    };

    useImperativeHandle(ref, () => ({
        submitForm: () => handleSubmit({ preventDefault: () => { } }),
        saveAsDraft: () => handleDraftSave(),
        getFormData: () => formData,
        setFormData: (data) => setFormData(data),
        validateForm: () => validateForm()
    }));

    const renderField = (field) => {
        if (field.type === 'row') {
            return (
                <div key={field.key} className="form-row">
                    {field.fields.map(rowField => (
                        <FormField
                            key={rowField.name}
                            field={rowField}
                            value={formData[rowField.name]}
                            error={errors[rowField.name]}
                            onChange={handleInputChange}
                            formData={formData}
                        />
                    ))}
                </div>
            );
        }

        if (field.type === 'checkbox-group') {
            return (
                <div key={field.key} className="checkbox-group">
                    {field.fields.map(checkboxField => (
                        <FormField
                            key={checkboxField.name}
                            field={checkboxField}
                            value={formData[checkboxField.name]}
                            error={errors[checkboxField.name]}
                            onChange={handleInputChange}
                            formData={formData}
                        />
                    ))}
                </div>
            );
        }

        return (
            <FormField
                key={field.name}
                field={field}
                value={formData[field.name]}
                error={errors[field.name]}
                onChange={handleInputChange}
                formData={formData}
            />
        );
    };

    return (
        <form id="applicationForm" onSubmit={handleSubmit}>
            {formConfig.sections.map(section => (
                <div key={section.key} className="section">
                    <h2 className="section-title">{section.title}</h2>
                    {section.fields.map(field => renderField(field))}
                </div>
            ))}
        </form>
    );
});

export default CommonApplicationForm; 