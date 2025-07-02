import './FormHeader.css'

function FormHeader({
    title = "PC新規手配_一元調達PC_DX型モデル申請",
    status = "【書類準備】",
    description = "ベネッセグループで使用用途のWindowsPC、ー元調達PCベントモデル(DX型) といった申請をしています。",
    instructions = [
        "現在の以下で物品は月の申請締切期間中のみ申込みできます。",
        "ベネッセグループ物品月次調達スケジュール",
        "申込マニュアルはこちらで確認ください。",
        "一元調達PC（ベネッセモデル）申込マニュアル",
        "補助アプリの設計予定はこちら"
    ]
}) {
    return (
        <div className="form-header">
            <div className="status-badge">{status}</div>
            <h2>{title}</h2>
            <div className="instructions">
                <p>{description}</p>
                <div className="instruction-list">
                    {instructions.map((instruction, index) => (
                        <p key={index} className={index % 2 === 1 ? "link" : ""}>
                            {instruction}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FormHeader 