
export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"

export const DEMO_ACTION=CREATE
export const DEMO_DOCUMENT_TYPE="Person"

const TEST_FD = {
	"@id":"Person/8981ab1482e7b04d04ca48ce81c596b8aa5227fdfeba22757e2e663831a0c9b4",
	"@type":"Person",
	"has_task":[
	   {
		  "@id":"Person/8981ab1482e7b04d04ca48ce81c596b8aa5227fdfeba22757e2e663831a0c9b4/has_task/0/Tasks/d5e7b3c18e842b020a9dff4178d658e1db998e6a51fa413a15b5f195428f09eb",
		  "@type":"Tasks",
		  "name":"clean the house",
		  "priority":1
	   },
	   {
		  "@id":"Person/8981ab1482e7b04d04ca48ce81c596b8aa5227fdfeba22757e2e663831a0c9b4/has_task/1/Tasks/7dc734a02eacbb7f72331372086898695522a98733ecb1a5bce9d8b139360fc7",
		  "@type":"Tasks",
		  "name":"cook",
		  "priority":2
	   }
	],
	"ordered_property":[
	   "A",
	   "B",
	   "C"
	]
 }

export const DEMO_SCHEMA = {
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
   },
   	"terminusdb:///schema#Tasks": {
		 "@key": {
			 "@type": "Random"
		 },
		 "@subdocument": [],
		 "@type": "Class",
		 "name": "xsd:string",
		 "priority": "xsd:decimal"
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

export const DEMO_SCHEMA_TEST={
	"@context": {
		"@base": "terminusdb:///data/",
		"@schema": "terminusdb:///schema#",
		"@type": "@context"
	},
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
	"terminusdb:///schema#Person_old": { //MandatoryDataTypes
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		/*"DOB": "xsd:dateTime",
		"active": "xsd:boolean",*/
		"age": "xsd:integer",
		/*"identifier": "xsd:string",
		"name": "xsd:string"*/
	},
    "terminusdb:///schema#Person": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"DOB": "xsd:dateTime"
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
	"terminusdb:///schema#OptionalChoiceProperty": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"choiceProperty":{
			"@class": [
				"Choice1",
				"Choice2"
			  ],
			"@type": "Optional"
		}
	},
	"terminusdb:///schema#SetChoiceProperty": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"choiceProperty":{
			"@class": [
				"Choice1",
				"Choice2"
			  ],
			"@type": "Set"
		}
	},
	"terminusdb:///schema#Choice1": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"Choice1Name": "xsd:string",
		"Choice1Comment": "xsd:dateTime",

  	},
  	"terminusdb:///schema#Choice2": {
		"@key": {
			"@type": "Random"
		},
		"@type": "Class",
		"Choice2Name": "xsd:string",
		"Choice2Comment": "xsd:dateTime"
  	},
	"terminusdb:///schema#OneOfDocuemntClasses": {
		"@key": {
			"@type": "Random"
		},
		"@oneOf": [
			{
				"choice1": "OneOfChoice",
				"choice2": "Choice2",
				"suspected_unknown": "sys:Unit",
				"unknown": "sys:Unit"
			}
		],
		"@subdocument": [],
		"@type": "Class"
	},
	"terminusdb:///schema#OneOfChoice": {
		"@key": {
		  "@type": "Random"
		},
		"@subdocument": [],
		"@type": "Class",
		"date_range": {
		  "@class": {
			"@class": "DateRange",
			"@subdocument": []
		  },
		  "@type": "Optional"
		},
		"value": "xsd:string"
	},
	"terminusdb:///schema#DateRange": {
	  "@key": {
		"@fields": [
		  "from",
		  "to"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "from": "xsd:integer",
	  "to": "xsd:integer"
	},
	"terminusdb:///schema#MandatoryLocation": {
		"@type": "Class",
		"name": "xsd:string",
		"location": "Location"
	},
	"terminusdb:///schema#Location": {
		"@key": {
			"@fields": [
			  "city"
			],
			"@type": "Lexical"
		  },
		  "@subdocument": [],
		  "@type": "Class",
		  "city": "xsd:string",
		  "geometry_location": {
				//"@class": [
				//	{
						"@class": "Point",
						"@subdocument": []
				//	}
				//],
				//"@type": "Optional"
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
		}
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

export const DEMO_SCHEMA_UI = {
  "placeholder": "xsd:dateTime"
}

