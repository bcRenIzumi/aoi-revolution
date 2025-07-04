package jp.co.benesse.xxx.dto.response.component;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

/**
 * 企業情報DTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CompanyDto {

    /** 企業ID */
    @JsonProperty("companyId")
    private String companyId;

    /** 企業名 */
    @JsonProperty("companyName")
    private String companyName;
}
