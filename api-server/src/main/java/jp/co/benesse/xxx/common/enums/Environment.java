package jp.co.benesse.xxx.common.enums;

import java.util.Arrays;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 環境種別
 *
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@AllArgsConstructor
public enum Environment {

    /** 本番環境 */
    PRODUCTION("pd"),

    /** 検証環境 */
    INTEGRATION("it"),

    /** 開発環境 */
    DEVELOPMENT("dev"),

    /** ローカル環境 */
    LOCAL("local");

    /** 環境名 */
    private final String name;

    /**
     * 環境名から環境を取得する
     * 
     * @param name 環境名
     * @return 環境
     */
    public static Environment getEnvironment(String name) {

        Environment env = Arrays.stream(Environment.values())
                .filter(environment -> environment.getName().equals(name))
                .findFirst()
                .orElse(null);

        if (env == null) {
            throw new IllegalArgumentException("環境名が不正です。: " + name);
        }

        return env;
    }
}