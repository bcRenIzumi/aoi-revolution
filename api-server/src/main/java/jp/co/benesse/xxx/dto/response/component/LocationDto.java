package jp.co.benesse.xxx.dto.response.component;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

/**
 * 拠点情報DTO
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LocationDto {

    /** 拠点ID */
    @JsonProperty("locationId")
    private String locationId;

    /** 拠点名 */
    @JsonProperty("locationName")
    private String locationName;
}
