package jp.co.benesse.xxx.common.interceptor;

import java.time.LocalDateTime;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;
import jp.co.benesse.xxx.common.constants.AppConstants;
import jp.co.benesse.xxx.common.constants.RequestConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.common.enums.ErrorCode;
import jp.co.benesse.xxx.common.exception.InternalServerErrorException;
import jp.co.benesse.xxx.common.exception.common.BaseException;
import jp.co.benesse.xxx.common.util.EditUtil;
import jp.co.benesse.xxx.common.util.LogUtil;
import jp.co.benesse.xxx.common.util.MessageUtil;
import jp.co.benesse.xxx.dto.common.BaseRequest;
import jp.co.benesse.xxx.dto.common.BaseResponse;
import jp.co.benesse.xxx.dto.common.ErrorResponse;

/**
 * 例外処理インターセプタークラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Aspect
@Component
@Order(2)
public class ExceptionInterceptor {

    /** ロガー */
    private static final Logger LOGGER = LogManager.getLogger(ExceptionInterceptor.class);

    /** リクエスト */
    @Autowired
    private HttpServletRequest servletRequest;

    /** JSON文字列に変換するユーティリティ */
    @Autowired
    private EditUtil editUtil;

    /**
     * 例外処理インターセプター
     * 
     * @param pjp プロシージャージョインポイント
     * @return 処理結果
     * @throws Throwable 処理例外
     */
    @SuppressWarnings("null")
    @Around("execution(* jp.co.benesse.xxx.controller..*(..))")
    public Object intercept(ProceedingJoinPoint pjp) throws Throwable {

        ResponseEntity<BaseResponse> result = null;

        ApiCode apiCode = (ApiCode) servletRequest.getAttribute(RequestConstants.API_CODE);
        LocalDateTime processingTime = (LocalDateTime) servletRequest.getAttribute(RequestConstants.PROCESSING_TIME);

        try {
            LOGGER.info("{}の処理を開始します。", apiCode.toString());
            result = handleHttpOk(pjp);
        } catch (Throwable e) {
            result = handleHttpError(e, pjp, apiCode);
        }

        // 処理時間の設定
        result.getBody().getCommon().setProcessingTime(AppConstants.DTF_TS.format(processingTime));

        LOGGER.info("{}の処理を終了します。", apiCode.toString());
        return result;
    }

    /**
     * HTTP_OKの処理
     * 
     * @param pjp プロシージャージョインポイント
     * @return 処理結果
     * @throws Throwable 処理例外
     */
    @SuppressWarnings("unchecked")
    private ResponseEntity<BaseResponse> handleHttpOk(ProceedingJoinPoint pjp) throws Throwable {
        return (ResponseEntity<BaseResponse>) pjp.proceed();
    }

    /**
     * HTTP_ERRORの処理
     * 
     * @param e       処理例外
     * @param pjp     プロシージャージョインポイント
     * @param apiCode APIコード
     * @throws Throwable 処理例外
     */
    private ResponseEntity<BaseResponse> handleHttpError(Throwable e, ProceedingJoinPoint pjp, ApiCode apiCode)
            throws Throwable {

        // インプット内容の出力
        BaseRequest req = getBaseRequest(pjp);
        LOGGER.info("インプット: " + editUtil.toString(req));

        BaseException exception = null;
        boolean isWriteStackTrace = false;

        // 自作例外以外をキャッチした場合には、InternalServerErrorExceptionに変換
        if (e instanceof BaseException) {
            exception = (BaseException) e;
        } else {
            exception = new InternalServerErrorException(ErrorCode.E9999);
            isWriteStackTrace = true;
        }

        // ログ出力（スタックトレースを出力するかどうかでログレベルを変更）
        String message = MessageUtil.getErrorMessage(apiCode, exception.getErrorCode(), exception.getParams());
        LOGGER.error(message + LogUtil.callerInfo(e), isWriteStackTrace ? e : null);

        // レスポンスの作成
        return new ResponseEntity<BaseResponse>(new ErrorResponse(exception.getErrorCode(), message.split(":")[1]),
                exception.getHttpStatus());
    }

    /**
     * BaseRequestを取得する
     * 
     * @param pjp プロシージャージョインポイント
     * @return BaseRequest
     */
    private BaseRequest getBaseRequest(ProceedingJoinPoint pjp) {
        Object[] args = pjp.getArgs();
        for (Object arg : args) {
            if (arg instanceof BaseRequest) {
                return (BaseRequest) arg;
            }
        }
        return null;
    }

}
