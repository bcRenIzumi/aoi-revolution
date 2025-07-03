package jp.co.benesse.xxx.controller.secure.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IGetController;
import jp.co.benesse.xxx.dto.request.employee.EmployeeDetailGetRequest;
import jp.co.benesse.xxx.dto.response.employee.EmployeeDetailGetResponse;
import jp.co.benesse.xxx.facade.employee.EmployeeDetailFacade;

/**
 * 社員詳細Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.EM_SECURE_DETAIL)
public class EmployeeDetailController implements IGetController<EmployeeDetailGetRequest, EmployeeDetailGetResponse> {

    @Autowired
    private EmployeeDetailFacade employeeDetailFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.EMPLOYEE_DETAIL_GET)
    public ResponseEntity<EmployeeDetailGetResponse> get(EmployeeDetailGetRequest request) throws Exception {
        return ResponseEntity.ok(employeeDetailFacade.get(request));
    }
}
