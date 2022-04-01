


import React, {useState, useEffect} from 'react'
import {Card, Form} from "react-bootstrap"
import {CREATE, EDIT, VIEW } from './sample'

export const ModeInput = ({mode, setMode}) => {

    const [value, setValue]=useState(mode)

    useEffect(() => {
        if(value) setMode(value)
    }, [value])

    return <Card className="mt-4 w-100">
        <Card.Header as="h3" className="bg-transparent">Mode</Card.Header>
        <Card.Body>
            <Form>
                <Form.Group className="mb-3">
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                            inline
                            label={CREATE}
                            name={CREATE}
                            type={"radio"}
                            className="text-light"
                            id={CREATE}
                            checked={value === CREATE}
                            onChange={(e) => setValue(e.target.id)}
                        />
                        <Form.Check
                            inline
                            label={EDIT}
                            name={EDIT}
                            type={"radio"}
                            className="text-light"
                            id={EDIT}
                            checked={value === EDIT}
                            onChange={(e) => setValue(e.target.id)}
                        />
                        <Form.Check
                            inline
                            label={VIEW}
                            name={VIEW}
                            type={"radio"}
                            className="text-light"
                            id={VIEW}
                            checked={value === VIEW}
                            onChange={(e) => setValue(e.target.id)}
                        />
                    </div>
                </Form.Group>
            </Form>
        </Card.Body>
    </Card>
}