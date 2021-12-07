# terminusdb-documents-ui
SDK to build UI from terminusdb documents

## Run demo
```npm run start```

### UI JSON Arguments
```classNames``` : Any css class names
```ui:widget```  : Hides a widget
```ui:placeholder```: include placeholder
```"ui:field```: you can pass a function which allows you to customise a field
                ```
                function getNameFiled (props) {
                    return <div>{props.name}</div>
                }

                const uiSchema = name {
                    "ui:field": getNameFiled
                }

                const schema = {
                    "name" : "xsd:string"
                }

                return <FrameViewer frame={schema} uiFrame={uiSchema}>
                ```