
package jp.co.benesse.xxx.dto.common;

import lombok.Getter;
import lombok.Setter;

/**
 * 基底リクエストクラス
 * 
 * @author bc0099451
 * @since 1.0.0
 */
@Getter
@Setter
public abstract class BaseRequest {

    /** スタブモードフラグ */
    private boolean isStubMode = false;
}
