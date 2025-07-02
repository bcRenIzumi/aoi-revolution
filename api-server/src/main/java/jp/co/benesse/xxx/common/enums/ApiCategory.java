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

    /** その他 */
    OTHER("OT");

    /** APIカテゴリの識別子 */
    private final String identifier;
}
