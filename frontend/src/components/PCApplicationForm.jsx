import { useEffect, useState } from 'react'
import FormActions from './FormActions'
import FormField from './FormField'
import FormHeader from './FormHeader'
import './PCApplicationForm.css'

function PCApplicationForm({ url }) {
    const [formData, setFormData] = useState({
        applicationNumber: 'a2607XX-20030308',
        workName: '',
        applicationDate: new Date().toLocaleDateString('ja-JP'),
        companyName: 'ベネッセ',
        applicantName: '収録 湯',
        department: '',
        affiliatedCompany: 'システムエンジニアリング室',
        email: 'ken_surf@mail.benesse.co.jp',
        phoneNumber: 'bco10805',
        extensionNumber: '43776',
        supervisorApproval: '',
        requirement1: '',
        requirement2: '',
        publicFlag: false
    })

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')
    const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(false)

    // Web APIから情報を取得するモック関数
    const fetchUserInfo = async () => {
        try {
            setIsLoadingUserInfo(true)
            await new Promise(resolve => setTimeout(resolve, 1500))

            const mockUserData = {
                applicationNumber: 'a2607XX-20030308',
                applicationDate: new Date().toLocaleDateString('ja-JP'),
                applicantName: '収録 湯',
                email: 'ken_surf@mail.benesse.co.jp',
                phoneNumber: 'bco10805',
                extensionNumber: '43776'
            }

            setFormData(prev => ({
                ...prev,
                ...mockUserData
            }))

            setMessage('✅ ユーザー情報を取得しました')
            setMessageType('success')
            setTimeout(() => setMessage(''), 3000)

        } catch (error) {
            setMessage(`❌ ユーザー情報の取得に失敗しました: ${error.message}`)
            setMessageType('error')
        } finally {
            setIsLoadingUserInfo(false)
        }
    }

    useEffect(() => {
        fetchUserInfo()
    }, [])

    // 入力値の変更処理
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    // 部門選択肢
    const departmentOptions = [
        { value: 'システム部', label: 'システム部' },
        { value: '営業部', label: '営業部' },
        { value: 'マーケティング部', label: 'マーケティング部' },
        { value: '人事部', label: '人事部' },
        { value: '経理部', label: '経理部' }
    ]

    // 上司確認選択肢
    const supervisorOptions = [
        { value: 'yes', label: 'はい' },
        { value: 'no', label: 'いいえ' }
    ]

    // 承認者1選択肢
    const requirement1Options = [
        { value: 'standard', label: '標準構成' },
        { value: 'custom', label: 'カスタム構成' },
        { value: 'high-spec', label: '高性能構成' }
    ]

    // 承認者2選択肢
    const requirement2Options = [
        { value: 'office', label: 'Office標準' },
        { value: 'office-pro', label: 'Office Professional' },
        { value: 'no-office', label: 'Office不要' }
    ]

    // 下書き保存処理
    const handleDraftSave = async () => {
        try {
            setLoading(true)
            setMessage('📝 下書きを保存しています...')
            setMessageType('info')
            await new Promise(resolve => setTimeout(resolve, 1000))
            setMessage('✅ 下書きを保存しました')
            setMessageType('success')
        } catch (error) {
            setMessage(`❌ エラーが発生しました: ${error.message}`)
            setMessageType('error')
        } finally {
            setLoading(false)
        }
    }

    // 次へボタンの処理
    const handleNext = async (e) => {
        e.preventDefault()

        // バリデーション
        if (!formData.workName.trim()) {
            setMessage('❌ 作名を入力してください')
            setMessageType('error')
            return
        }

        if (!formData.department) {
            setMessage('❌ 申請者所属部門を選択してください')
            setMessageType('error')
            return
        }

        if (!formData.supervisorApproval) {
            setMessage('❌ 上司の確認を選択してください')
            setMessageType('error')
            return
        }

        if (!formData.requirement1) {
            setMessage('❌ 承認者1を選択してください')
            setMessageType('error')
            return
        }

        if (!formData.requirement2) {
            setMessage('❌ 承認者2を選択してください')
            setMessageType('error')
            return
        }

        try {
            setLoading(true)
            setMessage('📤 申請を送信しています...')
            setMessageType('info')
            await new Promise(resolve => setTimeout(resolve, 1500))
            setMessage('✅ 申請を正常に送信しました')
            setMessageType('success')
        } catch (error) {
            setMessage(`❌ エラーが発生しました: ${error.message}`)
            setMessageType('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="pc-application-form">
            {/* ヘッダー部分 */}
            <FormHeader />

            {/* 基本情報入力セクション */}
            <div className="form-section">
                <div className="section-header">
                    <span className="section-number">1</span>
                    <span className="section-title">基本情報入力</span>
                </div>

                <form onSubmit={handleNext} className="application-form">
                    {/* API取得フィールド */}
                    <FormField
                        type="text"
                        label="申請番号"
                        name="applicationNumber"
                        value={formData.applicationNumber}
                        onChange={handleInputChange}
                        readonly={true}
                        apiEndpoint="/api/application-number"
                    />

                    <FormField
                        type="text"
                        label="作名"
                        name="workName"
                        value={formData.workName}
                        onChange={handleInputChange}
                        placeholder="作名を入力してください"
                    />

                    <FormField
                        type="text"
                        label="申請日"
                        name="applicationDate"
                        value={formData.applicationDate}
                        onChange={handleInputChange}
                        readonly={true}
                        apiEndpoint="/api/application-date"
                    />

                    <FormField
                        type="text"
                        label="申請事業会社"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                    />

                    <FormField
                        type="text"
                        label="申請者氏名"
                        name="applicantName"
                        value={formData.applicantName}
                        onChange={handleInputChange}
                        readonly={true}
                        apiEndpoint="/api/applicant-name"
                    />

                    <FormField
                        type="select"
                        label="申請者所属部門"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        options={departmentOptions}
                        apiEndpoint="/api/departments"
                    />

                    <FormField
                        type="text"
                        label="申請者所属会社"
                        name="affiliatedCompany"
                        value={formData.affiliatedCompany}
                        onChange={handleInputChange}
                    />

                    <FormField
                        type="email"
                        label="申請者メールアドレス"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        readonly={true}
                        apiEndpoint="/api/email"
                    />

                    <FormField
                        type="text"
                        label="申請者社員番号"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        readonly={true}
                        apiEndpoint="/api/employee-number"
                    />

                    <FormField
                        type="text"
                        label="申請者内線"
                        name="extensionNumber"
                        value={formData.extensionNumber}
                        onChange={handleInputChange}
                        readonly={true}
                        apiEndpoint="/api/extension"
                    />

                    <FormField
                        type="select"
                        label="上司の確認"
                        name="supervisorApproval"
                        value={formData.supervisorApproval}
                        onChange={handleInputChange}
                        options={supervisorOptions}
                    />

                    <FormField
                        type="select"
                        label="承認者1"
                        name="requirement1"
                        value={formData.requirement1}
                        onChange={handleInputChange}
                        required={true}
                        options={requirement1Options}
                    />

                    <FormField
                        type="select"
                        label="承認者2"
                        name="requirement2"
                        value={formData.requirement2}
                        onChange={handleInputChange}
                        required={true}
                        options={requirement2Options}
                    />

                    <FormField
                        type="checkbox"
                        label="公開フラグ"
                        name="publicFlag"
                        value={formData.publicFlag}
                        onChange={handleInputChange}
                    />

                    {/* ボタン部分 */}
                    <FormActions
                        onDraftSave={handleDraftSave}
                        onNext={handleNext}
                        loading={loading}
                        message={message}
                        messageType={messageType}
                    />
                </form>
            </div>
        </div>
    )
}

export default PCApplicationForm 