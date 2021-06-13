import React, { useContext } from 'react'
import { Form, Col, Button, Container, Row, Table } from "react-bootstrap"
import { useHistory } from 'react-router';
import { toogleData } from "../App"


import { counterContext } from "../App"
export default function Main_page() {

    const history = useHistory();
    const [questionCounter, setquestionCounter, choiceCounter, setchoiceCounter, quizData, setquizData] = useContext(counterContext)
    const [toogleQuestion, settoogleQuestion, toogleChoice, settoogleChoice] = useContext(toogleData)


    return (
        <div className="text-center">
            <h1>Quiz Creator App</h1>
            <div className="border p-3">
                <h2>List of the quiz created</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>Quiz Title</th>
                            <th>Points</th>
                            <th>Time Allowed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{quizData.title}</td>
                            <td>{quizData.totalPoints}</td>
                            <td>{quizData.deadline}</td>
                        </tr>
                    </tbody>
                </Table>

                <Button className="primary" onClick={() => { history.push("/QuizCreator") }}>i am main page</Button>
            </div>
        </div>
    );
}
