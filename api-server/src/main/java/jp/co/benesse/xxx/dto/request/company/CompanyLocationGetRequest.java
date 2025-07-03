package jp.co.benesse.xxx.dto.request.company;

import jakarta.validation.constraints.NotBlank;
import jp.co.benesse.xxx.dto.common.BaseRequest;
import lombok.Getter;
import lombok.Setter;

/**
 * 拠点一覧取得リクエストDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class CompanyLocationGetRequest extends BaseRequest {

    /** 企業ID */
    @NotBlank(message = "企業IDは必須です")
    private String id;
}
