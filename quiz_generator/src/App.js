import logo from './logo.svg';
import './App.css';
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Options from "./Options.js"
import MainPage from "./components/Main_page"
import { Form, Col, Button, Container, Row } from "react-bootstrap"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { createContext, useState, useEffect } from "react"
import Question from "./components/Question"
import Choice from "./components/Choice"
import QuizCreator from './components/QuizCreator';

export const counterContext = React.createContext();
export const toogleData = React.createContext();
function App() {
  const [questionCounter, setquestionCounter] = useState(0)
  const [choiceCounter, setchoiceCounter] = useState(0)
  const [toogleQuestion, settoogleQuestion] = useState(true)
  const [toogleChoice, settoogleChoice] = useState(true)
  const [quizData, setquizData] = useState({
    "title": "",
    "totalPoints": "",
    "timeAllowed": "",
    "deadline": "",
    "question": [


      {
        "choice": [

        ]
      }


    ]
  })










  return (
    < Container className="w-50 my-3" >

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <counterContext.Provider value={[questionCounter, setquestionCounter, choiceCounter, setchoiceCounter, quizData, setquizData]}>
              <toogleData.Provider value={[toogleQuestion, settoogleQuestion, toogleChoice, settoogleChoice]}>

                <MainPage />
              </toogleData.Provider>
            </counterContext.Provider>
          </Route>
          <Route path="/QuizCreator">
            <counterContext.Provider value={[questionCounter, setquestionCounter, choiceCounter, setchoiceCounter, quizData, setquizData]}>
              <toogleData.Provider value={[toogleQuestion, settoogleQuestion, toogleChoice, settoogleChoice]}>
                <QuizCreator />
              </toogleData.Provider>
            </counterContext.Provider>

          </Route>
          <Route path="/Choice">
            <counterContext.Provider value={[questionCounter, setquestionCounter, choiceCounter, setchoiceCounter, quizData, setquizData]}>
              <toogleData.Provider value={[toogleQuestion, settoogleQuestion, toogleChoice, settoogleChoice]}>
                <Choice />
              </toogleData.Provider>
            </counterContext.Provider>
          </Route>
          <Route path="/Question">
            <counterContext.Provider value={[questionCounter, setquestionCounter, choiceCounter, setchoiceCounter, quizData, setquizData]}>
              <toogleData.Provider value={[toogleQuestion, settoogleQuestion, toogleChoice, settoogleChoice]}>
                <Question />
              </toogleData.Provider>
            </counterContext.Provider>
          </Route>
        </Switch>
      </BrowserRouter>



    </Container >

  );
}

export default App;
