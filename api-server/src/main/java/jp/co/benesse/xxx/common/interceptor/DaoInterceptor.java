package jp.co.benesse.xxx.common.interceptor;

import java.util.concurrent.TimeUnit;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.annotation.Order;
import org.springframework.dao.DataAccessResourceFailureException;
import org.springframework.stereotype.Component;

/**
 * DAO用インターセプタークラス
 *
 * @author bc0099451
 * @since 1.0.0
 */
@Aspect
@Component
@Order(1)
public class DaoInterceptor {

    @Value("${connect.retry.attempts}")
    private int maxAttemptsExpression;

    @Value("${connect.retry.delay.millis}")
    private int delayExpression;

    /** ロガー */
    private static final Logger LOGGER = LogManager.getLogger(DaoInterceptor.class);

    @Around("execution(* jp.co.benesse.xxx.infrastructure.dao..*(..))")
    public Object doConcurrentOperation(ProceedingJoinPoint pjp) throws Throwable {
        int numAttempts = 0;
        DataAccessResourceFailureException dataAccessResourceFailureException;
        do {
            numAttempts++;
            try {
                return pjp.proceed();
            } catch (DataAccessResourceFailureException e) {
                dataAccessResourceFailureException = e;
                LOGGER.warn("リトライします。");
                TimeUnit.MILLISECONDS.sleep(delayExpression);
            }

        } while (numAttempts <= this.maxAttemptsExpression);
        throw dataAccessResourceFailureException;
    }
}
