package jp.co.benesse.xxx.facade.application;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.application.ApplicationRegisterPostRequest;
import jp.co.benesse.xxx.dto.response.application.ApplicationRegisterPostResponse;
import jp.co.benesse.xxx.facade.common.IPostFacade;

/**
 * 申請情報本登録Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class ApplicationRegisterFacade
        implements IPostFacade<ApplicationRegisterPostRequest, ApplicationRegisterPostResponse> {

    @Override
    public ApplicationRegisterPostResponse post(ApplicationRegisterPostRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // 申請情報の本登録処理
        registerApplication(request.getId());

        // レスポンスDTOの組み立て
        ApplicationRegisterPostResponse response = new ApplicationRegisterPostResponse();

        return response;
    }

    /**
     * 申請情報を本登録する
     * 
     * @param applicationNumber 申請番号
     */
    private void registerApplication(String applicationNumber) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用して申請情報をデータベースに本登録

        // 申請情報の検証
        validateApplicationData(applicationNumber);

        // 申請ステータスを「本登録済み」に更新
        updateApplicationStatus(applicationNumber);

        // 承認フローの開始
        startApprovalFlow(applicationNumber);
    }

    /**
     * 申請情報の検証
     * 
     * @param applicationNumber 申請番号
     */
    private void validateApplicationData(String applicationNumber) {
        // TODO: 実装方法が不明箇所 - 基本情報、ファイル、PC申請情報の整合性チェック
    }

    /**
     * 申請ステータスの更新
     * 
     * @param applicationNumber 申請番号
     */
    private void updateApplicationStatus(String applicationNumber) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用して申請ステータスを更新
    }

    /**
     * 承認フローの開始
     * 
     * @param applicationNumber 申請番号
     */
    private void startApprovalFlow(String applicationNumber) {
        // TODO: 実装方法が不明箇所 - 承認フローエンジンへの連携処理
    }
}
