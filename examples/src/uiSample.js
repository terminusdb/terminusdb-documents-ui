

// select style
const SELECT_STYLES = {
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
                : '#000',
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
            color: '#000'
        }
    }
}


export const UI_FRAMES = {
    select_styles: SELECT_STYLES,
    subDocument_styles: "subDocumentCard",
    submitButton_styles: "btn-success"
}

let exampleUI = {
    "classNames": "bg-dark p-5 border border-success rounded ",
    "applicable_hazards": {
        "ui:widget" : "hidden"
    },
    "asset_history": {
        "ui:widget" : "hidden"
    },
    "asset_identifier": {"ui:widget" : "hidden"},
    "design_standards": {"ui:widget" : "hidden"},
    "name": {
        "ui:description": "I am entering a name field here",
        "classNames": "text-danger fw-bold h4 m-3",
        "ui:placeholder": "Enter name ..."
    },
    "last_maintained" : {"ui:widget": "AltDateWidget"}
}



