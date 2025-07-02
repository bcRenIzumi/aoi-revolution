package jp.co.benesse.xxx.common.exception;

import org.springframework.http.HttpStatus;

import jp.co.benesse.xxx.common.enums.ErrorCode;
import jp.co.benesse.xxx.common.exception.common.BaseException;

/**
 * 503 Service Unavailable 例外クラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
public class ServiceUnavailableException extends BaseException {

    /**
     * コンストラクタ
     * 
     * @param errorCode エラーコード
     * @param params    パラメータ
     */
    public ServiceUnavailableException(ErrorCode errorCode, Object... params) {
        super(errorCode, HttpStatus.SERVICE_UNAVAILABLE, params);
    }
}
