package jp.co.benesse.xxx.common.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;
import jp.co.benesse.xxx.common.constants.RequestConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;

/**
 * リクエストユーティリティクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Component
public class RequestUtil {

    /** リクエスト */
    @Autowired
    private HttpServletRequest request;

    /**
     * APIコードを設定する
     * 
     * @param apiCode APIコード
     */
    public void setApiCode(ApiCode apiCode) {
        request.setAttribute(RequestConstants.API_CODE, apiCode);
    }

    /**
     * APIコードを取得する
     * 
     * @return APIコード
     */
    public ApiCode getApiCode() {
        return (ApiCode) request.getAttribute(RequestConstants.API_CODE);
    }
}