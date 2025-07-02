package jp.co.benesse.xxx.entity.common;

import lombok.Getter;
import lombok.Setter;

/**
 * トランザクションエンティティの基底クラス
 *
 * @author bc0099451
 * @since 1.0
 */
@Getter
@Setter
public abstract class BaseTranEntity extends BaseEntity {

    /** 作成者 */
    private String createdBy;

    /** 更新者 */
    private String updatedBy;
}
