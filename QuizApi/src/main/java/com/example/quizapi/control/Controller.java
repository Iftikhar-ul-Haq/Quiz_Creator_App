package com.example.quizapi.control;


import com.example.quizapi.model.Quiz;
import com.example.quizapi.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    QuizService quizService;




@PostMapping("/quiz")
    public Quiz saveQuestion(@RequestBody Quiz quiz){
      return quizService.saveQuiz(quiz);
}

//@GetMapping("/questions")
//    public Iterable<Quiz> getQuestion(){
//    return questionService.getAllQuestion();
//}






}
