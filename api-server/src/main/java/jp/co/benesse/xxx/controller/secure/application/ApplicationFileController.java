package jp.co.benesse.xxx.controller.secure.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IPostController;
import jp.co.benesse.xxx.dto.request.application.ApplicationFilePostRequest;
import jp.co.benesse.xxx.dto.response.application.ApplicationFilePostResponse;
import jp.co.benesse.xxx.facade.application.ApplicationFileFacade;

/**
 * ファイル仮登録Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.AP_SECURE_FILE)
public class ApplicationFileController
        implements IPostController<ApplicationFilePostRequest, ApplicationFilePostResponse> {

    @Autowired
    private ApplicationFileFacade applicationFileFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.APPLICATION_FILE_POST)
    public ResponseEntity<ApplicationFilePostResponse> post(ApplicationFilePostRequest request) throws Exception {
        return ResponseEntity.ok(applicationFileFacade.post(request));
    }
}
