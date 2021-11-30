// DATA PROPERTY TYPE
export const XSD_DATA_TYPE_PREFIX = "xsd:"
export const XDD_DATA_TYPE_PREFIX = "xdd:"
export const SUBDOCUMENT="@subdocument"
export const OPTIONAL="Optional"
export const SET="Set"
export const DOCUMENT="Class"
export const ENUM="Enum"

export const TDB_SCHEMA= "terminusdb:///schema#"
export const EDIT="edit"

export const SELECT_STYLES = {
    control: (styles) => ({ ...styles, backgroundColor: 'dark', borderColor: "rgb(102, 102, 102) !important" }),
    menu: (styles) => ({ ...styles, backgroundColor: '#444'}),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "black"
          : isFocused
          ? "black"
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? "black"
              : "black"
            : undefined,
        },
      }
    }
}