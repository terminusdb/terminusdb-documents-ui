

# UI Frames

UI Frames are a JSON object which can be passed as parameter ```uiFrame``` to ```<FrameViewer/>```. This JSON will contain a description which will alter the look and feel of the output form.

#### Example

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
      "name":"xsd:string"
   }
}

let uiFrames = {
   classNames: "bg-dark p-5",
   name: {
      classNames: "text-green"
   }
}

// define document type
let type="Person"

// define mode
let mode="Create"

// call FrameViewer
return <FrameViewer
    frame={frames}
    uiFrame={uiFrames} // pass uiFrames here to alter look and feel
    type={type}
    mode={mode}/>
```


Generated form

![UI Frame Example](/img/uiFrames/example.PNG)

---

## Parameters

### classNames

``` classNames ```
You can include a css className or react bootstrap className at both root level as well as field level. If a className is inclued at root level, this will be applied to the entire form.

In the below example classNames ```"bg-dark"``` is a react bootstrap classname and will applied to the entire form where as when classNames are specified under ```name``` which is a property of ```Person```, the className would be applied to the field ```name``` only.

```
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
      "name":"xsd:string",
      "age": "xsd:decimal"
   }
}

let uiFrames = {
   classNames: "bg-dark p-5",
   name: {
      classNames: "text-green"
   }
}
```

Generated form

![className Example](/img/uiFrames/classNameExample.PNG)

---

### ui:description

```ui:description``` can be included at field level to include custom description to a property.

```
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
      "name":"xsd:string",
      "age": "xsd:decimal"
   }
}

let uiFrames = {
   classNames: "bg-dark p-5",
   name: {
      classNames: "text-light",
      "ui:description": "I am writting a description for name field here ... "
   },
   age: {
      classNames: "text-light"
   }
}
```

Generated form

![uiDescription Example](/img/uiFrames/uiDescriptionExample.PNG)

---

### ui:placeholder

```ui:placeholder``` can be included at field level to add a placeholder to a property.

```
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
      "name":"xsd:string",
      "age": "xsd:decimal"
   }
}

let uiFrames = {
   name: {
      "ui:placeholder": "Please enter your name ... "
   },
   age: {
      "ui:placeholder": "Please enter your age ... "
   }
}
```

Generated form

![uiPlaceholder Example](/img/uiFrames/uiPlaceholderExample.PNG)

---


### ui:widget

```ui:widget``` can be included at field level and tells the form which UI widget should be used to render a field.

#### 'hidden'

```ui:widget:'hidden'``` This feature is most useful when you want to hide a field from the form.

```
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
      "name":"xsd:string",
      "age": "xsd:decimal"
   }
}

let uiFrames = {
   name: {
      "ui:widget": 'hidden'
   }
}
```

Generated form, note that in the output form, field ```name``` is missing even though it is a part of the ```frames``` defined.

![uiWidget hiiden Example](/img/uiFrames/uiWidgetHidden.PNG)

---

//adinng


