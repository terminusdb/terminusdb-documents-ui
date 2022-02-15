import React, {useEffect, useState} from "react"
import Form from "@rjsf/core"
import {getProperties} from "./FrameHelpers"
import CollapsibleField from "react-jsonschema-form-extras/lib/CollapsibleField"
import {TDB_SCHEMA} from "./constants"
import {Alert} from "react-bootstrap"
import {VIEW, EDIT} from "./constants"
import {formatData, getPrefix, isValueHashDocument, getValueHashMessage} from "./utils"


/*
**  frame     - full json schema of a document
**  uiFrame   - ui json of a document
**  type      - document type of interest
**  mode      - create/ edit/ view
**  documents - document list
**  formData  - filled value of the document
**  onSubmit  - a function which can have custom logic to process data submitted
**  hideSubmit - hides Submit button - this is helpfull when you want to display nested FrameViewers
**  onChange   - a function which have custom logic to process data when form data is changed
**  onSelect   - a js function which gets back the selected value from selects
**  FieldTemplate - a js function which you can pass at root level of FrameViewer to alter look and feel of fields
*/
export function FrameViewer({frame, uiFrame, type, mode, documents, formData, onSubmit, onTraverse, onSelect, hideSubmit, onChange, FieldTemplate}){

    const [prefix, setPrefix]=useState(TDB_SCHEMA)
    const [schema, setSchema]=useState(false)
    const [uiSchema, setUISchema]=useState(false)
    const [readOnly, setReadOnly]=useState(false)
    const [error, setError]=useState(false)
    const [input, setInput]=useState({})
    //const [definitions, setDefinitions]=useState({})

    const [message, setMessage]=useState(false)


    if(!frame) return <div>No schema provided!</div>
    if(!mode) return  <div>Please include a mode - Create/ Edit/ View</div>
    if(mode === VIEW && !formData) return <div>Mode is set to View, please provide filled form data</div>
    if(!type) return  <div>Please include the type of document</div>

    let extractedPrefix = getPrefix(frame)
    let current = `${extractedPrefix}${type}`


    useEffect(() => {
        setPrefix(extractedPrefix)
        //try{
            //console.log("extractedPrefix", extractedPrefix)
            //console.log("frame", frame)
            let properties = getProperties(frame, frame[current], uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse, onSelect)
            /*let properties ={                properties:{},
                required: {},
                dependencies:{},
                uiSchema:{}
            }*/
            //console.log("definitions", definitions)
            let definitions = {
                testdef: {
                    title: "test",
                    type: "string"
                }
            }
            let schema = {
                type: "object",
                properties: properties.properties,
                required: properties.required,
                dependencies: properties.dependencies,
            }
            //console.log("schema", JSON.stringify(schema, null, 2))
            //console.log("uiSchema", JSON.stringify(properties.uiSchema, null, 2))
            let test = {
                "type": "object",
                "properties": {
                  "general_variables": {
                    "type": "object",
                    "title": "general_variables",
                    "info": "SUBDOCUMENT",
                    "properties": {
                      "alternative_names": {
                        "type": "array",
                        "title": "KMMMMM",
                        "items": [
                          {
                            "type": "object",
                            "properties": {
                              "@oneOf": {
                                "title": "@oneOf",
                                "type": "object",
                                "description": "Choose from the list ...",
                                "anyOf": [
                                  {
                                    "title": "inferred",
                                    "info": "@oneOf",
                                    "properties": {
                                      "inferred": {
                                        "type": "object",
                                        "title": "inferred",
                                        "info": "SUBDOCUMENT",
                                        "properties": {
                                          "date_range": {
                                            "type": "object",
                                            "title": "date_range",
                                            "info": "SUBDOCUMENT",
                                            "properties": {
                                              "from": {
                                                "type": "string",
                                                "info": "DATA",
                                                "title": "from"
                                              },
                                              "to": {
                                                "type": "string",
                                                "info": "DATA",
                                                "title": "to"
                                              },
                                              "@type": {
                                                "type": "string",
                                                "title": "DateRange",
                                                "default": "DateRange"
                                              }
                                            }
                                          },
                                          "value": {
                                            "type": "string",
                                            "info": "DATA",
                                            "title": "value",
                                            "default": "magic"
                                          },
                                          "@type": {
                                            "type": "string",
                                            "title": "StringValue",
                                            "default": "StringValue"
                                          }
                                        },
                                        "required": [
                                          "value"
                                        ],
                                        "default": {
                                          "@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a/inferred/StringValue/30f5a7097ab3bfa78df534949cc844fe6ae9b2cf3c69a689f1901e27cad436de",
                                          "@type": "StringValue",
                                          "value": "magic"
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "title": "known",
                                    "info": "@oneOf",
                                    "properties": {
                                      "known": {
                                        "type": "object",
                                        "title": "known",
                                        "info": "SUBDOCUMENT",
                                        "properties": {
                                          "date_range": {
                                            "type": "object",
                                            "title": "date_range",
                                            "info": "SUBDOCUMENT",
                                            "properties": {
                                              "from": {
                                                "type": "string",
                                                "info": "DATA",
                                                "title": "from"
                                              },
                                              "to": {
                                                "type": "string",
                                                "info": "DATA",
                                                "title": "to"
                                              },
                                              "@type": {
                                                "type": "string",
                                                "title": "DateRange",
                                                "default": "DateRange"
                                              }
                                            }
                                          },
                                          "value": {
                                            "type": "string",
                                            "info": "DATA",
                                            "title": "value"
                                          },
                                          "@type": {
                                            "type": "string",
                                            "title": "StringValue",
                                            "default": "StringValue"
                                          }
                                        },
                                        "required": [
                                          "value"
                                        ]
                                      }
                                    }
                                  },
                                  {
                                    "title": "suspected_unknown",
                                    "info": "sys:Unit",
                                    "type": "object",
                                    "properties": {
                                      "suspected_unknown": {
                                        "type": "string"
                                      }
                                    },
                                    "default": {
                                      "suspected_unknown": "sys:Unit"
                                    }
                                  },
                                  {
                                    "title": "unknown",
                                    "info": "sys:Unit",
                                    "type": "object",
                                    "properties": {
                                      "unknown": {
                                        "type": "string"
                                      }
                                    },
                                    "default": {
                                      "unknown": "sys:Unit"
                                    }
                                  }
                                ]
                              },
                              "@type": {
                                "type": "string",
                                "title": "AlternativeNames"
                              }
                            },
                            "default": {
                              "@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a",
                              "@type": "AlternativeNames",
                              "inferred": {
                                "@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a/inferred/StringValue/30f5a7097ab3bfa78df534949cc844fe6ae9b2cf3c69a689f1901e27cad436de",
                                "@type": "StringValue",
                                "value": "magic"
                              }
                            }
                          }
                        ],

                      },
                      "@type": {
                        "type": "string",
                        "title": "GeneralVariables",
                        "default": "GeneralVariables"
                      }
                    }
                  }
                },
                "required": [],
                "dependencies": {}
              }
            console.log("schema", schema)
            console.log("properties.uiSchema", properties.uiSchema)
            console.log("uiSchema", uiSchema)

            if(mode === VIEW) {
                setReadOnly(true)
                setInput(formData)
            }
            else if(mode === EDIT && isValueHashDocument(frame[current])) {
                setInput(formData)
                setMessage(getValueHashMessage())
                setReadOnly(true)
            }
            else if(onChange) { // form nested frame viewers
                setInput(formData)
            }
            else {
                setReadOnly(false)
                setInput({})
            }
            setSchema(schema)
            const uiSchema = properties.uiSchema
            if(uiFrame && uiFrame.classNames) uiSchema["classNames"]= uiFrame.classNames
            if(uiFrame && uiFrame["ui:title"]) uiSchema["ui:title"]= uiFrame["ui:title"]
            if(uiFrame && uiFrame["ui:description"]) uiSchema["ui:description"]= uiFrame["ui:description"]
            setUISchema(uiSchema)
        //}
        //catch(e) {
          //  setError("An error has occured in generating frames. Err - ", e)
        //}

    }, [frame, uiFrame, type, mode, formData])


    const handleSubmit = ({formData}) => {
        console.log("Data before extract: ",  formData)
        if(onSubmit) {
            var extracted=formatData(mode, schema, formData, frame, current)
            onSubmit(extracted)
            console.log("Data submitted: ",  extracted)
            //console.log("Data submitted: ",  JSON.stringify(extracted, null, 2))
        }
    }

    const handleChange = (data) => {
        console.log("Data changed: ",  data)
        setInput(data)
        if(onChange) {
            onChange(data)
        }
    }

    if(error) {
        return <Alert variant="danger">{error}</Alert>
    }

    //return <>{"HELLO WORLD"}</>

    /*function CustomFieldTemplate(props) {
        const {id, classNames, label, help, required, description, errors, children} = props;
        var css
        console.log("props", props)
        if(label === "address") css = "d-none"
        return (
          <div className={css}>
            <label htmlFor={id}>{label}{required ? "*" : null}</label>
            {description}
            {children}
            {errors}
            {help}
          </div>
        );
      }*/

    return <React.Fragment>
        {schema && message && message}
        {schema && <Form schema={schema}
            uiSchema={uiSchema}
            mode={mode}
            onSubmit={handleSubmit}
            //onBlur={e => handleBlur(e.formData)}
            readonly={readOnly}
            formData={input}
            onChange={({formData}) => handleChange(formData)}
            fields={{
                collapsible: CollapsibleField
            }}
            //liveValidate={false}
            //omitExtraData={true}
            //showErrorList={false}
            children={hideSubmit} // hide submit button on view mode
            FieldTemplate={FieldTemplate}
        />}
    </React.Fragment>
 }


 /*<pre>
    {JSON.stringify(schema, null, 2)}
</pre>*/
