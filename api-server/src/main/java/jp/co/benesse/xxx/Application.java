package jp.co.benesse.xxx;

import org.mybatis.scripting.thymeleaf.SqlGenerator;
import org.mybatis.scripting.thymeleaf.SqlGeneratorConfig;
import org.mybatis.scripting.thymeleaf.processor.BindVariableRender;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

/**
 * アプリケーションのエントリーポイント
 *
 * @author bc0099451
 * @since 1.0.0
 */
@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    /**
     * アプリケーションの起動メソッド
     *
     * @param args コマンドライン引数
     */
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    /**
     * SQLを作成するエンジンのBeanを登録
     * 
     * @return SQLを作成するエンジン
     */
    @Bean
    public SqlGenerator sqlGenerator() {
        final SqlGeneratorConfig config = SqlGeneratorConfig.newInstanceWithCustomizer(
                c -> c.getDialect().setBindVariableRenderInstance(BindVariableRender.BuiltIn.SPRING_NAMED_PARAMETER));
        return new SqlGenerator(config);
    }
}
