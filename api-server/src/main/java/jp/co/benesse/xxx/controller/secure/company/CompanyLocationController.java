package jp.co.benesse.xxx.controller.secure.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IGetController;
import jp.co.benesse.xxx.dto.request.company.CompanyLocationGetRequest;
import jp.co.benesse.xxx.dto.response.company.CompanyLocationGetResponse;
import jp.co.benesse.xxx.facade.company.CompanyLocationFacade;

/**
 * 拠点一覧Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.CP_SECURE_LOCATION)
public class CompanyLocationController
        implements IGetController<CompanyLocationGetRequest, CompanyLocationGetResponse> {

    @Autowired
    private CompanyLocationFacade companyLocationFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.COMPANY_LOCATION_GET)
    public ResponseEntity<CompanyLocationGetResponse> get(CompanyLocationGetRequest request) throws Exception {
        return ResponseEntity.ok(companyLocationFacade.get(request));
    }
}
