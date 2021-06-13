package com.example.quizapi.service;

import com.example.quizapi.model.Quiz;
import com.example.quizapi.respository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuizService {

    @Autowired
    QuizRepository quizRepository;

//    public List<Quiz> getAllQuestion(){
//
//        return questionRepository.findAll();
//    }

    public Quiz saveQuiz(Quiz quiz){
        return quizRepository.save(quiz);
    }


}
