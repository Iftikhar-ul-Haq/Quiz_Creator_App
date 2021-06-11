package com.example.quizapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
public class Question {
    @Id
    @GeneratedValue
    private Long id;
    private String quizDescription;
    private Integer points;


    public Question(long l, String this_is_first_quesiton, int i) {
        this.id=l;
        this.quizDescription=this_is_first_quesiton;
        this.points=i;
    }


}
