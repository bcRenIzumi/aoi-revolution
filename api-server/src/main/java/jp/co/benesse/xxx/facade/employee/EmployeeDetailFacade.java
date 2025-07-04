package jp.co.benesse.xxx.facade.employee;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.employee.EmployeeDetailGetRequest;
import jp.co.benesse.xxx.dto.response.component.EmployeeDto;
import jp.co.benesse.xxx.dto.response.employee.EmployeeDetailGetResponse;
import jp.co.benesse.xxx.facade.common.IGetFacade;

/**
 * 社員詳細Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class EmployeeDetailFacade implements IGetFacade<EmployeeDetailGetRequest, EmployeeDetailGetResponse> {

    @Override
    public EmployeeDetailGetResponse get(EmployeeDetailGetRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // データアクセス層の呼び出し
        EmployeeDto employee = getEmployeeFromDatabase(request.getId());

        // レスポンスDTOの組み立て
        EmployeeDetailGetResponse response = new EmployeeDetailGetResponse();
        response.setData(employee);

        return response;
    }

    /**
     * データベースから社員情報を取得する
     * 
     * @param employeeId 社員ID
     * @return 社員情報
     */
    private EmployeeDto getEmployeeFromDatabase(String employeeId) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用してデータベースから社員情報を取得

        // サンプルデータ作成
        EmployeeDto employee = new EmployeeDto();
        employee.setName("山田太郎");
        employee.setCompanyName("株式会社XXX");
        employee.setDepartment("IT部");

        return employee;
    }
}
