package jp.co.benesse.xxx.dto.common;

import jp.co.benesse.xxx.common.enums.ErrorCode;
import lombok.Getter;

/**
 * エラーレスポンス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
public class ErrorResponse extends BaseResponse {

    /**
     * コンストラクタ
     * 
     * @param errorCode    エラーコード
     * @param errorMessage エラーメッセージ
     */
    public ErrorResponse(ErrorCode errorCode, String errorMessage) {
        super(errorCode, errorMessage);
    }
}
