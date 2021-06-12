import React, { useContext } from 'react'
import { Form, Row, Button, Col } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { counterContext } from "../App"

let choiceText = React.createRef();
let correct = React.createRef();
let choiceData = {
    "choiceText": "",
    "Correct": ""
}


export default function Choice() {
    const [questionCounter, setquestionCounter, choiceCounter, setchoiceCounter] = useContext(counterContext)
    const history = useHistory();







    return (
        <div className="border p-3">
            <h1>Choice</h1>
            <Form>
                <Row className="">
                    <Form.Group>
                        <Form.Control ref={choiceText} type="textarea" placeholder="Enter your choice" />
                    </Form.Group>
                </Row>
                <Row className="p-3">
                    <Form.Check
                        ref={correct}
                        type="checkbox"
                        label="Correct Option"
                        onChange={(e) => {
                            choiceData.Correct = e.target.checked
                        }}
                    />
                </Row>

                <div className="d-flex justify-content-end ">

                    <Button variant="light" className="mx-3 border" >Cancel</Button>


                    <Button primary onClick={(e) => {
                        addChoice(e);
                        history.push("/Question")
                    }}>Add Choice</Button>

                </div>
            </Form>

        </div >
    )
}

function addChoice(e) {
    choiceData.choiceText = choiceText.current.value;
    console.log(choiceData)
}