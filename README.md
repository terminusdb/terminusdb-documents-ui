# terminusdb-documents-ui
SDK to build UI from terminusdb documents

## Run demo
```npm run start```

### UI JSON Arguments
- ```classNames``` :  Any css class names
- ```ui:widget```  :  Hides a widget
- ```ui:placeholder```:  Include placeholder
- ```ui:field```:  You can pass a function which allows you to customise a field

Example
```
// custom function 
function getNameFiled (props) {
    return <div>{props.name}</div>
}

// uischema layout
const uiSchema = name {
    "ui:field": getNameFiled
}

//schema layout
const schema = {
    "name" : "xsd:string"
}

return <FrameViewer frame={schema} uiFrame={uiSchema}/>
```
