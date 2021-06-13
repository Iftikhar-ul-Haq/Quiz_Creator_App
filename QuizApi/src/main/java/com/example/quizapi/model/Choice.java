package com.example.quizapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@Entity
public class Choice {
    @Id
    @GeneratedValue
    Long id;
    String choiceText;
    boolean Correct;

}
