


## SubDocumentTypeFrames

### View

Example
```
let mode="View"

let type="Person"

let schema = {
	"@base": "terminusdb:///data/",
    "@schema": "terminusdb:///schema#",
    "@type": "@context",
    "terminusdb:///schema#Address": {
		"@key": {
			"@type": "Random"
		},
		"@subdocument": [],
		"@type": "Class",
		"Code": "xsd:decimal",
		"Country": "xsd:string",
		"addressLine": {
			"@class": "xsd:string",
			"@type": "Optional"
		  }
	},
	"terminusdb:///schema#Person": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
        "name": "xsd:string",
		"subDoc": {
			"@class": "Address",
			"@subdocument": []
		}
	}
}

let formData = {
	"@id":"MandatorySubDocument/fd5c2e5ec8b1a9bf34d635225a611f8741fc84c717336a2c9d91cc881afe3340",
	"@type":"MandatorySubDocument",
    "name": "Mary Jane",
	"subDoc":{
	   "@id":"MandatorySubDocument/fd5c2e5ec8b1a9bf34d635225a611f8741fc84c717336a2c9d91cc881afe3340/subDoc/Address/9fccb5c0ae9c82832dec95226cd11e357b0ee4c242add5ba8aef2bafe439d3ab",
	   "@type":"Address",
	   "Code":32,
	   "Country":"ireland"
	}
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