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

function App() {
  const [questionCounter, setquestionCounter] = useState(0)
  const [choiceCounter, setchoiceCounter] = useState(0)



  let data = {
    "title": "",
    "totalPoints": "",
    "timeAllowed": "",
    "deadline": "",
    "question": [


    ]
  }




  return (
    < Container className="w-50 my-3" >

      <BrowserRouter>
        <Switch>
          <Route exact path="/">


            <MainPage />
          </Route>
          <Route path="/QuizCreator">
            <QuizCreator />
          </Route>
          <Route path="/Choice">
            <counterContext.Provider value={[questionCounter, setquestionCounter, choiceCounter, setchoiceCounter]}>
              <Choice />
            </counterContext.Provider>
          </Route>
          <Route path="/Question">
            <counterContext.Provider value={[questionCounter, setquestionCounter, choiceCounter, setchoiceCounter]}>
              <Question />
            </counterContext.Provider>
          </Route>
        </Switch>
      </BrowserRouter>



    </Container >

  );
}

export default App;
