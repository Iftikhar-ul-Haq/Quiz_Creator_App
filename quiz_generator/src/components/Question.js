import React, { useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { counterContext } from "../App"


export default function Question() {

    const [questionCounter, setquestionCounter, choiceCounter, setchoiceCounter] = useContext(counterContext)


    let questionData = {
        "questionText": "",
        "type": "",
        "points": "",
        "choice": [

        ]
    }
    const history = useHistory()
    return (
        <div className="border p-3">
            <h1>Question</h1>
            <Form className="p-3" >
                <Row>
                    <Form.Group>

                        <Form.Control type="textarea" />
                    </Form.Group>
                </Row>
                <Row className="my-2">
                    <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Check
                            name="Choice"
                            type="radio"
                            label="Single Choice"

                        />
                        <Form.Check
                            name="Choice"
                            type="radio"
                            label="Multiple Choice"

                        />
                    </Col>
                    <Col>
                        <Form.Label>Points</Form.Label>
                        <Form.Control type="text" />
                    </Col>
                </Row>
            </Form>
            <div className="border   d-flex justify-content-center align-items-center" style={{ height: "500px" }}>

                <Button primary onClick={() => { history.push("/Choice") }} >Add Choice </Button>





            </div>
            <div className="d-flex justify-content-end p-3">

                <Button variant="light" className="mx-3 border" onClick={() => { history.push("/QuizCreator") }}> Cancel</Button>


                <Button primary onClick={() => { history.push("/QuizCreator") }} >Create</Button>

            </div>



        </div>
    )
}
