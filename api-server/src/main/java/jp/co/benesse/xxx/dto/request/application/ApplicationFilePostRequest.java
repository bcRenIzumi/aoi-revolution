package jp.co.benesse.xxx.dto.request.application;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jp.co.benesse.xxx.dto.common.BaseRequest;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

/**
 * ファイル仮登録リクエストDTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public class ApplicationFilePostRequest extends BaseRequest {

    /** 申請番号 */
    @NotBlank(message = "申請番号は必須です")
    private String id;

    /** アップロードファイル */
    @NotNull(message = "ファイルは必須です")
    private MultipartFile file;
}
