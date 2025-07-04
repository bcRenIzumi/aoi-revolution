package jp.co.benesse.xxx.controller.open.other;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IGetController;
import jp.co.benesse.xxx.dto.request.other.HealthCheckGetRequest;
import jp.co.benesse.xxx.dto.response.other.HealthCheckGetResponse;
import jp.co.benesse.xxx.facade.other.HealthCheckFacade;

/**
 * ヘルスチェック用コントローラー実装クラス
 *
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.OT_OPEN_HEALTH_CHECK)
public class HealthCheckController implements IGetController<HealthCheckGetRequest, HealthCheckGetResponse> {

    /** ヘルスチェック操作用ファサード */
    @Autowired
    private HealthCheckFacade healthCheckFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.HEALTH_CHECK)
    public ResponseEntity<HealthCheckGetResponse> get(HealthCheckGetRequest request) throws Exception {
        return ResponseEntity.ok(healthCheckFacade.get(request));
    }
}