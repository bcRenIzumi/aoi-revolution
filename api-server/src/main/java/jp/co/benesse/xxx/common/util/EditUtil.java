package jp.co.benesse.xxx.common.util;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

import jp.co.benesse.xxx.common.constants.AppConstants;
import jp.co.benesse.xxx.dto.common.BaseRequest;
import jp.co.benesse.xxx.dto.common.BaseResponse;

/**
 * JSON文字列に変換するユーティリティクラス
 *
 * @author bc0099451
 * @since 1.0.0
 */

@Component
public class EditUtil {

    /** JSON解析オブジェクト. */
    private static ObjectMapper mapper = new ObjectMapper();

    static {
        JavaTimeModule javaTimeModule = new JavaTimeModule();

        // 日時の出力書式を指定する
        javaTimeModule.addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(AppConstants.DTF_TS));
        mapper.registerModule(javaTimeModule);
    }

    /**
     * 引数のオブジェクトをJSON文字列に変換して返却する
     * 
     * @param request リクエストオブジェクト
     * @return 変換したJson
     * @throws JsonProcessingException
     */
    public String toString(BaseRequest request) throws JsonProcessingException {
        return mapper.writeValueAsString(request);
    }

    /**
     * 引数のオブジェクトをJSON文字列に変換して返却する
     * 
     * @param response レスポンスオブジェクト
     * @return 変換したJson
     * @throws JsonProcessingException
     */
    public String toString(BaseResponse response) throws JsonProcessingException {
        response.getCommon().setProcessingTime(AppConstants.DTF_TS.format(DateUtil.getNow()));
        return mapper.writeValueAsString(response);
    }
}
