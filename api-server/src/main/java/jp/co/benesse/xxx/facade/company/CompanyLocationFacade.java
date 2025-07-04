package jp.co.benesse.xxx.facade.company;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.company.CompanyLocationGetRequest;
import jp.co.benesse.xxx.dto.response.company.CompanyLocationGetResponse;
import jp.co.benesse.xxx.dto.response.component.LocationDto;
import jp.co.benesse.xxx.facade.common.IGetFacade;

/**
 * 拠点一覧Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class CompanyLocationFacade implements IGetFacade<CompanyLocationGetRequest, CompanyLocationGetResponse> {

    @Override
    public CompanyLocationGetResponse get(CompanyLocationGetRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // データアクセス層の呼び出し
        List<LocationDto> locationList = getLocationListFromDatabase(request.getId());

        // レスポンスDTOの組み立て
        CompanyLocationGetResponse response = new CompanyLocationGetResponse();
        response.setData(locationList);

        return response;
    }

    /**
     * データベースから拠点一覧を取得する
     * 
     * @param companyId 企業ID
     * @return 拠点一覧
     */
    private List<LocationDto> getLocationListFromDatabase(String companyId) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用してデータベースから拠点一覧を取得
        List<LocationDto> locationList = new ArrayList<>();

        // サンプルデータ作成
        LocationDto location1 = new LocationDto();
        location1.setLocationId("L0001");
        location1.setLocationName("本社");
        locationList.add(location1);

        LocationDto location2 = new LocationDto();
        location2.setLocationId("L0002");
        location2.setLocationName("支社");
        locationList.add(location2);

        return locationList;
    }
}
