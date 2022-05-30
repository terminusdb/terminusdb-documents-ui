# Import 

Import the dependency as follows:

``` import {FrameViewer} from '@terminusdb/terminusdb-documents-ui' ```


## Example - Create or Edit

A simple example in ```Create``` mode. Note that in ```Create``` or ```Edit``` mode, FrameViewer should only be used since coordinates (latitude & longitude) will be entered as normal ```xsd:decimal``` fields. Note - make sure to define ```formData``` while on ```Edit``` mode.

```
let frames =  {
	"@context":{
		"@base":"terminusdb:///data/",
		"@schema":"terminusdb:///schema#",
		"@type":"@context"
	},
	"coordinates": {
		"location": {
			"@class": "Location",
			"@subdocument": []
		}
	},
	"Location": {
		"@key": {
			"@type": "Random"
		},
		"@subdocument": [],
		"@type": "Class",
		"city": "xsd:string",
		"geometry_location": {
			"@class": [
				{
					"@class": "Point",
					"@subdocument": []
				}
			],
			"@type": "Optional"
		}
	},
	"Point": {
		"@key": {
			"@type": "Random"
		},
		"@subdocument": [],
		"@type": "Class",
		"coordinates": {
			"@class": "xsd:decimal",
			"@dimensions": 1,
			"@type": "Array"
		},
		"type": {
			"@id": "Point_Type",
			"@type": "Enum",
			"@values": [
				"Point"
			]
		}
  	},
  	"Point_Type": {
		"@type": "Enum",
		"@values": [
			"Point"
    	]
	}
}

// define document type
let type="coordinates"

// define mode
let mode="Create"

return <FrameViewer
    frame={frames}
    type={type}
    mode={mode}/>

```

Generated form

![Map create Example](/img/mapFrames/mapCreateExample.PNG)

---

## Example - View


A simple example in ```View``` mode. Note that in ```View``` mode, FrameViewer displays the coordinates in the form of a map.

```
let frames =  {
	"@context":{
		"@base":"terminusdb:///data/",
		"@schema":"terminusdb:///schema#",
		"@type":"@context"
	},
	"coordinates": {
		"location": {
			"@class": "Location",
			"@subdocument": []
		}
	},
	"Location": {
		"@key": {
			"@type": "Random"
		},
		"@subdocument": [],
		"@type": "Class",
		"city": "xsd:string",
		"geometry_location": {
			"@class": [
				{
					"@class": "Point",
					"@subdocument": []
				}
			],
			"@type": "Optional"
		}
	},
	"Point": {
		"@key": {
			"@type": "Random"
		},
		"@subdocument": [],
		"@type": "Class",
		"coordinates": {
			"@class": "xsd:decimal",
			"@dimensions": 1,
			"@type": "Array"
		},
		"type": {
			"@id": "Point_Type",
			"@type": "Enum",
			"@values": [
				"Point"
			]
		}
  	},
  	"Point_Type": {
		"@type": "Enum",
		"@values": [
			"Point"
    	]
	}
}

// formData is real instance of coordinates document type
let formData = {
	"@id": "coordinates/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918",
  	"@type": "coordinates",
	"location":{
		"@id":"coordinates/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918/coordinates/Location/cbf3d8956432778d2c3db84533eac02bff76326aa3407436e483361fdf55fd0c",
		"@type":"Location",
		"city":"Marigot",
		"geometry_location":{
			"@id":"coordinates/location/Location/cbf3d8956432778d2c3db84533eac02bff76326aa3407436e483361fdf55fd0c/geometry_location/Point/3ec3de24dab9a66311ff5010df341b05d67bbcd764537f6f3484a8d03d235843",
			"@type":"Point",
			"coordinates":[
				15.53743,
				-61.282
			],
			"type":"Point"
		}
	}
}

// define document type
let type="coordinates"

// define mode
let mode="View"

return <FrameViewer
    frame={frames}
    formData={formData}
    type={type}
    mode={mode}/>

```

Generated form

![Map view Example](/img/mapFrames/mapViewExample.PNG)

---

# Another method of displaying Maps

Another way in which Maps can be displayed is by importing ```<MapViewer/>```


``` import {MapViewer} from '@terminusdb/terminusdb-documents-ui' ```

## Parameters

``` documents ```
An array of TerminusDB documents extracted from a WOQL Query. Make sure to write a function which transforms the WOQL results to the below format.

```
let docId = "id of doc ..."
let docName = "name of doc ..."
let lat = -61.23 // a valid decimal value to display latitude
let lng = 15.42 // a valid decimal value to display longitude

[
    {
        id : docId,
        name : docName,
        lat : lat,
        lng : lng
    },
    { ... },
    { ... }
]

```

The ```<MapViewer/>``` will complaint if the mentioned format is not followed. Refer to the example below.

``` zoom ```
Zoom is an integer value which can be used to set the zoomed in level of the maps.

``` scrollWheelZoom ```
A boolean value which enables/ disables zoom in and out features in a map.


### Example

```
let docs = [
   {
      "id":"Asset/Communication%20tower%20near%20Good%20Hope%20",
      "lng":-61.2554,
      "name":"Communication tower near Good Hope ",
      "lat":15.4125
   },
   {
      "id":"Asset/La%20Plaine%20Police%20Station",
      "lng":-61.2416,
      "name":"La Plaine Police Station",
      "lat":15.333
   },
   {
      "id":"Asset/Mahaut%20River%20Health%20Centre",
      "lat":15.4773,
      "name":"Mahaut River Health Centre",
      "lng":-61.2516
   },
   {
      "id":"Asset/Belles%20Primary%20School",
      "lat":15.42717,
      "name":"Belles Primary School",
      "lng":-61.3403
   },
   {
      "id":"Asset/Trafalgar%20hydro%20power%20plan%20",
      "lat":15.316919,
      "name":"Trafalgar hydro power plan ",
      "lng":-61.35083
   },
   {
      "id":"Asset/Fort%20Young%20Hotel%20",
      "lat":15.296,
      "name":"Fort Young Hotel ",
      "lng":-61.38627
   },
   {
      "id":"Asset/Roseau-Canefield%20Airport",
      "lat":15.33934,
      "name":"Roseau-Canefield Airport",
      "lng":-61.39179
   },
   {
      "id":"Asset/Princess%20Margaret%20Hospital%20",
      "lat":15.30705,
      "name":"Princess Margaret Hospital ",
      "lng":-61.3847
   },
   {
      "id":"Asset/Justin%20Fadipe%20Hospital",
      "lat":15.4281,
      "name":"Justin Fadipe Hospital",
      "lng":-61.4316
   },
   {
      "id":"Asset/Dominica%20Air%20&%20Sea%20Ports%20Authority%20(DASPA)",
      "lng":-61.3881,
      "name":"Dominica Air & Sea Ports Authority (DASPA)",
      "lat":15.3124
   },
   {
      "id":"Asset/Petro%20Caribe%20Radio%20Tower",
      "lng":-61.40316,
      "name":"Petro Caribe Radio Tower",
      "lat":15.3695
   },
   {
      "id":"Asset/Portsmouth%20Town%20Council",
      "lng":-61.4553,
      "name":"Portsmouth Town Council",
      "lat":15.574671
   },
   {
      "id":"Asset/Castle%20bruce%20Electrical%20substation",
      "lat":15.4393,
      "name":"Castle bruce Electrical substation",
      "lng":-61.2607
   },
   {
      "id":"Asset/NEW%20ASSET%20",
      "lat":53.307481,
      "name":"NEW ASSET ",
      "lng":-62.954872
   },
   {
      "id":"Asset/TCD",
      "lng":-62.5449,
      "name":"TCD",
      "lat":53.3439
   }
]

return <MapViewer
    documents={docs}
    zoom={5}
    scrollWheelZoom={true}
/>

```
---

#### Output

![Map Viewer Example](/img/mapFrames/mapViewerMultiDocs.PNG)

---


