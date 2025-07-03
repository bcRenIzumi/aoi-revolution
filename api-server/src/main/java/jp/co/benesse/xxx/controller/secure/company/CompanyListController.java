package jp.co.benesse.xxx.controller.secure.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IGetController;
import jp.co.benesse.xxx.dto.request.company.CompanyListGetRequest;
import jp.co.benesse.xxx.dto.response.company.CompanyListGetResponse;
import jp.co.benesse.xxx.facade.company.CompanyListFacade;

/**
 * 企業一覧Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.CP_SECURE_LIST)
public class CompanyListController implements IGetController<CompanyListGetRequest, CompanyListGetResponse> {

    @Autowired
    private CompanyListFacade companyListFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.COMPANY_LIST_GET)
    public ResponseEntity<CompanyListGetResponse> get(CompanyListGetRequest request) throws Exception {
        return ResponseEntity.ok(companyListFacade.get(request));
    }
}
