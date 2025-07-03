package jp.co.benesse.xxx.controller.secure.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IPostController;
import jp.co.benesse.xxx.dto.request.common.CommonApplicationNumberPostRequest;
import jp.co.benesse.xxx.dto.response.common.CommonApplicationNumberPostResponse;
import jp.co.benesse.xxx.facade.common.CommonApplicationNumberFacade;

/**
 * 申請番号発番Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.CM_SECURE_APPLICATION_NUMBER)
public class CommonApplicationNumberController
        implements IPostController<CommonApplicationNumberPostRequest, CommonApplicationNumberPostResponse> {

    @Autowired
    private CommonApplicationNumberFacade commonApplicationNumberFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.COMMON_APPLICATION_NUMBER_POST)
    public ResponseEntity<CommonApplicationNumberPostResponse> post(CommonApplicationNumberPostRequest request)
            throws Exception {
        return ResponseEntity.ok(commonApplicationNumberFacade.post(request));
    }
}
