import React from 'react'
import { Form, Row, Button, Col } from 'react-bootstrap'
import { useHistory } from 'react-router';
export default function Choice() {
    const history = useHistory();
    return (
        <div className="border p-3">
            <h1>Choice</h1>
            <Form>
                <Row className="">
                    <Form.Group>
                        <Form.Control type="textarea" placeholder="Enter your choice" />
                    </Form.Group>
                </Row>
                <Row className="p-3">
                    <Form.Check
                        type="checkbox"
                        label="Correct Option"
                    />
                </Row>

                <div className="d-flex justify-content-end ">

                    <Button variant="light" className="mx-3 border" >Cancel</Button>


                    <Button primary onClick={() => { history.push("/Question") }}>Add Choice</Button>

                </div>
            </Form>

        </div >
    )
}
