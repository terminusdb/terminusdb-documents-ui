
export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"

export const DEMO_ACTION=EDIT
export const DEMO_DOCUMENT_TYPE="MandatoryChoiceProperty"


export const DEMO_SCHEMA={
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
		},
		"person": {
			"@class": "MandatoryDocumentLink",
			"@type": "Set"
		}
	},
	"terminusdb:///schema#MandatoryDataTypes": {
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
	},
	"terminusdb:///schema#MandatorySubDocument": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"subDoc": {
			"@class": "Address",
			"@subdocument": []
		}
	},
	"terminusdb:///schema#OptionalDataTypes": {
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
	},
	"terminusdb:///schema#OptionalSubDocument": {
		"@key": {
		  	"@type": "Random"
		},
		"@type": "Class",
		"subDoc": {
		  	"@class": {
				"@class": "Address",
				"@subdocument": []
		  	},
		  	"@type": "Optional"
		}
	},
	"terminusdb:///schema#MandatoryDocumentLink": {
		"@key": {
		  	"@type": "Random"
		},
		"@type": "Class",
		"name": "xsd:string",
		"person": "MandatoryDataTypes"
	},
	"terminusdb:///schema#OptionalDocumentLink": {
		"@key": {
		  	"@type": "Random"
		},
		"@type": "Class",
		"person": {
		  	"@class": "MandatoryDataTypes",
		  	"@type": "Optional"
		}
	},
	"terminusdb:///schema#SetDataTypes": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"GymFriends": {
			"@class": "xsd:string",
			"@type": "Set"
		}
	},
	"terminusdb:///schema#SetSubDocumentType": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"subDoc": {
			"@class": {
				"@class": "Address",
				"@subdocument": []
			},
			"@type": "Set"
		}
	},
	"terminusdb:///schema#SetDocumentTypes": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"person": {
			"@class": "MandatoryDataTypes",
			"@type": "Set"
		}
  	},
	"terminusdb:///schema#Enums": {
		"@type": "Enum",
		"@values": [
			"one",
			"two",
			"three",
			"four"
		]
	},
	"terminusdb:///schema#MandatoryEnumTypes": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"enums": {
			"@id": "Enums",
			"@type": "Enum",
			"@values": [
				"one",
				"two",
				"three",
				"four"
			]
		}
	},
	"terminusdb:///schema#OptionalEnumTypes": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"enums": {
			"@class": {
				"@id": "Enums",
				"@type": "Enum",
				"@values": [
				"one",
				"two",
				"three",
				"four"
				]
			},
			"@type": "Optional"
		}
	},
	"terminusdb:///schema#SetEnumTypes": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"enums": {
			"@class": {
				"@id": "Enums",
				"@type": "Enum",
				"@values": [
					"one",
					"two",
					"three",
					"four"
				]
			},
			"@type": "Set"
		}
  	},
	"terminusdb:///schema#MandatoryChoiceProperty": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"choiceProperty": [
			"Choice1",
			"Choice2"
		],
	},
	"terminusdb:///schema#Choice1": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"Choice1Name": "xsd:string",
		"Choice1Comment": "xsd:dateTime"
  	},
  	"terminusdb:///schema#Choice2": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"Choice2Name": "xsd:string",
		"Choice2Comment": "xsd:dateTime"
  	}
}


const DEMO_FORM_DATA_MANDATORY_DATA_TYPES = {
	"@id":"MandatoryDataTypes/Kitty%20Jose",
	"@type":"MandatoryDataTypes",
	name:"Kitty Jose",
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



export const DEMO_FORM_DATA=DEMO_FORM_DATA_MANDATORY_CHOICE_DOCUMENT_TYPES

export const DEMO_SCHEMA_UI = {
  "placeholder": "xsd:dateTime"
}

