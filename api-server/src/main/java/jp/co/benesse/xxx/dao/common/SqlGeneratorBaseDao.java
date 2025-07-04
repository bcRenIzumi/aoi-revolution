package jp.co.benesse.xxx.dao.common;

import org.mybatis.scripting.thymeleaf.SqlGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.EmptySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import jp.co.benesse.xxx.common.util.FileAccessUtil;
import jp.co.benesse.xxx.entity.common.BaseEntity;

/**
 * SQLジェネレータベースDAO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Repository
public class SqlGeneratorBaseDao {

    /** SQLサーバーへのアクセス用テンプレート */
    @Autowired
    protected NamedParameterJdbcTemplate jt;

    /** SQLジェネレータ */
    @Autowired
    private SqlGenerator sqlGenerator;

    /** SQLファイルフォルダ */
    private static final String SQL_FILE_FOLDER = "sql/";

    /** ファイル区切り文字 (_) */
    private static final String FILE_SPLIT_WORD = "_";

    /** SQLファイル拡張子 */
    private static final String SQL_FILE_EXTENSION = ".sql";

    /** 空のパラメータソース（パラメータがない場合に使用する） */
    private static final EmptySqlParameterSource EMPTY_PARAM = EmptySqlParameterSource.INSTANCE;

    /**
     * 外部SQLからSQL文字列を生成して返却するメソッド
     * 
     * @param params パラメータ
     * @return SQLファイル名
     */
    protected String getSql(SqlParameterSource params) {

        // このクラスではなく呼び出し元の情報を使用するので2番目取得
        StackTraceElement ste = Thread.currentThread().getStackTrace()[2];

        String classFullName = ste.getClassName();

        String className = classFullName.substring(classFullName.lastIndexOf(".") + 1);
        String methodName = ste.getMethodName();

        // 動的なSQLの作成
        String sql = "";
        MapSqlParameterSource paramMap = null;

        if (params == null) {
            // 動的なSQLの作成（パラメータなし）
            return FileAccessUtil.load(createSqlFileName(className, methodName));
        }

        if (params instanceof MapSqlParameterSource) {
            paramMap = (MapSqlParameterSource) params;
        } else {
            paramMap = new MapSqlParameterSource();
            for (String key : params.getParameterNames()) {
                paramMap.addValue(key, params.getValue(key));
            }
        }

        // 動的なSQLの作成（パラメータあり：MapSqlParameterSource）
        sql = this.sqlGenerator.generate(FileAccessUtil.load(createSqlFileName(className, methodName)),
                paramMap.getValues(), paramMap::addValue);

        return sql;
    }

    /**
     * クラス名とメソッド名からSQLファイル名を取得するメソッド
     * 
     * @param className  クラス名
     * @param methodName メソッド名
     * @return SQLファイル名
     */
    private String createSqlFileName(String className, String methodName) {

        StringBuilder sb = new StringBuilder();

        sb.append(SQL_FILE_FOLDER)
                .append(className)
                .append(FILE_SPLIT_WORD)
                .append(methodName)
                .append(SQL_FILE_EXTENSION);

        return sb.toString();
    }

    /**
     * ジェネリックなマッパーを作成する
     * 
     * @param clazz マッピング対象のクラス
     * @return RowMapper: 指定されたクラスのRowMapper
     */
    protected <T extends BaseEntity> RowMapper<T> getRowMapper(Class<T> clazz) {
        return new BeanPropertyRowMapper<>(clazz);
    }

}
