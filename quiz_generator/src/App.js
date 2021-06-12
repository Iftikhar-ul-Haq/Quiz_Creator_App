import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Options from "./Options.js"
import MainPage from "./components/Main_page"
import { Form, Col, Button, Container, Row } from "react-bootstrap"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { createContext, useState } from "react"
import Question from "./components/Question"
import Choice from "./components/Choice"
import QuizCreator from './components/QuizCreator';


function App() {


  return (
    <Container className="w-50 my-3">

      <BrowserRouter>
        <Switch>
          <Route exact path="/">


            <MainPage />
          </Route>
          <Route path="/QuizCreator">
            <QuizCreator />
          </Route>
          <Route path="/Choice">
            <Choice />
          </Route>
          <Route path="/Question">
            <Question />
          </Route>
        </Switch>
      </BrowserRouter>



    </Container >

  );
}

export default App;
