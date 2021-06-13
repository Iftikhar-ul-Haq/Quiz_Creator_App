package com.example.quizapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@Data
@Entity
public class Quiz {
    @Id
    @GeneratedValue
    Long id;
    private String title;
    private String totalPoints;
    private String timeAllowed;
    private String deadline;

    @OneToMany(cascade={CascadeType.ALL})
    Set<Question> question;

}
