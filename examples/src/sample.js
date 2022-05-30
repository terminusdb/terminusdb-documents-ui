
export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"

export const DEMO_ACTION=CREATE
export const DEMO_DOCUMENT_TYPE="Person"

const TEST_FD = {
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

export const MAP_SCHEMA = {
	"@context":{
		"@base":"terminusdb:///data/",
		"@schema":"terminusdb:///schema#",
		"@type":"@context"
	},
	"terminusdb:///schema#coordinates": {
		"location": {
			"@class": "Location",
			"@subdocument": []
		}
	},
	"terminusdb:///schema#Location": {
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
	"terminusdb:///schema#Point": {
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
  	"terminusdb:///schema#Point_Type": {
		"@type": "Enum",
		"@values": [
			"Point"
    	]
	}
}

export const DEMO_SCHEMA = {
	"@context": {
		 "@base": "terminusdb:///data/",
		 "@schema": "terminusdb:///schema#",
		 "@type": "@context"
	 },
	 "Person": {
		 "@key": {
			 "@type": "Random"
		 },
		 "@type": "Class",
		 "name": "xsd:string",
		 "email": "xsd:string",
		 "password": "xsd:string",
		 "color": "xsd:string",
		 "notes": "xsd:string",
		 "subscribe": "xsd:boolean",
		 "created": "xsd:dateTime",
		 "modified": "xsd:dateTime",
	}
 }

 export const DEMO_SCHEMA_UI = {
    created: {
        "ui:widget": 'hidden'
    },
    modified: {
        "ui:widget": 'hidden'
    },
    name: {
        classNames: "text-danger",
        "ui:placeholder": "Enter your name..."
    },
    email: {
        classNames: "text-success",
        "ui:description": "Your email is securely stored and will not be not be shared",
        "ui:placeholder": "Enter your email address..."
    },
    password: {
        "ui:widget": 'password',
        "ui:description": "Your password must be at least eight characters",
        "ui:placeholder": "Enter your password..."
    },
    color: {
        "ui:widget": 'color',
        "ui:description": "Choose a color for your account"
    },
    notes: {
        classNames: "text-success",
        "ui:widget": 'textarea',
        "ui:placeholder": "Enter a brief description of your role..."
    },
    subscribe: {
        "ui:widget": 'radio',
        "ui:description": "Would you like to subscribe to our newsletter?"
    },
    "ui:order": ["name", "email", "password", "*"]
}

export const DEMO_SCHEMA_TEST={
	"@context": {
		 "@base": "terminusdb:///data/",
		 "@schema": "terminusdb:///schema#",
		 "@type": "@context"
	 },
	 "Person": {
		 "@key": {
			 "@type": "Random"
		 },
		 "@type": "Class",
		 "name": "xsd:string",
		 "email": "xsd:string",
		 "password": "xsd:string",
		 "color": "xsd:string",
		 "notes": "xsd:string",
		 "subscribe": "xsd:boolean",
		 "created": "xsd:dateTime",
		 "modified": "xsd:dateTime",
	}
 }


const DEMO_FORM_DATA_MANDATORY_DATA_TYPES = {
	"@id":"MandatoryDataTypes/John%20Doe",
	"@type":"MandatoryDataTypes",
	name:"John Doe",
	age:"17",
	active: true,
	DOB: "2022-03-31T10:01:11.000Z",
	identifier: "KJ"
}

const DEMO_FORM_DATA_MANDATORY_DOCUMENT_TYPES= {
	"@id":"MandatoryDocumentLink/45378bc80711aee67ce1bd7cd919cdf5cba87f42fb3786ae9a6eced9b24719a4",
	"@type":"MandatoryDocumentLink",
	"person":"MandatoryDataTypes/KJ",
	"name": "Dancers"
}


const DEMO_FORM_DATA_MANDATORY_SUBDOCUMENT_TYPES = {
	"@id":"MandatorySubDocument/fd5c2e5ec8b1a9bf34d635225a611f8741fc84c717336a2c9d91cc881afe3340",
	"@type":"MandatorySubDocument",
	"subDoc":{
	   "@id":"MandatorySubDocument/fd5c2e5ec8b1a9bf34d635225a611f8741fc84c717336a2c9d91cc881afe3340/subDoc/Address/9fccb5c0ae9c82832dec95226cd11e357b0ee4c242add5ba8aef2bafe439d3ab",
	   "@type":"Address",
	   "Code":32,
	   "Country":"ireland"
	}
}


const DEMO_FORM_DATA_OPTIONAL_DATA_TYPES= {
	"@id":"OptionalDataTypes/c78d70ac4210a0cc9492c636a6dc23ca016ee3c569f714ee50d6d6aa7da5df60",
	"@type":"OptionalDataTypes",
	"DOB":"2022-03-31T14:05:17Z",
	"name":"John Doe"
}

const DEMO_FORM_DATA_SET_DATA_TYPES= {
	"@id":"SetDataTypes/6b727a88ee922cc5c4c115dcd9658d49e94a5579595ff917a617274d1895fe57",
	"@type":"SetDataTypes",
	"GymFriends":[
	   "A",
	   "B",
	   "C"
	]
 }

const DEMO_FORM_DATA_SET_SUBDOCUMENT_TYPES={
	"@id":"SetSubDocumentType/51f602b5529f8c94e56a38d456e584cd0ab63cee6cc9069bf9ee81e7970cfd56",
	"@type":"SetSubDocumentType",
	"subDoc":[
		{
			"@id":"SetSubDocumentType/51f602b5529f8c94e56a38d456e584cd0ab63cee6cc9069bf9ee81e7970cfd56/subDoc/Address/c23c38c14124dd9d2c1f6b4df78a082f8b46d5a6174492c25d13ff6a159f12a5",
			"@type":"Address",
			"Code":32,
			"Country":"IRE"
		},
		{
			"@id":"SetSubDocumentType/34324343244e56a38d456e584cd0ab63cee6cc9069bf9ee81e7970cfd56/subDoc/Address/c23c38c14124dd9d2c1f6b4df78a082f8b46d5a6174492c25d13ff6a159f12a5",
			"@type":"Address",
			"Code":67,
			"Country":"FRA"
		}
	]
}

const DEMO_FORM_DATA_SET_DOCUMENT_TYPES={
	"@id":"SetDocumentTypes/67912ae805a460f04de53f920cef8534f9968c8e6f25764e809a90ec71a58255",
	"@type":"SetDocumentTypes",
	"person":[
	   "MandatoryDataTypes/KJ",
	   "MandatoryDataTypes/RT"
	]
 }

const DEMO_FORM_DATA_ENUM_TYPES={
	"@id":"MandatoryEnumTypes/08703af16360a55a549cb43bfc6ae86eb950aee797a002c596dad6b0d75a87de",
	"@type":"MandatoryEnumTypes",
	"enums":"three"
 }

const DEMO_FORM_DATA_SET_ENUM_TYPES={
	"@id":"SetEnumTypes/cf16e2d7522e46d7d38f2322d6e57555c930bd276d6590af437e997a2b1e5db5",
	"@type":"SetEnumTypes",
	"enums":[
	   "four",
	   "one"
	]
}

const DEMO_FORM_DATA_MANDATORY_LOCATION={
	"@id":"Asset/Communication%20tower%20near%20Good%20Hope%20",
	"@type":"Asset",
	"location":{
	   "@id":"Asset/Communication%20tower%20near%20Good%20Hope%20/location/Location/2cbba189f6718e60702a87c57d47e645bb1985296ad19dbbb36bd9b0f6aad544",
	   "@type":"Location",
	   "geometry_location":{
		  "@id":"Asset/Communication%20tower%20near%20Good%20Hope%20/location/Asset/Communication%20tower%20near%20Good%20Hope%20/location/Location/2cbba189f6718e60702a87c57d47e645bb1985296ad19dbbb36bd9b0f6aad544/geometry_location/Point/7e41ec2d01dccf740db4133480e91150c9cdf5fa2208876b0228752e50bec5e5",
		  "@type":"Point",
		  "coordinates":[
			 15.4125,
			 -61.2554
		  ],
		  "type":"Point"
	   }
	}
 }

const DEMO_FORM_DATA_MANDATORY_CHOICE_DOCUMENT_TYPES= {
	"@id": "MandatoryChoiceProperty/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918",
	"@type": "MandatoryChoiceProperty",
	/*"choiceProperty": {
		"@id": "MandatoryChoiceProperty/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918/choiceProperty/Choice1/iri%3A%2F%2FCAMS%23Hazard%2FVolcanos%2520(incl.%2520lahars,%2520pyroclastic%2520flows,%2520volcanic%2520activity)+2011-01-01T01%3A00%3A37Z",
		"@type": "Choice1",
		"Choice1Name": "Choice One Name",
		"Choice1Comment": "2011-01-01T01:00:37Z",
	}*/
	"choiceProperty": {
		"@id": "MandatoryChoiceProperty/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918/choiceProperty/Choice2/iri%3A%2F%2FCAMS%23Hazard%2FVolcanos%2520(incl.%2520lahars,%2520pyroclastic%2520flows,%2520volcanic%2520activity)+2011-01-01T01%3A00%3A37Z",
		"@type": "Choice2",
		"Choice2Name": "Choice Two Name",
		"Choice2Comment": "2021-11-01T01:00:37Z",
	}
}



export const DEMO_FORM_DATA=TEST_FD

