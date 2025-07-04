package jp.co.benesse.xxx.common.constants;

import java.time.format.DateTimeFormatter;

/**
 * 定数を定義するクラス
 *
 * @author bc0099451
 * @since 1.0.0
 */
public class AppConstants {

    /**
     * デフォルトコンストラクタをプライベート化し、インスタンス化を防止
     */
    private AppConstants() {
    }

    /** UTF-8 */
    public static final String UTF_8 = "UTF-8";

    /** フォーマッターの日付(年月日 時分秒) */
    public static final String FORMATTER_TIMESTAMP = "uuuuMMddHHmmss";

    /** 年月日時分秒のDateTimeFormatter */
    public static final DateTimeFormatter DTF_TS = DateTimeFormatter.ofPattern(FORMATTER_TIMESTAMP);
}
