import React, { useState } from 'react';
import '../CSS/AppBasic.css';

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
            <div className="header">
                <h1>PC新規手配 一元調達PC_DX型モデル申請</h1>
                <p>必要事項をご入力の上、送信ボタンを押してください</p>
            </div>

            <div className="form-container">
                <div className="info-section">
                    <div className="service-description">
                        <p>ベネッセグループの執務用のWindowsPCを、<strong>一元調達PCベネッセモデル(DX型)</strong>として提供しています。</p>
                    </div>

                    <details className="collapsible-section">
                        <summary className="section-header">
                            <span className="section-icon">📋</span>
                            メニュー・ご案内
                        </summary>
                        <div className="section-content">
                            <div className="info-block">
                                <h4>📅 納品スケジュール</h4>
                                <p>現在申込可能な納品日と申請受付締め切り日は以下をご確認ください。</p>
                                <a href="#" className="info-link">ベネッセ一元調達パソコン納品スケジュール</a>
                            </div>

                            <div className="info-block">
                                <h4>📖 申込マニュアル</h4>
                                <p>申込マニュアルは以下をご確認ください。</p>
                                <a href="#" className="info-link">一元調達PC（ベネッセモデル）申込マニュアル</a>
                            </div>

                            <div className="info-block">
                                <h4>💻 操作方法</h4>
                                <a href="#" className="info-link">申請アプリの操作方法はこちら</a>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="notice">
                    <div className="notice-title">【重要事項】</div>
                    <ul>
                        <li>申請内容は慎重にご確認の上で送信してください。</li>
                        <li>必須項目は必ずご入力ください。</li>
                        <li>個人情報は適切に管理され、申請処理にのみ使用されます。</li>
                    </ul>
                </div>

                <form id="applicationForm" onSubmit={handleSubmit}>
                    <div className="section">
                        <h2 className="section-title">基本情報</h2>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="applicationNumber">申請番号</label>
                                <input
                                    type="text"
                                    id="applicationNumber"
                                    name="applicationNumber"
                                    value={formData.applicationNumber}
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="applicationDate">申請日<span className="required">*</span></label>
                                <input
                                    type="date"
                                    id="applicationDate"
                                    name="applicationDate"
                                    value={formData.applicationDate}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.applicationDate && <div className="error-message">{errors.applicationDate}</div>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">件名<span className="required">*</span></label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="件名を入力してください"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.subject && <div className="error-message">{errors.subject}</div>}
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">申請者情報</h2>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="company">所属会社<span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="株式会社〇〇"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.company && <div className="error-message">{errors.company}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="applicantName">氏名<span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="applicantName"
                                    name="applicantName"
                                    placeholder="山田 太郎"
                                    value={formData.applicantName}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.applicantName && <div className="error-message">{errors.applicantName}</div>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="department">所属部門<span className="required">*</span></label>
                                <select
                                    id="department"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">部門を選択してください</option>
                                    <option value="general">総務部</option>
                                    <option value="hr">人事部</option>
                                    <option value="it">情報システム部</option>
                                    <option value="sales">営業部</option>
                                    <option value="marketing">マーケティング部</option>
                                    <option value="finance">経理部</option>
                                    <option value="development">開発部</option>
                                    <option value="other">その他</option>
                                </select>
                                {errors.department && <div className="error-message">{errors.department}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="section">所属課</label>
                                <input
                                    type="text"
                                    id="section"
                                    name="section"
                                    placeholder="第1課"
                                    value={formData.section}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">メールアドレス<span className="required">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="taro.yamada@domain.co.jp"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="employeeNumber">社員番号<span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="employeeNumber"
                                    name="employeeNumber"
                                    placeholder="bc0099451"
                                    value={formData.employeeNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.employeeNumber && <div className="error-message">{errors.employeeNumber}</div>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="extension">内線番号</label>
                            <input
                                type="tel"
                                id="extension"
                                name="extension"
                                placeholder="46163"
                                value={formData.extension}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">承認者情報</h2>

                        <div className="form-group">
                            <label htmlFor="supervisor">上司から選択<span className="required">*</span></label>
                            <select
                                id="supervisor"
                                name="supervisor"
                                value={formData.supervisor}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">上司を選択してください</option>
                                <option value="tanaka">田中 次郎（部長）</option>
                                <option value="sato">佐藤 花子（課長）</option>
                                <option value="suzuki">鈴木 一郎（係長）</option>
                                <option value="other">その他</option>
                            </select>
                            {errors.supervisor && <div className="error-message">{errors.supervisor}</div>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="approver1">承認者１<span className="required">*</span></label>
                                <select
                                    id="approver1"
                                    name="approver1"
                                    value={formData.approver1}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">承認者１を選択してください</option>
                                    <option value="dept_manager">部門長</option>
                                    <option value="section_chief">課長</option>
                                    <option value="supervisor">係長</option>
                                    <option value="custom">その他指定</option>
                                </select>
                                {errors.approver1 && <div className="error-message">{errors.approver1}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="approver2">承認者２</label>
                                <select
                                    id="approver2"
                                    name="approver2"
                                    value={formData.approver2}
                                    onChange={handleInputChange}
                                >
                                    <option value="">承認者２を選択してください（任意）</option>
                                    <option value="general_manager">本部長</option>
                                    <option value="director">取締役</option>
                                    <option value="president">社長</option>
                                    <option value="custom">その他指定</option>
                                </select>
                            </div>
                        </div>

                        <div className="checkbox-group">
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="publicFlag"
                                    name="publicFlag"
                                    checked={formData.publicFlag}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="publicFlag">公開フラグ</label>
                            </div>
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="agreement"
                                    name="agreement"
                                    checked={formData.agreement}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor="agreement">上記内容に相違なく、申請いたします。<span className="required">*</span></label>
                                {errors.agreement && <div className="error-message">{errors.agreement}</div>}
                            </div>
                        </div>
                    </div>

                    <div className="button-group">
                        <button type="button" className="btn btn-secondary" onClick={clearForm}>
                            下書き保存
                        </button>
                        <button type="submit" className="btn btn-primary">
                            送信
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppBasic; 