package jp.co.benesse.xxx.facade.common;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Service;

import jp.co.benesse.xxx.dto.request.common.CommonApplicationNumberPostRequest;
import jp.co.benesse.xxx.dto.response.common.CommonApplicationNumberPostResponse;

/**
 * 申請番号発番Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class CommonApplicationNumberFacade
        implements IPostFacade<CommonApplicationNumberPostRequest, CommonApplicationNumberPostResponse> {

    @Override
    public CommonApplicationNumberPostResponse post(CommonApplicationNumberPostRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // 申請番号を発番
        String applicationNumber = generateApplicationNumber();

        // レスポンスDTOの組み立て
        CommonApplicationNumberPostResponse response = new CommonApplicationNumberPostResponse();
        CommonApplicationNumberPostResponse.ApplicationNumberData data = new CommonApplicationNumberPostResponse.ApplicationNumberData();
        data.setApplicationNumber(applicationNumber);
        response.setData(data);

        return response;
    }

    /**
     * 申請番号を発番する
     * 
     * @return 申請番号
     */
    private String generateApplicationNumber() {
        // TODO: 実装方法が不明箇所 - データベースのシーケンスや採番テーブルを使用して申請番号を発番

        // サンプル実装：現在日時を使用した申請番号生成
        LocalDateTime now = LocalDateTime.now();
        String dateTimeStr = now.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        return "A" + dateTimeStr;
    }
}
