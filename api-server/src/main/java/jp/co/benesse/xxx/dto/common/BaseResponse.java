package jp.co.benesse.xxx.dto.common;

import com.fasterxml.jackson.annotation.JsonInclude;

import jp.co.benesse.xxx.common.enums.ErrorCode;
import lombok.Getter;
import lombok.Setter;

/**
 * 基底レスポンスクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public abstract class BaseResponse {

    /** コンストラクタ */
    public BaseResponse() {
        this.setCommon(new CommonDto());
    }

    /**
     * コンストラクタ（エラーレスポンス用）
     * 
     * @param errorCode    エラーコード
     * @param errorMessage エラーメッセージ
     */
    public BaseResponse(ErrorCode errorCode, String errorMessage) {
        CommonDto common = new CommonDto();
        common.setErrorCode(errorCode.getCode());
        common.setErrorMessage(errorMessage);
        this.setCommon(common);
    }

    /** 共通DTO */
    private CommonDto common;
}
