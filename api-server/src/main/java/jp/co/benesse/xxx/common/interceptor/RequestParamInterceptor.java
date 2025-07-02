package jp.co.benesse.xxx.common.interceptor;

import java.lang.reflect.Method;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;
import jp.co.benesse.xxx.common.annotation.ApiCodeAnnotation;
import jp.co.benesse.xxx.common.constants.RequestConstants;
import jp.co.benesse.xxx.common.enums.ApiCode;
import jp.co.benesse.xxx.common.enums.Environment;
import jp.co.benesse.xxx.common.util.DateUtil;
import jp.co.benesse.xxx.dto.common.BaseRequest;

/**
 * リクエスト初期化処理インターセプタークラス
 *
 * @author bc0099451
 * @since 1.0.0
 */
@Aspect
@Component
@Order(1)
public class RequestParamInterceptor {

    /** リクエスト */
    @Autowired
    private HttpServletRequest servletRequest;

    /** 環境 */
    @Value("${app.env}")
    private String env;

    /**
     * リクエスト初期化処理インターセプター
     * 
     * @param pjp プロシージャージョインポイント
     * @return 処理結果
     * @throws Throwable 処理例外
     */
    @Around("execution(* jp.co.benesse.xxx.controller..*(..))")
    public Object intercept(ProceedingJoinPoint pjp) throws Throwable {

        // メソッドシグネチャーからメソッド情報を取得
        MethodSignature signature = (MethodSignature) pjp.getSignature();
        Method method = signature.getMethod();

        // リクエストパラメータの取得
        BaseRequest baseRequest = null;
        for (Object arg : pjp.getArgs()) {
            if (arg instanceof BaseRequest) {
                baseRequest = (BaseRequest) arg;
                break;
            }
        }

        // ApiCodeアノテーションの取得（メソッドレベルから）
        ApiCodeAnnotation apiCodeAnnotation = method.getAnnotation(ApiCodeAnnotation.class);
        ApiCode apiCode = apiCodeAnnotation.value();

        // リクエストへのセット処理
        servletRequest.setAttribute(RequestConstants.API_CODE, apiCode);
        servletRequest.setAttribute(RequestConstants.PROCESSING_TIME, DateUtil.getNow());
        servletRequest.setAttribute(RequestConstants.IS_STUB_MODE, isStubMode(baseRequest));

        return pjp.proceed();
    }

    /**
     * スタブモードフラグを取得する
     * 
     * @param baseRequest リクエストパラメータ
     * @return スタブモードフラグ
     * @throws Exception 例外
     */
    private boolean isStubMode(BaseRequest baseRequest) throws Exception {

        Environment appEnv = Environment.getEnvironment(env);

        // 本番環境の場合はスタブモードを無効化
        if (appEnv == Environment.PRODUCTION) {
            return false;
        }

        return baseRequest.isStubMode();
    }
}
