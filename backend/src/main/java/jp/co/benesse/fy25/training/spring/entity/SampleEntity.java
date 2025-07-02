package jp.co.benesse.fy25.training.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * サンプルエンティティ
 * 
 * @author FY25新人研修Javaチーム
 * @version 0.1.0
 */
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SampleEntity {
    /** ID */
    private String id;
    
    /** タイトル */
    private String title;
    
    /** 人数 */
    private Integer capacity;
}
