package jp.co.benesse.xxx.dto.response.pc;

import java.util.List;

import jp.co.benesse.xxx.dto.common.BaseResponse;
import jp.co.benesse.xxx.dto.response.component.PcModelDto;
import lombok.Getter;
import lombok.Setter;

/**
 * PC機種一覧取得レスポンスDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class PcModelGetResponse extends BaseResponse {

    /** PC機種一覧データ */
    private List<PcModelDto> data;
}
