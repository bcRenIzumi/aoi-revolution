package jp.co.benesse.xxx.dto.response.pc;

import java.util.List;

import jp.co.benesse.xxx.dto.common.BaseResponse;
import jp.co.benesse.xxx.dto.response.component.NetworkEnvDto;
import lombok.Getter;
import lombok.Setter;

/**
 * ネットワーク情報一覧取得レスポンスDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class PcNetworkGetResponse extends BaseResponse {

    /** ネットワーク環境一覧データ */
    private List<NetworkEnvDto> data;
}
