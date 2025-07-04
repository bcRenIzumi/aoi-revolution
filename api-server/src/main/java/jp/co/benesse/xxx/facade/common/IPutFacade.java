package jp.co.benesse.xxx.facade.common;

import jp.co.benesse.xxx.dto.common.BaseRequest;
import jp.co.benesse.xxx.dto.common.BaseResponse;

/**
 * PUT操作用の共通ファサードインターフェース
 *
 * @param <T> リクエストの型（BaseRequestを継承したクラス）
 * @param <R> レスポンスの型（BaseResponseを継承したクラス）
 * @author bc0099451
 * @since 1.0.0
 */
public interface IPutFacade<T extends BaseRequest, R extends BaseResponse> {

    /**
     * PUTリクエストを処理する
     *
     * @param req リクエスト
     * @return レスポンス
     * @throws Exception 例外
     */
    R put(T req) throws Exception;
}