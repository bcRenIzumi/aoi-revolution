package jp.co.benesse.xxx.dto.request.component;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

/**
 * 基本情報DTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BasicInfoDto {

    /** 社員ID */
    @JsonProperty("employeeId")
    @NotBlank(message = "社員IDは必須です")
    private String employeeId;

    /** 企業ID */
    @JsonProperty("companyId")
    @NotBlank(message = "企業IDは必須です")
    private String companyId;

    /** 拠点ID */
    @JsonProperty("locationId")
    @NotBlank(message = "拠点IDは必須です")
    private String locationId;
}
