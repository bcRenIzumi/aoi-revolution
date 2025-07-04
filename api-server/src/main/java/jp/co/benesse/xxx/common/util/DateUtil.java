package jp.co.benesse.xxx.common.util;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;

/**
 * 日付操作用ユーティリティ
 * 
 * @author bc0099451
 * @since 1.0.0
 */
public class DateUtil {

    private DateUtil() {
    }

    /**
     * 現在日時を取得する（Asia/Tokyo）
     * 
     * @return 現在日時
     */
    public static LocalDateTime getNow() {
        return LocalDateTime.now(ZoneId.of("Asia/Tokyo"));
    }

    /**
     * 日本標準時における現在日時を取得するメソッド
     *
     * @param localDateTime ローカル日時
     * @return 現在日時
     */
    public static Date getDate(LocalDateTime localDateTime) {
        ZonedDateTime zonedDateTime = ZonedDateTime.of(localDateTime, ZoneId.of("Asia/Tokyo"));
        ZonedDateTime local = zonedDateTime.withZoneSameLocal(ZoneId.systemDefault());
        Date date = Date.from(local.toInstant());
        return date;
    }

    /**
     * 日時1が日時2より前か同じかを判定する
     * 
     * @param date1 日時1
     * @param date2 日時2
     * @return 日時1が日時2より前か同じか
     */
    public static boolean isEqualBefore(LocalDateTime date1, LocalDateTime date2) {
        return date1.isEqual(date2) || date1.isBefore(date2);
    }

    /**
     * 日時1が日時2より後か同じかを判定する
     * 
     * @param date1 日時1
     * @param date2 日時2
     * @return 日時1が日時2より後か同じか
     */
    public static boolean isEqualAfter(LocalDateTime date1, LocalDateTime date2) {
        return date1.isEqual(date2) || date1.isAfter(date2);
    }

}
