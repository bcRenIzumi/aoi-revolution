package jp.co.benesse.xxx.controller.secure.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IPostController;
import jp.co.benesse.xxx.dto.request.application.ApplicationRegisterPostRequest;
import jp.co.benesse.xxx.dto.response.application.ApplicationRegisterPostResponse;
import jp.co.benesse.xxx.facade.application.ApplicationRegisterFacade;

/**
 * 申請情報本登録Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.AP_SECURE_REGISTER)
public class ApplicationRegisterController
        implements IPostController<ApplicationRegisterPostRequest, ApplicationRegisterPostResponse> {

    @Autowired
    private ApplicationRegisterFacade applicationRegisterFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.APPLICATION_REGISTER_POST)
    public ResponseEntity<ApplicationRegisterPostResponse> post(ApplicationRegisterPostRequest request)
            throws Exception {
        return ResponseEntity.ok(applicationRegisterFacade.post(request));
    }
}
