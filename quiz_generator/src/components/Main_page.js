import React from 'react'
import { Form, Col, Button, Container, Row, Table } from "react-bootstrap"
import { useHistory } from 'react-router';



export default function Main_page() {
    const history = useHistory();

    return (
        <div className="text-center">
            <h1>Quiz Creator App</h1>
            <div className="border p-3">
                <h2>List of the quiz created</h2>

                <Button className="primary" onClick={() => { history.push("/QuizCreator") }}>i am main page</Button>
            </div>
        </div>
    );
}
