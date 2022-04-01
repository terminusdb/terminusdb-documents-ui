import React from 'react'
import {Card, Form} from "react-bootstrap"


export const DocumentInput = ({type, setType}) => {


    return <Card className="m-4 w-100">
        <Card.Header as="h3" className="bg-transparent">Document Type</Card.Header>
        <Card.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control placeholder="Enter a document type - Example - Person"
                        defaultValue={type}
                        onBlur={(e) => setType(e.target.value)}
                        className="bg-transparent text-light border-light"/>
                </Form.Group>
            </Form>
        </Card.Body>
    </Card>
}