
export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"


export const DEMO_SCHEMA_PERSON ={
	"terminusdb:///schema#Address": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "AddressLine1": "xsd:string",
	  "AddressLine2": "xsd:string",
	  "Country": "xsd:string",
	  "address_code": "Codes"
	},
	"terminusdb:///schema#Codes": {
	  "@key": {
		"@fields": [
		  "postal"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "located": {
		"@class": {
		  "@class": "Address",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "postal": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Color": {
	  "@type": "Enum",
	  "@values": [
		"red",
		"blue",
		"green"
	  ]
	},
	"terminusdb:///schema#Job": {
	  "@key": {
		"@fields": [
		  "title"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "title": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Person": {
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
	  "lives_in": {
		"@class": {
		  "@class": "Address",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "name": "xsd:string",
	  "nicknames": {
		"@class": "xsd:string",
		"@type": "Set"
	  },
	  "works_as": {
		"@class": "Job",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#movies": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "name": "xsd:string"
	},
	"terminusdb:///schema#valuehash": {
	  "@key": {
		"@type": "ValueHash"
	  },
	  "@type": "Class",
	  "color": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "name": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	}
  }

export const DEMO_SCHEMA={
	"terminusdb:///schema#Person": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "name": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "watched": "movies"
	},
	"terminusdb:///schema#movies": {
	  "@key": {
		"@fields": [
		  "title"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "title": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	}
  }


export const SMALL_SCHEMA = {
	"terminusdb:///schema#NuclearPowerPlant": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "name": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "reactors": {
		"@class": [
		  "PowerReactor",
		  "AtomicReactor"
		],
		"@type": "Set"
	  }
	},
	"terminusdb:///schema#PowerReactor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "r_name": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#AtomicReactor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "a_name": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Reactor": {
	  "@abstract": [],
	  "@key": {
		"@fields": [
		  "r_name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "r_name": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	}
  }

export const SMALL_SCHEMA_FORM_DATA = {
	"@id": "NuclearPowerPlant/KJ",
	"@type": "NuclearPowerPlant",
	"capacity": {
	  "@id": "NuclearPowerPlant/KJ/capacity/Quantity/http%3A%2F%2Flib.terminusdb.com%2Fnuclear%2FUnit%2FBLAH+3",
	  "@type": "Quantity",
	  "quantity": 3,
	  "unit": "Unit/BLAH"
	},
	"capacity_factor": [
	  {
		"@id": "NuclearPowerPlant/KJ/capacity_factor/AnnualCapacityFactor/2015",
		"@type": "AnnualCapacityFactor",
		"capacity_factor": 2,
		"year": "2015"
	  }
	],
	"commissioning_year": "2018",
	"country": "Country/IRELAND",
	"gppd_idnr": "123123",
	"location": {
	  "@id": "NuclearPowerPlant/KJ/location/GeoCoordinate/4+5",
	  "@type": "GeoCoordinate",
	  "latitude": 4,
	  "longitude": 5
	},
	"name": "KJ",
	"output": [
	  {
		"@id": "NuclearPowerPlant/KJ/output/AnnualOutput/2020",
		"@type": "AnnualOutput",
		"output": {
		  "@id": "NuclearPowerPlant/KJ/output/NuclearPowerPlant/KJ/output/AnnualOutput/2020/output/Quantity/http%3A%2F%2Flib.terminusdb.com%2Fnuclear%2FUnit%2FBLAH+5",
		  "@type": "Quantity",
		  "quantity": 5,
		  "unit": "Unit/BLAH"
		},
		"year": "2020"
	  }
	],
	"reactors": [
	  "PowerReactor/PR2",
	  "PowerReactor/PR1"
	],
	"url": "https://react-select.com/home"
  }


  export const NUCLEAR_SCHEMA ={
	"http://lib.terminusdb.com/nuclear#NuclearPowerPlant": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	   "url": "xsd:string",
	   "location": "GeoCoordinate",
	  "reactors": {
		"@class": [
		  "ExperimentalReactor",
		  "PowerReactor",
		  "ResearchReactor"
		],
		"@type": "Optional"
	  }
	},
	"http://lib.terminusdb.com/nuclear#GeoCoordinate": {
	  "@key": {
		"@fields": [
		  "latitude",
		  "longitude"
		],
		"@type": "Lexical"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "latitude": "xsd:decimal",
	  "longitude": "xsd:decimal"
	},
	"http://lib.terminusdb.com/nuclear#PowerReactor": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "capacity": {
		"@class": {
		  "@class": "Quantity",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  /*"coolant": {
		"@class": "Substance",
		"@type": "Optional"
	  },
	  "moderator": {
		"@class": "Substance",
		"@type": "Optional"
	  },*/
	  "pr_name": "xsd:string",
	  "type": {
		"@class": {
		  "@id": "ReactorType",
		  "@type": "Enum",
		  "@values": [
			"BWR",
			"PWR",
			"HTGR",
			"AGR",
			"CANDU",
			"MSR",
			"SFR",
			"LFR"
		  ]
		},
		"@type": "Optional"
	  }
	},
	"http://lib.terminusdb.com/nuclear#Quantity": {
	  "@key": {
		"@fields": [
		  "unit",
		  "quantity"
		],
		"@type": "Lexical"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "quantity": "xsd:decimal",
	  "unit": "Unit"
	},
	"http://lib.terminusdb.com/nuclear#ExperimentalReactor": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "er_name": "xsd:string",
	  "type": {
		"@class": {
		  "@id": "ReactorType",
		  "@type": "Enum",
		  "@values": [
			"BWR",
			"PWR",
			"HTGR",
			"AGR",
			"CANDU",
			"MSR",
			"SFR",
			"LFR"
		  ]
		},
		"@type": "Optional"
	  }
	},
	"http://lib.terminusdb.com/nuclear#ResearchReactor": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "rr_name": "xsd:string",
	  "type": {
		"@class": {
		  "@id": "ReactorType",
		  "@type": "Enum",
		  "@values": [
			"BWR",
			"PWR",
			"HTGR",
			"AGR",
			"CANDU",
			"MSR",
			"SFR",
			"LFR"
		  ]
		},
		"@type": "Optional"
	  }
	},
  }


export const NUCLEAR_FORM_DATA = {
	"@id":"NuclearPowerPlant/NEW",
	"@type":"NuclearPowerPlant",
	"capacity":{
	   "@id":"NuclearPowerPlant/NEW/capacity/Quantity/http%3A%2F%2Flib.terminusdb.com%2Fnuclear%2FUnit%2FBLAH+21",
	   "@type":"Quantity",
	   "quantity":21,
	   "unit":"Unit/BLAH"
	},
	"country":"Country/IRELAND",
	"gppd_idnr":"asdasd",
	"location":{
	   "@id":"NuclearPowerPlant/NEW/location/GeoCoordinate/4+5",
	   "@type":"GeoCoordinate",
	   "latitude":4,
	   "longitude":5
	},
	"name":"NEW",
	"output":[
	   {
		  "@id":"NuclearPowerPlant/NEW/output/AnnualOutput/2018",
		  "@type":"AnnualOutput",
		  "output":{
			 "@id":"NuclearPowerPlant/NEW/output/NuclearPowerPlant/NEW/output/AnnualOutput/2018/output/Quantity/http%3A%2F%2Flib.terminusdb.com%2Fnuclear%2FUnit%2FBLAH+2",
			 "@type":"Quantity",
			 "quantity":2,
			 "unit":"Unit/BLAH"
		  },
		  "year":"2018"
	   }
	],
	"reactors":
	   "ResearchReactor/NEW"
	,
	"url":"https://react-select.com/home"
 }




export const SESHAT_SCHEMA_FULL = {
	"http://lib.seshatdatabank.info/schema#AdministrativeLevels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#AlternativeNames": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Articles": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Atlatl": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#BattleAxes": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Breastplates": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Bridges": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Bronze": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#BureaucracyCharacteristics": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "examination_system": {
		"@class": {
		  "@class": "ExaminationSystem",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "full-time_bureaucrats": {
		"@class": {
		  "@class": "Full-TimeBureaucrats",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "merit_promotion": {
		"@class": {
		  "@class": "MeritPromotion",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "specialized_government_buildings": {
		"@class": {
		  "@class": "SpecializedGovernmentBuildings",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Calendar": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Camels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Canals": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Capital": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "CapitalValue",
		  "known": "CapitalValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CapitalEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "CapitalValue",
		  "known": "CapitalValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CapitalValue": {
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
	  "value": "City"
	},
	"http://lib.seshatdatabank.info/schema#Centralization": {
	  "@type": "Enum",
	  "@values": [
		"none",
		"loose",
		"nominal",
		"unitary state",
		"confederated state",
		"nominal allegiance",
		"polity",
		"quasi-polity"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#CentralizationEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "CentralizationValue",
		  "known": "CentralizationValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CentralizationValue": {
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
	  "value": {
		"@id": "Centralization",
		"@type": "Enum",
		"@values": [
		  "none",
		  "loose",
		  "nominal",
		  "unitary state",
		  "confederated state",
		  "nominal allegiance",
		  "polity",
		  "quasi-polity"
		]
	  }
	},
	"http://lib.seshatdatabank.info/schema#Chainmail": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#City": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "alternative_names": {
		"@class": "xsd:string",
		"@type": "Set"
	  },
	  "location": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "name": "xsd:string"
	},
	"http://lib.seshatdatabank.info/schema#ComplexFortifications": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CompositeBow": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ConstraintOnExecutiveByGovernment": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ConstraintOnExecutiveByNon-Government": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Copper": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Couriers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Courts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Crossbow": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Daggers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DateRange": {
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
	"http://lib.seshatdatabank.info/schema#DateRangeEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "DateRangeValue",
		  "known": "DateRangeValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DateRangeValue": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "value": {
		"@class": "DateRange",
		"@subdocument": []
	  }
	},
	"http://lib.seshatdatabank.info/schema#DegreeOfCentralization": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "CentralizationValue",
		  "known": "CentralizationValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DeificationOfRulers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "rulers_are_gods": {
		"@class": {
		  "@class": "RulersAreGods",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "rulers_are_legitimated_by_gods": {
		"@class": {
		  "@class": "RulersAreLegitimatedByGods",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Ditch": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Dogs": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Donkeys": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DrinkingWaterSupplySystems": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Duration": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "DateRangeValue",
		  "known": "DateRangeValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#EarthRamparts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Elephants": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#EliteStatusIsHereditary": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ExaminationSystem": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Fiction": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#FoodStorageSites": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ForeignCoins": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#FormalLegalCode": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#FortifiedCamps": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Full-TimeBureaucrats": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#GeneralPostalService": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#GeneralVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "alternative_names": {
		"@class": {
		  "@class": "AlternativeNames",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "capital": {
		"@class": {
		  "@class": "Capital",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "degree_of_centralization": {
		"@class": {
		  "@class": "DegreeOfCentralization",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "language": {
		"@class": {
		  "@class": "Language",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "original_name": {
		"@class": {
		  "@class": "OriginalName",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "peak_date": {
		"@class": {
		  "@class": "PeakDate",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "preceding_%28quasi%29polity": {
		"@class": {
		  "@class": "Preceding%28Quasi%29Polity",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "relationship_to_preceding_%28quasi%29polity": {
		"@class": {
		  "@class": "RelationshipToPreceding%28Quasi%29Polity",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scale_of_supra-cultural_interaction": {
		"@class": {
		  "@class": "ScaleOfSupra-CulturalInteraction",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "succeeding_%28quasi%29polity": {
		"@class": {
		  "@class": "Succeeding%28Quasi%29Polity",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "supra-polity_relations": {
		"@class": {
		  "@class": "Supra-PolityRelations",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "supracultural_entity": {
		"@class": {
		  "@class": "SupraculturalEntity",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GeoCoordinate": {
	  "@key": {
		"@fields": [
		  "latitude",
		  "longitude"
		],
		"@type": "Lexical"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "latitude": "xsd:decimal",
	  "longitude": "xsd:decimal"
	},
	"http://lib.seshatdatabank.info/schema#GeoMultiCoordinate": {
	  "@key": {
		"@fields": [
		  "coordinates"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "coordinates": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GeoPolygon": {
	  "@key": {
		"@fields": [
		  "polygon"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "polygon": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "List"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GeoPolyline": {
	  "@key": {
		"@fields": [
		  "polyline"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "polyline": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "List"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GunpowderSiegeArtillery": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#HandheldFirearms": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Helmets": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#HierarchicalComplexity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "administrative_levels": {
		"@class": {
		  "@class": "AdministrativeLevels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "military_levels": {
		"@class": {
		  "@class": "MilitaryLevels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "religious_levels": {
		"@class": {
		  "@class": "ReligiousLevels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "settlement_hierarchy": {
		"@class": {
		  "@class": "SettlementHierarchy",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#History": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Horses": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologicalReinforcementOfEquality": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologicalThoughtEquatesElitesAndCommoners": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologicalThoughtEquatesRulersAndCommoners": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologyReinforcesProsociality": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Impeachment": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IndigenousCoins": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Information": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "articles": {
		"@class": {
		  "@class": "Articles",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "calendar": {
		"@class": {
		  "@class": "Calendar",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "couriers": {
		"@class": {
		  "@class": "Couriers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "fiction": {
		"@class": {
		  "@class": "Fiction",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "foreign_coins": {
		"@class": {
		  "@class": "ForeignCoins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "general_postal_service": {
		"@class": {
		  "@class": "GeneralPostalService",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "history": {
		"@class": {
		  "@class": "History",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "indigenous_coins": {
		"@class": {
		  "@class": "IndigenousCoins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "lists_tables_and_classifications": {
		"@class": {
		  "@class": "ListsTablesAndClassifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "mnemonic_devices": {
		"@class": {
		  "@class": "MnemonicDevices",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "non-phonetic_writing": {
		"@class": {
		  "@class": "Non-PhoneticWriting",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "nonwritten_records": {
		"@class": {
		  "@class": "NonwrittenRecords",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "paper_currency": {
		"@class": {
		  "@class": "PaperCurrency",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "philosophy": {
		"@class": {
		  "@class": "Philosophy",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "phonetic_alphabetic_writing": {
		"@class": {
		  "@class": "PhoneticAlphabeticWriting",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "postal_stations": {
		"@class": {
		  "@class": "PostalStations",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "practical_literature": {
		"@class": {
		  "@class": "PracticalLiterature",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "precious_metals": {
		"@class": {
		  "@class": "PreciousMetals",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "religious_literature": {
		"@class": {
		  "@class": "ReligiousLiterature",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "sacred_texts": {
		"@class": {
		  "@class": "SacredTexts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scientific_literature": {
		"@class": {
		  "@class": "ScientificLiterature",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "script": {
		"@class": {
		  "@class": "Script",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "tokens": {
		"@class": {
		  "@class": "Tokens",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "written_records": {
		"@class": {
		  "@class": "WrittenRecords",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#InstitutionalVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "limits_on_power_of_the_chief_executive": {
		"@class": {
		  "@class": "LimitsOnPowerOfTheChiefExecutive",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#IntegerEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IntegerRange": {
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
	"http://lib.seshatdatabank.info/schema#IntegerRangeEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerRangeValue",
		  "known": "IntegerRangeValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IntegerRangeValue": {
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
	  "value": {
		"@class": "IntegerRange",
		"@subdocument": []
	  }
	},
	"http://lib.seshatdatabank.info/schema#IntegerValue": {
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
	  "value": "xsd:integer"
	},
	"http://lib.seshatdatabank.info/schema#Iron": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IrrigationSystems": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Javelins": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Judges": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LaminarArmor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Language": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LargestScaleCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Law": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "courts": {
		"@class": {
		  "@class": "Courts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "formal_legal_code": {
		"@class": {
		  "@class": "FormalLegalCode",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "judges": {
		"@class": {
		  "@class": "Judges",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "professional_lawyers": {
		"@class": {
		  "@class": "ProfessionalLawyers",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#LeatherCloth": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LimbProtection": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LimitsOnPowerOfTheChiefExecutive": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "constraint_on_executive_by_government": {
		"@class": {
		  "@class": "ConstraintOnExecutiveByGovernment",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "constraint_on_executive_by_non-government": {
		"@class": {
		  "@class": "ConstraintOnExecutiveByNon-Government",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "impeachment": {
		"@class": {
		  "@class": "Impeachment",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#ListsTablesAndClassifications": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LongWalls": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Markets": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MerchantShipsPressedIntoService": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MeritPromotion": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MilitaryLevels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MilitaryTechnologies": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "atlatl": {
		"@class": {
		  "@class": "Atlatl",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "battle_axes": {
		"@class": {
		  "@class": "BattleAxes",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "breastplates": {
		"@class": {
		  "@class": "Breastplates",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "bronze": {
		"@class": {
		  "@class": "Bronze",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "camels": {
		"@class": {
		  "@class": "Camels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "chainmail": {
		"@class": {
		  "@class": "Chainmail",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "complex_fortifications": {
		"@class": {
		  "@class": "ComplexFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "composite_bow": {
		"@class": {
		  "@class": "CompositeBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "copper": {
		"@class": {
		  "@class": "Copper",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "crossbow": {
		"@class": {
		  "@class": "Crossbow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "daggers": {
		"@class": {
		  "@class": "Daggers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ditch": {
		"@class": {
		  "@class": "Ditch",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "dogs": {
		"@class": {
		  "@class": "Dogs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "donkeys": {
		"@class": {
		  "@class": "Donkeys",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "earth_ramparts": {
		"@class": {
		  "@class": "EarthRamparts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "elephants": {
		"@class": {
		  "@class": "Elephants",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "fortified_camps": {
		"@class": {
		  "@class": "FortifiedCamps",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "gunpowder_siege_artillery": {
		"@class": {
		  "@class": "GunpowderSiegeArtillery",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "handheld_firearms": {
		"@class": {
		  "@class": "HandheldFirearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "helmets": {
		"@class": {
		  "@class": "Helmets",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "horses": {
		"@class": {
		  "@class": "Horses",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "iron": {
		"@class": {
		  "@class": "Iron",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "javelins": {
		"@class": {
		  "@class": "Javelins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "laminar_armor": {
		"@class": {
		  "@class": "LaminarArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "leather_cloth": {
		"@class": {
		  "@class": "LeatherCloth",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "limb_protection": {
		"@class": {
		  "@class": "LimbProtection",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "long_walls": {
		"@class": {
		  "@class": "LongWalls",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "merchant_ships_pressed_into_service": {
		"@class": {
		  "@class": "MerchantShipsPressedIntoService",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moat": {
		"@class": {
		  "@class": "Moat",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "modern_fortifications": {
		"@class": {
		  "@class": "ModernFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "plate_armor": {
		"@class": {
		  "@class": "PlateArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "polearms": {
		"@class": {
		  "@class": "Polearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scaled_armor": {
		"@class": {
		  "@class": "ScaledArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "self_bow": {
		"@class": {
		  "@class": "SelfBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "settlements_in_a_defensive_position": {
		"@class": {
		  "@class": "SettlementsInADefensivePosition",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "shields": {
		"@class": {
		  "@class": "Shields",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "sling_siege_engines": {
		"@class": {
		  "@class": "SlingSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "slings": {
		"@class": {
		  "@class": "Slings",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "small_vessels_%28canoes_etc%29": {
		"@class": {
		  "@class": "SmallVessels%28CanoesEtc%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "spears": {
		"@class": {
		  "@class": "Spears",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "specialized_military_vessels": {
		"@class": {
		  "@class": "SpecializedMilitaryVessels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "steel": {
		"@class": {
		  "@class": "Steel",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28non-mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Non-Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "swords": {
		"@class": {
		  "@class": "Swords",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "tension_siege_engines": {
		"@class": {
		  "@class": "TensionSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "war_clubs": {
		"@class": {
		  "@class": "WarClubs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "wood_bark_etc": {
		"@class": {
		  "@class": "WoodBarkEtc",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "wooden_palisades": {
		"@class": {
		  "@class": "WoodenPalisades",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MinesOrQuarries": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MnemonicDevices": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Moat": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ModernFortifications": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralConcernIsPrimary": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementInAfterlife": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementInThisLife": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementIsAgentic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementIsCertain": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementIsTargeted": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementOfRulers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingNormsAreBroad": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingReligionAdoptedByCommoners": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingReligionAdoptedByElites": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingSupernaturalPowers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "moral_concern_is_primary": {
		"@class": {
		  "@class": "MoralConcernIsPrimary",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_in_afterlife": {
		"@class": {
		  "@class": "MoralizingEnforcementInAfterlife",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_in_this_life": {
		"@class": {
		  "@class": "MoralizingEnforcementInThisLife",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_is_agentic": {
		"@class": {
		  "@class": "MoralizingEnforcementIsAgentic",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_is_certain": {
		"@class": {
		  "@class": "MoralizingEnforcementIsCertain",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_is_targeted": {
		"@class": {
		  "@class": "MoralizingEnforcementIsTargeted",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_of_rulers": {
		"@class": {
		  "@class": "MoralizingEnforcementOfRulers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_norms_are_broad": {
		"@class": {
		  "@class": "MoralizingNormsAreBroad",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_religion_adopted_by_commoners": {
		"@class": {
		  "@class": "MoralizingReligionAdoptedByCommoners",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_religion_adopted_by_elites": {
		"@class": {
		  "@class": "MoralizingReligionAdoptedByElites",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostDysphoricCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostEuphoricCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostFrequentCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostWidespreadCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Non-PhoneticWriting": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#NonwrittenRecords": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#NormativeIdeologicalAspectsOfEquityAndProsociality": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "ideological_reinforcement_of_equality": {
		"@class": {
		  "@class": "IdeologicalReinforcementOfEquality",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ideological_thought_equates_elites_and_commoners": {
		"@class": {
		  "@class": "IdeologicalThoughtEquatesElitesAndCommoners",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ideological_thought_equates_rulers_and_commoners": {
		"@class": {
		  "@class": "IdeologicalThoughtEquatesRulersAndCommoners",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ideology_reinforces_prosociality": {
		"@class": {
		  "@class": "IdeologyReinforcesProsociality",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "production_of_public_goods": {
		"@class": {
		  "@class": "ProductionOfPublicGoods",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#OriginalName": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PaperCurrency": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PeakDate": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "DateRangeValue",
		  "known": "DateRangeValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Philosophy": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PhoneticAlphabeticWriting": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PlateArmor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Polearms": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Polity": {
	  "@type": "Class",
	  "general_variables": {
		"@class": {
		  "@class": "GeneralVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "institutional_variables": {
		"@class": {
		  "@class": "InstitutionalVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "religion_and_normative_ideology": {
		"@class": {
		  "@class": "ReligionAndNormativeIdeology",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "social_complexity_variables": {
		"@class": {
		  "@class": "SocialComplexityVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "social_mobility": {
		"@class": {
		  "@class": "SocialMobility",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "warfare_variables": {
		"@class": {
		  "@class": "WarfareVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#PolityPopulation": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PolityTerritory": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PopulationOfTheLargestSettlement": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Ports": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PostalStations": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PracticalLiterature": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Preceding%28Quasi%29Polity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PrecedingPolity": {
	  "@type": "Class",
	  "polity": "Polity",
	  "preceding": "Polity",
	  "relationship": {
		"@class": {
		  "@id": "PrecedingPolityRelationship",
		  "@type": "Enum",
		  "@values": [
			"continuity",
			"hostile",
			"population migration",
			"replacement",
			"continuity",
			"disruption",
			"vassalage",
			"elite migration",
			"cultural assimilation",
			"indigenous revolt"
		  ]
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#PrecedingPolityRelationship": {
	  "@type": "Enum",
	  "@values": [
		"continuity",
		"hostile",
		"population migration",
		"replacement",
		"continuity",
		"disruption",
		"vassalage",
		"elite migration",
		"cultural assimilation",
		"indigenous revolt"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#PreciousMetals": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Presence": {
	  "@type": "Enum",
	  "@values": [
		"present",
		"absent"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#PresenceEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PresenceValue": {
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
	  "value": {
		"@id": "Presence",
		"@type": "Enum",
		"@values": [
		  "present",
		  "absent"
		]
	  }
	},
	"http://lib.seshatdatabank.info/schema#ProductionOfPublicGoods": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalLawyers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalMilitaryOfficers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalPriesthood": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalSoldiers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Professions": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "professional_military_officers": {
		"@class": {
		  "@class": "ProfessionalMilitaryOfficers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "professional_priesthood": {
		"@class": {
		  "@class": "ProfessionalPriesthood",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "professional_soldiers": {
		"@class": {
		  "@class": "ProfessionalSoldiers",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Ra": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#RelationshipToPreceding%28Quasi%29Polity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ReligionAndNormativeIdeology": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "deification_of_rulers": {
		"@class": {
		  "@class": "DeificationOfRulers",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "moralizing_supernatural_powers": {
		"@class": {
		  "@class": "MoralizingSupernaturalPowers",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "normative_ideological_aspects_of_equity_and_prosociality": {
		"@class": {
		  "@class": "NormativeIdeologicalAspectsOfEquityAndProsociality",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#ReligiousLevels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ReligiousLiterature": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Roads": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#RulersAreGods": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#RulersAreLegitimatedByGods": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SacredTexts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ScaleOfSupra-CulturalInteraction": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ScaledArmor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ScientificLiterature": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Script": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SelfBow": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SettlementHierarchy": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SettlementsInADefensivePosition": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Shields": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SlingSiegeEngines": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Slings": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SmallVessels%28CanoesEtc%29": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SocialComplexityVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "bureaucracy_characteristics": {
		"@class": {
		  "@class": "BureaucracyCharacteristics",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "hierarchical_complexity": {
		"@class": {
		  "@class": "HierarchicalComplexity",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "information": {
		"@class": {
		  "@class": "Information",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "law": {
		"@class": {
		  "@class": "Law",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "professions": {
		"@class": {
		  "@class": "Professions",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "social_scale": {
		"@class": {
		  "@class": "SocialScale",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "specialized_buildings%3A_polity_owned": {
		"@class": {
		  "@class": "SpecializedBuildings%3APolityOwned",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#SocialMobility": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "status": {
		"@class": {
		  "@class": "Status",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#SocialScale": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "polity_population": {
		"@class": {
		  "@class": "PolityPopulation",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "polity_territory": {
		"@class": {
		  "@class": "PolityTerritory",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "population_of_the_largest_settlement": {
		"@class": {
		  "@class": "PopulationOfTheLargestSettlement",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Spears": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SpecializedBuildings%3APolityOwned": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "bridges": {
		"@class": {
		  "@class": "Bridges",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "canals": {
		"@class": {
		  "@class": "Canals",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "drinking_water_supply_systems": {
		"@class": {
		  "@class": "DrinkingWaterSupplySystems",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "food_storage_sites": {
		"@class": {
		  "@class": "FoodStorageSites",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "irrigation_systems": {
		"@class": {
		  "@class": "IrrigationSystems",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "markets": {
		"@class": {
		  "@class": "Markets",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "mines_or_quarries": {
		"@class": {
		  "@class": "MinesOrQuarries",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ports": {
		"@class": {
		  "@class": "Ports",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "roads": {
		"@class": {
		  "@class": "Roads",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#SpecializedGovernmentBuildings": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SpecializedMilitaryVessels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Status": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "elite_status_is_hereditary": {
		"@class": {
		  "@class": "EliteStatusIsHereditary",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Steel": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StoneWalls%28Mortared%29": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StoneWalls%28Non-Mortared%29": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StringEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StringValue": {
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
	"http://lib.seshatdatabank.info/schema#Succeeding%28Quasi%29Polity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Supra-PolityRelations": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "SupraPolityRelationsValue",
		  "known": "SupraPolityRelationsValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SupraPolityRelations": {
	  "@type": "Enum",
	  "@values": [
		"none",
		"alliance",
		"vassalage",
		"nominal",
		"personal union"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#SupraPolityRelationsEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "SupraPolityRelationsValue",
		  "known": "SupraPolityRelationsValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SupraPolityRelationsValue": {
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
	  "value": {
		"@id": "SupraPolityRelations",
		"@type": "Enum",
		"@values": [
		  "none",
		  "alliance",
		  "vassalage",
		  "nominal",
		  "personal union"
		]
	  }
	},
	"http://lib.seshatdatabank.info/schema#SupraculturalEntity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Swords": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#TemporalScope": {
	  "@abstract": [],
	  "@type": "Class",
	  "date_range": {
		"@class": {
		  "@class": "DateRange",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#TensionSiegeEngines": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Tokens": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Value": {
	  "@abstract": [],
	  "@subdocument": [],
	  "@type": "Class",
	  "date_range": {
		"@class": {
		  "@class": "DateRange",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Variable": {
	  "@abstract": [],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WarClubs": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WarfareVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "atlatl": {
		"@class": {
		  "@class": "Atlatl",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "battle_axes": {
		"@class": {
		  "@class": "BattleAxes",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "breastplates": {
		"@class": {
		  "@class": "Breastplates",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "bronze": {
		"@class": {
		  "@class": "Bronze",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "camels": {
		"@class": {
		  "@class": "Camels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "chainmail": {
		"@class": {
		  "@class": "Chainmail",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "complex_fortifications": {
		"@class": {
		  "@class": "ComplexFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "composite_bow": {
		"@class": {
		  "@class": "CompositeBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "copper": {
		"@class": {
		  "@class": "Copper",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "crossbow": {
		"@class": {
		  "@class": "Crossbow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "daggers": {
		"@class": {
		  "@class": "Daggers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "dogs": {
		"@class": {
		  "@class": "Dogs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "donkeys": {
		"@class": {
		  "@class": "Donkeys",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "elephants": {
		"@class": {
		  "@class": "Elephants",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "gunpowder_siege_artillery": {
		"@class": {
		  "@class": "GunpowderSiegeArtillery",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "handheld_firearms": {
		"@class": {
		  "@class": "HandheldFirearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "helmets": {
		"@class": {
		  "@class": "Helmets",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "horses": {
		"@class": {
		  "@class": "Horses",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "iron": {
		"@class": {
		  "@class": "Iron",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "javelins": {
		"@class": {
		  "@class": "Javelins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "laminar_armor": {
		"@class": {
		  "@class": "LaminarArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "largest_scale_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "LargestScaleCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "leather_cloth": {
		"@class": {
		  "@class": "LeatherCloth",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "limb_protection": {
		"@class": {
		  "@class": "LimbProtection",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "long_walls": {
		"@class": {
		  "@class": "LongWalls",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "merchant_ships_pressed_into_service": {
		"@class": {
		  "@class": "MerchantShipsPressedIntoService",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "military_technologies": {
		"@class": {
		  "@class": "MilitaryTechnologies",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "moat": {
		"@class": {
		  "@class": "Moat",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "modern_fortifications": {
		"@class": {
		  "@class": "ModernFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "most_dysphoric_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostDysphoricCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "most_euphoric_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostEuphoricCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "most_frequent_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostFrequentCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "most_widespread_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostWidespreadCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "plate_armor": {
		"@class": {
		  "@class": "PlateArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "polearms": {
		"@class": {
		  "@class": "Polearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scaled_armor": {
		"@class": {
		  "@class": "ScaledArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "self_bow": {
		"@class": {
		  "@class": "SelfBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "settlements_in_a_defensive_position": {
		"@class": {
		  "@class": "SettlementsInADefensivePosition",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "shields": {
		"@class": {
		  "@class": "Shields",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "sling_siege_engines": {
		"@class": {
		  "@class": "SlingSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "slings": {
		"@class": {
		  "@class": "Slings",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "small_vessels_%28canoes_etc%29": {
		"@class": {
		  "@class": "SmallVessels%28CanoesEtc%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "spears": {
		"@class": {
		  "@class": "Spears",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "specialized_military_vessels": {
		"@class": {
		  "@class": "SpecializedMilitaryVessels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "steel": {
		"@class": {
		  "@class": "Steel",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28non-mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Non-Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "swords": {
		"@class": {
		  "@class": "Swords",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "tension_siege_engines": {
		"@class": {
		  "@class": "TensionSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "war_clubs": {
		"@class": {
		  "@class": "WarClubs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "wood_bark_etc": {
		"@class": {
		  "@class": "WoodBarkEtc",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#WoodBarkEtc": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WoodenPalisades": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WrittenRecords": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	}
  }

  export const SESHAT_SCHEMA_FULL_REPLACED_TEST = {
	"http://lib.seshatdatabank.info/schema#AdministrativeLevels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#AlternativeNames": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Articles": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Atlatl": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#BattleAxes": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Breastplates": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Bridges": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Bronze": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#BureaucracyCharacteristics": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "examination_system": {
		"@class": {
		  "@class": "ExaminationSystem",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "full-time_bureaucrats": {
		"@class": {
		  "@class": "Full-TimeBureaucrats",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "merit_promotion": {
		"@class": {
		  "@class": "MeritPromotion",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "specialized_government_buildings": {
		"@class": {
		  "@class": "SpecializedGovernmentBuildings",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Calendar": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Camels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Canals": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Capital": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CapitalEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CapitalValue": {
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
	  "value": "City"
	},
	"http://lib.seshatdatabank.info/schema#Centralization": {
	  "@type": "Enum",
	  "@values": [
		"none",
		"loose",
		"nominal",
		"unitary state",
		"confederated state",
		"nominal allegiance",
		"polity",
		"quasi-polity"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#CentralizationEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CentralizationValue": {
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
	  "value": {
		"@id": "Centralization",
		"@type": "Enum",
		"@values": [
		  "none",
		  "loose",
		  "nominal",
		  "unitary state",
		  "confederated state",
		  "nominal allegiance",
		  "polity",
		  "quasi-polity"
		]
	  }
	},
	"http://lib.seshatdatabank.info/schema#Chainmail": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#City": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "alternative_names": {
		"@class": "xsd:string",
		"@type": "Set"
	  },
	  "location": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "name": "xsd:string"
	},
	"http://lib.seshatdatabank.info/schema#ComplexFortifications": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CompositeBow": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ConstraintOnExecutiveByGovernment": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ConstraintOnExecutiveByNon-Government": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Copper": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Couriers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Courts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Crossbow": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Daggers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DateRange": {
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
	"http://lib.seshatdatabank.info/schema#DateRangeEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DateRangeValue": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "value": {
		"@class": "DateRange",
		"@subdocument": []
	  }
	},
	"http://lib.seshatdatabank.info/schema#DegreeOfCentralization": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DeificationOfRulers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "rulers_are_gods": {
		"@class": {
		  "@class": "RulersAreGods",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "rulers_are_legitimated_by_gods": {
		"@class": {
		  "@class": "RulersAreLegitimatedByGods",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Ditch": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Dogs": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Donkeys": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DrinkingWaterSupplySystems": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Duration": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#EarthRamparts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Elephants": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#EliteStatusIsHereditary": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ExaminationSystem": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Fiction": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#FoodStorageSites": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ForeignCoins": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#FormalLegalCode": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#FortifiedCamps": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Full-TimeBureaucrats": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#GeneralPostalService": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#GeneralVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "alternative_names": {
		"@class": {
		  "@class": "AlternativeNames",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "capital": {
		"@class": {
		  "@class": "Capital",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "degree_of_centralization": {
		"@class": {
		  "@class": "DegreeOfCentralization",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "language": {
		"@class": {
		  "@class": "Language",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "original_name": {
		"@class": {
		  "@class": "OriginalName",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "peak_date": {
		"@class": {
		  "@class": "PeakDate",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "preceding_%28quasi%29polity": {
		"@class": {
		  "@class": "Preceding%28Quasi%29Polity",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "relationship_to_preceding_%28quasi%29polity": {
		"@class": {
		  "@class": "RelationshipToPreceding%28Quasi%29Polity",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scale_of_supra-cultural_interaction": {
		"@class": {
		  "@class": "ScaleOfSupra-CulturalInteraction",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "succeeding_%28quasi%29polity": {
		"@class": {
		  "@class": "Succeeding%28Quasi%29Polity",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "supra-polity_relations": {
		"@class": {
		  "@class": "Supra-PolityRelations",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "supracultural_entity": {
		"@class": {
		  "@class": "SupraculturalEntity",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GeoCoordinate": {
	  "@key": {
		"@fields": [
		  "latitude",
		  "longitude"
		],
		"@type": "Lexical"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "latitude": "xsd:decimal",
	  "longitude": "xsd:decimal"
	},
	"http://lib.seshatdatabank.info/schema#GeoMultiCoordinate": {
	  "@key": {
		"@fields": [
		  "coordinates"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "coordinates": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GeoPolygon": {
	  "@key": {
		"@fields": [
		  "polygon"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "polygon": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "List"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GeoPolyline": {
	  "@key": {
		"@fields": [
		  "polyline"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "polyline": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "List"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GunpowderSiegeArtillery": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#HandheldFirearms": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Helmets": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#HierarchicalComplexity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "administrative_levels": {
		"@class": {
		  "@class": "AdministrativeLevels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "military_levels": {
		"@class": {
		  "@class": "MilitaryLevels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "religious_levels": {
		"@class": {
		  "@class": "ReligiousLevels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "settlement_hierarchy": {
		"@class": {
		  "@class": "SettlementHierarchy",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#History": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Horses": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologicalReinforcementOfEquality": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologicalThoughtEquatesElitesAndCommoners": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologicalThoughtEquatesRulersAndCommoners": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologyReinforcesProsociality": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Impeachment": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IndigenousCoins": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Information": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "articles": {
		"@class": {
		  "@class": "Articles",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "calendar": {
		"@class": {
		  "@class": "Calendar",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "couriers": {
		"@class": {
		  "@class": "Couriers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "fiction": {
		"@class": {
		  "@class": "Fiction",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "foreign_coins": {
		"@class": {
		  "@class": "ForeignCoins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "general_postal_service": {
		"@class": {
		  "@class": "GeneralPostalService",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "history": {
		"@class": {
		  "@class": "History",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "indigenous_coins": {
		"@class": {
		  "@class": "IndigenousCoins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "lists_tables_and_classifications": {
		"@class": {
		  "@class": "ListsTablesAndClassifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "mnemonic_devices": {
		"@class": {
		  "@class": "MnemonicDevices",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "non-phonetic_writing": {
		"@class": {
		  "@class": "Non-PhoneticWriting",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "nonwritten_records": {
		"@class": {
		  "@class": "NonwrittenRecords",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "paper_currency": {
		"@class": {
		  "@class": "PaperCurrency",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "philosophy": {
		"@class": {
		  "@class": "Philosophy",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "phonetic_alphabetic_writing": {
		"@class": {
		  "@class": "PhoneticAlphabeticWriting",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "postal_stations": {
		"@class": {
		  "@class": "PostalStations",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "practical_literature": {
		"@class": {
		  "@class": "PracticalLiterature",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "precious_metals": {
		"@class": {
		  "@class": "PreciousMetals",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "religious_literature": {
		"@class": {
		  "@class": "ReligiousLiterature",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "sacred_texts": {
		"@class": {
		  "@class": "SacredTexts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scientific_literature": {
		"@class": {
		  "@class": "ScientificLiterature",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "script": {
		"@class": {
		  "@class": "Script",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "tokens": {
		"@class": {
		  "@class": "Tokens",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "written_records": {
		"@class": {
		  "@class": "WrittenRecords",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#InstitutionalVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "limits_on_power_of_the_chief_executive": {
		"@class": {
		  "@class": "LimitsOnPowerOfTheChiefExecutive",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#IntegerEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IntegerRange": {
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
	"http://lib.seshatdatabank.info/schema#IntegerRangeEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IntegerRangeValue": {
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
	  "value": {
		"@class": "IntegerRange",
		"@subdocument": []
	  }
	},
	"http://lib.seshatdatabank.info/schema#IntegerValue": {
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
	  "value": "xsd:integer"
	},
	"http://lib.seshatdatabank.info/schema#Iron": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IrrigationSystems": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Javelins": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Judges": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LaminarArmor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Language": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LargestScaleCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Law": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "courts": {
		"@class": {
		  "@class": "Courts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "formal_legal_code": {
		"@class": {
		  "@class": "FormalLegalCode",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "judges": {
		"@class": {
		  "@class": "Judges",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "professional_lawyers": {
		"@class": {
		  "@class": "ProfessionalLawyers",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#LeatherCloth": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LimbProtection": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LimitsOnPowerOfTheChiefExecutive": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "constraint_on_executive_by_government": {
		"@class": {
		  "@class": "ConstraintOnExecutiveByGovernment",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "constraint_on_executive_by_non-government": {
		"@class": {
		  "@class": "ConstraintOnExecutiveByNon-Government",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "impeachment": {
		"@class": {
		  "@class": "Impeachment",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#ListsTablesAndClassifications": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LongWalls": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Markets": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MerchantShipsPressedIntoService": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MeritPromotion": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MilitaryLevels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MilitaryTechnologies": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "atlatl": {
		"@class": {
		  "@class": "Atlatl",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "battle_axes": {
		"@class": {
		  "@class": "BattleAxes",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "breastplates": {
		"@class": {
		  "@class": "Breastplates",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "bronze": {
		"@class": {
		  "@class": "Bronze",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "camels": {
		"@class": {
		  "@class": "Camels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "chainmail": {
		"@class": {
		  "@class": "Chainmail",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "complex_fortifications": {
		"@class": {
		  "@class": "ComplexFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "composite_bow": {
		"@class": {
		  "@class": "CompositeBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "copper": {
		"@class": {
		  "@class": "Copper",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "crossbow": {
		"@class": {
		  "@class": "Crossbow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "daggers": {
		"@class": {
		  "@class": "Daggers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ditch": {
		"@class": {
		  "@class": "Ditch",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "dogs": {
		"@class": {
		  "@class": "Dogs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "donkeys": {
		"@class": {
		  "@class": "Donkeys",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "earth_ramparts": {
		"@class": {
		  "@class": "EarthRamparts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "elephants": {
		"@class": {
		  "@class": "Elephants",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "fortified_camps": {
		"@class": {
		  "@class": "FortifiedCamps",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "gunpowder_siege_artillery": {
		"@class": {
		  "@class": "GunpowderSiegeArtillery",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "handheld_firearms": {
		"@class": {
		  "@class": "HandheldFirearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "helmets": {
		"@class": {
		  "@class": "Helmets",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "horses": {
		"@class": {
		  "@class": "Horses",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "iron": {
		"@class": {
		  "@class": "Iron",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "javelins": {
		"@class": {
		  "@class": "Javelins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "laminar_armor": {
		"@class": {
		  "@class": "LaminarArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "leather_cloth": {
		"@class": {
		  "@class": "LeatherCloth",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "limb_protection": {
		"@class": {
		  "@class": "LimbProtection",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "long_walls": {
		"@class": {
		  "@class": "LongWalls",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "merchant_ships_pressed_into_service": {
		"@class": {
		  "@class": "MerchantShipsPressedIntoService",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moat": {
		"@class": {
		  "@class": "Moat",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "modern_fortifications": {
		"@class": {
		  "@class": "ModernFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "plate_armor": {
		"@class": {
		  "@class": "PlateArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "polearms": {
		"@class": {
		  "@class": "Polearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scaled_armor": {
		"@class": {
		  "@class": "ScaledArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "self_bow": {
		"@class": {
		  "@class": "SelfBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "settlements_in_a_defensive_position": {
		"@class": {
		  "@class": "SettlementsInADefensivePosition",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "shields": {
		"@class": {
		  "@class": "Shields",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "sling_siege_engines": {
		"@class": {
		  "@class": "SlingSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "slings": {
		"@class": {
		  "@class": "Slings",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "small_vessels_%28canoes_etc%29": {
		"@class": {
		  "@class": "SmallVessels%28CanoesEtc%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "spears": {
		"@class": {
		  "@class": "Spears",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "specialized_military_vessels": {
		"@class": {
		  "@class": "SpecializedMilitaryVessels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "steel": {
		"@class": {
		  "@class": "Steel",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28non-mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Non-Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "swords": {
		"@class": {
		  "@class": "Swords",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "tension_siege_engines": {
		"@class": {
		  "@class": "TensionSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "war_clubs": {
		"@class": {
		  "@class": "WarClubs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "wood_bark_etc": {
		"@class": {
		  "@class": "WoodBarkEtc",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "wooden_palisades": {
		"@class": {
		  "@class": "WoodenPalisades",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MinesOrQuarries": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MnemonicDevices": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Moat": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ModernFortifications": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralConcernIsPrimary": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementInAfterlife": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementInThisLife": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementIsAgentic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementIsCertain": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementIsTargeted": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementOfRulers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingNormsAreBroad": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingReligionAdoptedByCommoners": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingReligionAdoptedByElites": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingSupernaturalPowers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "moral_concern_is_primary": {
		"@class": {
		  "@class": "MoralConcernIsPrimary",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_in_afterlife": {
		"@class": {
		  "@class": "MoralizingEnforcementInAfterlife",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_in_this_life": {
		"@class": {
		  "@class": "MoralizingEnforcementInThisLife",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_is_agentic": {
		"@class": {
		  "@class": "MoralizingEnforcementIsAgentic",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_is_certain": {
		"@class": {
		  "@class": "MoralizingEnforcementIsCertain",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_is_targeted": {
		"@class": {
		  "@class": "MoralizingEnforcementIsTargeted",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_of_rulers": {
		"@class": {
		  "@class": "MoralizingEnforcementOfRulers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_norms_are_broad": {
		"@class": {
		  "@class": "MoralizingNormsAreBroad",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_religion_adopted_by_commoners": {
		"@class": {
		  "@class": "MoralizingReligionAdoptedByCommoners",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_religion_adopted_by_elites": {
		"@class": {
		  "@class": "MoralizingReligionAdoptedByElites",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostDysphoricCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostEuphoricCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostFrequentCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostWidespreadCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Non-PhoneticWriting": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#NonwrittenRecords": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#NormativeIdeologicalAspectsOfEquityAndProsociality": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "ideological_reinforcement_of_equality": {
		"@class": {
		  "@class": "IdeologicalReinforcementOfEquality",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ideological_thought_equates_elites_and_commoners": {
		"@class": {
		  "@class": "IdeologicalThoughtEquatesElitesAndCommoners",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ideological_thought_equates_rulers_and_commoners": {
		"@class": {
		  "@class": "IdeologicalThoughtEquatesRulersAndCommoners",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ideology_reinforces_prosociality": {
		"@class": {
		  "@class": "IdeologyReinforcesProsociality",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "production_of_public_goods": {
		"@class": {
		  "@class": "ProductionOfPublicGoods",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#OriginalName": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PaperCurrency": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PeakDate": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Philosophy": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PhoneticAlphabeticWriting": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PlateArmor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Polearms": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Polity": {
	  "@type": "Class",
	  "general_variables": {
		"@class": {
		  "@class": "GeneralVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "institutional_variables": {
		"@class": {
		  "@class": "InstitutionalVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "religion_and_normative_ideology": {
		"@class": {
		  "@class": "ReligionAndNormativeIdeology",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "social_complexity_variables": {
		"@class": {
		  "@class": "SocialComplexityVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "social_mobility": {
		"@class": {
		  "@class": "SocialMobility",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "warfare_variables": {
		"@class": {
		  "@class": "WarfareVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#PolityPopulation": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PolityTerritory": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PopulationOfTheLargestSettlement": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Ports": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PostalStations": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PracticalLiterature": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Preceding%28Quasi%29Polity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PrecedingPolity": {
	  "@type": "Class",
	  "polity": "Polity",
	  "preceding": "Polity",
	  "relationship": {
		"@class": {
		  "@id": "PrecedingPolityRelationship",
		  "@type": "Enum",
		  "@values": [
			"continuity",
			"hostile",
			"population migration",
			"replacement",
			"continuity",
			"disruption",
			"vassalage",
			"elite migration",
			"cultural assimilation",
			"indigenous revolt"
		  ]
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#PrecedingPolityRelationship": {
	  "@type": "Enum",
	  "@values": [
		"continuity",
		"hostile",
		"population migration",
		"replacement",
		"continuity",
		"disruption",
		"vassalage",
		"elite migration",
		"cultural assimilation",
		"indigenous revolt"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#PreciousMetals": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Presence": {
	  "@type": "Enum",
	  "@values": [
		"present",
		"absent"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#PresenceEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PresenceValue": {
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
	  "value": {
		"@id": "Presence",
		"@type": "Enum",
		"@values": [
		  "present",
		  "absent"
		]
	  }
	},
	"http://lib.seshatdatabank.info/schema#ProductionOfPublicGoods": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalLawyers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalMilitaryOfficers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalPriesthood": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalSoldiers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Professions": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "professional_military_officers": {
		"@class": {
		  "@class": "ProfessionalMilitaryOfficers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "professional_priesthood": {
		"@class": {
		  "@class": "ProfessionalPriesthood",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "professional_soldiers": {
		"@class": {
		  "@class": "ProfessionalSoldiers",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Ra": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#RelationshipToPreceding%28Quasi%29Polity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ReligionAndNormativeIdeology": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "deification_of_rulers": {
		"@class": {
		  "@class": "DeificationOfRulers",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "moralizing_supernatural_powers": {
		"@class": {
		  "@class": "MoralizingSupernaturalPowers",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "normative_ideological_aspects_of_equity_and_prosociality": {
		"@class": {
		  "@class": "NormativeIdeologicalAspectsOfEquityAndProsociality",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#ReligiousLevels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ReligiousLiterature": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Roads": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#RulersAreGods": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#RulersAreLegitimatedByGods": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SacredTexts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ScaleOfSupra-CulturalInteraction": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ScaledArmor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ScientificLiterature": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Script": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SelfBow": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SettlementHierarchy": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SettlementsInADefensivePosition": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Shields": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SlingSiegeEngines": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Slings": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SmallVessels%28CanoesEtc%29": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SocialComplexityVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "bureaucracy_characteristics": {
		"@class": {
		  "@class": "BureaucracyCharacteristics",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "hierarchical_complexity": {
		"@class": {
		  "@class": "HierarchicalComplexity",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "information": {
		"@class": {
		  "@class": "Information",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "law": {
		"@class": {
		  "@class": "Law",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "professions": {
		"@class": {
		  "@class": "Professions",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "social_scale": {
		"@class": {
		  "@class": "SocialScale",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "specialized_buildings%3A_polity_owned": {
		"@class": {
		  "@class": "SpecializedBuildings%3APolityOwned",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#SocialMobility": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "status": {
		"@class": {
		  "@class": "Status",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#SocialScale": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "polity_population": {
		"@class": {
		  "@class": "PolityPopulation",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "polity_territory": {
		"@class": {
		  "@class": "PolityTerritory",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "population_of_the_largest_settlement": {
		"@class": {
		  "@class": "PopulationOfTheLargestSettlement",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Spears": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SpecializedBuildings%3APolityOwned": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "bridges": {
		"@class": {
		  "@class": "Bridges",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "canals": {
		"@class": {
		  "@class": "Canals",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "drinking_water_supply_systems": {
		"@class": {
		  "@class": "DrinkingWaterSupplySystems",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "food_storage_sites": {
		"@class": {
		  "@class": "FoodStorageSites",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "irrigation_systems": {
		"@class": {
		  "@class": "IrrigationSystems",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "markets": {
		"@class": {
		  "@class": "Markets",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "mines_or_quarries": {
		"@class": {
		  "@class": "MinesOrQuarries",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ports": {
		"@class": {
		  "@class": "Ports",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "roads": {
		"@class": {
		  "@class": "Roads",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#SpecializedGovernmentBuildings": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SpecializedMilitaryVessels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Status": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "elite_status_is_hereditary": {
		"@class": {
		  "@class": "EliteStatusIsHereditary",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Steel": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StoneWalls%28Mortared%29": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StoneWalls%28Non-Mortared%29": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StringEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StringValue": {
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
	"http://lib.seshatdatabank.info/schema#Succeeding%28Quasi%29Polity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Supra-PolityRelations": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SupraPolityRelations": {
	  "@type": "Enum",
	  "@values": [
		"none",
		"alliance",
		"vassalage",
		"nominal",
		"personal union"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#SupraPolityRelationsEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SupraPolityRelationsValue": {
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
	  "value": {
		"@id": "SupraPolityRelations",
		"@type": "Enum",
		"@values": [
		  "none",
		  "alliance",
		  "vassalage",
		  "nominal",
		  "personal union"
		]
	  }
	},
	"http://lib.seshatdatabank.info/schema#SupraculturalEntity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Swords": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#TemporalScope": {
	  "@abstract": [],
	  "@type": "Class",
	  "date_range": {
		"@class": {
		  "@class": "DateRange",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#TensionSiegeEngines": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Tokens": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Value": {
	  "@abstract": [],
	  "@subdocument": [],
	  "@type": "Class",
	  "date_range": {
		"@class": {
		  "@class": "DateRange",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Variable": {
	  "@abstract": [],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WarClubs": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WarfareVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "atlatl": {
		"@class": {
		  "@class": "Atlatl",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "battle_axes": {
		"@class": {
		  "@class": "BattleAxes",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "breastplates": {
		"@class": {
		  "@class": "Breastplates",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "bronze": {
		"@class": {
		  "@class": "Bronze",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "camels": {
		"@class": {
		  "@class": "Camels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "chainmail": {
		"@class": {
		  "@class": "Chainmail",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "complex_fortifications": {
		"@class": {
		  "@class": "ComplexFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "composite_bow": {
		"@class": {
		  "@class": "CompositeBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "copper": {
		"@class": {
		  "@class": "Copper",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "crossbow": {
		"@class": {
		  "@class": "Crossbow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "daggers": {
		"@class": {
		  "@class": "Daggers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "dogs": {
		"@class": {
		  "@class": "Dogs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "donkeys": {
		"@class": {
		  "@class": "Donkeys",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "elephants": {
		"@class": {
		  "@class": "Elephants",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "gunpowder_siege_artillery": {
		"@class": {
		  "@class": "GunpowderSiegeArtillery",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "handheld_firearms": {
		"@class": {
		  "@class": "HandheldFirearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "helmets": {
		"@class": {
		  "@class": "Helmets",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "horses": {
		"@class": {
		  "@class": "Horses",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "iron": {
		"@class": {
		  "@class": "Iron",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "javelins": {
		"@class": {
		  "@class": "Javelins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "laminar_armor": {
		"@class": {
		  "@class": "LaminarArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "largest_scale_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "LargestScaleCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "leather_cloth": {
		"@class": {
		  "@class": "LeatherCloth",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "limb_protection": {
		"@class": {
		  "@class": "LimbProtection",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "long_walls": {
		"@class": {
		  "@class": "LongWalls",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "merchant_ships_pressed_into_service": {
		"@class": {
		  "@class": "MerchantShipsPressedIntoService",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "military_technologies": {
		"@class": {
		  "@class": "MilitaryTechnologies",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "moat": {
		"@class": {
		  "@class": "Moat",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "modern_fortifications": {
		"@class": {
		  "@class": "ModernFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "most_dysphoric_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostDysphoricCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "most_euphoric_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostEuphoricCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "most_frequent_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostFrequentCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "most_widespread_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostWidespreadCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "plate_armor": {
		"@class": {
		  "@class": "PlateArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "polearms": {
		"@class": {
		  "@class": "Polearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scaled_armor": {
		"@class": {
		  "@class": "ScaledArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "self_bow": {
		"@class": {
		  "@class": "SelfBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "settlements_in_a_defensive_position": {
		"@class": {
		  "@class": "SettlementsInADefensivePosition",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "shields": {
		"@class": {
		  "@class": "Shields",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "sling_siege_engines": {
		"@class": {
		  "@class": "SlingSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "slings": {
		"@class": {
		  "@class": "Slings",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "small_vessels_%28canoes_etc%29": {
		"@class": {
		  "@class": "SmallVessels%28CanoesEtc%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "spears": {
		"@class": {
		  "@class": "Spears",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "specialized_military_vessels": {
		"@class": {
		  "@class": "SpecializedMilitaryVessels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "steel": {
		"@class": {
		  "@class": "Steel",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28non-mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Non-Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "swords": {
		"@class": {
		  "@class": "Swords",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "tension_siege_engines": {
		"@class": {
		  "@class": "TensionSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "war_clubs": {
		"@class": {
		  "@class": "WarClubs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "wood_bark_etc": {
		"@class": {
		  "@class": "WoodBarkEtc",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#WoodBarkEtc": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WoodenPalisades": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WrittenRecords": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "xsd:string",
		  "known": "xsd:string",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	}
  }



export const SESHAT_SCHEMA_SMALL= {
	"http://lib.seshatdatabank.info/schema#Polity": {
	  "@type": "Class",
	  "general_variables": {
		"@class": {
		  "@class": "AlternativeNames",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#AlternativeNames": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StringValue": {
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
		"something": "xsd:string",
		"value": "xsd:string"
	},
	"http://lib.seshatdatabank.info/schema#DateRange": {
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
	"http://lib.seshatdatabank.info/schema#CapitalValue": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "value": "City"
	},
	"http://lib.seshatdatabank.info/schema#City": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "name": "xsd:string"
	}
}

export const SESHAT_SCHEMA_CAPITAL = {
	"http://lib.seshatdatabank.info/schema#Polity": {
	  "@type": "Class",
	  "general_variables": {
		"@class": {
		  "@class": "GeneralVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GeneralVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "capital": {
		"@class": {
		  "@class": "Capital",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Capital": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "CapitalValue",
		  "known": "CapitalValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CapitalValue": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "value": "City"
	},
	"http://lib.seshatdatabank.info/schema#City": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "name": "xsd:string"
	}
}

export const SESHAT_FORM_DATA = {
	"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687",
	"@type": "Polity",
	"general_variables": {
		"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0",
		"@type": "GeneralVariables",
		"alternative_names": [{
			"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a",
			"@type": "AlternativeNames",
			"inferred": {
				"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a/inferred/StringValue/30f5a7097ab3bfa78df534949cc844fe6ae9b2cf3c69a689f1901e27cad436de",
				"@type": "StringValue",
				"date_range": {
					"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a/inferred/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a/inferred/StringValue/30f5a7097ab3bfa78df534949cc844fe6ae9b2cf3c69a689f1901e27cad436de/date_range/DateRange/5daa08807967b8fc4bce3e9738f89b0f626e521984eb5b11ac0b417e88c559e8",
					"@type": "DateRange",
					"from": 67,
					"to": 7
				},
				"value": "magic"
			}
		}]
	},
	"institutional_variables": {
		"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/institutional_variables/InstitutionalVariables/ba17f811ca05f38ce5416ced69456b1971e1d8327b7e326e172883d6fd645c21",
		"@type": "InstitutionalVariables",
		"ra": [{
			"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/institutional_variables/Polity/AfDurrn/institutional_variables/InstitutionalVariables/ba17f811ca05f38ce5416ced69456b1971e1d8327b7e326e172883d6fd645c21/ra/Ra/e8f66fc2dd2aab8debc0d3cace076ecec6d682db91d9941a572876fe3fa536b8",
			"@type": "Ra",
			"known": {
				"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/institutional_variables/Polity/AfDurrn/institutional_variables/InstitutionalVariables/ba17f811ca05f38ce5416ced69456b1971e1d8327b7e326e172883d6fd645c21/ra/Polity/AfDurrn/institutional_variables/Polity/AfDurrn/institutional_variables/InstitutionalVariables/ba17f811ca05f38ce5416ced69456b1971e1d8327b7e326e172883d6fd645c21/ra/Ra/e8f66fc2dd2aab8debc0d3cace076ecec6d682db91d9941a572876fe3fa536b8/known/StringValue/3c486a02c7a590f5da304195f9d3461ed65592feb38f94274bc91a8e51bede71",
				"@type": "StringValue",
				"value": "Eli J. Levine"
			}
		}]
	}
}






export const DEMO_DOCUMENT_TYPE="NuclearPowerPlant"

export const DEMO_FORM_DATA_PERSON= {
	"@id": "Person/Peter%20+terminusdb%3A%2F%2F%2Fdata%2FJob%2Fadmin",
	"@type": "Person",
	"likes": "blue",
	/*"lives_in": {
		"@id": "Person/Peter%20+terminusdb%3A%2F%2F%2Fdata%2FJob%2Fadmin/lives_in/Address/c94a3dde75563839ec3d14ad4f40efaf0aa97995df0f57388483023a5337b63a",
		"@type": "Address",
		"AddressLine1": "5 beverly leinster square ",
		"AddressLine2": "rathmines dublin 6",
		"Country": "Ireland",
		"address_code": "Codes/002"
	},*/
	"name": "Peter ",
	"nicknames": ["Mr P", "Peterrrrrrr"],
	"works_as": "Job/admin"
}

export const DEMO_FORM_DATA={
	"@id":"Person/Kitty%20Jose",
	"@type":"Person",
	"name":"Kitty Jose",
	"watched":"movies/encanto"
 }

export const DEMO_DOCUMENTS = {
	"Job": [
		"Job/CEO",
		"Job/CTO",
		"Job/OPS",
		"Job/Party%20Group"],
	"Codes": [
		"Codes/001",
		"Codes/002",
		"Codes/003",
		"Codes/004",
		"Codes/005"]
}

export const DEMO_SCHEMA_UI = {
  "placeholder": "xsd:dateTime"
}


export const PROFILE_SCHEMA = {
	"terminusdb:///schema#APIKey": {
	  "@documentation": {
		"@comment": "the user api  key to connect with the Cloud Server"
	  },
	  "@key": {
		"@fields": [
		  "api_token"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "api_description": "xsd:string",
	  "api_token": "xsd:string",
	  "key_valid_from": "xsd:dateTime",
	  "key_valid_to": "xsd:dateTime",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  }
	},
	"terminusdb:///schema#Entity": {
	  "@abstract": [],
	  "@type": "Class",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  }
	},
	"terminusdb:///schema#Invitation": {
	  "@key": {
		"@fields": [
		  "invited_by",
		  "email_to",
		  "creation_date"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "creation_date": "xsd:dateTime",
	  "email_to": "xsd:string",
	  "invited_by": "User",
	  "note": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "role": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  }
	},
	"terminusdb:///schema#Organization": {
	  "@key": {
		"@fields": [
		  "organization_name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "child": {
		"@class": "Organization",
		"@type": "Set"
	  },
	  "collaborators": {
		"@class": "User",
		"@type": "Set"
	  },
	  "creation_date": "xsd:dateTime",
	  "expiration_data": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "invitations": {
		"@class": {
		  "@class": "Invitation",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "organization_name": "xsd:string",
	  "owned_by": "User",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  },
	  "stripe_subscription": {
		"@class": {
		  "@class": "StripeSubscription",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Personal": {
	  "@documentation": {
		"@comment": "Personal hello hello"
	  },
	  "@key": {
		"@fields": [
		  "organization_name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "child": {
		"@class": "Organization",
		"@type": "Set"
	  },
	  "collaborators": {
		"@class": "User",
		"@type": "Set"
	  },
	  "creation_date": "xsd:dateTime",
	  "expiration_data": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "invitations": {
		"@class": {
		  "@class": "Invitation",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "organization_name": "xsd:string",
	  "owned_by": "User",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  },
	  "stripe_subscription": {
		"@class": {
		  "@class": "StripeSubscription",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Status": {
	  "@type": "Enum",
	  "@values": [
		"pending",
		"inactive",
		"active",
		"needs_invite",
		"invite_sent",
		"accepted",
		"rejected"
	  ]
	},
	"terminusdb:///schema#StripeSubscription": {
	  "@documentation": {
		"@comment": "Personal hello hello",
		"@properties": {
		  "stripe_id": "hello stripe"
		}
	  },
	  "@key": {
		"@fields": [
		  "stripe_id"
		],
		"@type": "Lexical"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "billing_email": "xsd:string",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  },
	  "stripe_referrer": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "stripe_id": "xsd:string",
	  "stripe_quantity": "xsd:decimal",
	  "stripe_user": "User",
	  "subscription_id": "xsd:string"
	},
	"terminusdb:///schema#Team": {
	  "@key": {
		"@fields": [
		  "organization_name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "child": {
		"@class": "Organization",
		"@type": "Set"
	  },
	  "collaborators": {
		"@class": "User",
		"@type": "Set"
	  },
	  "creation_date": "xsd:dateTime",
	  "expiration_data": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "invitations": {
		"@class": {
		  "@class": "Invitation",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "organization_name": "xsd:string",
	  "owned_by": "User",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  },
	  "stripe_subscription": {
		"@class": {
		  "@class": "StripeSubscription",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#User": {
	  "@key": {
		"@fields": [
		  "user_id"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "api_key": {
		"@class": {
		  "@class": "APIKey",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "company": "xsd:string",
	  "email": "xsd:string",
	  "first_name": "xsd:string",
	  "last_name": "xsd:string",
	  "picture": "xsd:string",
	  "registration_date": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  },
	  "user_id": "xsd:string"
	}
}

export const PROFILE_FORM_DATA_SIMPle = {
	"@id":"Organization/MENO",
	"@type":"Organization",
	"collaborators":[
	   "User/BLUEME"
	],
	"creation_date":"2011-01-01T01:00:37Z",
	"organization_name":"MENO",
	"owned_by":"User/WHO",
	"status":"active"
 }

 export const PROFILE_FORM_DATA= {
	"@id": "User/PETERPETER",
	"@type": "User",
	"api_key": [{
		"@id": "User/PETERPETER/api_key/APIKey/5e50f405ace6cbdf17379f4b9f2b0c9f4144c5e380ea0b9298cb02ebd8ffe511",
		"@type": "APIKey",
		"api_description": "mykey",
		"api_token": "mykey",
		"key_valid_from": "2011-01-01T01:00:37Z",
		"key_valid_to": "2011-01-01T01:00:37Z",
		"status": "active"
	}],
	"company": "PETER",
	"email": "kitty@terminusdb.com",
	"first_name": "Kitty",
	"last_name": "Jose",
	"picture": "PETER",
	"status": "pending",
	"user_id": "PETERPETER"
}
export const PROFILE_DEMO_DOCUMENTS = {
	"User": [
		"User/WHO",
		"User/MOO"],
	"Organization": [
		"Organization/001",
		"Organization/002",
		"Organization/003",
		"Organization/004"],
	"City": [
		"City/001",
		"City/002",
		"City/003"
	]
}

