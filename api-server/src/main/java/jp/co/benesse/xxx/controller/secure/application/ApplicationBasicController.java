package jp.co.benesse.xxx.controller.secure.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IPostController;
import jp.co.benesse.xxx.dto.request.application.ApplicationBasicPostRequest;
import jp.co.benesse.xxx.dto.response.application.ApplicationBasicPostResponse;
import jp.co.benesse.xxx.facade.application.ApplicationBasicFacade;

/**
 * 基本情報仮登録Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.AP_SECURE_BASIC)
public class ApplicationBasicController
        implements IPostController<ApplicationBasicPostRequest, ApplicationBasicPostResponse> {

    @Autowired
    private ApplicationBasicFacade applicationBasicFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.APPLICATION_BASIC_POST)
    public ResponseEntity<ApplicationBasicPostResponse> post(ApplicationBasicPostRequest request) throws Exception {
        return ResponseEntity.ok(applicationBasicFacade.post(request));
    }
}
