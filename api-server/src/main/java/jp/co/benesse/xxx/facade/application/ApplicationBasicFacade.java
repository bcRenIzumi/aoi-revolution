package jp.co.benesse.xxx.facade.application;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.application.ApplicationBasicPostRequest;
import jp.co.benesse.xxx.dto.response.application.ApplicationBasicPostResponse;
import jp.co.benesse.xxx.facade.common.IPostFacade;

/**
 * 基本情報仮登録Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class ApplicationBasicFacade implements IPostFacade<ApplicationBasicPostRequest, ApplicationBasicPostResponse> {

    @Override
    public ApplicationBasicPostResponse post(ApplicationBasicPostRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // 基本情報の仮登録処理
        saveBasicInfo(request.getId(), request.getBasicInfo());

        // レスポンスDTOの組み立て
        ApplicationBasicPostResponse response = new ApplicationBasicPostResponse();

        return response;
    }

    /**
     * 基本情報を仮登録する
     * 
     * @param applicationNumber 申請番号
     * @param basicInfo         基本情報
     */
    private void saveBasicInfo(String applicationNumber,
            jp.co.benesse.xxx.dto.request.component.BasicInfoDto basicInfo) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用して基本情報をデータベースに仮登録

        // 基本情報の検証
        validateBasicInfo(basicInfo);

        // 既存の基本情報を削除（仮登録の場合は上書き）
        deleteExistingBasicInfo(applicationNumber);

        // 新しい基本情報を登録
        insertBasicInfo(applicationNumber, basicInfo);
    }

    /**
     * 基本情報の検証
     * 
     * @param basicInfo 基本情報
     */
    private void validateBasicInfo(jp.co.benesse.xxx.dto.request.component.BasicInfoDto basicInfo) {
        // TODO: 実装方法が不明箇所 - 社員ID、企業ID、拠点IDの存在チェック
    }

    /**
     * 既存の基本情報を削除
     * 
     * @param applicationNumber 申請番号
     */
    private void deleteExistingBasicInfo(String applicationNumber) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用して既存の基本情報を削除
    }

    /**
     * 基本情報を登録
     * 
     * @param applicationNumber 申請番号
     * @param basicInfo         基本情報
     */
    private void insertBasicInfo(String applicationNumber,
            jp.co.benesse.xxx.dto.request.component.BasicInfoDto basicInfo) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用して基本情報をデータベースに登録
    }
}
