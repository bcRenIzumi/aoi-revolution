package jp.co.benesse.xxx.controller.open.pc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IGetController;
import jp.co.benesse.xxx.dto.request.pc.PcNetworkGetRequest;
import jp.co.benesse.xxx.dto.response.pc.PcNetworkGetResponse;
import jp.co.benesse.xxx.facade.pc.PcNetworkFacade;

/**
 * ネットワーク情報一覧Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.PC_OPEN_NETWORK)
public class PcNetworkController implements IGetController<PcNetworkGetRequest, PcNetworkGetResponse> {

    @Autowired
    private PcNetworkFacade pcNetworkFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.PC_NETWORK_GET)
    public ResponseEntity<PcNetworkGetResponse> get(PcNetworkGetRequest request) throws Exception {
        return ResponseEntity.ok(pcNetworkFacade.get(request));
    }
}
