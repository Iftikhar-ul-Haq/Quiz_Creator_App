import React from 'react'
import { Form, Col, Button, Container, Row, Table } from "react-bootstrap"
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min'
import { useHistory } from 'react-router'
import BodyItems from './BodyItems'
import { toogleData } from "../App"

export default function QuizCreator() {
    let quizTitle = React.createRef();
    let totalPoints = React.createRef();
    let timeAllowed = React.createRef();
    let deadline = React.createRef();

    const history = useHistory()
    return (
        <div className="border" >
            <h1 className="text-center">Create a Quiz</h1>
            <Form className="p-3">
                <Row className="my-3">

                    <Form.Label>Quiz Title</Form.Label>
                    <Form.Control ref={quizTitle} type="Text" placeholder="Enter Quiz Title" />

                </Row>

                <Row className="my-3">

                    <Form.Label>Total Points</Form.Label>
                    <Form.Control ref={totalPoints} type="Text" placeholder="Enter the points of the Quiz" />

                </Row>
                <Row className="my-3">
                    <Col>

                        <Form.Label>Time Allowed (minutes)</Form.Label>
                        <Form.Control ref={timeAllowed} type="text" placeholder="" />

                    </Col>

                    <Col >

                        <Form.Label>Deadline</Form.Label>
                        <Form.Control ref={deadline} type="Date" />

                    </Col>
                </Row>
            </Form>
            <h1 className="text-center">Questions</h1>
            <BodyItems />
            <div className="d-flex justify-content-end p-3">

                <Button variant="light" className="mx-3 border" onClick={() => { history.push("/") }} >Cancel</Button>


                <Button primary onClick={(e) => {

                    console.log(quizTitle.current.value, totalPoints.current.value, timeAllowed.current.value, deadline.current.value);
                    history.push("/");
                }}>Create Quiz</Button>

            </div>

        </div>
    )
}
