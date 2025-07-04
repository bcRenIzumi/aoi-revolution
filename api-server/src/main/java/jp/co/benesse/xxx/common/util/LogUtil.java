package jp.co.benesse.xxx.common.util;

/**
 * ログ出力用のユーティリティクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
public class LogUtil {

    private LogUtil() {
    }

    /**
     * 独自例外から呼び出し元の情報を取得してログ出力する文字列を生成する
     * 
     * @param e エラー情報
     * @return 呼び出し元情報
     */
    public static String callerInfo(Throwable e) {
        StackTraceElement[] ste = e.getStackTrace();
        StringBuilder sb = new StringBuilder();
        sb.append("(").append(ste[0].getClassName()).append("[").append(ste[0].getLineNumber()).append("])");
        return sb.toString();
    }
}
