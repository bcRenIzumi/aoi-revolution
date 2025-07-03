package jp.co.benesse.xxx.dto.response.component;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

/**
 * ネットワーク環境情報DTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class NetworkEnvDto {

    /** ネットワーク環境ID */
    @JsonProperty("networkEnvId")
    private String networkEnvId;

    /** ネットワーク環境名 */
    @JsonProperty("networkEnvName")
    private String networkEnvName;
}
