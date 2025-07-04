package jp.co.benesse.xxx.controller.secure.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.UrlConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.controller.common.IGetController;
import jp.co.benesse.xxx.dto.request.employee.EmployeeListGetRequest;
import jp.co.benesse.xxx.dto.response.employee.EmployeeListGetResponse;
import jp.co.benesse.xxx.facade.employee.EmployeeListFacade;

/**
 * 社員一覧Controllerクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@RestController
@RequestMapping(UrlConstants.EM_SECURE_LIST)
public class EmployeeListController implements IGetController<EmployeeListGetRequest, EmployeeListGetResponse> {

    @Autowired
    private EmployeeListFacade employeeListFacade;

    @Override
    @ApiCodeAnnotation(ApiCode.EMPLOYEE_LIST_GET)
    public ResponseEntity<EmployeeListGetResponse> get(EmployeeListGetRequest request) throws Exception {
        return ResponseEntity.ok(employeeListFacade.get(request));
    }
}
