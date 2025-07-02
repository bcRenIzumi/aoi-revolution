import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        // 機器情報
        deviceManagementCompany: '',
        desiredDeliveryDate: '',

        // 管理者・使用者情報
        adminDepartment: '',
        adminBeamsId: '',
        adminName: '',
        costBurdenCode: '',
        userDepartment: '',
        userBeamsId: '',
        userName: '',
        userNameFree: '',

        // 設置情報
        installationSite: '',
        installationFloor: '',
        installationSiteOther: '',
        installationDetail: '',

        // 納品先情報
        networkEnvironment: '',
        specifiedIpAddress: '',
        deliveryCompany: '',
        deliverySite: '',
        deliveryZipCode: '',
        deliveryAddress: '',
        deliveryFloor: '',
        deliveryDepartment: '',
        recipient: '',
        recipientPhone: '',
        installationCategory: '',
        selectedModel: '',
        applicationQuantity: '',
        applicationReason: '',
        currentPcManagementNumber: '',
        currentPcContractEndDate: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // ここで実際の送信処理を実装
    };

    const handleDraftSave = () => {
        console.log('Draft saved:', formData);
        // ここで下書き保存処理を実装
    };

    return (
        <form id="applicationForm" onSubmit={handleSubmit}>
            {/* 機器情報セクション */}
            <div className="section">
                <h2 className="section-title">機器情報</h2>

                <div className="form-group">
                    <label htmlFor="deviceManagementCompany">管理会社<span className="required">*</span></label>
                    <select
                        id="deviceManagementCompany"
                        name="deviceManagementCompany"
                        required
                        value={formData.deviceManagementCompany}
                        onChange={handleInputChange}
                    >
                        <option value="">管理会社を選択してください</option>
                    </select>
                    <div className="error-message">管理会社を選択してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="desiredDeliveryDate">希望納品日<span className="required">*</span></label>
                    <select
                        id="desiredDeliveryDate"
                        name="desiredDeliveryDate"
                        required
                        value={formData.desiredDeliveryDate}
                        onChange={handleInputChange}
                    >
                        <option value="">希望納品日を選択してください</option>
                    </select>
                    <div className="error-message">希望納品日を選択してください</div>
                </div>
            </div>

            {/* 管理者・使用者情報セクション */}
            {/* 管理者情報セクション */}
            <div className="section">
                <h2 className="section-title">管理者情報</h2>

                <div className="form-group">
                    <label htmlFor="adminDepartment">部門名<span className="required">*</span></label>
                    <input
                        type="text"
                        id="adminDepartment"
                        name="adminDepartment"
                        placeholder="部門名を入力してください"
                        required
                        value={formData.adminDepartment}
                        onChange={handleInputChange}
                    />
                    <div className="error-message">部門名を入力してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="adminBeamsId">BeAMSID<span className="required">*</span></label>
                    <input
                        type="text"
                        id="adminBeamsId"
                        name="adminBeamsId"
                        placeholder="BeAMSIDを入力してください"
                        required
                        value={formData.adminBeamsId}
                        onChange={handleInputChange}
                    />
                    <div className="error-message">BeAMSIDを入力してください</div>
                    <div className="description">z系IDは管理者に設定できません</div>
                </div>

                <div className="form-group">
                    <label htmlFor="adminName">氏名<span className="required">*</span></label>
                    <select
                        id="adminName"
                        name="adminName"
                        required
                        value={formData.adminName}
                        onChange={handleInputChange}
                    >
                        <option value="">氏名を選択してください</option>
                    </select>
                    <div className="error-message">氏名を選択してください</div>
                    <div className="description">BeAMSIDの入力後に表示される氏名は変更しないでください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="costBurdenCode">指定費用負担先コード</label>
                    <input
                        type="text"
                        id="costBurdenCode"
                        name="costBurdenCode"
                        placeholder="費用負担先コードを入力してください"
                        value={formData.costBurdenCode}
                        onChange={handleInputChange}
                    />
                    <div className="description">対象はBCのみです。管理者の経理コードと同じ場合は、入力しないでください</div>
                </div>
            </div>

            {/* 使用者情報セクション */}
            <div className="section">
                <h2 className="section-title">使用者情報</h2>

                <div className="form-group">
                    <label htmlFor="userDepartment">部門名</label>
                    <input
                        type="text"
                        id="userDepartment"
                        name="userDepartment"
                        placeholder="部門名を入力してください"
                        value={formData.userDepartment}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="userBeamsId">BeAMSID</label>
                    <input
                        type="text"
                        id="userBeamsId"
                        name="userBeamsId"
                        placeholder="BeAMSIDを入力してください"
                        value={formData.userBeamsId}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="userName">氏名（選択）</label>
                    <select
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                    >
                        <option value="">氏名を選択してください</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="userNameFree">氏名（フリー入力）</label>
                    <input
                        type="text"
                        id="userNameFree"
                        name="userNameFree"
                        placeholder="氏名を入力してください"
                        value={formData.userNameFree}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {/* 設置情報セクション */}
            <div className="section">
                <h2 className="section-title">設置情報</h2>

                <div className="form-group">
                    <label htmlFor="installationSite">拠点<span className="required">*</span></label>
                    <select
                        id="installationSite"
                        name="installationSite"
                        required
                        value={formData.installationSite}
                        onChange={handleInputChange}
                    >
                        <option value="">拠点を選択してください</option>
                        <option value="other">その他</option>
                    </select>
                    <div className="error-message">拠点を選択してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="installationFloor">フロア</label>
                    <input
                        type="text"
                        id="installationFloor"
                        name="installationFloor"
                        placeholder="フロアを入力してください"
                        value={formData.installationFloor}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="installationSiteOther">拠点（その他）</label>
                    <textarea
                        id="installationSiteOther"
                        name="installationSiteOther"
                        rows="3"
                        placeholder="拠点の詳細を入力してください"
                        value={formData.installationSiteOther}
                        onChange={handleInputChange}
                    ></textarea>
                    <div className="description">拠点が「その他」の場合のみ入力してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="installationDetail">場所詳細</label>
                    <textarea
                        id="installationDetail"
                        name="installationDetail"
                        rows="3"
                        placeholder="場所の詳細を入力してください"
                        value={formData.installationDetail}
                        onChange={handleInputChange}
                    ></textarea>
                    <div className="description">管理に必要な場合のみ入力してください</div>
                </div>
            </div>

            {/* 納品先情報セクション */}
            <div className="section">
                <h2 className="section-title">納品先情報</h2>

                <div className="form-group">
                    <label htmlFor="networkEnvironment">ネットワーク利用環境<span className="required">*</span></label>
                    <select
                        id="networkEnvironment"
                        name="networkEnvironment"
                        required
                        value={formData.networkEnvironment}
                        onChange={handleInputChange}
                    >
                        <option value="">ネットワーク利用環境を選択してください</option>
                        <option value="dhcp">DHCP</option>
                    </select>
                    <div className="error-message">ネットワーク利用環境を選択してください</div>
                    <div className="description">ベネッセネットワークが利用可能な場合、DHCPを選択してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="specifiedIpAddress">指定IPアドレス</label>
                    <input
                        type="text"
                        id="specifiedIpAddress"
                        name="specifiedIpAddress"
                        placeholder="IPアドレスを入力してください"
                        value={formData.specifiedIpAddress}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="deliveryCompany">社名<span className="required">*</span></label>
                    <select
                        id="deliveryCompany"
                        name="deliveryCompany"
                        required
                        value={formData.deliveryCompany}
                        onChange={handleInputChange}
                    >
                        <option value="">社名を選択してください</option>
                    </select>
                    <div className="error-message">社名を選択してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="deliverySite">拠点<span className="required">*</span></label>
                    <select
                        id="deliverySite"
                        name="deliverySite"
                        required
                        value={formData.deliverySite}
                        onChange={handleInputChange}
                    >
                        <option value="">拠点を選択してください</option>
                        <option value="other">その他</option>
                    </select>
                    <div className="error-message">拠点を選択してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="deliveryZipCode">住所〒</label>
                    <input
                        type="text"
                        id="deliveryZipCode"
                        name="deliveryZipCode"
                        placeholder="郵便番号を入力してください"
                        value={formData.deliveryZipCode}
                        onChange={handleInputChange}
                    />
                    <div className="description">納品先が"その他"の時は手入力してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="deliveryAddress">住所</label>
                    <textarea
                        id="deliveryAddress"
                        name="deliveryAddress"
                        rows="3"
                        placeholder="住所を入力してください"
                        value={formData.deliveryAddress}
                        onChange={handleInputChange}
                    ></textarea>
                    <div className="description">納品先が"その他"の時は手入力してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="deliveryFloor">フロア</label>
                    <input
                        type="text"
                        id="deliveryFloor"
                        name="deliveryFloor"
                        placeholder="フロアを入力してください"
                        value={formData.deliveryFloor}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="deliveryDepartment">部門名</label>
                    <textarea
                        id="deliveryDepartment"
                        name="deliveryDepartment"
                        rows="3"
                        placeholder="部門名を入力してください"
                        value={formData.deliveryDepartment}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="recipient">受取担当者<span className="required">*</span></label>
                    <input
                        type="text"
                        id="recipient"
                        name="recipient"
                        placeholder="受取担当者名を入力してください"
                        required
                        value={formData.recipient}
                        onChange={handleInputChange}
                    />
                    <div className="error-message">受取担当者を入力してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="recipientPhone">受取先電話番号<span className="required">*</span></label>
                    <input
                        type="tel"
                        id="recipientPhone"
                        name="recipientPhone"
                        placeholder="電話番号を入力してください"
                        required
                        value={formData.recipientPhone}
                        onChange={handleInputChange}
                    />
                    <div className="error-message">受取先電話番号を入力してください</div>
                    <div className="description">内線・外線番号のどちらでも可能です</div>
                </div>

                <div className="form-group">
                    <label htmlFor="installationCategory">導入区分</label>
                    <select
                        id="installationCategory"
                        name="installationCategory"
                        value={formData.installationCategory}
                        onChange={handleInputChange}
                    >
                        <option value="">導入区分を選択してください</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="selectedModel">選択機種番号<span className="required">*</span></label>
                    <select
                        id="selectedModel"
                        name="selectedModel"
                        required
                        value={formData.selectedModel}
                        onChange={handleInputChange}
                    >
                        <option value="">選択機種番号を選択してください</option>
                    </select>
                    <div className="error-message">選択機種番号を選択してください</div>
                    <div className="description">
                        <a href="https://bnhd.sharepoint.com/sites/bgportal/intra/O3651/PC_Lineup_Win11.pdf"
                            target="_blank"
                            rel="noopener noreferrer">
                            一元調達パソコンラインナップ
                        </a>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="applicationQuantity">申請台数<span className="required">*</span></label>
                    <input
                        type="text"
                        id="applicationQuantity"
                        name="applicationQuantity"
                        placeholder="申請台数を入力してください"
                        required
                        value={formData.applicationQuantity}
                        onChange={handleInputChange}
                    />
                    <div className="error-message">申請台数を入力してください</div>
                    <div className="description">2台以上申請をする場合、管理者・使用者・設置場所・納品先等の情報は全て同一となります</div>
                </div>

                <div className="form-group">
                    <label htmlFor="applicationReason">申請理由<span className="required">*</span></label>
                    <input
                        type="text"
                        id="applicationReason"
                        name="applicationReason"
                        placeholder="申請理由を入力してください"
                        required
                        value={formData.applicationReason}
                        onChange={handleInputChange}
                    />
                    <div className="error-message">申請理由を入力してください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="currentPcManagementNumber">現行PC管理番号</label>
                    <input
                        type="text"
                        id="currentPcManagementNumber"
                        name="currentPcManagementNumber"
                        placeholder="管理番号を入力してください"
                        value={formData.currentPcManagementNumber}
                        onChange={handleInputChange}
                    />
                    <div className="description">PCに貼付の管理番号シールを参照ください</div>
                </div>

                <div className="form-group">
                    <label htmlFor="currentPcContractEndDate">現行PCの契約終了日</label>
                    <input
                        type="date"
                        id="currentPcContractEndDate"
                        name="currentPcContractEndDate"
                        value={formData.currentPcContractEndDate}
                        onChange={handleInputChange}
                    />
                    <div className="description">PCに貼付の管理番号シールを参照ください</div>
                </div>
            </div>

            <ButtonGroup onDraftSave={handleDraftSave} onSubmit={handleSubmit} />
        </form>
    );
};

export default ApplicationForm; 