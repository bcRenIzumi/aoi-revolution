package jp.co.benesse.xxx.service.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;

/**
 * 基底サービスクラス
 *
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public abstract class BaseService {

    /** 環境 */
    @Value("${app.env}")
    protected String env;

    /** リクエスト */
    @Autowired
    protected HttpServletRequest servletRequest;

}
