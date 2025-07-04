package jp.co.benesse.xxx.dto.request.application;

import jakarta.validation.constraints.NotBlank;
import jp.co.benesse.xxx.dto.common.BaseRequest;
import lombok.Getter;
import lombok.Setter;

/**
 * 申請情報本登録リクエストDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class ApplicationRegisterPostRequest extends BaseRequest {

    /** 申請番号 */
    @NotBlank(message = "申請番号は必須です")
    private String id;
}
