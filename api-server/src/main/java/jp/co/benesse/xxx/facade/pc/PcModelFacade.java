package jp.co.benesse.xxx.facade.pc;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.pc.PcModelGetRequest;
import jp.co.benesse.xxx.dto.response.component.PcModelDto;
import jp.co.benesse.xxx.dto.response.pc.PcModelGetResponse;
import jp.co.benesse.xxx.facade.common.IGetFacade;

/**
 * PC機種一覧Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class PcModelFacade implements IGetFacade<PcModelGetRequest, PcModelGetResponse> {

    @Override
    public PcModelGetResponse get(PcModelGetRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // データアクセス層の呼び出し
        List<PcModelDto> pcModelList = getPcModelListFromDatabase();

        // レスポンスDTOの組み立て
        PcModelGetResponse response = new PcModelGetResponse();
        response.setData(pcModelList);

        return response;
    }

    /**
     * データベースからPC機種一覧を取得する
     * 
     * @return PC機種一覧
     */
    private List<PcModelDto> getPcModelListFromDatabase() {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用してデータベースからPC機種一覧を取得
        List<PcModelDto> pcModelList = new ArrayList<>();

        // サンプルデータ作成
        PcModelDto pcModel1 = new PcModelDto();
        pcModel1.setPcModelId("P0001");
        pcModel1.setPcModelName("ThinkPad X1 Carbon");
        pcModelList.add(pcModel1);

        PcModelDto pcModel2 = new PcModelDto();
        pcModel2.setPcModelId("P0002");
        pcModel2.setPcModelName("Surface Pro");
        pcModelList.add(pcModel2);

        return pcModelList;
    }
}
