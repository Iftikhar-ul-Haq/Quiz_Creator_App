package com.example.quizapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
public class Question {
    @Id
    @GeneratedValue
    private Long id;
    String questionText;
    String type;
    String points;


    @OneToMany(cascade={CascadeType.ALL})
    Set<Choice> choice;




}
