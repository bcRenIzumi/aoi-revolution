package jp.co.benesse.xxx.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * エラーコード列挙型
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@AllArgsConstructor
public enum ErrorCode {

    /**************************************
     * バリデーションエラー
     **************************************/
    /** バリデーションエラーです。 */
    E1001("E1001"),

    /**************************************
     * 予期せぬエラー
     **************************************/
    E9999("E9999");

    /** エラーコード */
    private final String code;

}