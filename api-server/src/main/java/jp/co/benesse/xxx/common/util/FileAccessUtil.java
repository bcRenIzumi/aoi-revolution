package jp.co.benesse.xxx.common.util;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StreamUtils;

/**
 * ファイルアクセス用ユーティリティ
 * 
 * @author bc0099451
 * @since 1.0.0
 */
public class FileAccessUtil {

    private FileAccessUtil() {
    }

    private static final Map<String, String> CACHE = new ConcurrentHashMap<>();

    /**
     * 指定されたファイルを読み込んで文字列で返す
     * 
     * @param file 読み込みたいファイル名
     * @throws UncheckedIOException
     * @return ファイルの中身の文字列
     */
    public static String load(String file) {
        return CACHE.computeIfAbsent(file, f -> {
            try (InputStream stream = new ClassPathResource(file).getInputStream()) {
                return StreamUtils.copyToString(stream, StandardCharsets.UTF_8);
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
        });
    }

    /**
     * 引数で指定された絶対ファイルパスのファイルを読み込み、文字列として返却する.
     * 
     * @param path 取得対象ファイルのファイルパス
     * @throws UncheckedIOException
     * @return 読み込んだファイルの内容
     */
    public static String loadAbsolutePath(String path) {

        String result = "";
        // ファイルの読み込み
        Path filePath = FileSystems.getDefault().getPath(path);
        try {
            List<String> lines = Files.readAllLines(filePath, StandardCharsets.UTF_8);
            result = String.join("", lines);

        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
        return result;
    }
}
