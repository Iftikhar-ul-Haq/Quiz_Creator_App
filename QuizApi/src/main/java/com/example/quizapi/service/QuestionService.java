package com.example.quizapi.service;

import com.example.quizapi.model.Question;
import com.example.quizapi.respository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    QuestionRepository questionRepository;

    public Iterable<Question> getAllQuestion(){

        return questionRepository.findAll();
    }

    public Question saveQuestion(Question question){
        return questionRepository.save(question);
    }


}
