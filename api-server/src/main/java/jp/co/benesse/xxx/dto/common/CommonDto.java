package jp.co.benesse.xxx.dto.common;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Getter;
import lombok.Setter;

/**
 * 共通DTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CommonDto {

    /** 処理日時 */
    private String processingTime;

    /** エラーコード */
    private String errorCode;

    /** エラーメッセージ */
    private String errorMessage;
}
