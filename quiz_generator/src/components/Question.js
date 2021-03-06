import React, { useContext, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { counterContext } from "../App"
import QuestionItems from './QuestionItems'
import { toogleData } from "../App"


export default function Question() {
    const [toogleQuestion, settoogleQuestion, toogleChoice, settoogleChoice] = useContext(toogleData)
    let questionText = React.createRef()
    let points = React.createRef()



    const [questionCounter, setquestionCounter, choiceCounter, setchoiceCounter, quizData] = useContext(counterContext)


    let questionData = {
        "questionText": "",
        "type": "",
        "points": "",
        "choice": [

        ]

    }





    const history = useHistory()

    function questionCreator() {
        setchoiceCounter(0)

        questionData.questionText = questionText.current.value
        questionData.points = points.current.value
        questionData.choice = quizData.question[questionCounter].choice
        quizData.question[questionCounter] = questionData
        settoogleChoice(true)
        setquestionCounter((questionCounter) => questionCounter = questionCounter + 1)

    }

    useEffect(() => {
        if (quizData.question[questionCounter].questionText == undefined) {
            questionText.current.value = ""
            points.current.value = ""
        }
        else {
            questionText.current.value = quizData.question[questionCounter].questionText;
            points.current.value = quizData.question[questionCounter].points;
        }



    })

    return (
        <div className="border p-3">
            <h1>Question</h1>
            <Form className="p-3" >
                <Row>
                    <Form.Group>

                        <Form.Control ref={questionText} onChange={(e) => { quizData.question[questionCounter].questionText = e.target.value; console.log(quizData) }} type="text" />
                    </Form.Group>
                </Row>
                <Row className="my-2">
                    <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Check
                            name="Choice"
                            type="radio"
                            label="Single Choice"
                            onChange={(e) => {
                                if (e.target.value == "on") {
                                    questionData.type = "single Choice"

                                }
                            }}

                        />
                        <Form.Check
                            name="Choice"
                            type="radio"
                            label="Multiple Choice"
                            onChange={(e) => {
                                if (e.target.value == "on") {
                                    questionData.type = "Multiple Choice"

                                }
                            }}

                        />
                    </Col>
                    <Col>
                        <Form.Label>Points</Form.Label>
                        <Form.Control ref={points} onChange={(e) => { quizData.question[questionCounter].points = points.current.value; console.log(quizData) }} type="text" />
                    </Col>
                </Row>
            </Form>
            <QuestionItems />
            <div className="d-flex justify-content-end p-3">

                <Button variant="light" className="mx-3 border" onClick={() => { history.push("/QuizCreator") }}> Cancel</Button>


                <Button primary onClick={() => { history.push("/QuizCreator"); settoogleQuestion(false); questionCreator() }} >Create</Button>

            </div>



        </div>
    )
}
