import React, {useState, useEffect} from "react"
import {Form} from "react-bootstrap"
import AsyncSelect from 'react-select/async'


// filled Select - view mode 
export const FilledDocumentViewSelect = ({label, defaultValue, onTraverse, styles}) => {
    const [clicked, setClicked]=useState(false)

        useEffect(() => {
            //console.log("clicked", clicked)
            if(!clicked) return
            if(onTraverse) onTraverse(clicked)
        }, [clicked])

        const handleClick = (e, val) => { // view if on traverse function defined
            setClicked(val)
        }

        let color = "text-light"
        if (styles.hasOwnProperty("mode") && styles["mode"]==="light") color="text-dark"

        return <React.Fragment>
            <Form.Label className="control-label ">{label}</Form.Label> 
            <span onClick={(e) => handleClick(e, defaultValue)} className={`tdb__span__select ${color}`}>
                {defaultValue}
            </span>
        </React.Fragment>
} 

// empty Select - edit mode
export const EmptyDocumentSelect = ({label, styles, placeholder, value, onChange, loadOptions, handleInputChange}) => {

    return <React.Fragment>
        <Form.Label>{label} {/*<span class="required">*</span>*/} </Form.Label> 
        {value && <AsyncSelect
                classNames="tdb__input"
                styles={styles}
                value={value}
                onChange={onChange}
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
        />}
        {!value && <AsyncSelect
                classNames="tdb__input"
                styles={styles}
                placeholder={placeholder}
                onChange={onChange}
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
        />}
    </React.Fragment>
}

// filled Select - edit mode
export const FilledDocumentSelect = ({label, styles, placeholder, defaultValue, onChange, loadOptions, handleInputChange}) => {
    return <React.Fragment>
        <Form.Label>{label} {/*<span class="required">*</span>*/} </Form.Label>
        <AsyncSelect
            cacheOptions
            classNames="tdb__input"
            styles={styles}
            placeholder={placeholder}
            onChange={onChange}
            loadOptions={loadOptions}
            defaultOptions
            defaultValue={{value: defaultValue, label: defaultValue}}
            onInputChange={handleInputChange}
        />
    </React.Fragment>
}