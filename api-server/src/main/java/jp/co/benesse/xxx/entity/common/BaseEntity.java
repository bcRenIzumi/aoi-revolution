package jp.co.benesse.xxx.entity.common;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

/**
 * 全エンティティの基底クラス
 *
 * @author bc0099451
 * @since 1.0
 */
@Getter
@Setter
public abstract class BaseEntity {

    /** 登録日 */
    private LocalDateTime createdAt;

    /** 更新日 */
    private LocalDateTime updatedAt;
}
