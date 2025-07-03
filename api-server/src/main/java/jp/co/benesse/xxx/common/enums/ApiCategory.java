package jp.co.benesse.xxx.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * APIのカテゴリを定義する列挙型
 *
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@AllArgsConstructor
public enum ApiCategory {

    /** 社員系 */
    EMPLOYEE("EM"),

    /** 企業系 */
    COMPANY("CP"),

    /** PC環境系 */
    PC("PC"),

    /** 共通系 */
    COMMON("CM"),

    /** 申請系 */
    APPLICATION("AP"),

    /** その他 */
    OTHER("OT");

    /** APIカテゴリの識別子 */
    private final String identifier;
}
