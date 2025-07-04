
package jp.co.benesse.xxx.common.exception;

import org.springframework.http.HttpStatus;

import jp.co.benesse.xxx.common.enums.ErrorCode;
import jp.co.benesse.xxx.common.exception.common.BaseException;

/**
 * 500 Internal Server Error 例外クラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
public class InternalServerErrorException extends BaseException {

    /**
     * コンストラクタ
     * 
     * @param errorCode エラーコード
     * @param params    パラメータ
     */
    public InternalServerErrorException(ErrorCode errorCode, Object... params) {
        super(errorCode, HttpStatus.INTERNAL_SERVER_ERROR, params);
    }
}
