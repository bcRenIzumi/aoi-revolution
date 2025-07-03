import React from 'react';

const ConfirmationContent = ({ basicFormConfig, formConfig }) => {
    const FormRow = ({ label, value, isHighlight = false }) => (
        <div className="form-row">
            <div className="form-label">{label}</div>
            <div className="form-value">
                {isHighlight ? (
                    <span className="value-highlight">{value || '未入力'}</span>
                ) : (
                    value || '未入力'
                )}
            </div>
        </div>
    );

    // ハイライトすべきフィールドを判定
    const shouldHighlight = (fieldName) => {
        const highlightFields = [
            'applicationNumber',
            'applicationQuantity',
            'selectedModel',
            'subject'
        ];
        return highlightFields.includes(fieldName);
    };

    // フィールドを再帰的に処理する関数
    const renderFields = (fields) => {
        return fields.map((field) => {
            // rowタイプの場合は内部のfieldsを処理
            if (field.type === 'row') {
                return field.fields.map((subField) => renderField(subField));
            }
            // checkbox-groupの場合は内部のfieldsを処理
            if (field.type === 'checkbox-group') {
                return field.fields.map((subField) => renderField(subField));
            }
            return renderField(field);
        });
    };

    // 個別フィールドをレンダリング
    const renderField = (field) => {
        if (!field.name || !field.label) return null;

        const isHighlight = shouldHighlight(field.name);

        // デフォルト値またはプレースホルダーを表示値として使用
        let displayValue = field.defaultValue || '';

        // checkboxの場合は特別な処理
        if (field.type === 'checkbox') {
            displayValue = field.required ? '✓ 同意済み' : '未選択';
        }

        return (
            <FormRow
                key={field.name}
                label={field.label}
                value={displayValue}
                isHighlight={isHighlight}
            />
        );
    };

    // セクションをレンダリング
    const renderSection = (section) => {
        return (
            <div key={section.key} className="confirmation-section">
                <h3 className="section-subtitle">{section.title}</h3>
                {renderFields(section.fields)}
            </div>
        );
    };

    return (
        <div className="confirmation-content">
            <h2 className="section-title">申請内容</h2>

            {/* 基本情報セクション */}
            {basicFormConfig?.sections?.map((section) => renderSection(section))}

            {/* 詳細情報セクション */}
            {formConfig?.sections?.map((section) => renderSection(section))}
        </div>
    );
};

export default ConfirmationContent; 