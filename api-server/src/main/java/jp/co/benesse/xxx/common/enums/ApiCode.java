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
     * 社員系API
     **************************************/

    /** 社員一覧取得 */
    EMPLOYEE_LIST_GET("社員一覧取得", ApiCategory.EMPLOYEE, "01", HttpMethod.GET),

    /** 社員情報取得 */
    EMPLOYEE_DETAIL_GET("社員情報取得", ApiCategory.EMPLOYEE, "02", HttpMethod.GET),

    /**************************************
     * 企業系API
     **************************************/

    /** 企業一覧取得 */
    COMPANY_LIST_GET("企業一覧取得", ApiCategory.COMPANY, "01", HttpMethod.GET),

    /** 拠点一覧取得 */
    COMPANY_LOCATION_GET("拠点一覧取得", ApiCategory.COMPANY, "02", HttpMethod.GET),

    /**************************************
     * PC環境系API
     **************************************/

    /** ネットワーク情報一覧取得 */
    PC_NETWORK_GET("ネットワーク情報一覧取得", ApiCategory.PC, "01", HttpMethod.GET),

    /** PC機種一覧取得 */
    PC_MODEL_GET("PC機種一覧取得", ApiCategory.PC, "02", HttpMethod.GET),

    /**************************************
     * 共通系API
     **************************************/

    /** 申請番号発番 */
    COMMON_APPLICATION_NUMBER_POST("申請番号発番", ApiCategory.COMMON, "01", HttpMethod.POST),

    /**************************************
     * 申請系API
     **************************************/

    /** 申請情報本登録 */
    APPLICATION_REGISTER_POST("申請情報本登録", ApiCategory.APPLICATION, "01", HttpMethod.POST),

    /** 基本情報仮登録 */
    APPLICATION_BASIC_POST("基本情報仮登録", ApiCategory.APPLICATION, "02", HttpMethod.POST),

    /** ファイル仮登録 */
    APPLICATION_FILE_POST("ファイル仮登録", ApiCategory.APPLICATION, "03", HttpMethod.POST),

    /** PC申請仮登録 */
    APPLICATION_PC_REQUEST_POST("PC申請仮登録", ApiCategory.APPLICATION, "04", HttpMethod.POST),

    /** PC申請情報取得 */
    APPLICATION_PC_REQUEST_GET("PC申請情報取得", ApiCategory.APPLICATION, "05", HttpMethod.GET),

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
