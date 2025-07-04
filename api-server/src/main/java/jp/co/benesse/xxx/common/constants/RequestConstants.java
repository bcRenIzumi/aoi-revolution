package jp.co.benesse.xxx.common.constants;

/**
 * リクエスト関連の定数を定義するクラス
 *
 * @author bc0099451
 * @since 1.0.0
 */
public class RequestConstants {

    /**
     * デフォルトコンストラクタをプライベート化し、インスタンス化を防止
     */
    private RequestConstants() {
    }

    /** APIレスポンスのContent-Type定数 */
    public static final String REQUEST_PRODUCES = "application/json;charset=UTF-8";

    /** APIコード用のリクエスト属性名 */
    public static final String API_CODE = "API_CODE";

    /** 処理時間 */
    public static final String PROCESSING_TIME = "PROCESSING_TIME";

    /** スタブモード用のリクエスト属性名 */
    public static final String IS_STUB_MODE = "IS_STUB_MODE";
}
