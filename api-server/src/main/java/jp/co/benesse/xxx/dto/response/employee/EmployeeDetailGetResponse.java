package jp.co.benesse.xxx.dto.response.employee;

import jp.co.benesse.xxx.dto.common.BaseResponse;
import jp.co.benesse.xxx.dto.response.component.EmployeeDto;
import lombok.Getter;
import lombok.Setter;

/**
 * 社員情報取得レスポンスDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class EmployeeDetailGetResponse extends BaseResponse {

    /** 社員情報データ */
    private EmployeeDto data;
}
