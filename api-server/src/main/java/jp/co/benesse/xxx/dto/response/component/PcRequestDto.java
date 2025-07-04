package jp.co.benesse.xxx.dto.response.component;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

/**
 * PC申請情報DTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PcRequestDto {

    /** PC機種ID */
    @JsonProperty("pcModelId")
    private String pcModelId;

    /** ネットワーク環境ID */
    @JsonProperty("networkEnvId")
    private String networkEnvId;

    /** 導入区分 */
    @JsonProperty("installationType")
    private String installationType;

    /** 納品希望日 */
    @JsonProperty("deliveryDate")
    private String deliveryDate;
}
