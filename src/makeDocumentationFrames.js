import React, {useState, useEffect, useRef} from "react"
import {addCustomUI} from "./utils"
import Stack from 'react-bootstrap/Stack'
import {FaRegQuestionCircle} from "react-icons/fa"
import Overlay from 'react-bootstrap/Overlay'
import {Button} from "react-bootstrap"
import Tooltip from 'react-bootstrap/Tooltip'
import {FaRegComment} from "react-icons/fa"

// get data type frames
function documentationTypeFrames (frame, item, uiFrame) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}


    layout = {
        type: "string",
        title: item
    }

    function displayDocumentation (props) {

        const [show, setShow] = useState(false)
        const target = useRef(null)

        const DisplayPropertyDocumentation = () => {
            let propertyDocuments = []

            for(var props in frame["@properties"]) {
                propertyDocuments.push(
                    <Stack direction="horizontal" gap={2}>
                        <small className="text-gray">{props}</small>
                        <small className="text-muted">{frame["@properties"][props]}</small>
                    </Stack>
                )
            }

            return <React.Fragment>{propertyDocuments}</React.Fragment>

        }


        return <Stack direction="horizontal" gap={1}>
            {frame["@comment"] && <Stack direction="horizontal" gap={2}>
                <FaRegComment className="text-muted"/><label className="text-muted">{frame["@comment"]}</label>
            </Stack>}
            {/*frame["@properties"] && <>
                <Button ref={target} 
                    className={"bg-transparent border-0"}
                    //onClick={() => setShow(!show)}
                    onMouseEnter={() => setShow(!show)}
                    onMouseLeave={() => setShow(!show)}
                    title={"Click here to see property info"}>
                        <FaRegQuestionCircle className="text-muted"/>
                </Button>
                <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                    <Tooltip id="documentation-tooltip" {...props}>
                        <DisplayPropertyDocumentation/>
                    </Tooltip>
                    )}
                </Overlay>
            </>*/}
        </Stack>
    }

    uiLayout = {
        "ui:placeholder": `Search for ${frame[item]} ...`,
        classNames: "tdb__input mb-3 mt-3",
        "ui:field": displayDocumentation
    }
    
    // schema
    properties[item] = layout
    // ui schema
    propertiesUI[item] = uiLayout

    return {properties, propertiesUI}
}

export const makeDocumentationFrames = (frame, item, uiFrame) => {
    let madeFrames = documentationTypeFrames (frame, item, uiFrame)

    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}