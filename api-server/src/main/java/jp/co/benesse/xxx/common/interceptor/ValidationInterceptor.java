package jp.co.benesse.xxx.common.interceptor;

import java.text.MessageFormat;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.Validator;

import jp.co.benesse.xxx.common.enums.ErrorCode;
import jp.co.benesse.xxx.common.exception.BadRequestException;
import jp.co.benesse.xxx.common.util.MessageUtil;
import jp.co.benesse.xxx.dto.common.BaseRequest;

/**
 * バリデーション処理インターセプタークラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Aspect
@Component
@Order(3) // ExceptionInterceptorより先に実行
public class ValidationInterceptor {

    /** ロガー */
    private static final Logger LOGGER = LogManager.getLogger(ValidationInterceptor.class);

    /** バリデーター */
    @Autowired
    private Validator validator;

    /**
     * バリデーション処理インターセプター
     * 
     * @param pjp プロシージャージョインポイント
     * @return 処理結果
     * @throws Throwable 処理例外
     */
    @Around("execution(* jp.co.benesse.xxx.controller..*(..))")
    public Object intercept(ProceedingJoinPoint pjp) throws Throwable {
        Object[] args = pjp.getArgs();
        for (Object arg : args) {
            if (arg instanceof BaseRequest) {
                validate((BaseRequest) arg);
            }
        }
        return pjp.proceed();
    }

    /**
     * バリデーション処理を実行
     * 
     * @param request リクエスト
     * @throws BadRequestException バリデーションエラー
     */
    private void validate(BaseRequest request) throws BadRequestException {

        BeanPropertyBindingResult errors = new BeanPropertyBindingResult(request, request.getClass().getName());
        validator.validate(request, errors);

        if (errors.hasErrors()) {
            for (FieldError error : errors.getFieldErrors()) {
                String errorMessage = MessageFormat.format(error.getDefaultMessage(),
                        MessageUtil.getMessage(error.getField()));
                LOGGER.error(errorMessage);
            }
            throw new BadRequestException(ErrorCode.E1001);
        }
    }
}