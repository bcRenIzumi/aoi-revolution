package jp.co.benesse.xxx.dto.response.employee;

import java.util.List;

import jp.co.benesse.xxx.dto.common.BaseResponse;
import jp.co.benesse.xxx.dto.response.component.EmployeeDto;
import lombok.Getter;
import lombok.Setter;

/**
 * 社員一覧取得レスポンスDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class EmployeeListGetResponse extends BaseResponse {

    /** 社員一覧データ */
    private List<EmployeeDto> data;
}
