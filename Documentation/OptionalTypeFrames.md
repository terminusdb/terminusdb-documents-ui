## OptionalTypeFrames

### Create

Example
```
let mode="Create"
let type="Person"
let schema = {
	"@base": "terminusdb:///data/",
    "@schema": "terminusdb:///schema#",
    "@type": "@context",
	"terminusdb:///schema#Person": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"DOB": {
			"@class": "xsd:dateTime",
			"@type": "Optional"
		},
		"active": {
			"@class": "xsd:boolean",
			"@type": "Optional"
		},
		"age": {
			"@class": "xsd:decimal",
			"@type": "Optional"
		},
		"name": {
			"@class": "xsd:string",
			"@type": "Optional"
		}
	}
}

function handleSubmit(data){
    console.log("Data submitted:", data)
}

return <FrameViewer
        frame={schema}
        type={type}
        mode={mode}
        onSubmit={handleSubmit}/>
```


Example
```
let mode="Edit"
let type="Person"

// instance
let formData={
	"@id":"OptionalDataTypes/c78d70ac4210a0cc9492c636a6dc23ca016ee3c569f714ee50d6d6aa7da5df60",
	"@type":"OptionalDataTypes",
	"DOB":"2022-03-31T14:05:17Z",
	"name":"John Doe"
}

function handleSubmit(data){
    console.log("Data submitted:", data)
}

return <FrameViewer
        frame={schema}
        type={type}
        mode={mode}
        formData={formData}
        onSubmit={handleSubmit}/>
```