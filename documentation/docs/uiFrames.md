

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

![uiPlaceholder Example](/img/uiFrames/uiPlaceholderExample.PNG)

---


### ui:widget

```ui:widget``` can be included at field level and tells the form which UI widget should be used to render a field.

##### ```ui:widget:'hidden'```

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

Generated form, note that in the output form, field ```name``` is missing even though it is a part of the ```frames``` defined.

![uiWidget hidden Example](/img/uiFrames/uiWidgetHidden.PNG)

---


#### For boolean type fields

By default, if a field is of type ```boolean```, the form will render the ```boolean``` field as a checkbox by default. 
We can render a boolean field as a radio button or a select field by seeting uiFrames.

By default, a boolean field is rendered as below -

![uiWidget checkbox Example](/img/uiFrames/uiWidgetCheckBox.PNG)

---

##### ```ui:widget: 'radio'```

On setting ```ui:widget``` to radio, the field will be rendered as radio buttons.

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
      "interested":"xsd:boolean"
   }
}

let uiFrames = {
      "ui:widget": 'radio'
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

Generated form, note that in the output form, field ```interested``` is rendered as radio buttons.

![uiWidget radio Example](/img/uiFrames/uiWidgetRadio.PNG)

---

##### ```ui:widget: 'select'```

On setting ```ui:widget``` to select, the field will be rendered as select field with values ```true``` and ```false```

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
      "interested":"xsd:boolean"
   }
}

let uiFrames = {
   interested: {
      "ui:widget": 'select'
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

Generated form, note that in the output form, field ```interested``` is rendered as radio buttons.

![uiWidget select Example](/img/uiFrames/uiWidgetSelect.PNG)

---

#### For string type fields

Below are examples and screenshots which shows how to alter ```string``` fields.

##### ```ui:widget: 'textarea'```

On setting ui:widget to teaxtarea, the string field will be rendered as a textarea.

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
      "bio":"xsd:string"
   }
}

let uiFrames = {
   bio: {
      "ui:widget": 'textarea'
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

Generated form, note that in the output form, field ```bio``` is rendered as radio buttons.

![uiWidget textarea Example](/img/uiFrames/uiWidgetTextArea.PNG)

---

##### ```ui:widget: 'password'``` & ```ui:widget: 'color'```


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
      "password":"xsd:string",
      "color": "xsd:string"
   }
}

let uiFrames = {
   password: {
      "ui:widget": 'textarea'
   },
   ¸: {
      "ui:widget": 'textarea'
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

Generated form, note that in the output form, field ```password``` has password protected format & ```color`` is rendered as a color picker

![uiWidget password and color Example](/img/uiFrames/uiWidgetPasswordColor.PNG)

---

### ```ui:order```

```ui:order``` allows you to define the order in which properties are rendered using the ui:order property.

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
      "name": "xsd:string",
      "email":"xsd:string",
      "website_url": "xsd:string",
      "notes": "xsd:string",
      "modified": "xsd:string",
      "created": "xsd:string",
   }
}

let uiFrames = {
   "ui:order": ["created", "modified", "notes", "name", "website_url", "email"]
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

The form will be rendered in the same order as specified in ui:order. If a guaranteed fixed order is only important for some fields, you can insert a wildcard "*" item in your ui:order definition as shown below.


```
let uiFrames = {
   "ui:order": ["notes", "*"] // in this case notes will be rendered as the first field
}
```

---






