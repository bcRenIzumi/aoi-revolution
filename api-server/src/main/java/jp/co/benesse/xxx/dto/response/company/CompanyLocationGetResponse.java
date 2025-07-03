package jp.co.benesse.xxx.dto.response.company;

import java.util.List;

import jp.co.benesse.xxx.dto.common.BaseResponse;
import jp.co.benesse.xxx.dto.response.component.LocationDto;
import lombok.Getter;
import lombok.Setter;

/**
 * 拠点一覧取得レスポンスDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class CompanyLocationGetResponse extends BaseResponse {

    /** 拠点一覧データ */
    private List<LocationDto> data;
}
