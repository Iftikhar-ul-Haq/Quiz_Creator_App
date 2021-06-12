import React, { useContext } from 'react'
import { Button, Table } from "react-bootstrap"
import { useHistory } from 'react-router';
import { toogleData } from "../App"

import { counterContext } from "../App"

export default function Body_button() {

    const [questionCounter, setquestionCounter, choiceCounter, setchoiceCounter, quizData] = useContext(counterContext)
    const [toogleQuestion, settoogleQuestion, toogleChoice, settoogleChoice] = useContext(toogleData)

    let questionData = {
        "questionText": "",
        "type": "",
        "points": "",
        "choice": [

        ]

    }




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
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
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
