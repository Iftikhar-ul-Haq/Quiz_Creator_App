import React, { useContext, useEffect } from 'react'
import { Form, Col, Button, Container, Row, Table } from "react-bootstrap"
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min'
import { useHistory } from 'react-router'
import BodyItems from './BodyItems'

import { toogleData } from "../App"
import { counterContext } from "../App"


export default function QuizCreator() {

    const axios = require('axios');

    function pushData() {
        axios.post('http://localhost:8080/quiz', quizData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log(quizData)

    }



    const [questionCounter, setquestionCounter, choiceCounter, setchoiceCounter, quizData, setquizData] = useContext(counterContext)
    const [toogleQuestion, settoogleQuestion, toogleChoice, settoogleChoice] = useContext(toogleData)

    let quizTitle = React.createRef();
    let totalPoints = React.createRef();
    let timeAllowed = React.createRef();
    let deadline = React.createRef();

    useEffect(() => {
        quizTitle.current.value = quizData.title
        totalPoints.current.value = quizData.totalPoints
        timeAllowed.current.value = quizData.timeAllowed
        deadline.current.value = quizData.deadline
    })


    const history = useHistory()
    return (
        <div className="border" >
            <h1 className="text-center">Create a Quiz</h1>
            <Form className="p-3">
                <Row className="my-3">

                    <Form.Label>Quiz Title</Form.Label>
                    <Form.Control ref={quizTitle} onChange={(e) => { quizData.title = e.target.value; }} type="Text" placeholder="Enter Quiz Title" />

                </Row>

                <Row className="my-3">

                    <Form.Label>Total Points</Form.Label>
                    <Form.Control ref={totalPoints} type="Text" onChange={(e) => { quizData.totalPoints = e.target.value; }} placeholder="Enter the points of the Quiz" />

                </Row>
                <Row className="my-3">
                    <Col>

                        <Form.Label>Time Allowed (minutes)</Form.Label>
                        <Form.Control ref={timeAllowed} onChange={(e) => { quizData.timeAllowed = e.target.value; }} type="text" placeholder="" />

                    </Col>

                    <Col >

                        <Form.Label>Deadline</Form.Label>
                        <Form.Control ref={deadline} type="Date" onChange={(e) => { quizData.deadline = e.target.value; }} />

                    </Col>
                </Row>
            </Form>
            <h1 className="text-center">Questions</h1>
            <BodyItems />
            <div className="d-flex justify-content-end p-3">

                <Button variant="light" className="mx-3 border" onClick={() => { history.push("/") }} >Cancel</Button>


                <Button primary onClick={(e) => {

                    history.push("/");
                    pushData()
                }}>Create Quiz</Button>

            </div>

        </div>
    )
}
