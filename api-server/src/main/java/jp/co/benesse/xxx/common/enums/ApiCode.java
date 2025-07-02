package jp.co.benesse.xxx.common.enums;

import org.springframework.http.HttpMethod;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * APIコードを定義する列挙型
 *
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@AllArgsConstructor
public enum ApiCode {

    /**************************************
     * その他API
     **************************************/

    /** ヘルスチェック */
    HEALTH_CHECK("ヘルスチェック", ApiCategory.OTHER, "01", HttpMethod.GET);

    /** API名 */
    private String name;

    /** コード値 */
    private String code;

    /** HTTPメソッド */
    private HttpMethod httpMethod;

    /**
     * コンストラクタ
     * 
     * @param name       名前
     * @param category   カテゴリ
     * @param code       コード
     * @param httpMethod HTTPメソッド
     */
    ApiCode(String name, ApiCategory category, String code, HttpMethod httpMethod) {
        this.name = name + "API";
        this.code = category.getIdentifier() + code + getCrudType(httpMethod); // カテゴリ名 + 連番3桁 + CRUD種別
    }

    /**
     * 文字列化
     * 
     * @param httpMethod HTTPメソッド
     * @return 文字列
     */
    @Override
    public String toString() {
        return "[" + this.code + "]" + this.name;
    }

    /**
     * CRUD種別を取得する
     * 
     * @return CRUD種別
     */
    private String getCrudType(HttpMethod httpMethod) {

        if (httpMethod == HttpMethod.GET) {
            return "R";
        }
        if (httpMethod == HttpMethod.POST) {
            return "C";
        }
        if (httpMethod == HttpMethod.PUT) {
            return "U";
        }
        return "D";
    }
}
