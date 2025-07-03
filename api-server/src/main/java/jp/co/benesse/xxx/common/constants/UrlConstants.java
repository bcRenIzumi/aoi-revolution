package jp.co.benesse.xxx.common.constants;

/**
 * URL定数クラス
 * 
 * <p>
 * フィールド命名規則は以下に従うこと
 * [API接頭辞]_[認証内外]_[APIのURL最下層]
 * ・API接頭辞：ApiCategory.javaを参照
 * ・認証内外：認証内=SECURE、認証外=OPEN
 * </p>
 * 
 * @author bc0099451
 * @since 1.0.0
 */
public class UrlConstants {

    /**
     * デフォルトコンストラクタをプライベート化し、インスタンス化を防止
     */
    private UrlConstants() {
    }

    /**************************************
     * 共通設定
     **************************************/

    /** 認証内（アカウント要件で使用する） */
    private static final String SECURE = "/secure";

    /** 認証外（アカウント要件で使用する） */
    private static final String OPEN = "/open";

    /**************************************
     * 社員系
     **************************************/

    /** 社員系APIのベースURL */
    private static final String EMPLOYEE = "/employee";

    /** 社員一覧取得API */
    public static final String EM_SECURE_LIST = SECURE + EMPLOYEE + "/list";

    /** 社員情報取得API */
    public static final String EM_SECURE_DETAIL = SECURE + EMPLOYEE + "/detail";

    /**************************************
     * 企業系
     **************************************/

    /** 企業系APIのベースURL */
    private static final String COMPANY = "/company";

    /** 企業一覧取得API */
    public static final String CP_SECURE_LIST = SECURE + COMPANY + "/list";

    /** 拠点一覧取得API */
    public static final String CP_SECURE_LOCATION = SECURE + COMPANY + "/location";

    /**************************************
     * PC環境系
     **************************************/

    /** PC環境系APIのベースURL */
    private static final String PC = "/pc";

    /** ネットワーク情報一覧取得API */
    public static final String PC_OPEN_NETWORK = OPEN + PC + "/network";

    /** PC機種一覧取得API */
    public static final String PC_OPEN_MODEL = OPEN + PC + "/model";

    /**************************************
     * 共通系
     **************************************/

    /** 共通系APIのベースURL */
    private static final String COMMON = "/common";

    /** 申請番号発番API */
    public static final String CM_SECURE_APPLICATION_NUMBER = SECURE + COMMON + "/application-number";

    /**************************************
     * 申請系
     **************************************/

    /** 申請系APIのベースURL */
    private static final String APPLICATION = "/application";

    /** 申請情報本登録API */
    public static final String AP_SECURE_REGISTER = SECURE + APPLICATION + "/register";

    /** 基本情報仮登録API */
    public static final String AP_SECURE_BASIC = SECURE + APPLICATION + "/basic";

    /** ファイル仮登録API */
    public static final String AP_SECURE_FILE = SECURE + APPLICATION + "/file";

    /** PC申請仮登録・取得API */
    public static final String AP_SECURE_PC = SECURE + APPLICATION + "/pc";

    /**************************************
     * その他
     **************************************/

    /** その他APIのベースURL */
    private static final String OTHER = "/other";

    /** ヘルスチェックAPI */
    public static final String OT_OPEN_HEALTH_CHECK = OPEN + OTHER + "/health-check";
}
