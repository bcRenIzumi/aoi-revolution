import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm';
import ButtonGroup from './ButtonGroup';
import Header from './Header';
import InfoSection from './InfoSection';

const AppBasic = () => {
    const [formData, setFormData] = useState({
        applicationNumber: 'AOI000/000001',
        applicationDate: '',
        subject: '',
        company: '',
        applicantName: '',
        department: '',
        section: '',
        email: '',
        employeeNumber: '',
        extension: '',
        supervisor: '',
        approver1: '',
        approver2: '',
        publicFlag: false,
        agreement: false
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = [
            'applicationDate', 'subject', 'company', 'applicantName',
            'department', 'email', 'employeeNumber', 'supervisor', 'approver1'
        ];

        requiredFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = '必須項目です';
            }
        });

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = '有効なメールアドレスを入力してください';
        }

        if (!formData.agreement) {
            newErrors.agreement = '同意にチェックを入れてください';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            // API呼び出しやフォーム送信処理をここに実装
        }
    };

    const clearForm = () => {
        setFormData({
            ...formData,
            applicationDate: '',
            subject: '',
            company: '',
            applicantName: '',
            department: '',
            section: '',
            email: '',
            employeeNumber: '',
            extension: '',
            supervisor: '',
            approver1: '',
            approver2: '',
            publicFlag: false,
            agreement: false
        });
        setErrors({});
    };

    return (
        <div className="container">
            <Header />

            <div className="form-container">
                <InfoSection />

                <ApplicationForm
                    formData={formData}
                    errors={errors}
                    handleInputChange={handleInputChange}
                    onSubmit={handleSubmit}
                />

                <ButtonGroup onClear={clearForm} onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default AppBasic; 