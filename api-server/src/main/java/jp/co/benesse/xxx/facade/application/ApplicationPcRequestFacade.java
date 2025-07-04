package jp.co.benesse.xxx.facade.application;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.application.ApplicationPcRequestGetRequest;
import jp.co.benesse.xxx.dto.request.application.ApplicationPcRequestPostRequest;
import jp.co.benesse.xxx.dto.response.application.ApplicationPcRequestGetResponse;
import jp.co.benesse.xxx.dto.response.application.ApplicationPcRequestPostResponse;
import jp.co.benesse.xxx.dto.response.component.PcRequestDto;
import jp.co.benesse.xxx.facade.common.IGetFacade;
import jp.co.benesse.xxx.facade.common.IPostFacade;

/**
 * PC申請Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class ApplicationPcRequestFacade implements
        IPostFacade<ApplicationPcRequestPostRequest, ApplicationPcRequestPostResponse>,
        IGetFacade<ApplicationPcRequestGetRequest, ApplicationPcRequestGetResponse> {

    @Override
    public ApplicationPcRequestPostResponse post(ApplicationPcRequestPostRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // PC申請情報の仮登録処理
        savePcRequest(request.getId(), request.getPcRequest());

        // レスポンスDTOの組み立て
        ApplicationPcRequestPostResponse response = new ApplicationPcRequestPostResponse();

        return response;
    }

    @Override
    public ApplicationPcRequestGetResponse get(ApplicationPcRequestGetRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // PC申請情報の取得
        PcRequestDto pcRequest = getPcRequestFromDatabase(request.getId());

        // レスポンスDTOの組み立て
        ApplicationPcRequestGetResponse response = new ApplicationPcRequestGetResponse();
        ApplicationPcRequestGetResponse.PcRequestData data = new ApplicationPcRequestGetResponse.PcRequestData();
        data.setPcRequest(pcRequest);
        response.setData(data);

        return response;
    }

    /**
     * PC申請情報を仮登録する
     * 
     * @param applicationNumber 申請番号
     * @param pcRequest         PC申請情報
     */
    private void savePcRequest(String applicationNumber, PcRequestDto pcRequest) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用してPC申請情報をデータベースに仮登録

        // PC申請情報の検証
        validatePcRequest(pcRequest);

        // 既存のPC申請情報を削除（仮登録の場合は上書き）
        deleteExistingPcRequest(applicationNumber);

        // 新しいPC申請情報を登録
        insertPcRequest(applicationNumber, pcRequest);
    }

    /**
     * PC申請情報をデータベースから取得する
     * 
     * @param applicationNumber 申請番号
     * @return PC申請情報
     */
    private PcRequestDto getPcRequestFromDatabase(String applicationNumber) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用してデータベースからPC申請情報を取得

        // サンプルデータ作成
        PcRequestDto pcRequest = new PcRequestDto();
        pcRequest.setPcModelId("P0001");
        pcRequest.setNetworkEnvId("N0001");
        pcRequest.setInstallationType("1");
        pcRequest.setDeliveryDate("2024-01-31");

        return pcRequest;
    }

    /**
     * PC申請情報の検証
     * 
     * @param pcRequest PC申請情報
     */
    private void validatePcRequest(PcRequestDto pcRequest) {
        // TODO: 実装方法が不明箇所 - PC機種ID、ネットワーク環境ID、導入区分の存在チェック
    }

    /**
     * 既存のPC申請情報を削除
     * 
     * @param applicationNumber 申請番号
     */
    private void deleteExistingPcRequest(String applicationNumber) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用して既存のPC申請情報を削除
    }

    /**
     * PC申請情報を登録
     * 
     * @param applicationNumber 申請番号
     * @param pcRequest         PC申請情報
     */
    private void insertPcRequest(String applicationNumber, PcRequestDto pcRequest) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用してPC申請情報をデータベースに登録
    }
}
