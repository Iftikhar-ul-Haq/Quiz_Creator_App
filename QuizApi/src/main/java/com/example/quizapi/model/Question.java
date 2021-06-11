package com.example.quizapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class Question {
    private Long id;
    private String quizDescription;
    private Integer points;



}
