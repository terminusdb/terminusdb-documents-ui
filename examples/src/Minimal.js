import React from 'react'
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import {DEMO_DOCUMENTS, VIEW} from "./sample"
import {Row, Col} from "react-bootstrap"

const App= (props) =>{

    const schema={
        "terminusdb:///schema#Address": {
          "@key": {
            "@type": "Random"
          },
          "@subdocument": [],
          "@type": "Class",
          "AddressLine1": "xsd:string",
          "AddressLine2": "xsd:string",
          "Country": "xsd:string",
          "address_code": "Codes"
        },
        "terminusdb:///schema#Codes": {
          "@key": {
            "@fields": [
              "postal"
            ],
            "@type": "Lexical"
          },
          "@type": "Class",
          "located": {
            "@class": {
              "@class": "Address",
              "@subdocument": []
            },
            "@type": "Set"
          },
          "postal": {
            "@class": "xsd:string",
            "@type": "Optional"
          }
        },
        "terminusdb:///schema#Color": {
          "@type": "Enum",
          "@values": [
            "red",
            "blue",
            "green"
          ]
        },
        "terminusdb:///schema#Hobbies": {
          "@key": {
            "@type": "Random"
          },
          "@type": "Class",
          "likes": {
            "@class": "Job",
            "@type": "Set"
          }
        },
        "terminusdb:///schema#Job": {
          "@key": {
            "@fields": [
              "title"
            ],
            "@type": "Lexical"
          },
          "@type": "Class",
          "title": {
            "@class": "xsd:string",
            "@type": "Optional"
          }
        },
        "terminusdb:///schema#Person": {
          "@key": {
            "@fields": [
              "name",
              "works_as"
            ],
            "@type": "Lexical"
          },
          "@type": "Class",
          "likes": {
            "@class": {
              "@id": "Color",
              "@type": "Enum",
              "@values": [
                "red",
                "blue",
                "green"
              ]
            },
            "@type": "Optional"
          },
          "lives_in": {
            "@class": {
              "@class": "Address",
              "@subdocument": []
            },
            "@type": "Optional"
          },
          "name": "xsd:string",
          "nicknames": {
            "@class": "xsd:string",
            "@type": "Set"
          },
          "works_as": "Job"
        },
        "terminusdb:///schema#valuehash": {
          "@key": {
            "@type": "ValueHash"
          },
          "@type": "Class",
          "color": {
            "@class": "xsd:string",
            "@type": "Optional"
          },
          "name": {
            "@class": "xsd:string",
            "@type": "Optional"
          }
        }
      }

    const SUPERMAN = {
        "@id":"Person/Superman+terminusdb%3A%2F%2F%2Fdata%2FJob%2FParty%2520Group",
        "@type":"Person",
        "likes":"red",
        "lives_in":{
           "@id":"Person/Superman+terminusdb%3A%2F%2F%2Fdata%2FJob%2FParty%2520Group/lives_in/Address/321586843224d067f2d5deb5290d6481e311873b9cd8330deabe596f94a6f8bd",
           "@type":"Address",
           "AddressLine1":"5 beverly leinster square ",
           "AddressLine2":"rathmines dublin 6",
           "Country":"Ireland",
           "address_code":"Codes/003"
        },
        "name":"Superman",
        "nicknames":[
           "flying jerk"
        ],
        "works_as":"Job/Party%20Group"
    }

    const SPIDERMAN = {
        "@id":"Person/SPIDERMAN+terminusdb%3A%2F%2F%2Fdata%2FJob%2FOPS",
        "@type":"Person",
        "likes":"blue",
        "lives_in":{
           "@id":"Person/SPIDERMAN+terminusdb%3A%2F%2F%2Fdata%2FJob%2FOPS/lives_in/Address/2cf11441008389db787ed7d6b38287bc893b64ff2be948993674d743cb3bdfc4",
           "@type":"Address",
           "AddressLine1":"51, Block 3, Dundrum Gate,",
           "AddressLine2":"Ballinteer road,",
           "Country":"UK",
           "address_code":"Codes/002"
        },
        "name":"SPIDERMAN",
        "nicknames":[
           "whatever"
        ],
        "works_as":"Job/OPS"
     }

    const uiSchema = {
        classNames: "bg-info",
        likes: {
            classNames: "minimal"
        },
        lives_in : {
            classNames: "minimal"
        }

    }

    const uiSchema_1 = {
      classNames: "bg-success",
      likes: {
          classNames: "minimal"
      },
      lives_in : {
          classNames: "minimal"
      }

  }

    //style={{backgroundColor: "#0000ff7a", height: "100%"}}

    return <React.Fragment>
        <Row className="w-100">
            <Col className="col-md-6">


                <FrameViewer frame={schema}
                    uiFrame={uiSchema}
                    formData={SUPERMAN}
                    mode={VIEW}
                    type={"Person"}
                    documents={DEMO_DOCUMENTS}/>
            </Col>

            <Col className="col-md-6">


                <FrameViewer frame={schema}
                    uiFrame={uiSchema_1}
                    formData={SPIDERMAN}
                    mode={VIEW}
                    type={"Person"}
                    documents={DEMO_DOCUMENTS}/>
            </Col>


        </Row>

    </React.Fragment>

}

export default App