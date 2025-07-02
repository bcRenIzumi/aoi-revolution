package jp.co.benesse.xxx.facade.other;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.other.HealthCheckGetRequest;
import jp.co.benesse.xxx.dto.response.other.HealthCheckGetResponse;
import jp.co.benesse.xxx.facade.common.IGetFacade;

/**
 * ヘルスチェック操作用ファサード
 *
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class HealthCheckFacade implements IGetFacade<HealthCheckGetRequest, HealthCheckGetResponse> {

    @Override
    public HealthCheckGetResponse get(HealthCheckGetRequest req) throws Exception {
        return new HealthCheckGetResponse();
    }
}
