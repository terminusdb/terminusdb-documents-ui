# Import 

Import the dependency as follows:

``` import {FrameViewer} from '@terminusdb/terminusdb-documents-ui' ```


# Mandatory fields

The simplest example of a JSON form contains a single Mandatory field. The form will complain if mandatory fields are not entered.

#### Example

```
let frames =  {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "terminusdb:///schema#Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "DOB":"xsd:dateTime",
      "active":"xsd:boolean",
      "age":"xsd:decimal",
      "name":"xsd:string"
   }
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>

```

---

### DataTypes

Supported datatypes

- String
- Numeric
- Enum
- Temporal
- Link

Refer [Schema Reference](https://terminusdb.com/docs/index/terminusx-db/reference-guides/schema).

---

### String DataTypes

In this example, a constant frames is defined for a Document ```Person```.

```
// define frames
let frames ={
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "terminusdb:///schema#Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "name":"xsd:string"
   }
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>
```

Generated form

![Mandatory string field Example](/img/mandatoryFields/mandatoryCreateStringField.PNG)

---

### Numeric DataTypes

In this example, a constant frames is defined for a Document ```Person```.

```
// define frames
let frames = {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "terminusdb:///schema#Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "age":"xsd:integer"
   }
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>
```

Generated form

![Mandatory numeric field Example](/img/mandatoryFields/mandatoryCreateNumericField.PNG)

---

### Enum DataTypes

In this example, a constant frames is defined for a Document ```Person```.
An Enum field links to an Enum class.

```
// define frames
let frames = {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "terminusdb:///schema#Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "likes": {
			"@id": "Colors",
			"@type": "Enum",
			"@values": [
				"red",
				"blue",
				"yellow",
				"green"
			]
		}
   }
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>
```

Generated form

![Mandatory numeric field Example](/img/mandatoryFields/mandatoryCreateEnumField.PNG)

---

### Temporal DataTypes

In this example, a constant frames is defined for a Document ```Person```.

```
// define frames
let frames = {
	"@context": {
		"@base": "terminusdb:///data/",
		"@schema": "terminusdb:///schema#",
		"@type": "@context"
	},
    {
        "terminusdb:///schema#Person": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"DOB": "xsd:dateTime"
    }
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>
```

Generated form

![Mandatory string field Example](/img/mandatoryFields/mandatoryCreateTemporalField.PNG)

---

### Link DataTypes

In this example, a constant frames is defined for a Document ```Person```.
A link field links to an instance of a Document class or a SubDocument Class and is displayed in a Select Component.

Here, property ```work_as``` is linked to another document class - ```Job``` and ```lives_in``` is linked to a subdocument class - ``Address``


```
// define frames
let frames = {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "terminusdb:///schema#Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "works_as": "Job",
	  "lives_in": "Address"
   },
   "terminusdb:///schema#Job":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "title": "xsd:string"
   },
   "terminusdb:///schema#Address": {
		"@key": {
			"@type": "Random"
		},
		"@subdocument": [],
		"@type": "Class",
		"Address Line 1": "xsd:string",
		"Code": "xsd:decimal",
		"Country": "xsd:string"
	}
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>
```

Generated form

![Mandatory numeric field Example](/img/mandatoryFields/mandatoryCreateLinkField.PNG)

---


# Sets

Use Set to specify an unordered set of values of a class or datatype. You could have zero or more than one values if the property is defined as a Set.

### DataTypes Sets

In this example, a constant frames is defined for a Document Class ```Person```. Here a ```Person``` has a property ```nickName``` which is a string DataType and been decalred as a Set, which means a Person can have more than one nickName

```
// define frames
let frames = {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "terminusdb:///schema#Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "name": "xsd:string",
	   "nickName": {
			"@class": "xsd:string",
			"@type": "Set"
		}
   }
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>

```

Generated form

![Set DataType Example](/img/setFields/setDataTypeFieldsCreate.PNG)

Fill in nickNames as shown below

![Set DataType filled Example](/img/setFields/setDataTypeFilledFieldCreate.PNG)

---

### Document Class Sets

In this example, a constant frames is defined for a Document Class ```Person```. Here a ```Person``` has a property ```works_as``` which is a link property to Document Class ```Job``` and been decalred as a Set, which means a Person can have more than one Job.

```
// define frames
let frames = {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "terminusdb:///schema#Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "name": "xsd:string",
	   "works_as": {
			"@class": "Job",
			"@type": "Set"
		}
   },
   "terminusdb:///schema#Job":{
	   "@key":{
		  "@type":"Random"
	   },
	   "@type":"Class",
	   "title": "xsd:string"
	}
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>

```

Generated form

![Set Document Class Example](/img/setFields/setDocumentClassCreate.PNG)

Fill in Jobs as shown below

![Set Document Class filled Example](/img/setFields/setDocumentClassFilledCreate.PNG)

---

### Subdocument Sets

In this example, a constant frames is defined for a Document Class ```Person```. Here a ```Person``` has a property ```lived``` which is a link property to a Subdocument Class ```Address``` and been decalred as a Set, which means a Person may have lived in different Addresses.

```
// define frames
let frames = {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "terminusdb:///schema#Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "name": "xsd:string",
	   "lived": {
			"@class": {
				"@class": "Address",
				"@subdocument": []
			},
			"@type": "Set"
		}
   },
   "terminusdb:///schema#Address": {
		 "@key": {
			 "@type": "Random"
		 },
		 "@subdocument": [],
		 "@type": "Class",
		 "Address Line 1": "xsd:string",
		 "Code": "xsd:decimal",
		 "Country": "xsd:string"
	 }
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>

```

Generated form

![Set Subdocument Example](/img/setFields/setSubdocumentCreate.PNG)

---

Click on the card to expand the Subdocument

![Set Subdocument expand Example](/img/setFields/setSubdocumentExpand.PNG)

---

Fill in the fields for Subdocument ```Address``` as shown below

![Set Subdocument filled Example](/img/setFields/setSubdocumentFilledCreate.PNG)

---

# Lists

Use List to specify an ordered collection, with multiplicity, of values of a class or datatype.

### Example

In this example, a constant frames is defined for a Document Class ```Person```. Here a ```Person``` has two properties ```ordered_property``` and ```has_task``` which is a string DataType and a subdocument respectively
and been decalred as a List.

Note - The order in which ```ordered_property``` and ```has_task``` values are entered in Create mode is saved and will be viewed in the same order.

```
// define frames
let frames = {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "terminusdb:///schema#Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "ordered_property": {
			"@class": "xsd:string",
			"@type": "List"
		},
	   "has_task": {
			"@class": "Tasks",
			"@type": "List"
		}
   },
   "terminusdb:///schema#Tasks": {
		 "@key": {
			 "@type": "Random"
		 },
		 "@subdocument": [],
		 "@type": "Class",
		 "Address Line 1": "xsd:string",
		 "Code": "xsd:decimal",
		 "Country": "xsd:string"
	 }
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>

```
Generated form, note that the form contains arrows to order inputted values

![List Example](/img/listFields/listFilledCreate.PNG)

---

In View mode - the form will be displayed as below in the same ordered fashion as it was created

![View List Example](/img/listFields/listView.PNG)

---

# Optional

Use Optional as a type family where a property is not required.

### Example

In this example, a constant frames is defined for a Document Class ```Person```. Here a ```Person``` has two properties ```ordered_property``` and ```has_task``` which is a string DataType and a subdocument respectively
and been decalred Optional. This would mean that you can submit the form without inputting anything and a person with only id will be created as the properties are all optional.

```
// define frames
let frames = {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "terminusdb:///schema#Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "ordered_property": {
			"@class": "xsd:string",
			"@type": "Optional"
		},
	   "has_task": {
			"@class": "Tasks",
			"@type": "Optional"
		}
   },
   "terminusdb:///schema#Tasks": {
		 "@key": {
			 "@type": "Random"
		 },
		 "@subdocument": [],
		 "@type": "Class",
		 "Address Line 1": "xsd:string",
		 "Code": "xsd:decimal",
		 "Country": "xsd:string"
	 }
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>

```

Generated form

![Optional Example](/img/optionalFields/optionalCreate.PNG)

---
