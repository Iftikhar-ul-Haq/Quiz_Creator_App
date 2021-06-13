import React, { useContext } from 'react'
import { Button, Table } from "react-bootstrap"
import { useHistory } from 'react-router';
import { toogleData } from "../App"

import { counterContext } from "../App"

export default function Body_button() {

    const [questionCounter, setquestionCounter, choiceCounter, setchoiceCounter, quizData, setquizData] = useContext(counterContext)
    const [toogleQuestion, settoogleQuestion, toogleChoice, settoogleChoice] = useContext(toogleData)

    let questionData = {
        "questionText": "",
        "type": "",
        "points": "",
        "choice": [

        ]

    }
    const questionTable = quizData.question.map((questions) => {
        let length = questions.choice.length
        return (
            <tr>
                <td>{questions.questionText}</td>
                <td>{questions.type}</td>
                <td>{length}</td>
                <td>{questions.points}</td>

            </tr>
        );
    })




    const history = useHistory();

    if (toogleQuestion) {
        return (
            <div>
                <div className="border  m-3 d-flex justify-content-center align-items-center" style={{ height: "500px" }}>

                    <Button primary onClick={() => { history.push("/Question") }} >Add Questions </Button>





                </div>

            </div>
        );
    }
    else {
        return (
            <div>
                <Table striped bordered hover >
                    <thead>
                        <tr>

                            <th>Text</th>
                            <th>Type</th>
                            <th>Coice</th>
                            <th>Points</th>
                            <th>Actions</th>


                        </tr>
                    </thead>
                    <tbody>
                        {questionTable}
                    </tbody>
                </Table>
                <Button primary onClick={() => {
                    history.push("/Question");
                    quizData.question[questionCounter] = questionData
                }} >Add Questions </Button>
            </div>
        );
    }
}
