# terminusdb-documents-ui
SDK to build UI from terminusdb documents

## Run demo
Note - uses react bootswatch darkly theme

```npm run start```

## Run Minimal
Note - uses no theme, we stylize using css or classes

```npm run minimal```

## Installation

Install the dependancy from npm

```npm install @terminusdb/terminusdb-documents-ui```

Then import dependancy as shown below

```import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'```

## Usage

### Create

```
    let schema = "terminusdb:///schema#Person": {
	  "@key": {
		"@fields": [
		  "name",
		  "works_as"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "likes": {
		"@class": {
		  "@id": "Color",
		  "@type": "Enum",
		  "@values": [
			"red",
			"blue",
			"green"
		  ]
		},
		"@type": "Optional"
	  },
	  "name": "xsd:string"
	}

    return <FrameViewer
        frame={schema}
        mode={"Create"}
        type={"Person"}/>
```

### View
Note - make sure filled document is provided in View mode

```
    let schema = "terminusdb:///schema#Person": {
	  "@key": {
		"@fields": [
		  "name",
		  "works_as"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "likes": {
		"@class": {
		  "@id": "Color",
		  "@type": "Enum",
		  "@values": [
			"red",
			"blue",
			"green"
		  ]
		},
		"@type": "Optional"
	  },
	  "name": "xsd:string"
	}

    let data = {
        "@id": "Person/Peter%20+terminusdb%3A%2F%2F%2Fdata%2FJob%2Fadmin",
        "@type": "Person",
        "likes": "blue",
        "name": "Peter "
    }

    return <FrameViewer
        frame={schema}
        mode={"View"}
        formData={data}
        type={"Person"}/>
```


### UI JSON Arguments
- ```classNames``` :  Any css class names
- ```ui:title``` : You can pass a string or a function with stylized component to provide a title for field or form
- ```ui:description``` : You can pass a string or a function with stylized component to provide a description for field or form
- ```ui:widget```  :  Hides a widget
- ```ui:placeholder```:  Include placeholder
- ```ui:field```:  You can pass a function which allows you to customise a field

Example
```
// custom function, props will contain all of the inner info
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
