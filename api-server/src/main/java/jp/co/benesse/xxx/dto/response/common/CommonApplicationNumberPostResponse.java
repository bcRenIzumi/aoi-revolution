package jp.co.benesse.xxx.dto.response.common;

import jp.co.benesse.xxx.dto.common.BaseResponse;
import lombok.Getter;
import lombok.Setter;

/**
 * 申請番号発番レスポンスDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class CommonApplicationNumberPostResponse extends BaseResponse {

    /** 申請番号発番データ */
    private ApplicationNumberData data;

    /**
     * 申請番号発番データ
     */
    @Getter
    @Setter
    public static class ApplicationNumberData {
        /** 申請番号 */
        private String applicationNumber;
    }
}
