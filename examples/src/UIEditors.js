import React from 'react'
import {Card} from "react-bootstrap"

export const UIEditors = ({setUISchema, uiSchema}) => {

    return <Card className="m-5 w-100 editor">
        <Card.Header as="h3" className="bg-transparent">UI JSON</Card.Header>
        <Card.Body>
            <textarea
                className="p-4 w-100 bg-secondary text-light h-100"
                onBlur={(e) => setUISchema(JSON.parse(e.target.value))}>
                {JSON.stringify(uiSchema, null, 2)}
            </textarea>
        </Card.Body>
    </Card>
}