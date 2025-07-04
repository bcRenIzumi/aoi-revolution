import React from 'react';
import { useApplication } from '../../../../context/ApplicationContext';

const ConfirmationContent = ({ basicFormConfig, formConfig }) => {
    const { basicForm, detailForm, fileData } = useApplication();

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
    const renderFields = (fields, formData) => {
        return fields.map((field) => {
            // rowタイプの場合は内部のfieldsを処理
            if (field.type === 'row') {
                return field.fields.map((subField) => renderField(subField, formData));
            }
            // checkbox-groupの場合は内部のfieldsを処理
            if (field.type === 'checkbox-group') {
                return field.fields.map((subField) => renderField(subField, formData));
            }
            return renderField(field, formData);
        });
    };

    // 個別フィールドをレンダリング
    const renderField = (field, formData) => {
        if (!field.name || !field.label) return null;

        const isHighlight = shouldHighlight(field.name);

        // フォームデータから実際の入力値を取得
        let displayValue = formData[field.name];

        // checkboxの場合は特別な処理
        if (field.type === 'checkbox') {
            displayValue = displayValue ? '✓ 同意済み' : '未選択';
        }

        // selectの場合、選択されたオプションのラベルを表示
        if (field.type === 'select' && field.options && displayValue) {
            const selectedOption = field.options.find(option => option.value === displayValue);
            displayValue = selectedOption ? selectedOption.label : displayValue;
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
    const renderSection = (section, formData) => {
        return (
            <div key={section.key} className="confirmation-section">
                <h3 className="section-subtitle">{section.title}</h3>
                {renderFields(section.fields, formData)}
            </div>
        );
    };

    // ファイル情報をレンダリング
    const renderFileSection = () => {
        const fileEntries = Object.entries(fileData);

        if (fileEntries.length === 0) {
            return (
                <div className="confirmation-section">
                    <h3 className="section-subtitle">添付ファイル</h3>
                    <FormRow label="ファイル" value="添付ファイルなし" />
                </div>
            );
        }

        return (
            <div className="confirmation-section">
                <h3 className="section-subtitle">添付ファイル</h3>
                {fileEntries.map(([fileNumber, file]) => (
                    <FormRow
                        key={fileNumber}
                        label={`ファイル${fileNumber}`}
                        value={`${file.name} (${(file.size / 1024).toFixed(1)}KB)`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="confirmation-content">
            <h2 className="section-title">申請内容</h2>

            {/* 基本情報セクション */}
            {basicFormConfig?.sections?.map((section) => renderSection(section, basicForm))}

            {/* 詳細情報セクション */}
            {formConfig?.sections?.map((section) => renderSection(section, detailForm))}

            {/* ファイル情報セクション */}
            {renderFileSection()}
        </div>
    );
};

export default ConfirmationContent; 