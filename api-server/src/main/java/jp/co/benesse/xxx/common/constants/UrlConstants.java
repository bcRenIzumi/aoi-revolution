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
     * その他
     **************************************/

    /** その他APIのベースURL */
    private static final String OTHER = "/other";

    /** ヘルスチェックAPI */
    public static final String OT_OPEN_HEALTH_CHECK = OPEN + OTHER + "/health-check";
}
