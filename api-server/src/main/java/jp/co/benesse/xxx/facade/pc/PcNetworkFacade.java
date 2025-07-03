package jp.co.benesse.xxx.facade.pc;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.pc.PcNetworkGetRequest;
import jp.co.benesse.xxx.dto.response.component.NetworkEnvDto;
import jp.co.benesse.xxx.dto.response.pc.PcNetworkGetResponse;
import jp.co.benesse.xxx.facade.common.IGetFacade;

/**
 * ネットワーク情報一覧Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class PcNetworkFacade implements IGetFacade<PcNetworkGetRequest, PcNetworkGetResponse> {

    @Override
    public PcNetworkGetResponse get(PcNetworkGetRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // データアクセス層の呼び出し
        List<NetworkEnvDto> networkEnvList = getNetworkEnvListFromDatabase();

        // レスポンスDTOの組み立て
        PcNetworkGetResponse response = new PcNetworkGetResponse();
        response.setData(networkEnvList);

        return response;
    }

    /**
     * データベースからネットワーク環境一覧を取得する
     * 
     * @return ネットワーク環境一覧
     */
    private List<NetworkEnvDto> getNetworkEnvListFromDatabase() {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用してデータベースからネットワーク環境一覧を取得
        List<NetworkEnvDto> networkEnvList = new ArrayList<>();

        // サンプルデータ作成
        NetworkEnvDto networkEnv1 = new NetworkEnvDto();
        networkEnv1.setNetworkEnvId("N0001");
        networkEnv1.setNetworkEnvName("社内LAN");
        networkEnvList.add(networkEnv1);

        NetworkEnvDto networkEnv2 = new NetworkEnvDto();
        networkEnv2.setNetworkEnvId("N0002");
        networkEnv2.setNetworkEnvName("WiFi環境");
        networkEnvList.add(networkEnv2);

        return networkEnvList;
    }
}
