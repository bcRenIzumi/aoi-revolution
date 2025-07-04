package jp.co.benesse.xxx.common.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import jp.co.benesse.xxx.common.enums.ApiCode;

/**
 * APIコードを指定するアノテーション
 * 
 * <p>
 * コントローラーメソッドに付与することで、対応するApiCodeを指定する。
 * インターセプターでこのアノテーションを読み取り、APIコードを自動的に初期化する。
 * メソッドレベルに付与することで、各HTTPメソッドに対して個別のAPIコードを指定可能。
 * </p>
 *
 * @author bc0099451
 * @since 1.0.0
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface ApiCodeAnnotation {

    /**
     * 対応するAPIコード
     * 
     * @return APIコード
     */
    ApiCode value();
}