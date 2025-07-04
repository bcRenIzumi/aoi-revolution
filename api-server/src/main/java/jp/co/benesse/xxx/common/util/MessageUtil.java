package jp.co.benesse.xxx.common.util;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.common.enums.ErrorCode;

/**
 * メッセージユーティリティクラス
 *
 * @author bc0099451
 * @since 1.0.0
 */
@Component
public class MessageUtil {

    /** メッセージソース */
    private static MessageSource messageSource;

    /** コンポーネントメッセージソース */
    @Autowired
    private MessageSource componentMessageSource;

    /**
     * コンストラクタ
     */
    private MessageUtil() {
    }

    /**
     * コンポーネント初期化
     */
    @PostConstruct
    public void init() {
        MessageUtil.messageSource = componentMessageSource;
    }

    /**
     * メッセージを取得する
     * 
     * @param apiCode   APIコード
     * @param errorCode エラーコード
     * @param params    パラメータ
     * @return メッセージ
     */
    public static String getErrorMessage(ApiCode apiCode, ErrorCode errorCode, Object... params) {
        String message = getMessage(errorCode.getCode(), params);
        return getMessage("FORMAT", new Object[] { apiCode.getCode(), errorCode.getCode(), message });
    }

    /**
     * メッセージを取得する
     * 
     * @param key    メッセージキー
     * @param params パラメータ
     * @return メッセージ
     */
    public static String getMessage(String key, Object... params) {
        return messageSource.getMessage(key, params, Locale.JAPAN);
    }

}