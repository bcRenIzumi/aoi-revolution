package jp.co.benesse.xxx.dto.request.application;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jp.co.benesse.xxx.dto.common.BaseRequest;
import jp.co.benesse.xxx.dto.request.component.BasicInfoDto;
import lombok.Getter;
import lombok.Setter;

/**
 * 基本情報仮登録リクエストDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class ApplicationBasicPostRequest extends BaseRequest {

    /** 申請番号 */
    @NotBlank(message = "申請番号は必須です")
    private String id;

    /** 基本情報 */
    @NotNull(message = "基本情報は必須です")
    @Valid
    private BasicInfoDto basicInfo;
}
