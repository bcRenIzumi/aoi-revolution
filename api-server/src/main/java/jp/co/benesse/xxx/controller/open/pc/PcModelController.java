package jp.co.benesse.xxx.controller.open.pc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IGetController;
import jp.co.benesse.xxx.dto.request.pc.PcModelGetRequest;
import jp.co.benesse.xxx.dto.response.pc.PcModelGetResponse;
import jp.co.benesse.xxx.facade.pc.PcModelFacade;

/**
 * PC機種一覧Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.PC_OPEN_MODEL)
public class PcModelController implements IGetController<PcModelGetRequest, PcModelGetResponse> {

    @Autowired
    private PcModelFacade pcModelFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.PC_MODEL_GET)
    public ResponseEntity<PcModelGetResponse> get(PcModelGetRequest request) throws Exception {
        return ResponseEntity.ok(pcModelFacade.get(request));
    }
}
