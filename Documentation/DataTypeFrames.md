


## DataTypeFrames

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
			"@fields": [
				"identifier"
			],
			"@type": "Lexical"
		},
		"@type": "Class",
		"DOB": "xsd:dateTime",
		"active": "xsd:boolean",
		"age": "xsd:decimal",
		"identifier": "xsd:string",
		"name": "xsd:string"
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

### Edit
Example
```
let mode="Edit"
let type="Person"

// frames
let schema = {
	"@base": "terminusdb:///data/",
    "@schema": "terminusdb:///schema#",
    "@type": "@context",
	"terminusdb:///schema#Person": {
		"@key": {
			"@fields": [
				"identifier"
			],
			"@type": "Lexical"
		},
		"@type": "Class",
		"DOB": "xsd:dateTime",
		"active": "xsd:boolean",
		"age": "xsd:decimal",
		"identifier": "xsd:string",
		"name": "xsd:string"
	}
}

// instance
let formData={
	"@id":"Person/John%20Doe",
	"@type":"Person",
	name:"John Doe",
	age:"17",
	active: true,
	DOB: "2022-03-31T10:01:11.000Z",
	identifier: "JD"
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

### View
Example
```
let mode="View"
let type="Person"

// frames
let schema = {
	"@base": "terminusdb:///data/",
    "@schema": "terminusdb:///schema#",
    "@type": "@context",
	"terminusdb:///schema#Person": {
		"@key": {
			"@fields": [
				"identifier"
			],
			"@type": "Lexical"
		},
		"@type": "Class",
		"DOB": "xsd:dateTime",
		"active": "xsd:boolean",
		"age": "xsd:decimal",
		"identifier": "xsd:string",
		"name": "xsd:string"
	}
}

// instance
let formData={
	"@id":"Person/John%20Doe",
	"@type":"Person",
	name:"John Doe",
	age:"17",
	active: true,
	DOB: "2022-03-31T10:01:11.000Z",
	identifier: "JD"
}

function handleSubmit(data){
    console.log("Data submitted:", data)
}

return <FrameViewer
        frame={schema}
        type={type}
        mode={mode}
        formData={formData}
		hideSubmit={true}
        onSubmit={handleSubmit}/>
```

