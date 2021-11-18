import React from 'react'
import {Card} from "react-bootstrap"

export const SchemaEditors = ({setSchema, schema}) => {

    return <Card className="m-5 w-100 editor">
        <Card.Header as="h3" className="bg-transparent">Schema JSON</Card.Header>
        <Card.Body>
            <textarea
                className="p-4 w-100 bg-secondary text-light h-100"
                onBlur={(e) => setSchema(JSON.parse(e.target.value))}>
                {JSON.stringify(schema, null, 2)}
            </textarea>
        </Card.Body>
    </Card>
}