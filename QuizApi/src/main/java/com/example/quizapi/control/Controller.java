package com.example.quizapi.control;

import com.example.quizapi.model.Question;
import com.example.quizapi.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    QuestionService questionService;




@PostMapping("/questions")
    public Question saveQuestion(@RequestBody Question question){
      return questionService.saveQuestion(question);
}

@GetMapping("/questions")
    public Iterable<Question> getQuestion(){
    return questionService.getAllQuestion();
}






}
