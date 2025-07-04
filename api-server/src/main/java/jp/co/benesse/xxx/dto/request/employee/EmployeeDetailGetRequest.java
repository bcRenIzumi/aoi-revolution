package jp.co.benesse.xxx.dto.request.employee;

import jakarta.validation.constraints.NotBlank;
import jp.co.benesse.xxx.dto.common.BaseRequest;
import lombok.Getter;
import lombok.Setter;

/**
 * 社員情報取得リクエストDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class EmployeeDetailGetRequest extends BaseRequest {

    /** 社員ID */
    @NotBlank(message = "社員IDは必須です")
    private String id;
}
