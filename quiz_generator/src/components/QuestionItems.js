import React, { useContext } from 'react'
import { Button, Table } from "react-bootstrap"
import { useHistory } from 'react-router'
import { toogleData } from "../App"
import { counterContext } from "../App"

export default function QuestionItems() {
    const [toogleQuestion, settoogleQuestion, toogleChoice, settoogleChoice] = useContext(toogleData)

    const history = useHistory()

    const [questionCounter, setquestionCounter, choiceCounter, setchoiceCounter, quizData, setquizData] = useContext(counterContext)
    let choiceTable
    if (!toogleChoice) {
        choiceTable = quizData.question[questionCounter].choice.map((choiceData) => {
            return (
                <tr>
                    <td>
                        {choiceData.choiceText}

                    </td>
                    <td>
                        {choiceData.Correct.toString()}
                    </td>
                </tr>
            );



        })
    }
    if (toogleChoice) {
        return (
            <div className="border   d-flex justify-content-center align-items-center" style={{ height: "500px" }}>

                <Button primary onClick={() => { history.push("/Choice") }} >Add Choice </Button>

            </div>
        )
    }
    else {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Choice</th>
                            <th>Correct</th>

                        </tr>
                    </thead>
                    <tbody>
                        {choiceTable}
                    </tbody>
                </Table>



                <Button primary onClick={() => { history.push("/Choice") }} >Add Choice </Button>
            </div >);
    }
}
