package jp.co.benesse.xxx.dto.response.component;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

/**
 * PC機種情報DTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PcModelDto {

    /** PC機種ID */
    @JsonProperty("pcModelId")
    private String pcModelId;

    /** PC機種名 */
    @JsonProperty("pcModelName")
    private String pcModelName;
}
