package jp.co.benesse.xxx.controller.secure.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.RequestConstants;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.dto.request.application.ApplicationPcRequestGetRequest;
import jp.co.benesse.xxx.dto.request.application.ApplicationPcRequestPostRequest;
import jp.co.benesse.xxx.dto.response.application.ApplicationPcRequestGetResponse;
import jp.co.benesse.xxx.dto.response.application.ApplicationPcRequestPostResponse;
import jp.co.benesse.xxx.facade.application.ApplicationPcRequestFacade;

/**
 * PC申請Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.AP_SECURE_PC)
public class ApplicationPcRequestController {

    @Autowired
    private ApplicationPcRequestFacade applicationPcRequestFacade;

    /**
     * PC申請仮登録
     * 
     * @param request リクエスト
     * @return レスポンス
     * @throws Exception 例外
     */
    @PostMapping(produces = RequestConstants.REQUEST_PRODUCES)
    @ApiCodeAnnotation(ApiCode.APPLICATION_PC_REQUEST_POST)
    public ResponseEntity<ApplicationPcRequestPostResponse> post(@RequestBody ApplicationPcRequestPostRequest request)
            throws Exception {
        return ResponseEntity.ok(applicationPcRequestFacade.post(request));
    }

    /**
     * PC申請情報取得
     * 
     * @param request リクエスト
     * @return レスポンス
     * @throws Exception 例外
     */
    @GetMapping(produces = RequestConstants.REQUEST_PRODUCES)
    @ApiCodeAnnotation(ApiCode.APPLICATION_PC_REQUEST_GET)
    public ResponseEntity<ApplicationPcRequestGetResponse> get(@ModelAttribute ApplicationPcRequestGetRequest request)
            throws Exception {
        return ResponseEntity.ok(applicationPcRequestFacade.get(request));
    }
}
