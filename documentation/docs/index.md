# Introduction

A simple React component capable of building React forms out of a TerminusDB schema.

terminusdb-documents-ui is meant to automatically generate a React form based on a TerminusDB schema. This is a
stand alone componenet which only takes TerminusDB frames as input and generates React form as the output.
This kit also comes with tools such as uiSchema and other form props to customize the look and feel of the form beyond the default themes.

---

## What are Frames?

In TerminusDB world, frames are generated from a TerminusDB schema. A frame is a simple JSON structure which constitues the skeleton of all documents with its associated set of inherited properties and corresponding IRIs.

---

# Installation

First install the dependency from npm:
``` npm install @terminusdb/terminusdb-documents-ui --save ```

Then import the dependency as follows:

``` import {FrameViewer} from '@terminusdb/terminusdb-documents-ui' ```

---

# Usage

---

## How to get Frames?

Frames can be retreived by using TerminusDB client. Below is an example written in javascript on how to retrieve
frames from schema.

Please refer this link to learn how to use TerminusDB Client, written in both Python and Javascript
 [WOQLClient](https://terminusdb.com/docs/index/terminusx-db/reference-guides/javascript-client-reference/woqlclient).

```
try {
    let type = "Person" // type is the a document class of interest
    let frames = await woqlClient.getSchemaFrame(type, woqlClient.db())
    console.log(`Frames genrated from ${woqlClient.db()}`, frames)
} catch(err){
    console.log("Error in fetching frames", err)
}
```

---

## Parameters

``` frame ```
the full JSON frame structure extracted from a TerminusDB schema

``` uiFrame ```
JSON to modify look & feel of the output React form

``` type ```
document type of interest, which tells ```<FrameViewer/>``` the type of document which needs to be displayed

``` mode ```
there are 3 modes available - Create, Edit & View

``` formData ```
are filled frames (instances of a Document). It is important to specify formData in Edit & View modes otherwise the filled values will not be displayed

``` onSubmit ```
a callback JS function with custom logic to process data submitted via the React form

``` hideSubmit ```
hides Submit button from the React form

``` onChange ```
a callback JS function with custom logic to bind an onChange event to the form

``` onSelect ```
a callback JS function which gets back the selected values or searched values from a Select component. This is helpfull to define an async function to display options on a Select component

``` onTraverse ```
a JS function which gets back the ID of a document on click. This is useful to bind an onClick JS event with
a document field

``` FieldTemplate ```
a JS function which helps to change look and feel of fields on the output React form

---

# Example

Below is an example of the whole frames, which includes 2 document classes
- Person
- Group

```

let frames =  {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "DOB":"xsd:dateTime",
      "active":"xsd:boolean",
      "age":"xsd:decimal",
      "name":"xsd:string"
   },
   "Group":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "title":"xsd:string",
      "members":"xsd:decimal"
   }
}

// set type as Person. If you want to display Group, then set type to "Group"
let type="Person"

// We could add certain ui JSON Elements to modify look and feel
// for example - here for name field of a Person - we set a placeholder
let uiFrames={
    "name" : {
        "ui:placeholder": "Please enter a name ..."
    }
}

// Create mode will display empty frames
let mode="Create"

// a callback function which displays the data extracted from the form
function handleSubmit(data) {
    console.log("Data extracted from the form: ",  data)
}

return <FrameViewer
    frame={frames}
    uiFrame={uiFrames}
    type={type}
    onSelect={handleSelect}
    mode={mode}
    onSubmit={handleSubmit}/>
```

---

#### Output

![Frame Viewer Example](/img/frameViewerExample.PNG)

# Modes

FrameViewer Component supports 3 modes
- Create
- Edit
- View

---

## Create

FrameViewer Component in Create mode would display empty frames. You can define a callback function and pass into the FrameViewer component which would extract all the filled fields from the form.

```

let frames =  {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "DOB":"xsd:dateTime",
      "active":"xsd:boolean",
      "age":"xsd:decimal",
      "name":"xsd:string"
   },
   "Group":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "title":"xsd:string",
      "members":"xsd:decimal"
   }
}

// set type as Person. If you want to display Group, then set type to "Group"
let type="Person"

// Create mode will display empty frames
let mode="Create"

// a callback function which displays the data extracted from the form
function handleSubmit(data) {
    console.log("Data extracted from the form: ",  data)
}

return <FrameViewer
    frame={frames}
    type={type}
    onSelect={handleSelect}
    mode={mode}
    onSubmit={handleSubmit}/>
```

---

Below is a screenshot of the rendered output form in Create Mode

![Frame Viewer Example](/img/frameViewerExample.PNG)

---

## Edit

FrameViewer Component in Edit mode would display filled frames and empty frames. You can again define a callback function and pass into the FrameViewer component which would extract all the filled fields from the form.
Note that while calling FrameViewer in Edit mode, it is required to pass ```formData``` parameter as well.
As mentioned before, formData would display the filled frames with inputted values.


```

let frames =  {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "DOB":"xsd:dateTime",
      "active":"xsd:boolean",
      "age":"xsd:decimal",
      "first_name":"xsd:string",
      "family_name":"xsd:string",
      "last_name":"xsd:string"
   },
   "Group":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "title":"xsd:string",
      "members":"xsd:decimal"
   }
}

// set type as Person. If you want to display Group, then set type to "Group"
let type="Person"

// Create mode will display empty frames
let mode="Edit"

// Add filled frames
let formData = {
	"@id":"Person/John%20Doe",
	"@type":"Person",
	first_name:"John",
	last_name:"Doe",
	age:"17",
	active: true,
	DOB: "2022-03-31T10:01:11.000Z"
}


// a callback function which displays the data extracted from the form
function handleSubmit(data) {
    console.log("Data extracted from the form: ",  data)
}

return <FrameViewer
    frame={frames}
    type={type}
    onSelect={handleSelect}
    mode={mode}
    formData={formData}
    onSubmit={handleSubmit}/>
```

---

Below is a screenshot of the rendered output form in Edit mode

![Frame Viewer Example](/img/editFrameViewerExample.PNG)

---

## View

FrameViewer Component in View mode would display filled frames. In View mode the form output will automatically hide Submit button.
Note that while calling FrameViewer in View mode, it is required to pass ```formData``` parameter as well otherwise you will receive an empty form.


```

let frames =  {
   "@context":{
      "@base":"terminusdb:///data/",
      "@schema":"terminusdb:///schema#",
      "@type":"@context"
   },
   "Person":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "DOB":"xsd:dateTime",
      "active":"xsd:boolean",
      "age":"xsd:decimal",
      "name":"xsd:string"
   },
   "Group":{
      "@key":{
         "@type":"Random"
      },
      "@type":"Class",
      "title":"xsd:string",
      "members":"xsd:decimal"
   }
}

// set type as Person. If you want to display Group, then set type to "Group"
let type="Person"

// Create mode will display empty frames
let mode="Edit"

// Add filled frames
let formData = {
	"@id":"Person/John%20Doe",
	"@type":"Person",
	name:"John Doe",
	age:"17",
	active: true,
	DOB: "2022-03-31T10:01:11.000Z",
}


// a callback function which displays the data extracted from the form
function handleSubmit(data) {
    console.log("Data extracted from the form: ",  data)
}

return <FrameViewer
    frame={frames}
    type={type}
    onSelect={handleSelect}
    mode={mode}
    formData={formData}
    onSubmit={handleSubmit}/>
```

---

Below is a screenshot of the rendered output form in View mode

![Frame Viewer Example](/img/frameViewerViewExample.PNG)

---






