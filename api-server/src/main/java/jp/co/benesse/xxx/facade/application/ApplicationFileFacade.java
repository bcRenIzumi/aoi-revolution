package jp.co.benesse.xxx.facade.application;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jp.co.benesse.xxx.dto.request.application.ApplicationFilePostRequest;
import jp.co.benesse.xxx.dto.response.application.ApplicationFilePostResponse;
import jp.co.benesse.xxx.facade.common.IPostFacade;

/**
 * ファイル仮登録Facadeクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Service
public class ApplicationFileFacade implements IPostFacade<ApplicationFilePostRequest, ApplicationFilePostResponse> {

    /** ファイル保存ディレクトリ */
    private static final String UPLOAD_DIR = "uploads/applications/";

    @Override
    public ApplicationFilePostResponse post(ApplicationFilePostRequest request) throws Exception {

        // リクエストパラメータの検証（*Request.javaで実施済み）

        // ファイルの仮保存処理
        saveFile(request.getId(), request.getFile());

        // レスポンスDTOの組み立て
        ApplicationFilePostResponse response = new ApplicationFilePostResponse();

        return response;
    }

    /**
     * ファイルを仮保存する
     * 
     * @param applicationNumber 申請番号
     * @param file              アップロードファイル
     * @throws IOException ファイル操作エラー
     */
    private void saveFile(String applicationNumber, MultipartFile file) throws IOException {
        // TODO: 実装方法が不明箇所 - ファイルサーバーまたはクラウドストレージへの保存

        // ファイルの検証
        validateFile(file);

        // 保存先ディレクトリの作成
        Path uploadPath = Paths.get(UPLOAD_DIR + applicationNumber);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // ファイルの保存
        String fileName = file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        // データベースへのファイル情報登録
        saveFileInfo(applicationNumber, fileName, filePath.toString());
    }

    /**
     * ファイルの検証
     * 
     * @param file アップロードファイル
     */
    private void validateFile(MultipartFile file) {
        // TODO: 実装方法が不明箇所 - ファイルサイズ、形式、ウイルススキャン等の検証

        // ファイルサイズのチェック（例：10MB制限）
        long maxSize = 10 * 1024 * 1024; // 10MB
        if (file.getSize() > maxSize) {
            throw new IllegalArgumentException("ファイルサイズが上限を超えています");
        }

        // ファイル名のチェック
        String fileName = file.getOriginalFilename();
        if (fileName == null || fileName.trim().isEmpty()) {
            throw new IllegalArgumentException("ファイル名が不正です");
        }
    }

    /**
     * ファイル情報をデータベースに保存
     * 
     * @param applicationNumber 申請番号
     * @param fileName          ファイル名
     * @param filePath          ファイルパス
     */
    private void saveFileInfo(String applicationNumber, String fileName, String filePath) {
        // TODO: 実装方法が不明箇所 - Daoクラスを使用してファイル情報をデータベースに登録
    }
}
