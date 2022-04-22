import React from 'react'
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
//import {DEMO_DOCUMENTS, PROFILE_DEMO_DOCUMENTS, VIEW, EDIT} from "./sample"

export const Output = ({schema, uiSchema, type, mode, formData}) => {

    function handleSubmit(data) {
        console.log("*****Data Submitted****", data)
    }

    function handleTraverse(id) {
        console.log("*****Clicked on****", id)
    }

    function handleSelect(inp){
        //console.log("*****Select****", inp)
        let matched=[]
        let options_1=[
            { value: 'Art', label: 'Blakey' },
            { value: 'John', label: 'Coltrane' },
            { value: 'Miles', label: 'Davis' },
            { value: 'Herbie', label: 'Hancock' },
            { value: 'Charlie', label: 'Parker' },
            { value: 'Tony', label: 'Williams' },
        ]
        let options=[
            { value: 'Designer', label: 'Web Designer' },
            { value: 'Lecturer', label: 'Lecturer' },
            { value: 'Writter', label: 'Writter' },
            { value: 'Herbie', label: 'Hancock' },
            { value: 'Charlie', label: 'Parker' },
            { value: 'Tony', label: 'Williams' },
        ]
        options.map(item => {
            if(item.value.toUpperCase() === inp.toUpperCase()){
                matched.push(item)
            }
        })
        //console.log("matched", matched)
        return matched
    }

    // select style
    let selectStyle = {
        control: (styles) => ({
            ...styles,
            backgroundColor: '#fff',
            borderColor: "#ced4da !important",
            width: '100%'
        }),
        menu: (styles) => ({
            ...styles,
            backgroundColor: '#fff',
            zIndex: "999 !important"
        }),
        menuPortal: base => ({ ...base, zIndex: 999 }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? undefined
                    : isSelected
                    ? "#fff"
                    : isFocused
                    ? "#fff"
                    : undefined,
                color: isDisabled
                    ? '#000'
                    : isSelected,
                cursor: isDisabled ? 'not-allowed' : 'default',
                    ':active': {
                        ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? isSelected
                        ? "#000"
                        : "#000"
                        : undefined,
                    color: "#000",
                    "&:hover": {
                        backgroundColor:"#f4f4f4"
                    },
                },
            }
        },
        input: (styles) => {
            return {
                ...styles,
                color: '#000'
            }
        },
        singleValue:(styles) => {
            return {
                ...styles,
                color: '#000',
                width: "500px"
            }
        },
        mode: "light"
    }

    // ui frames for changing styles for react-select in terminusdb-documents-ui
    const uiFrame_sel={
        select_styles: selectStyle
    }

    const uiFrame = {
        name: {
           "ui:widget": 'hidden'
        }
     }

    return <React.Fragment>
        <h3 className="mt-5 mb-4 text-warning">{`Output - ${type}`}</h3>
        <FrameViewer
            frame={schema}
            uiFrame={uiFrame}
            type={type}
            //documents={PROFILE_DEMO_DOCUMENTS}
            formData={formData}
            onSelect={handleSelect}
            mode={mode}
            hideSubmit={mode==="View" ? true : false}
            onTraverse={handleTraverse}
            onSubmit={handleSubmit}/>
    </React.Fragment>
}