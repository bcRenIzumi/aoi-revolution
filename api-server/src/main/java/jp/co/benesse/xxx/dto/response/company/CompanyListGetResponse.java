package jp.co.benesse.xxx.dto.response.company;

import java.util.List;

import jp.co.benesse.xxx.dto.common.BaseResponse;
import jp.co.benesse.xxx.dto.response.component.CompanyDto;
import lombok.Getter;
import lombok.Setter;

/**
 * 企業一覧取得レスポンスDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class CompanyListGetResponse extends BaseResponse {

    /** 企業一覧データ */
    private List<CompanyDto> data;
}
