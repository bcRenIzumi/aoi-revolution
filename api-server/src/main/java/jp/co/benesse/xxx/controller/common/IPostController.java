package jp.co.benesse.xxx.controller.common;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import jp.co.benesse.xxx.common.constants.RequestConstants;
import jp.co.benesse.xxx.dto.common.BaseRequest;
import jp.co.benesse.xxx.dto.common.BaseResponse;

/**
 * POSTリクエスト用の共通コントローラーインターフェース
 *
 * @param <T> リクエストの型（BaseRequestを継承したクラス）
 * @param <R> レスポンスの型（BaseResponseを継承したクラス）
 * @author bc0099451
 * @since 1.0.0
 */
public interface IPostController<T extends BaseRequest, R extends BaseResponse> {

    /**
     * POSTリクエストの処理
     * 
     * @param request リクエスト
     * @return レスポンス
     * @throws Exception 例外
     */
    @PostMapping(produces = RequestConstants.REQUEST_PRODUCES)
    ResponseEntity<R> post(@RequestBody T request) throws Exception;
}