package jp.co.benesse.xxx.facade.company;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.company.CompanyListGetRequest;
import jp.co.benesse.xxx.dto.response.company.CompanyListGetResponse;
import jp.co.benesse.xxx.dto.response.component.CompanyDto;
import jp.co.benesse.xxx.facade.common.IGetFacade;

/**
 * 企業一覧Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class CompanyListFacade implements IGetFacade<CompanyListGetRequest, CompanyListGetResponse> {

    @Override
    public CompanyListGetResponse get(CompanyListGetRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // データアクセス層の呼び出し
        List<CompanyDto> companyList = getCompanyListFromDatabase();

        // レスポンスDTOの組み立て
        CompanyListGetResponse response = new CompanyListGetResponse();
        response.setData(companyList);

        return response;
    }

    /**
     * データベースから企業一覧を取得する
     * 
     * @return 企業一覧
     */
    private List<CompanyDto> getCompanyListFromDatabase() {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用してデータベースから企業一覧を取得
        List<CompanyDto> companyList = new ArrayList<>();

        // サンプルデータ作成
        CompanyDto company1 = new CompanyDto();
        company1.setCompanyId("C0001");
        company1.setCompanyName("株式会社XXX");
        companyList.add(company1);

        CompanyDto company2 = new CompanyDto();
        company2.setCompanyId("C0002");
        company2.setCompanyName("株式会社YYY");
        companyList.add(company2);

        return companyList;
    }
}
