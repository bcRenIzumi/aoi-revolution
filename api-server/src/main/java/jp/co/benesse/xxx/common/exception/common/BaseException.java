package jp.co.benesse.xxx.common.exception.common;

import org.springframework.http.HttpStatus;

import jp.co.benesse.xxx.common.enums.ErrorCode;
import lombok.Getter;

/**
 * 基底例外クラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
public abstract class BaseException extends Exception {

    /** エラーコード */
    protected ErrorCode errorCode;

    /** エラーメッセージのパラメータ */
    protected Object[] params;

    /** HTTPステータス */
    protected HttpStatus httpStatus;

    /**
     * コンストラクタ
     * 
     * @param errorCode  エラーコード
     * @param httpStatus HTTPステータス
     * @param params     パラメータ
     */
    public BaseException(ErrorCode errorCode, HttpStatus httpStatus, Object... params) {
        super();
        this.errorCode = errorCode;
        this.params = params;
        this.httpStatus = httpStatus;
    }

}
