package jp.co.benesse.xxx.facade.employee;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.employee.EmployeeListGetRequest;
import jp.co.benesse.xxx.dto.response.component.EmployeeDto;
import jp.co.benesse.xxx.dto.response.employee.EmployeeListGetResponse;
import jp.co.benesse.xxx.facade.common.IGetFacade;

/**
 * 社員一覧Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class EmployeeListFacade implements IGetFacade<EmployeeListGetRequest, EmployeeListGetResponse> {

    @Override
    public EmployeeListGetResponse get(EmployeeListGetRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // データアクセス層の呼び出し
        List<EmployeeDto> employeeList = getEmployeeListFromDatabase();

        // レスポンスDTOの組み立て
        EmployeeListGetResponse response = new EmployeeListGetResponse();
        response.setData(employeeList);

        return response;
    }

    /**
     * データベースから社員一覧を取得する
     * 
     * @return 社員一覧
     */
    private List<EmployeeDto> getEmployeeListFromDatabase() {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用してデータベースから社員一覧を取得
        List<EmployeeDto> employeeList = new ArrayList<>();

        // サンプルデータ作成
        EmployeeDto employee1 = new EmployeeDto();
        employee1.setName("山田太郎");
        employee1.setCompanyName("株式会社XXX");
        employee1.setDepartment("IT部");
        employeeList.add(employee1);

        EmployeeDto employee2 = new EmployeeDto();
        employee2.setName("佐藤花子");
        employee2.setCompanyName("株式会社YYY");
        employee2.setDepartment("営業部");
        employeeList.add(employee2);

        return employeeList;
    }
}
