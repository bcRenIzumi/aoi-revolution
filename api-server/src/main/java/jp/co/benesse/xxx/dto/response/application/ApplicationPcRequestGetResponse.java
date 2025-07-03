package jp.co.benesse.xxx.dto.response.application;

import jp.co.benesse.xxx.dto.common.BaseResponse;
import jp.co.benesse.xxx.dto.response.component.PcRequestDto;
import lombok.Getter;
import lombok.Setter;

/**
 * PC申請情報取得レスポンスDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class ApplicationPcRequestGetResponse extends BaseResponse {

    /** PC申請情報データ */
    private PcRequestData data;

    /**
     * PC申請情報データ
     */
    @Getter
    @Setter
    public static class PcRequestData {
        /** PC申請情報 */
        private PcRequestDto pcRequest;
    }
}
