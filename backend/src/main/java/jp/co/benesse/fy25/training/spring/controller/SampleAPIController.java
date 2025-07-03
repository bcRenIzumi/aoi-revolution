package jp.co.benesse.fy25.training.spring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jp.co.benesse.fy25.training.spring.entity.SampleEntity;

/**
 * サンプルコントローラ
 * 
 * @author FY25新人研修Javaチーム
 * @version 0.1.0
 */
@RestController
public class SampleAPIController {

    /** サンプルエンティティ */
    SampleEntity sampleEntity;

    @GetMapping("/api/sampleApi")
    public SampleEntity testAPI() {
        return sampleEntity;
    }

    @PostMapping("/api/save")
    public String save(@RequestBody SampleEntity entity) {
        sampleEntity = entity;
        return "success";
    }

    @GetMapping("/api/sampleApi2")
    public SampleEntity testAPI2() {
        SampleEntity sampleEntity = new SampleEntity();
        sampleEntity.setId("1");
        sampleEntity.setTitle("test");
        sampleEntity.setCapacity(10);
        return sampleEntity;
    }
}