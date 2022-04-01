import React from 'react'
import {Card} from "react-bootstrap"

export const FormData = ({formData, setFormData}) => {
    return <Card className="m-4 w-100 editor">
        <Card.Header as="h3" className="bg-transparent">Data JSON</Card.Header>
        <Card.Body>
            <textarea
                className="p-4 w-100 bg-secondary text-light h-100"
                onBlur={(e) => setFormData(JSON.parse(e.target.value))}>
                {JSON.stringify(formData, null, 2)}
            </textarea>
        </Card.Body>
    </Card>
}