
export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"


export const CURRENT = {
	"terminusdb:///schema#Address": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "city": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "coordinate": {
		"@class": {
		  "@class": "Coordinate",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "country": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "coutry": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "geocode_accuracy": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "metro_area": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "post_code": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  },
	  "state": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "stress_address": "xsd:string"
	},
	"terminusdb:///schema#ContactCounts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "num_of_it_contacts": "xsd:integer",
	  "num_of_sales_contacts": "xsd:integer",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#Coordinate": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "latitude": "xsd:decimal",
	  "longtitude": "xsd:decimal"
	},
	"terminusdb:///schema#Currency": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "type": {
		"@id": "CurrencyType",
		"@type": "Enum",
		"@values": [
		  "hkd",
		  "usd",
		  "eur",
		  "gbp"
		]
	  },
	  "value": "xsd:decimal"
	},
	"terminusdb:///schema#CurrencyType": {
	  "@type": "Enum",
	  "@values": [
		"hkd",
		"usd",
		"eur",
		"gbp"
	  ]
	},
	"terminusdb:///schema#Domain": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  },
	  "url": "xsd:string"
	},
	"terminusdb:///schema#EmployeeCount": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "employee_count_band": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "max": {
		"@class": "xsd:integer",
		"@type": "Optional"
	  },
	  "min": {
		"@class": "xsd:integer",
		"@type": "Optional"
	  },
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  },
	  "value": "xsd:integer"
	},
	"terminusdb:///schema#Industry": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "industry_code": "xsd:string",
	  "industry_code_desc": "xsd:string",
	  "industry_code_type": "xsd:string",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#IsPublic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "is_public": "xsd:boolean",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#Location": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "address": {
		"@class": {
		  "@class": "Address",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "contact_counts": {
		"@class": {
		  "@class": "ContactCounts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "location_type": {
		"@class": {
		  "@class": "LocationType",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "phone_num": {
		"@class": {
		  "@class": "PhoneNumber",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"terminusdb:///schema#LocationType": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  },
	  "value": {
		"@id": "LocationTypeValue",
		"@type": "Enum",
		"@values": [
		  "hq",
		  "decision_making_location",
		  "branch"
		]
	  }
	},
	"terminusdb:///schema#LocationTypeValue": {
	  "@type": "Enum",
	  "@values": [
		"hq",
		"decision_making_location",
		"branch"
	  ]
	},
	"terminusdb:///schema#Name": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "name": "xsd:string",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#Organization": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "domain": {
		"@class": {
		  "@class": "Domain",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "employee_count": {
		"@class": {
		  "@class": "EmployeeCount",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "industry": {
		"@class": {
		  "@class": "Industry",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "location": {
		"@class": "Location",
		"@type": "Set"
	  },
	  "name": {
		"@class": {
		  "@class": "Name",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "parent": {
		"@class": "Organization",
		"@type": "Set"
	  },
	  "public": {
		"@class": {
		  "@class": "IsPublic",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "revenue": {
		"@class": {
		  "@class": "Revenue",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"terminusdb:///schema#PhoneNumber": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "phone_num": "xsd:string",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#Revenue": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "max": {
		"@class": {
		  "@class": "Currency",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "min": {
		"@class": {
		  "@class": "Currency",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "revenue_band": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  },
	  "value": {
		"@class": "Currency",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#Source": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "file": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "name": "xsd:string"
	},
	"terminusdb:///schema#Sourced": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#TemporalScoping": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  }
	}
  }

export const CURRENT_DATA = {
	"@id":"Location/0254518b6cd853e561e63aa1e43ced36fd2193b2f986240668e41cb1314567fc",
	"@type":"Location",
	"address":[
	   {
		  "@id":"Location/0254518b6cd853e561e63aa1e43ced36fd2193b2f986240668e41cb1314567fc/address/Address/9663a966e413cd8610ceba0d2050d0cf2268f3ec221604b864224514d308b724",
		  "@type":"Address",
		  "city":"SAINT-OUEN",
		  "country":"France",
		  "date_from":"2022-02-10T13:17:11.153464Z",
		  "date_to":"2022-02-10T13:17:11.153464Z",
		  "post_code":"93400",
		  "source":{
			 "@id":"Location/0254518b6cd853e561e63aa1e43ced36fd2193b2f986240668e41cb1314567fc/address/Location/0254518b6cd853e561e63aa1e43ced36fd2193b2f986240668e41cb1314567fc/address/Address/9663a966e413cd8610ceba0d2050d0cf2268f3ec221604b864224514d308b724/source/Source/4facdf2ca15692ac1463ef14237f8327109b3b6f36c4b7332e048518aadffe88",
			 "@type":"Source",
			 "name":"../stockopedia_data.csv"
		  },
		  "stress_address":"48 rue Albert Dhalenne"
	   }
	]
 }

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
		"@type": "Set"
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
	  //"@subdocument": [],
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
	   ["ResearchReactor/NEW", "ExperimentalReactor/NEW"]
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

export const SESHAT_TEST_FORM_DATA={
	   "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7",
	   "@type":"Polity",
	   "general_variables":{
		  "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9",
		  "@type":"GeneralVariables",
		  "alternative_names":[
			 {
				"@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/alternative_names/AlternativeNames/4aadbbecee6ee577f9a394ecedbbf6407d2200e749f98ba254e3c8cf81d35835",
				"@type":"AlternativeNames",
				"known":{
				   "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/alternative_names/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/alternative_names/AlternativeNames/4aadbbecee6ee577f9a394ecedbbf6407d2200e749f98ba254e3c8cf81d35835/known/StringValue/eba154d9d78b874db7f8154ba5698cfe7ce95553c81164d0c1256b8f1d46b695",
				   "@type":"StringValue",
				   "date_range":{
					  "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/alternative_names/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/alternative_names/AlternativeNames/4aadbbecee6ee577f9a394ecedbbf6407d2200e749f98ba254e3c8cf81d35835/known/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/alternative_names/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/alternative_names/AlternativeNames/4aadbbecee6ee577f9a394ecedbbf6407d2200e749f98ba254e3c8cf81d35835/known/StringValue/eba154d9d78b874db7f8154ba5698cfe7ce95553c81164d0c1256b8f1d46b695/date_range/DateRange/69a4c52cd108343d3bacc897166b4ab46ee5e0c171dcb589caa9e77d75087e94",
					  "@type":"DateRange",
					  "from":2019,
					  "to":2018
				   },
				   "value":"KNOWN VAL"
				}
			 }
		  ],
		  "capital":[
			 {
				"@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/capital/Capital/16560cb655a8ae475130d65d5902766ef41995cdef4035cc92fc056e5f823954",
				"@type":"Capital",
				"known":{
				   "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/capital/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/capital/Capital/16560cb655a8ae475130d65d5902766ef41995cdef4035cc92fc056e5f823954/known/CapitalValue/294451adef0a5b6a5afb6cfa8b3c76cf8d4cd790956aa1400c3f5598b116ca0c",
				   "@type":"CapitalValue",
				   "value":"City/Tokyo"
				}
			 }
		  ],
		  "degree_of_centralization":[
			 {
				"@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/degree_of_centralization/DegreeOfCentralization/bbf39a2d8452ca78a928f92bd65ce58f6120385f8e58005f6607edb78dfa37d2",
				"@type":"DegreeOfCentralization"
			 }
		  ],
		  "duration":[
			 {
				"@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/duration/Duration/81b196dd4bd3bbfb0155b6ea2c9939f5fcab51d504841d2720fcd85a1446fa32",
				"@type":"Duration"
			 }
		  ]
	   },
	   "institutional_variables":{
		  "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/institutional_variables/InstitutionalVariables/6f9f623f9066d353672180e75501445c4702cf5398b3427548cecb4cd4c3d5ec",
		  "@type":"InstitutionalVariables",
		  "limits_on_power_of_the_chief_executive":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/institutional_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/institutional_variables/InstitutionalVariables/6f9f623f9066d353672180e75501445c4702cf5398b3427548cecb4cd4c3d5ec/limits_on_power_of_the_chief_executive/LimitsOnPowerOfTheChiefExecutive/93221d896da7308a76a598fc8955d2d2b6cb583d719a5fabc3a08f4ccb64b4ec",
			 "@type":"LimitsOnPowerOfTheChiefExecutive"
		  }
	   },
	   "religion_and_normative_ideology":{
		  "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/religion_and_normative_ideology/ReligionAndNormativeIdeology/4385e035e5dd9bcafa9df44f682c39eedb5be7b03315dc8f8aca8deadad81253",
		  "@type":"ReligionAndNormativeIdeology",
		  "deification_of_rulers":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/religion_and_normative_ideology/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/religion_and_normative_ideology/ReligionAndNormativeIdeology/4385e035e5dd9bcafa9df44f682c39eedb5be7b03315dc8f8aca8deadad81253/deification_of_rulers/DeificationOfRulers/3b570ff14ae63d9dbaf1ea70ef23cf120d4ddaf7d6cb04c8b4a27d7ab6d34b06",
			 "@type":"DeificationOfRulers"
		  },
		  "moralizing_supernatural_powers":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/religion_and_normative_ideology/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/religion_and_normative_ideology/ReligionAndNormativeIdeology/4385e035e5dd9bcafa9df44f682c39eedb5be7b03315dc8f8aca8deadad81253/moralizing_supernatural_powers/MoralizingSupernaturalPowers/7e0f8a4861623fe3d570f50cbdcdf431006cd1ae98143adb1278ac2985dee45a",
			 "@type":"MoralizingSupernaturalPowers"
		  },
		  "normative_ideological_aspects_of_equity_and_prosociality":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/religion_and_normative_ideology/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/religion_and_normative_ideology/ReligionAndNormativeIdeology/4385e035e5dd9bcafa9df44f682c39eedb5be7b03315dc8f8aca8deadad81253/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/adefe7fcca9f695af2f1b40a5ac7b2b6146f83cb95cfd1d629bb92a4efb25233",
			 "@type":"NormativeIdeologicalAspectsOfEquityAndProsociality"
		  }
	   },
	   "social_complexity_variables":{
		  "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/SocialComplexityVariables/5ab30a605faae054e4f8ce7a0657a28ec026a6694ceff41d8d26bcbcedcea60e",
		  "@type":"SocialComplexityVariables",
		  "bureaucracy_characteristics":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/SocialComplexityVariables/5ab30a605faae054e4f8ce7a0657a28ec026a6694ceff41d8d26bcbcedcea60e/bureaucracy_characteristics/BureaucracyCharacteristics/36506cb97679203ea100eeaa9bfa06236276ad8992a63c940e397e48b432169e",
			 "@type":"BureaucracyCharacteristics"
		  },
		  "hierarchical_complexity":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/SocialComplexityVariables/5ab30a605faae054e4f8ce7a0657a28ec026a6694ceff41d8d26bcbcedcea60e/hierarchical_complexity/HierarchicalComplexity/3d74f2701abea43ff7d737d6f0c2d2f83c07a194061033843197cd7992c0133b",
			 "@type":"HierarchicalComplexity"
		  },
		  "information":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/SocialComplexityVariables/5ab30a605faae054e4f8ce7a0657a28ec026a6694ceff41d8d26bcbcedcea60e/information/Information/5c565314103637b8fd677de13be73ce5e5ae466d74089fc7642da08440932cd0",
			 "@type":"Information"
		  },
		  "law":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/SocialComplexityVariables/5ab30a605faae054e4f8ce7a0657a28ec026a6694ceff41d8d26bcbcedcea60e/law/Law/5afb0e8b0ce2136b668635af637570a1fdffebc74c8f874ff8c292e0cf4df17d",
			 "@type":"Law"
		  },
		  "professions":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/SocialComplexityVariables/5ab30a605faae054e4f8ce7a0657a28ec026a6694ceff41d8d26bcbcedcea60e/professions/Professions/1fa541c45557b607f0a5430695d132e12a62bcbd74d8a555a63dfd8ff30c8dca",
			 "@type":"Professions"
		  },
		  "social_scale":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/SocialComplexityVariables/5ab30a605faae054e4f8ce7a0657a28ec026a6694ceff41d8d26bcbcedcea60e/social_scale/SocialScale/0a8e5e94ffb5a6d1bc760c4a9193b2e3fb6cedbf1ef483565d54770c65931e10",
			 "@type":"SocialScale"
		  },
		  "specialized_buildings%3A_polity_owned":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_complexity_variables/SocialComplexityVariables/5ab30a605faae054e4f8ce7a0657a28ec026a6694ceff41d8d26bcbcedcea60e/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/283740f800ed0245308e7ba6eb1ca5046d5ce9a6a82315e7aea5ff423672d3fe",
			 "@type":"SpecializedBuildings%3APolityOwned"
		  }
	   },
	   "social_mobility":{
		  "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_mobility/SocialMobility/805b4e148f94d0f58d51b6f9254f84a83580db1d9389328c27f86df7459500f8",
		  "@type":"SocialMobility",
		  "status":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_mobility/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/social_mobility/SocialMobility/805b4e148f94d0f58d51b6f9254f84a83580db1d9389328c27f86df7459500f8/status/Status/d3aa6dde8e76977387c2903fd525f47b540df6db0f98be0b4802068ba3936393",
			 "@type":"Status"
		  }
	   },
	   "warfare_variables":{
		  "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101",
		  "@type":"WarfareVariables",
		  "atlatl":[
			 {
				"@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/atlatl/Atlatl/90b571248bc2590386a4d72802aefd91c5cee3da83caf1bb5c36f1e7a1ce2180",
				"@type":"Atlatl",
				"inferred":{
				   "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/atlatl/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/atlatl/Atlatl/90b571248bc2590386a4d72802aefd91c5cee3da83caf1bb5c36f1e7a1ce2180/inferred/PresenceValue/ece4266d8ba2643c324c2e07416456fafb18afdfb37f868c2f4021bc9b53dc16",
				   "@type":"PresenceValue",
				   "date_range":{
					  "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/atlatl/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/atlatl/Atlatl/90b571248bc2590386a4d72802aefd91c5cee3da83caf1bb5c36f1e7a1ce2180/inferred/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/atlatl/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/atlatl/Atlatl/90b571248bc2590386a4d72802aefd91c5cee3da83caf1bb5c36f1e7a1ce2180/inferred/PresenceValue/ece4266d8ba2643c324c2e07416456fafb18afdfb37f868c2f4021bc9b53dc16/date_range/DateRange/cecbd45be0950e87838d1015c427d91490be4f3f228e327902c1de8d5474c98f",
					  "@type":"DateRange",
					  "from":45,
					  "to":7
				   },
				   "value":"present"
				}
			 }
		  ],
		  "bronze":[
			 {
				"@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/bronze/Bronze/7578ba6a9c1989bdf29f0d5fd61c7e9d1f0cdf37d24a3f855f1cc1e151e924f3",
				"@type":"Bronze",
				"known":{
				   "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/bronze/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/bronze/Bronze/7578ba6a9c1989bdf29f0d5fd61c7e9d1f0cdf37d24a3f855f1cc1e151e924f3/known/PresenceValue/be160844bce04db2f7ea712c65cf004fd3028c885e0f18603ce2edb57bfdc76b",
				   "@type":"PresenceValue",
				   "date_range":{
					  "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/bronze/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/bronze/Bronze/7578ba6a9c1989bdf29f0d5fd61c7e9d1f0cdf37d24a3f855f1cc1e151e924f3/known/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/bronze/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/bronze/Bronze/7578ba6a9c1989bdf29f0d5fd61c7e9d1f0cdf37d24a3f855f1cc1e151e924f3/known/PresenceValue/be160844bce04db2f7ea712c65cf004fd3028c885e0f18603ce2edb57bfdc76b/date_range/DateRange/bf409c817dc2045098aecf9de9ddd6299620562b9432680d7ade1148be0a538a",
					  "@type":"DateRange",
					  "from":522,
					  "to":1950
				   },
				   "value":"absent"
				}
			 }
		  ],
		  "camels":[
			 {
				"@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/camels/Camels/4af8be4c6513071801027cc5924642e22c6468e6bfe7c45b41b65d80b43a0e58",
				"@type":"Camels"
			 }
		  ],
		  "largest_scale_collective_ritual_of_the_official_cult":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/largest_scale_collective_ritual_of_the_official_cult/LargestScaleCollectiveRitualOfTheOfficialCult/6b2bbfa5a89c8f16f8ed0d093f7daa015d1539f622058479a9b819b87b98b587",
			 "@type":"LargestScaleCollectiveRitualOfTheOfficialCult"
		  },
		  "military_technologies":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/military_technologies/MilitaryTechnologies/fa7ff66d6ecc1e4d2fbc72e714efe2de559d3b6ef366e3e3517d26de7182c01c",
			 "@type":"MilitaryTechnologies"
		  },
		  "most_dysphoric_collective_ritual_of_the_official_cult":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/most_dysphoric_collective_ritual_of_the_official_cult/MostDysphoricCollectiveRitualOfTheOfficialCult/776b55545f042a325c14a9d97e255b76ae262c2395523751523bdcd4d9287d85",
			 "@type":"MostDysphoricCollectiveRitualOfTheOfficialCult"
		  },
		  "most_euphoric_collective_ritual_of_the_official_cult":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/most_euphoric_collective_ritual_of_the_official_cult/MostEuphoricCollectiveRitualOfTheOfficialCult/bb07a3160814e8656d00499b3f54de7586e5a1a75b021c11074f3caa9680b427",
			 "@type":"MostEuphoricCollectiveRitualOfTheOfficialCult"
		  },
		  "most_frequent_collective_ritual_of_the_official_cult":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/most_frequent_collective_ritual_of_the_official_cult/MostFrequentCollectiveRitualOfTheOfficialCult/925950197ee9038f4294a7623f89f57ef40338995944c564c3b64e42ec6de3a0",
			 "@type":"MostFrequentCollectiveRitualOfTheOfficialCult"
		  },
		  "most_widespread_collective_ritual_of_the_official_cult":{
			 "@id":"Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/warfare_variables/WarfareVariables/56de9363d55ef6bed427d07db3e33abd4b73596ab808133ebb972dfcaf12f101/most_widespread_collective_ritual_of_the_official_cult/MostWidespreadCollectiveRitualOfTheOfficialCult/b1cace2273dcd882ccab6dddef568f72bcf778ecc513d32eaba687297aa72299",
			 "@type":"MostWidespreadCollectiveRitualOfTheOfficialCult"
		  }
	   }
	}

export const SESHAT_FORM_DATA = {
	"@id":"Polity/AfDurrn",
	"@type":"Polity",
	"general_variables":{
	   "@id":"Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88",
	   "@type":"GeneralVariables",
	   "alternative_names":[
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/AlternativeNames/ddf370e067096a0992d24b80e02078a7a9983ba06d3fe1a7c1f6f6b8fb1f958e",
			 "@type":"AlternativeNames",
			 "inferred":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/AlternativeNames/ddf370e067096a0992d24b80e02078a7a9983ba06d3fe1a7c1f6f6b8fb1f958e/known/StringValue/054fdf048a0474a99bf7caf435d12a388e0901f26c59af2f987c68b83ae8d0e0",
				"@type":"StringValue",
				"value":"Last Afghan Empire",
				"date_range": {
					"from": "2022/22/02",
		  			"to": "2026/18/05"
				}
			 }
		  },
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/AlternativeNames/f180e2ed44e144ff594d9fbfef6e85945a94abba30e3a8c8233aee34d4d8fec6",
			 "@type":"AlternativeNames",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/AlternativeNames/f180e2ed44e144ff594d9fbfef6e85945a94abba30e3a8c8233aee34d4d8fec6/known/StringValue/1be33fcf247433bbafa603ff5052fbfbb41d8db504ff64f64c2a469c6819ec1f",
				"@type":"StringValue",
				"value":"Sadozai Kingdom",
				"date_range": {
					"from": "1988/22/02",
		  			"to": "1867/18/05"
				}
			 }
		  },
		  {
			"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5771dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/AlternativeNames/f180e2ed44e144ff594d9fbfef6e85945a94abba30e3a8c8233aee34d4d8fec6",
			"@type":"AlternativeNames",
			"known":{
			   "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5771dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/AlternativeNames/f180e2ed44e144ff594d9fbfef6e85945a94abba30e3a8c8233aee34d4d8fec6/known/StringValue/1be33fcf247433bbafa603ff5052fbfbb41d8db504ff64f64c2a469c6819ec1f",
			   "@type":"StringValue",
			   "value":"Dislney Kingdom",
			   "date_range": {
				   "from": "1990/22/02",
					 "to": "1650/18/05"
			   }
			}
		 },
		 {
			"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5771dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/AlternativeNames/f180e2ed44e144ff594d9fbfef6e85945a94abba30e3a8c8233aee34d4d8fec6",
			"@type":"AlternativeNames",
			"inferred":{
			   "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5771dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/alternative_names/AlternativeNames/f180e2ed44e144ff594d9fbfef6e85945a94abba30e3a8c8233aee34d4d8fec6/known/StringValue/1be33fcf247433bbafa603ff5052fbfbb41d8db504ff64f64c2a469c6819ec1f",
			   "@type":"StringValue",
			   "value":"Pixar Kingdom",
			   "date_range": {
				   "from": "1990/22/02",
					 "to": "1650/18/05"
			   }
			}
		 }
	   ],
	   "capital":[
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/capital/Capital/5f2ef02ee819d1a80b3447b214572ebd61e937330a8d97ad1f2e3747a3ded1dc",
			 "@type":"Capital",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/capital/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/capital/Capital/5f2ef02ee819d1a80b3447b214572ebd61e937330a8d97ad1f2e3747a3ded1dc/known/CapitalValue/a7cdfaef45d3433863c85f2ed1a4f49cf7b49a62fb292a6418a6c2431e1255c9",
				"@type":"CapitalValue",
				"value":"City/Tokyo"
			 }
		  },
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/capital/Capital/a4c8c6dd4378567838953199b857dd1a5e1ceb37df4bc03d2d289d09b05f84a1",
			 "@type":"Capital",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/capital/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/capital/Capital/a4c8c6dd4378567838953199b857dd1a5e1ceb37df4bc03d2d289d09b05f84a1/known/CapitalValue/c7c0716666ca996c13e0a433aa35e0639b4bc4a15fdaa385860ee6b4ddaa999e",
				"@type":"CapitalValue",
				"value":"City/Herat"
			 }
		  },
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/capital/Capital/cb0dcfaf0de1c059a091e26b398cbf8131590265f06c339c97c4980e3751488e",
			 "@type":"Capital",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/capital/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/capital/Capital/cb0dcfaf0de1c059a091e26b398cbf8131590265f06c339c97c4980e3751488e/known/CapitalValue/80bdf87cd5a488c6d0bf6e559e91dc9d844f45e6625af027892e23919b4b13a0",
				"@type":"CapitalValue",
				"value":"City/Kabul"
			 }
		  }
	   ],
	   "degree_of_centralization":[
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/degree_of_centralization/DegreeOfCentralization/b479a71489c1d95a7927f1f9e233e81a5053c72c735cf42514ac1b98cbf5b3c7",
			 "@type":"DegreeOfCentralization",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/degree_of_centralization/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/degree_of_centralization/DegreeOfCentralization/b479a71489c1d95a7927f1f9e233e81a5053c72c735cf42514ac1b98cbf5b3c7/known/CentralizationValue/f5641f09188607153dcfba335948a868438b42e6b1f020c6e75633123c6e5517",
				"@type":"CentralizationValue",
				"value":"loose"
			 }
		  }
	   ],
	   "duration":[
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/duration/Duration/6ca3c30993202556ee4bca0241ab4180eb9d8029053c2c3f5f431a8ff3bcf35c",
			 "@type":"Duration",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/duration/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/duration/Duration/6ca3c30993202556ee4bca0241ab4180eb9d8029053c2c3f5f431a8ff3bcf35c/known/DateRangeValue/7b19fe0e554878cf86de35e63103da86114e361c01055689ae566d3b66b7c3bf",
				"@type":"DateRangeValue",
				"value":{
				   "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/duration/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/duration/Duration/6ca3c30993202556ee4bca0241ab4180eb9d8029053c2c3f5f431a8ff3bcf35c/known/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/duration/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/duration/Duration/6ca3c30993202556ee4bca0241ab4180eb9d8029053c2c3f5f431a8ff3bcf35c/known/DateRangeValue/7b19fe0e554878cf86de35e63103da86114e361c01055689ae566d3b66b7c3bf/value/DateRange/7a9debbd02fd97196c8302208ea2dea16ae3739706a2abec37edb62e36efe448",
				   "@type":"DateRange",
				   "from":1747,
				   "to":1826
				}
			 }
		  }
	   ],
	   "language":[
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/language/Language/aed1b022985625234ced5a660535e0776b134d828d2ab062b79a44ac320b7d37",
			 "@type":"Language",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/language/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/language/Language/aed1b022985625234ced5a660535e0776b134d828d2ab062b79a44ac320b7d37/known/StringValue/47ad64053c419aa38be168022b3eb6167925b64a2ea64ef490e9031d2efbc468",
				"@type":"StringValue",
				"value":"Pashto"
			 }
		  },
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/language/Language/eac3dfccbaed6c3b87cc6e9a9fcd5ab20bae66e08d5249dc962152bd8927afbc",
			 "@type":"Language",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/language/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/language/Language/eac3dfccbaed6c3b87cc6e9a9fcd5ab20bae66e08d5249dc962152bd8927afbc/known/StringValue/1ce08520341e656c0e9a3aaa4c1f7477b24d7d99d419129e58d9145643ee75e8",
				"@type":"StringValue",
				"value":"Persian"
			 }
		  }
	   ],
	   "original_name":[
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/original_name/OriginalName/dd4282f7f5e3557fa20cd13290ae45f099e25f414857071f3c332b31b88e1015",
			 "@type":"OriginalName",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/original_name/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/original_name/OriginalName/dd4282f7f5e3557fa20cd13290ae45f099e25f414857071f3c332b31b88e1015/known/StringValue/8b934bf69a9c1fbe6ff1f8124a9f0e112c56377674e06cf9a03fadcde851790c",
				"@type":"StringValue",
				"value":"Durrani Empire"
			 }
		  }
	   ],
	   "peak_date":[
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/peak_date/PeakDate/e070017590dbc0794d4e17d822afcf1b3c3ff7b1f6ba63a1649f0fbc51a572ce",
			 "@type":"PeakDate",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/peak_date/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/peak_date/PeakDate/e070017590dbc0794d4e17d822afcf1b3c3ff7b1f6ba63a1649f0fbc51a572ce/known/DateRangeValue/d62031a313b34235d53dc6c05b5746eac82e578bc757a37b64b7c3db65ce0301",
				"@type":"DateRangeValue",
				"value":{
				   "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/peak_date/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/peak_date/PeakDate/e070017590dbc0794d4e17d822afcf1b3c3ff7b1f6ba63a1649f0fbc51a572ce/known/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/peak_date/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/peak_date/PeakDate/e070017590dbc0794d4e17d822afcf1b3c3ff7b1f6ba63a1649f0fbc51a572ce/known/DateRangeValue/d62031a313b34235d53dc6c05b5746eac82e578bc757a37b64b7c3db65ce0301/value/DateRange/be7d76a282fe7716e51fa407b199c98d0f69ef09a9719b64e1ab796a23bc2da9",
				   "@type":"DateRange",
				   "from":1761,
				   "to":1761
				}
			 }
		  }
	   ],
	   "ra":[
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/ra/Ra/1284004097c575700ceb9ba59ea38a4968b8d8934cf6e193e1195d01afb967f3",
			 "@type":"Ra",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/ra/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/ra/Ra/1284004097c575700ceb9ba59ea38a4968b8d8934cf6e193e1195d01afb967f3/known/StringValue/2d2dd6486674d43a6cac5a5365c93f0d13a165659a4dd44e4259f584830d96b0",
				"@type":"StringValue",
				"value":"Alice Williams"
			 }
		  },
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/ra/Ra/3dd1e0c445d766bde051fb44a38ee9d4fc932b69bcad18ef1d7c9cfabdbfa5da",
			 "@type":"Ra",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/ra/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/ra/Ra/3dd1e0c445d766bde051fb44a38ee9d4fc932b69bcad18ef1d7c9cfabdbfa5da/known/StringValue/61f268fbccf811d5732f35fbceecb0dfad7aa26c95e62d7b4095e02c726b93f3",
				"@type":"StringValue",
				"value":"Stephen Dean"
			 }
		  }
	   ],
	   "relationship_to_preceding_%28quasi%29polity":[
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/relationship_to_preceding_%28quasi%29polity/RelationshipToPreceding%28Quasi%29Polity/3aa73315021f455d03e3e683928deb033639262d2d08f352d884703d7b9a9604",
			 "@type":"RelationshipToPreceding%28Quasi%29Polity",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/relationship_to_preceding_%28quasi%29polity/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/relationship_to_preceding_%28quasi%29polity/RelationshipToPreceding%28Quasi%29Polity/3aa73315021f455d03e3e683928deb033639262d2d08f352d884703d7b9a9604/known/StringValue/acbeb255ef52a6f9b414336e5924df0286ee5d665230cf79acb6a3a0219ffcf3",
				"@type":"StringValue",
				"value":"continuity"
			 }
		  }
	   ],
	   "supra-polity_relations":[
		  {
			 "@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/supra-polity_relations/Supra-PolityRelations/6a2b64babb40c4d0517bb38b04ad9720484356ce1704c17ae7c8287397918ff9",
			 "@type":"Supra-PolityRelations",
			 "known":{
				"@id":"Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/supra-polity_relations/Polity/AfDurrn/general_variables/Polity/AfDurrn/general_variables/GeneralVariables/5761dff6bea0d725bc26f50c35bf6532c434bf90c7dd4eb7c7cb9f829287fc88/supra-polity_relations/Supra-PolityRelations/6a2b64babb40c4d0517bb38b04ad9720484356ce1704c17ae7c8287397918ff9/known/SupraPolityRelationsValue/77d1a0ab8a667c7b5fb2bb59036aaa9b240e019e143b29c8e5414cb702d06dd3",
				"@type":"SupraPolityRelationsValue",
				"value":"none"
			 }
		  }
	   ]
	},
	"institutional_variables":{
	   "@id":"Polity/AfDurrn/institutional_variables/InstitutionalVariables/ba17f811ca05f38ce5416ced69456b1971e1d8327b7e326e172883d6fd645c21",
	   "@type":"InstitutionalVariables",
	   "ra":[
		  {
			 "@id":"Polity/AfDurrn/institutional_variables/Polity/AfDurrn/institutional_variables/InstitutionalVariables/ba17f811ca05f38ce5416ced69456b1971e1d8327b7e326e172883d6fd645c21/ra/Ra/e8f66fc2dd2aab8debc0d3cace076ecec6d682db91d9941a572876fe3fa536b8",
			 "@type":"Ra",
			 "known":{
				"@id":"Polity/AfDurrn/institutional_variables/Polity/AfDurrn/institutional_variables/InstitutionalVariables/ba17f811ca05f38ce5416ced69456b1971e1d8327b7e326e172883d6fd645c21/ra/Polity/AfDurrn/institutional_variables/Polity/AfDurrn/institutional_variables/InstitutionalVariables/ba17f811ca05f38ce5416ced69456b1971e1d8327b7e326e172883d6fd645c21/ra/Ra/e8f66fc2dd2aab8debc0d3cace076ecec6d682db91d9941a572876fe3fa536b8/known/StringValue/3c486a02c7a590f5da304195f9d3461ed65592feb38f94274bc91a8e51bede71",
				"@type":"StringValue",
				"value":"Eli J. Levine"
			 }
		  }
	   ]
	},
	"religion_and_normative_ideology":{
	   "@id":"Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28",
	   "@type":"ReligionAndNormativeIdeology",
	   "deification_of_rulers":{
		  "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/DeificationOfRulers/167b179f79abab2fa7d301d547ced74f1c0acad263b3eedeb6122b7832654032",
		  "@type":"DeificationOfRulers",
		  "rulers_are_gods":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/DeificationOfRulers/167b179f79abab2fa7d301d547ced74f1c0acad263b3eedeb6122b7832654032/rulers_are_gods/RulersAreGods/dfc3ae27a2800371d5124cd6e946653a080a6ee4540ea7e938fd7b7c439b64f0",
				"@type":"RulersAreGods",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/DeificationOfRulers/167b179f79abab2fa7d301d547ced74f1c0acad263b3eedeb6122b7832654032/rulers_are_gods/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/DeificationOfRulers/167b179f79abab2fa7d301d547ced74f1c0acad263b3eedeb6122b7832654032/rulers_are_gods/RulersAreGods/dfc3ae27a2800371d5124cd6e946653a080a6ee4540ea7e938fd7b7c439b64f0/known/PresenceValue/1bc3fdca7ad985ed460f99f743b2191c6de6a3e78191dd52d522217b573983f8",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "rulers_are_legitimated_by_gods":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/DeificationOfRulers/167b179f79abab2fa7d301d547ced74f1c0acad263b3eedeb6122b7832654032/rulers_are_legitimated_by_gods/RulersAreLegitimatedByGods/9e5aefd6324582bc0774820a9e88670739e6162a633b22feba7c87652041538d",
				"@type":"RulersAreLegitimatedByGods",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/DeificationOfRulers/167b179f79abab2fa7d301d547ced74f1c0acad263b3eedeb6122b7832654032/rulers_are_legitimated_by_gods/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/deification_of_rulers/DeificationOfRulers/167b179f79abab2fa7d301d547ced74f1c0acad263b3eedeb6122b7832654032/rulers_are_legitimated_by_gods/RulersAreLegitimatedByGods/9e5aefd6324582bc0774820a9e88670739e6162a633b22feba7c87652041538d/known/PresenceValue/15ac97105b258174067100e0969f8b34b27747a783b5ef958d1622c8025b6774",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ]
	   },
	   "moralizing_supernatural_powers":{
		  "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db",
		  "@type":"MoralizingSupernaturalPowers",
		  "moral_concern_is_primary":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moral_concern_is_primary/MoralConcernIsPrimary/61a249117182e4e6ad3d5ec66d558d7baddffefad4145362c6a4bdf651ee1250",
				"@type":"MoralConcernIsPrimary",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moral_concern_is_primary/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moral_concern_is_primary/MoralConcernIsPrimary/61a249117182e4e6ad3d5ec66d558d7baddffefad4145362c6a4bdf651ee1250/known/PresenceValue/808fd7faeb1687a0ff577a80fadfc2fd98446155e6f69214f779e5f9aac413f8",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "moralizing_enforcement_in_afterlife":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_in_afterlife/MoralizingEnforcementInAfterlife/0e24dd6d248bbeeacd537711cdb144869cc1b3a68e89a0540e1093221020e9c8",
				"@type":"MoralizingEnforcementInAfterlife",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_in_afterlife/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_in_afterlife/MoralizingEnforcementInAfterlife/0e24dd6d248bbeeacd537711cdb144869cc1b3a68e89a0540e1093221020e9c8/known/PresenceValue/dc76cb0dce7b95acb7056308272ec15ee34d38ca8aecc3824e7f70853189e962",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "moralizing_enforcement_in_this_life":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_in_this_life/MoralizingEnforcementInThisLife/a6128a8f3a4871f1f5490eae5e040330db90ce0e0d55c79714d9b6b0bf16eaaf",
				"@type":"MoralizingEnforcementInThisLife",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_in_this_life/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_in_this_life/MoralizingEnforcementInThisLife/a6128a8f3a4871f1f5490eae5e040330db90ce0e0d55c79714d9b6b0bf16eaaf/known/PresenceValue/91903bd729bd6447438625d33f8ea5fa5e977c0b0ee32d11c0de920b0c430c35",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "moralizing_enforcement_is_agentic":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_is_agentic/MoralizingEnforcementIsAgentic/2888ffafb9810a4a72885044bb8fbd2f5e6990e290fed7716c9f67fc21b05886",
				"@type":"MoralizingEnforcementIsAgentic",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_is_agentic/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_is_agentic/MoralizingEnforcementIsAgentic/2888ffafb9810a4a72885044bb8fbd2f5e6990e290fed7716c9f67fc21b05886/known/PresenceValue/2e19d127cc2093e2d659f0cd4bbf59dc63dbe64f55cfa7391300ae593161f122",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "moralizing_enforcement_is_certain":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_is_certain/MoralizingEnforcementIsCertain/1bc05d298ea0e38f50adabda97742ab90133f836bf442a1a322781bbd6a190f6",
				"@type":"MoralizingEnforcementIsCertain",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_is_certain/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_is_certain/MoralizingEnforcementIsCertain/1bc05d298ea0e38f50adabda97742ab90133f836bf442a1a322781bbd6a190f6/known/PresenceValue/b90aedc761cfedb82576f9343d97e3f44547d7e8b5727c805cacc87be1ef087b",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "moralizing_enforcement_is_targeted":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_is_targeted/MoralizingEnforcementIsTargeted/3051af2000dbc8f67b57961be4d40cffd12fc90b54675c013fde222ce664d0b6",
				"@type":"MoralizingEnforcementIsTargeted",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_is_targeted/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_is_targeted/MoralizingEnforcementIsTargeted/3051af2000dbc8f67b57961be4d40cffd12fc90b54675c013fde222ce664d0b6/known/PresenceValue/8bd3ef3c1a5d763769e01eceafd1e13e329496a5d64b5ba4ebf2e867c7b5898c",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "moralizing_enforcement_of_rulers":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_of_rulers/MoralizingEnforcementOfRulers/06085d80da45ad051df46e9a0c9effc51d2e57e8c82f43f5db08abc34f1daacd",
				"@type":"MoralizingEnforcementOfRulers",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_of_rulers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_enforcement_of_rulers/MoralizingEnforcementOfRulers/06085d80da45ad051df46e9a0c9effc51d2e57e8c82f43f5db08abc34f1daacd/known/PresenceValue/12e678bdf45f733e00d59c1180d66e8de34d009de706eb1f093a8f52fe1c4857",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "moralizing_norms_are_broad":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_norms_are_broad/MoralizingNormsAreBroad/46cb3578f540a00b56ade6f7e11e4bcfa77c915c2da70b9b8f89ddb05ec386e2",
				"@type":"MoralizingNormsAreBroad",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_norms_are_broad/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_norms_are_broad/MoralizingNormsAreBroad/46cb3578f540a00b56ade6f7e11e4bcfa77c915c2da70b9b8f89ddb05ec386e2/known/PresenceValue/4e64bdd5da058039d25b82777626ba5fa79d9deee1708159981c45276a99694b",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "moralizing_religion_adopted_by_commoners":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_religion_adopted_by_commoners/MoralizingReligionAdoptedByCommoners/c29330d469863024274ae2171b896e318636bdcc42292f4719cf63f1476cebbc",
				"@type":"MoralizingReligionAdoptedByCommoners",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_religion_adopted_by_commoners/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_religion_adopted_by_commoners/MoralizingReligionAdoptedByCommoners/c29330d469863024274ae2171b896e318636bdcc42292f4719cf63f1476cebbc/known/PresenceValue/b51850abeae1972487c82142d6c91b8673a71a847907b10a0aacf42d89c4930b",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "moralizing_religion_adopted_by_elites":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_religion_adopted_by_elites/MoralizingReligionAdoptedByElites/5e26cf2b83ec6f7dc6b6d4bf73e65f7eafdbb38681ab7d762f37f7e5fbfbd4cd",
				"@type":"MoralizingReligionAdoptedByElites",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_religion_adopted_by_elites/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/moralizing_supernatural_powers/MoralizingSupernaturalPowers/ea040a870952d4083c8d4b46a3fd3616987e3b3f7010d0f047624335872b29db/moralizing_religion_adopted_by_elites/MoralizingReligionAdoptedByElites/5e26cf2b83ec6f7dc6b6d4bf73e65f7eafdbb38681ab7d762f37f7e5fbfbd4cd/known/PresenceValue/35aa57e1272602726ef9fd46b0dd9ce4529c090913ab7fe5e9d0418daf060e20",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ]
	   },
	   "normative_ideological_aspects_of_equity_and_prosociality":{
		  "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b",
		  "@type":"NormativeIdeologicalAspectsOfEquityAndProsociality",
		  "ideological_reinforcement_of_equality":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_reinforcement_of_equality/IdeologicalReinforcementOfEquality/8587b7006287549ede01500cb17d67fb46c178e16896366491f92b49519b227b",
				"@type":"IdeologicalReinforcementOfEquality",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_reinforcement_of_equality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_reinforcement_of_equality/IdeologicalReinforcementOfEquality/8587b7006287549ede01500cb17d67fb46c178e16896366491f92b49519b227b/known/PresenceValue/f9ff3898f586a133b7ec79149f500894354ee50abd693e7e0dabcf78ec09df0c",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 },
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_reinforcement_of_equality/IdeologicalReinforcementOfEquality/f3756728eae84889d514dc5d2091cc3461c1b12c6c87cb36f87f22330ecae961",
				"@type":"IdeologicalReinforcementOfEquality",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_reinforcement_of_equality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_reinforcement_of_equality/IdeologicalReinforcementOfEquality/f3756728eae84889d514dc5d2091cc3461c1b12c6c87cb36f87f22330ecae961/known/PresenceValue/5744cf295eeb52472d75548d0efa1f61e3666044b1625b80364576a36faebbb5",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "ideological_thought_equates_elites_and_commoners":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_thought_equates_elites_and_commoners/IdeologicalThoughtEquatesElitesAndCommoners/76ce1ab4c5f2c2687fd1f881bd23adf74e50741202a55fce53b4004184687408",
				"@type":"IdeologicalThoughtEquatesElitesAndCommoners",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_thought_equates_elites_and_commoners/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_thought_equates_elites_and_commoners/IdeologicalThoughtEquatesElitesAndCommoners/76ce1ab4c5f2c2687fd1f881bd23adf74e50741202a55fce53b4004184687408/known/PresenceValue/71b5e1e933c8631996629974f2ff2a66de55575f4e7ec8827655a70fc15f2461",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "ideological_thought_equates_rulers_and_commoners":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_thought_equates_rulers_and_commoners/IdeologicalThoughtEquatesRulersAndCommoners/3f9b6d93e2a380c57589f2cebfcb28d407fb24c6f0fdc574944063583d921b05",
				"@type":"IdeologicalThoughtEquatesRulersAndCommoners",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_thought_equates_rulers_and_commoners/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_thought_equates_rulers_and_commoners/IdeologicalThoughtEquatesRulersAndCommoners/3f9b6d93e2a380c57589f2cebfcb28d407fb24c6f0fdc574944063583d921b05/known/PresenceValue/0b7a737edaa2fcb8b10a69f171e8b34338f495012e57a49c02fe721cd1dc3ce8",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 },
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_thought_equates_rulers_and_commoners/IdeologicalThoughtEquatesRulersAndCommoners/77dcc923372f61169654a0811f24de7a1865a566e6a64b26ab1e4f1a2e7bb022",
				"@type":"IdeologicalThoughtEquatesRulersAndCommoners",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_thought_equates_rulers_and_commoners/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideological_thought_equates_rulers_and_commoners/IdeologicalThoughtEquatesRulersAndCommoners/77dcc923372f61169654a0811f24de7a1865a566e6a64b26ab1e4f1a2e7bb022/known/PresenceValue/b48d01b3842ef785c553c8bb01bdfe13aa566d10424c9d842dc7f494d0f09f7a",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "ideology_reinforces_prosociality":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideology_reinforces_prosociality/IdeologyReinforcesProsociality/337844a4b1963b3004d41f24259c8d759570faa2de20f963f7aa6eb2127774da",
				"@type":"IdeologyReinforcesProsociality",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideology_reinforces_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/ideology_reinforces_prosociality/IdeologyReinforcesProsociality/337844a4b1963b3004d41f24259c8d759570faa2de20f963f7aa6eb2127774da/known/PresenceValue/05e11d103a0562024f63435b515f258d4c1b404a850138670726953a91cf604d",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "production_of_public_goods":[
			 {
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/production_of_public_goods/ProductionOfPublicGoods/3691eb79f3f98027605d4365bc18805a7941e27dfd4e33eeb0c8e6159549a785",
				"@type":"ProductionOfPublicGoods",
				"known":{
				   "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/production_of_public_goods/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/normative_ideological_aspects_of_equity_and_prosociality/NormativeIdeologicalAspectsOfEquityAndProsociality/48ca36520b022277e67a57e986eeed9809ab73343e3589a0f476301c68613e9b/production_of_public_goods/ProductionOfPublicGoods/3691eb79f3f98027605d4365bc18805a7941e27dfd4e33eeb0c8e6159549a785/known/PresenceValue/0356b80a1970031b885902391604903f97501023ae284e1579872b0dcffdd02f",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ]
	   },
	   "ra":[
		  {
			 "@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/ra/Ra/f58e44c75c92e5a83176ae6e453c6a9639b6fc62b5b9c93bda43fa01349ee3d5",
			 "@type":"Ra",
			 "known":{
				"@id":"Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/ra/Polity/AfDurrn/religion_and_normative_ideology/Polity/AfDurrn/religion_and_normative_ideology/ReligionAndNormativeIdeology/70521c4034c9ac78137253ca43f08e9af4de867f1589e518888917b2f5e4aa28/ra/Ra/f58e44c75c92e5a83176ae6e453c6a9639b6fc62b5b9c93bda43fa01349ee3d5/known/StringValue/2a0d2ced3cd688a6dd280de2eb90c229064cb924bf9ca74019147572f8e02946",
				"@type":"StringValue",
				"value":"Enrico Cioni"
			 }
		  }
	   ]
	},
	"social_complexity_variables":{
	   "@id":"Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853",
	   "@type":"SocialComplexityVariables",
	   "bureaucracy_characteristics":{
		  "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1",
		  "@type":"BureaucracyCharacteristics",
		  "examination_system":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/examination_system/ExaminationSystem/2c2ada8dc2444df6e66eb2a14ec6d51a36a8067f7643f8c4361acc0fcd1cd653",
				"@type":"ExaminationSystem",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/examination_system/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/examination_system/ExaminationSystem/2c2ada8dc2444df6e66eb2a14ec6d51a36a8067f7643f8c4361acc0fcd1cd653/known/PresenceValue/27b466d1e235616239a5a307196bdf71016d3f2b677541fd09c0edaa83c2cb6e",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "full-time_bureaucrats":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/full-time_bureaucrats/Full-TimeBureaucrats/4705c78132e0659ba396259e820b7c3316113b1e7b4408542c17d203221d1343",
				"@type":"Full-TimeBureaucrats",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/full-time_bureaucrats/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/full-time_bureaucrats/Full-TimeBureaucrats/4705c78132e0659ba396259e820b7c3316113b1e7b4408542c17d203221d1343/known/PresenceValue/a028ea65239bb2dd8715bbdb9b6308765a41e9277b2671d9262d5bfb31bbe4a6",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "merit_promotion":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/merit_promotion/MeritPromotion/fcaee20f68c13e6c985b0602ad8e5dc41dca8f485578158e7b57c6528a4facca",
				"@type":"MeritPromotion",
				"inferred":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/merit_promotion/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/merit_promotion/MeritPromotion/fcaee20f68c13e6c985b0602ad8e5dc41dca8f485578158e7b57c6528a4facca/inferred/PresenceValue/05563397f931a6608f8b8f1c078b489bdda8f40ebbfcc5c5554c2528f6a021b1",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "specialized_government_buildings":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/specialized_government_buildings/SpecializedGovernmentBuildings/46354d587aa3931fb46b4131ee303a16935494f6e0cef026e40cdc454986d42f",
				"@type":"SpecializedGovernmentBuildings",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/specialized_government_buildings/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/bureaucracy_characteristics/BureaucracyCharacteristics/d0e4b4230fb8c76c2fd6264a4d0d2a8a0e8ca0f1a0a557906b9702503f7410c1/specialized_government_buildings/SpecializedGovernmentBuildings/46354d587aa3931fb46b4131ee303a16935494f6e0cef026e40cdc454986d42f/known/PresenceValue/17ef2a433d59275848faa06b99f7f6a82490cb8ba989057cc807615d306fe8ca",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ]
	   },
	   "hierarchical_complexity":{
		  "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca",
		  "@type":"HierarchicalComplexity",
		  "administrative_levels":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/administrative_levels/AdministrativeLevels/09805a59251f292839565f44ef45ca29c35da14407f8391babff0f65aac756c8",
				"@type":"AdministrativeLevels",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/administrative_levels/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/administrative_levels/AdministrativeLevels/09805a59251f292839565f44ef45ca29c35da14407f8391babff0f65aac756c8/known/IntegerValue/c1adf451fce047bc3fcd1d7790cd6d6221021994e1cdd01ba8ca91bc485c756c",
				   "@type":"IntegerValue",
				   "value":5
				}
			 }
		  ],
		  "military_levels":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/military_levels/MilitaryLevels/3f614ab4eb87fd781aec22c1a29f27fb58502b199347c174439be6457d2473db",
				"@type":"MilitaryLevels",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/military_levels/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/military_levels/MilitaryLevels/3f614ab4eb87fd781aec22c1a29f27fb58502b199347c174439be6457d2473db/known/IntegerValue/58153554c1df404c256e4ff00d2d3a30664503ba22d84b44b48c4e1d7a00f95c",
				   "@type":"IntegerValue",
				   "value":4
				}
			 }
		  ],
		  "religious_levels":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/religious_levels/ReligiousLevels/1788db83d43cc377377409de9b0ff02180a7df57c9210d6a4bd7c6075919a50d",
				"@type":"ReligiousLevels",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/religious_levels/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/religious_levels/ReligiousLevels/1788db83d43cc377377409de9b0ff02180a7df57c9210d6a4bd7c6075919a50d/known/IntegerValue/5ef99ce1c8d575961684636db5dbf030ab891162e874cd46016762c065f9bbfb",
				   "@type":"IntegerValue",
				   "value":1
				}
			 }
		  ],
		  "settlement_hierarchy":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/settlement_hierarchy/SettlementHierarchy/13e1c2892dc4fff4a10165402e15872926ff44afec0fab929e92fed2ccdc8129",
				"@type":"SettlementHierarchy",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/settlement_hierarchy/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/hierarchical_complexity/HierarchicalComplexity/2e0b75167dc0bc810204119134280b0c90d87ef4f8928a2de3f0b91a9ae77fca/settlement_hierarchy/SettlementHierarchy/13e1c2892dc4fff4a10165402e15872926ff44afec0fab929e92fed2ccdc8129/known/IntegerValue/c95a3d4f533c1dd8a448595b1e4a085cc0bd889a80c8024a2c780a9087f4d4fd",
				   "@type":"IntegerValue",
				   "value":3
				}
			 }
		  ]
	   },
	   "information":{
		  "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421",
		  "@type":"Information",
		  "articles":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/articles/Articles/75892357eebd024735d5c3fc14b02367620474e3d7569bcb3a224ebff3285683",
				"@type":"Articles",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/articles/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/articles/Articles/75892357eebd024735d5c3fc14b02367620474e3d7569bcb3a224ebff3285683/known/PresenceValue/5e96a8563caee04b4ffb926db572151ad4245c2e6d59ca5e502cb5421adfcd9a",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "calendar":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/calendar/Calendar/8585a3f57f17dcec848c4705011eab14cf89134cc78c5ca02bdb2081d632192c",
				"@type":"Calendar",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/calendar/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/calendar/Calendar/8585a3f57f17dcec848c4705011eab14cf89134cc78c5ca02bdb2081d632192c/known/PresenceValue/47e6ab8510cc87db812c9e190bc4a704e672b4ab079658b17cd3b1100b028bbc",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "couriers":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/couriers/Couriers/5b41c4485ddaa77cc05c9786d6ca4bdaa26bf7cc2b3d52a3fb61a915263ee497",
				"@type":"Couriers",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/couriers/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/couriers/Couriers/5b41c4485ddaa77cc05c9786d6ca4bdaa26bf7cc2b3d52a3fb61a915263ee497/known/PresenceValue/9266b4363a7c0964b225543054c5907847737b1c174199034e68270e49fc95a1",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "fiction":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/fiction/Fiction/bfae62a681a0a3b5418d53195c7993c3820ecabe24e97a448943c9be43ca4e0d",
				"@type":"Fiction",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/fiction/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/fiction/Fiction/bfae62a681a0a3b5418d53195c7993c3820ecabe24e97a448943c9be43ca4e0d/known/PresenceValue/1e3cccd8663994ad90d49206f9ff17efae4754d630e6ae32ee78b9ef2be20ff8",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "foreign_coins":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/foreign_coins/ForeignCoins/27bf3721ecf36ef9bdbe3483c5e9583a9b469553d601c1ed2f5c4b1710ba9a79",
				"@type":"ForeignCoins",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/foreign_coins/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/foreign_coins/ForeignCoins/27bf3721ecf36ef9bdbe3483c5e9583a9b469553d601c1ed2f5c4b1710ba9a79/known/PresenceValue/d4ea2799a109317259fdf4daa13b661ccbfac80b2b4b609724e0d76f47923d7e",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "general_postal_service":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/general_postal_service/GeneralPostalService/38f6a37749eeb4794263fac3b4196212d1d24dd8e5b10e065a8634248ac1e01e",
				"@type":"GeneralPostalService",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/general_postal_service/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/general_postal_service/GeneralPostalService/38f6a37749eeb4794263fac3b4196212d1d24dd8e5b10e065a8634248ac1e01e/known/PresenceValue/98b24c51ed9c87c9a449ed6027054ef6ca6ace96ede588d785148931e760a135",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "history":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/history/History/b1348db825bf33f34ee589891e6cb2842b0ddfa948699af78b5e4ef11bdd758a",
				"@type":"History",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/history/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/history/History/b1348db825bf33f34ee589891e6cb2842b0ddfa948699af78b5e4ef11bdd758a/known/PresenceValue/92eea75867b7380bfbb51b4fc98738a4c1a5ad8aaa731b5a26d4551d4dcb3c5e",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "indigenous_coins":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/indigenous_coins/IndigenousCoins/818c1c02fefdb3348cc26778cdddd4effc680fe90d1289bb76b1c0f83dd9771c",
				"@type":"IndigenousCoins",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/indigenous_coins/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/indigenous_coins/IndigenousCoins/818c1c02fefdb3348cc26778cdddd4effc680fe90d1289bb76b1c0f83dd9771c/known/PresenceValue/1ac98d4ff38d34351f4df595275755504cfd36ffa073ed19c8fab749c5366e9c",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "lists_tables_and_classifications":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/lists_tables_and_classifications/ListsTablesAndClassifications/09b1e9ecfc292a6688dc38a0e4f9e34e0b09202e8f8b919e4d4ed8bc60660678",
				"@type":"ListsTablesAndClassifications",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/lists_tables_and_classifications/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/lists_tables_and_classifications/ListsTablesAndClassifications/09b1e9ecfc292a6688dc38a0e4f9e34e0b09202e8f8b919e4d4ed8bc60660678/known/PresenceValue/8207ab7a98f2861a4a9b1c8246709387bc7a0da1e6749a187d421574b1b6b455",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "non-phonetic_writing":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/non-phonetic_writing/Non-PhoneticWriting/9f0cef2c28b9109a51d59a2df320534447131d6f2d6b620cefd6a279661f5f9d",
				"@type":"Non-PhoneticWriting",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/non-phonetic_writing/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/non-phonetic_writing/Non-PhoneticWriting/9f0cef2c28b9109a51d59a2df320534447131d6f2d6b620cefd6a279661f5f9d/known/PresenceValue/a9dc50989eb8aabec84997c550cc6cc088375460bb7456da84a2b12c97d3c00f",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "nonwritten_records":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/nonwritten_records/NonwrittenRecords/0f77f67b2962f0a4896eb331a9bbc3bcdb02e9239b2608d5350583893724e739",
				"@type":"NonwrittenRecords"
			 }
		  ],
		  "paper_currency":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/paper_currency/PaperCurrency/feae927f913fa3a1b6dad0b1fafdd378f89f1864a87137706d7d09ae72eda1af",
				"@type":"PaperCurrency",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/paper_currency/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/paper_currency/PaperCurrency/feae927f913fa3a1b6dad0b1fafdd378f89f1864a87137706d7d09ae72eda1af/known/PresenceValue/361b0d177ce081c574d785e47e7479cb213ddfe6d9ba533200adcd4d2046b651",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "philosophy":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/philosophy/Philosophy/eb5412c949f607e342fc750fc5f5e9ec76216eae90e091ef89604d2c4b1cec57",
				"@type":"Philosophy",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/philosophy/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/philosophy/Philosophy/eb5412c949f607e342fc750fc5f5e9ec76216eae90e091ef89604d2c4b1cec57/known/PresenceValue/a5cb66a030cc05a7012d65eacfe69ae18b0b7a5bbe899cd56437f76d7dc181f0",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "phonetic_alphabetic_writing":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/phonetic_alphabetic_writing/PhoneticAlphabeticWriting/30a36ce4a88966018a77746bcb2b2b4388e1859246ea3bbb0bc26a65b1a36e28",
				"@type":"PhoneticAlphabeticWriting",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/phonetic_alphabetic_writing/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/phonetic_alphabetic_writing/PhoneticAlphabeticWriting/30a36ce4a88966018a77746bcb2b2b4388e1859246ea3bbb0bc26a65b1a36e28/known/PresenceValue/d1d5e2c9e8118551cf8e7e08f9effb55923234d509ba83c7f4ee3c4a53ae35eb",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "postal_stations":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/postal_stations/PostalStations/1a77a99eb427ae4e46f2208783e7f609ccb1eb8ee6e5595ca983290432a90c7c",
				"@type":"PostalStations",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/postal_stations/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/postal_stations/PostalStations/1a77a99eb427ae4e46f2208783e7f609ccb1eb8ee6e5595ca983290432a90c7c/known/PresenceValue/69f642703b4a561224ff167da49e095eb3d608ff53d58dd32972f4c0a125dda8",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "practical_literature":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/practical_literature/PracticalLiterature/bb456e27a3f468cb42c39c16173e62780eeb86188e60d580a2521edae2316e28",
				"@type":"PracticalLiterature",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/practical_literature/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/practical_literature/PracticalLiterature/bb456e27a3f468cb42c39c16173e62780eeb86188e60d580a2521edae2316e28/known/PresenceValue/7f96e142244eab0e9558a789df660919aa79fd51ba32e3a5d0b2ce7824ed8fd8",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "religious_literature":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/religious_literature/ReligiousLiterature/f2c35535ed7c690a5048a4c71d06ad014acd2dec994c34769e665b4efb2dafa1",
				"@type":"ReligiousLiterature",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/religious_literature/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/religious_literature/ReligiousLiterature/f2c35535ed7c690a5048a4c71d06ad014acd2dec994c34769e665b4efb2dafa1/known/PresenceValue/b633b7a582ea0f04280b3f8215e1d5670fb97c827a690d99a8b45cc3fd5c5f23",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "sacred_texts":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/sacred_texts/SacredTexts/ef868acf9e9d78ca5a1b98a6e7a6ef8a6d0d4ae3321b0e1e61b4f33e04bb336b",
				"@type":"SacredTexts",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/sacred_texts/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/sacred_texts/SacredTexts/ef868acf9e9d78ca5a1b98a6e7a6ef8a6d0d4ae3321b0e1e61b4f33e04bb336b/known/PresenceValue/041cb055044f65b6c7fccaf752bd5ec651e84bde844b8608ff17723d1a4ccee2",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "script":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/script/Script/5f7f5a6898ae3141ed63544f58e5c945d29f0efc74f6fff020271293dad90972",
				"@type":"Script",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/script/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/script/Script/5f7f5a6898ae3141ed63544f58e5c945d29f0efc74f6fff020271293dad90972/known/PresenceValue/11dd0fb43efc8499a1c5a2043c4b14e03ba2fc3a2bbac96d6acb13493a2d3c46",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "tokens":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/tokens/Tokens/eb3d092c54454005eebee1c365a45a83e489252e2969dacf6140ed61e5e8d6e2",
				"@type":"Tokens",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/tokens/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/tokens/Tokens/eb3d092c54454005eebee1c365a45a83e489252e2969dacf6140ed61e5e8d6e2/known/PresenceValue/96a5636999b9a678fd32f5c763b52ddc9c01351ae122e112037dc8a154341d87",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "written_records":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/written_records/WrittenRecords/cab4ed6c9ece2ee2ce287ece5411fa83000adcddbf42091d4e6204a729de842c",
				"@type":"WrittenRecords",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/written_records/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/information/Information/bb94c784a5ab1a79a48c3b4f09b01e114a6534a17a6c838b8e9bfc4616bfb421/written_records/WrittenRecords/cab4ed6c9ece2ee2ce287ece5411fa83000adcddbf42091d4e6204a729de842c/known/PresenceValue/97b4a805d9e1202739133ebc3a44ccf4236331c7b088961921de426f02d18d21",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ]
	   },
	   "law":{
		  "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18",
		  "@type":"Law",
		  "courts":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/courts/Courts/d3eb34e41ff009bfa5bca53155270b8ac9e01b026f2021eb6e5da17c6e4664ce",
				"@type":"Courts",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/courts/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/courts/Courts/d3eb34e41ff009bfa5bca53155270b8ac9e01b026f2021eb6e5da17c6e4664ce/known/PresenceValue/79949c1e577b163d97de1c31d18fa0fd086798bd3b7d34b04c0cf864894df651",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "formal_legal_code":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/formal_legal_code/FormalLegalCode/41daabe54bfd7894e13a3db40bcc1d58f6eeb1b451688085067d007a9331a83a",
				"@type":"FormalLegalCode",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/formal_legal_code/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/formal_legal_code/FormalLegalCode/41daabe54bfd7894e13a3db40bcc1d58f6eeb1b451688085067d007a9331a83a/known/PresenceValue/70c4babfc21bc1bf106e968f6d321588585ba88f5b24bb756cb14252c017bae5",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "judges":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/judges/Judges/35daea070b75534847fd0739f25a740cd37d4c50a6c1c29ce3c2253d4d32211a",
				"@type":"Judges",
				"inferred":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/judges/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/judges/Judges/35daea070b75534847fd0739f25a740cd37d4c50a6c1c29ce3c2253d4d32211a/inferred/PresenceValue/128477fbdd651ed0796acfc1f8d81ea27593e07f49701e466ab01e5c1f162766",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "professional_lawyers":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/professional_lawyers/ProfessionalLawyers/772e4bba344b7c37906b28b5bb4e698a27077de6173043bcd1b806bc8f096372",
				"@type":"ProfessionalLawyers",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/professional_lawyers/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/law/Law/96aec86d2df5f5b61cad8e38464d001695aa99c8140c25768c908b76ba8f3d18/professional_lawyers/ProfessionalLawyers/772e4bba344b7c37906b28b5bb4e698a27077de6173043bcd1b806bc8f096372/known/PresenceValue/8b57c193a9ba5fd3ca7599177d431215791ac1cbaa77f21d19aef79f88d87af5",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ]
	   },
	   "professions":{
		  "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Professions/1a189838bd2de28411c2f92c979c1bc3a05bfcb09ba1baf84c78dca65b0d30a6",
		  "@type":"Professions",
		  "professional_military_officers":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Professions/1a189838bd2de28411c2f92c979c1bc3a05bfcb09ba1baf84c78dca65b0d30a6/professional_military_officers/ProfessionalMilitaryOfficers/d71f8662b3cd7149631e19615ab5305d3801bb99a1800a86777a4ecd5ddf43ce",
				"@type":"ProfessionalMilitaryOfficers",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Professions/1a189838bd2de28411c2f92c979c1bc3a05bfcb09ba1baf84c78dca65b0d30a6/professional_military_officers/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Professions/1a189838bd2de28411c2f92c979c1bc3a05bfcb09ba1baf84c78dca65b0d30a6/professional_military_officers/ProfessionalMilitaryOfficers/d71f8662b3cd7149631e19615ab5305d3801bb99a1800a86777a4ecd5ddf43ce/known/PresenceValue/48ef462f52dace5930c60f3c78604fffeb63d573b8dce9f27c9636f8c1913af3",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "professional_priesthood":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Professions/1a189838bd2de28411c2f92c979c1bc3a05bfcb09ba1baf84c78dca65b0d30a6/professional_priesthood/ProfessionalPriesthood/cc49c3cbb239d61f58752793d2244d7af785026dee9a09965de32707ab345dba",
				"@type":"ProfessionalPriesthood",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Professions/1a189838bd2de28411c2f92c979c1bc3a05bfcb09ba1baf84c78dca65b0d30a6/professional_priesthood/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Professions/1a189838bd2de28411c2f92c979c1bc3a05bfcb09ba1baf84c78dca65b0d30a6/professional_priesthood/ProfessionalPriesthood/cc49c3cbb239d61f58752793d2244d7af785026dee9a09965de32707ab345dba/known/PresenceValue/f6957d53fcead993882f865ee0cdc49d8d65b28cedb58daf45d28019089c88a2",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "professional_soldiers":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Professions/1a189838bd2de28411c2f92c979c1bc3a05bfcb09ba1baf84c78dca65b0d30a6/professional_soldiers/ProfessionalSoldiers/1907c9e95615dc161d9fc7c1d4b1541dc845492f47b5d21791d2c9acad854153",
				"@type":"ProfessionalSoldiers",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Professions/1a189838bd2de28411c2f92c979c1bc3a05bfcb09ba1baf84c78dca65b0d30a6/professional_soldiers/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/professions/Professions/1a189838bd2de28411c2f92c979c1bc3a05bfcb09ba1baf84c78dca65b0d30a6/professional_soldiers/ProfessionalSoldiers/1907c9e95615dc161d9fc7c1d4b1541dc845492f47b5d21791d2c9acad854153/known/PresenceValue/9d07211ec2b73a58971b7a818c8708b9e0b1112a3136c5b322f44ee56e6267dc",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ]
	   },
	   "ra":[
		  {
			 "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/ra/Ra/7c9c978a15c40ea7c5d51b4458221fe4bf3e5644cdc0961c132423b226050c8e",
			 "@type":"Ra",
			 "known":{
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/ra/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/ra/Ra/7c9c978a15c40ea7c5d51b4458221fe4bf3e5644cdc0961c132423b226050c8e/known/StringValue/986e12870f013301ed082965f79ac10dee721272c6f637bb6e001363cc0b6447",
				"@type":"StringValue",
				"value":"Alice Williams"
			 }
		  },
		  {
			 "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/ra/Ra/aeccee1e92345f6fec0a53fa50aeb0d7bdcbb30805590def25d84e2d59167f64",
			 "@type":"Ra",
			 "known":{
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/ra/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/ra/Ra/aeccee1e92345f6fec0a53fa50aeb0d7bdcbb30805590def25d84e2d59167f64/known/StringValue/5460c6ae9626e973319e5439452e6f9e48d08fbca021bd43d2c56ffd64f119db",
				"@type":"StringValue",
				"value":"Stephen Dean"
			 }
		  }
	   ],
	   "social_scale":{
		  "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24",
		  "@type":"SocialScale",
		  "polity_territory":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/b3bfbbb5c0d747426267f8d861c211d199f30477afc817cb6a225f091b6f4d6b",
				"@type":"PolityTerritory",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/b3bfbbb5c0d747426267f8d861c211d199f30477afc817cb6a225f091b6f4d6b/known/IntegerValue/780212894654bb8bf4d6f8e3027659d9da1ebd40ebe10ed467c86cee0f3cff6f",
				   "@type":"IntegerValue",
				   "date_range":{
					  "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/b3bfbbb5c0d747426267f8d861c211d199f30477afc817cb6a225f091b6f4d6b/known/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/b3bfbbb5c0d747426267f8d861c211d199f30477afc817cb6a225f091b6f4d6b/known/IntegerValue/780212894654bb8bf4d6f8e3027659d9da1ebd40ebe10ed467c86cee0f3cff6f/date_range/DateRange/29bc8156b0c9f886d10b4549146bc414c8248951652741b4010c557b36131085",
					  "@type":"DateRange",
					  "from":1800,
					  "to":1800
				   },
				   "value":1790000
				}
			 },
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/dbdb1a050d7d7c3932ea68c3854ebad745e2cdc5adffa865a243fc15f9318e4c",
				"@type":"PolityTerritory",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/dbdb1a050d7d7c3932ea68c3854ebad745e2cdc5adffa865a243fc15f9318e4c/known/IntegerValue/f9893d34e43dc9148160c79a1c0ee811de1150276d43157a7b3eb144609db59a",
				   "@type":"IntegerValue",
				   "date_range":{
					  "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/dbdb1a050d7d7c3932ea68c3854ebad745e2cdc5adffa865a243fc15f9318e4c/known/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/dbdb1a050d7d7c3932ea68c3854ebad745e2cdc5adffa865a243fc15f9318e4c/known/IntegerValue/f9893d34e43dc9148160c79a1c0ee811de1150276d43157a7b3eb144609db59a/date_range/DateRange/b9822b11e6793d7b358323a7c9d41fd548c17adab4d2d45df55b2e9c746fee26",
					  "@type":"DateRange",
					  "from":1772,
					  "to":1772
				   },
				   "value":1792000
				}
			 },
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/fdc83ed0e2e42bdc89a2cb36022559eb10b9f7125a58447d81cbec87858e1155",
				"@type":"PolityTerritory",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/fdc83ed0e2e42bdc89a2cb36022559eb10b9f7125a58447d81cbec87858e1155/known/IntegerValue/534e5c954e9e3f0355c12b1f4e37fb6e0dba0698449ce4fba34c29b26dabe494",
				   "@type":"IntegerValue",
				   "date_range":{
					  "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/fdc83ed0e2e42bdc89a2cb36022559eb10b9f7125a58447d81cbec87858e1155/known/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/social_scale/SocialScale/3a60775307317bcec509e51d6b343504e816c3fe858ecbe628608e7f43c9fb24/polity_territory/PolityTerritory/fdc83ed0e2e42bdc89a2cb36022559eb10b9f7125a58447d81cbec87858e1155/known/IntegerValue/534e5c954e9e3f0355c12b1f4e37fb6e0dba0698449ce4fba34c29b26dabe494/date_range/DateRange/2ece1f8dbcf278c4c8a5e2629316a14e266d2b2d6548053b40331a5352165331",
					  "@type":"DateRange",
					  "from":1819,
					  "to":1819
				   },
				   "value":489000
				}
			 }
		  ]
	   },
	   "specialized_buildings%3A_polity_owned":{
		  "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb",
		  "@type":"SpecializedBuildings%3APolityOwned",
		  "bridges":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/bridges/Bridges/8433c579f3c523a1ea3bc68cb8decc3bbde5e6c31d2f1278f06ca918eda6712a",
				"@type":"Bridges",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/bridges/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/bridges/Bridges/8433c579f3c523a1ea3bc68cb8decc3bbde5e6c31d2f1278f06ca918eda6712a/known/PresenceValue/01f6a5486d399588b306a87cc48896e292cf2f74a3b1def07fc92abe423df0ba",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "canals":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/canals/Canals/e261ca2a05c5cd97fadeca73dd0989aa711a62724cb0d326e2ecc16865d6e4ee",
				"@type":"Canals",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/canals/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/canals/Canals/e261ca2a05c5cd97fadeca73dd0989aa711a62724cb0d326e2ecc16865d6e4ee/known/PresenceValue/26d755464616d1c648834d49003d50c1a0c82b5042d8c52c97a5b2f4f5041406",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "drinking_water_supply_systems":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/drinking_water_supply_systems/DrinkingWaterSupplySystems/70fb92197a743b71f62115345d2756f14eb4d82ce1800a6197f3b1363c2fb3a0",
				"@type":"DrinkingWaterSupplySystems",
				"inferred":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/drinking_water_supply_systems/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/drinking_water_supply_systems/DrinkingWaterSupplySystems/70fb92197a743b71f62115345d2756f14eb4d82ce1800a6197f3b1363c2fb3a0/inferred/PresenceValue/89d5d69788e893ced325ab9c745886ff5534272b3fedaed9499a6c67e309bef9",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "food_storage_sites":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/food_storage_sites/FoodStorageSites/8cede2ac2b7592cca02b70c3b90d0f765273b49ece9a84e319a75e581c23e5ed",
				"@type":"FoodStorageSites",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/food_storage_sites/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/food_storage_sites/FoodStorageSites/8cede2ac2b7592cca02b70c3b90d0f765273b49ece9a84e319a75e581c23e5ed/known/PresenceValue/0fae04a1a879dfc0f39b597eb162a40f912d0e9cf61f467248490494d72875e8",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "irrigation_systems":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/irrigation_systems/IrrigationSystems/d9853b93b6535bac798998980e961b80174dcbc9434322f82581a5c2ffec4387",
				"@type":"IrrigationSystems",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/irrigation_systems/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/irrigation_systems/IrrigationSystems/d9853b93b6535bac798998980e961b80174dcbc9434322f82581a5c2ffec4387/known/PresenceValue/99a6a728d27184c1193d721d4d6304fec4e376dc74fbcf7683b82327ec4e6d7d",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "markets":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/markets/Markets/4f5ae6f0a02f35e5058ca1b0a685400a27017d1603ccf8fe4d72100133fad8dc",
				"@type":"Markets",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/markets/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/markets/Markets/4f5ae6f0a02f35e5058ca1b0a685400a27017d1603ccf8fe4d72100133fad8dc/known/PresenceValue/58a4dba3624b3a2733344ecc7622cae0f95dd8de592f8454fcd0266f28d4762d",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "ports":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/ports/Ports/31526b459801f1fc915da0d370d9b1694747e56f54a8dd356ca458e422b59c2a",
				"@type":"Ports",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/ports/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/ports/Ports/31526b459801f1fc915da0d370d9b1694747e56f54a8dd356ca458e422b59c2a/known/PresenceValue/99ec6e8303f0a40fcdd9ea0035d3e4c9ceb647289351f9719c5d353dab183840",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "roads":[
			 {
				"@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/roads/Roads/6f175b5e44ea672953effe3b26ab818e7bfb9bd90b02e35ddf312d91f3843b9a",
				"@type":"Roads",
				"known":{
				   "@id":"Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/roads/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/Polity/AfDurrn/social_complexity_variables/Polity/AfDurrn/social_complexity_variables/SocialComplexityVariables/a3e6e5825cb6a50e6989604d053413700faf6bcc204aee3ec9501a43adc97853/specialized_buildings%3A_polity_owned/SpecializedBuildings%3APolityOwned/2f1687a6fe432bceac833993ddc1bb997dbca4533db61b078742c16b33327fdb/roads/Roads/6f175b5e44ea672953effe3b26ab818e7bfb9bd90b02e35ddf312d91f3843b9a/known/PresenceValue/af8f5f6287c14a624ee931254d4d1f77af196d6ad7f7d5d94b920b2e1b9ecb00",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ]
	   }
	},
	"social_mobility":{
	   "@id":"Polity/AfDurrn/social_mobility/SocialMobility/0b8e66af33f2102a98292ebc1185a909d45cf81925d0d5fb0ec104d61f4bf556",
	   "@type":"SocialMobility",
	   "status":{
		  "@id":"Polity/AfDurrn/social_mobility/Polity/AfDurrn/social_mobility/SocialMobility/0b8e66af33f2102a98292ebc1185a909d45cf81925d0d5fb0ec104d61f4bf556/status/Status/5d763ae7370e12ef1df5141dca932e910814620559cf5872d2197190f4e2bc9f",
		  "@type":"Status",
		  "elite_status_is_hereditary":[
			 {
				"@id":"Polity/AfDurrn/social_mobility/Polity/AfDurrn/social_mobility/SocialMobility/0b8e66af33f2102a98292ebc1185a909d45cf81925d0d5fb0ec104d61f4bf556/status/Polity/AfDurrn/social_mobility/Polity/AfDurrn/social_mobility/SocialMobility/0b8e66af33f2102a98292ebc1185a909d45cf81925d0d5fb0ec104d61f4bf556/status/Status/5d763ae7370e12ef1df5141dca932e910814620559cf5872d2197190f4e2bc9f/elite_status_is_hereditary/EliteStatusIsHereditary/85d2cf27024ed6838cee6642d3f67f6b81b10b06e2944c8b248a8e432be454c7",
				"@type":"EliteStatusIsHereditary",
				"known":{
				   "@id":"Polity/AfDurrn/social_mobility/Polity/AfDurrn/social_mobility/SocialMobility/0b8e66af33f2102a98292ebc1185a909d45cf81925d0d5fb0ec104d61f4bf556/status/Polity/AfDurrn/social_mobility/Polity/AfDurrn/social_mobility/SocialMobility/0b8e66af33f2102a98292ebc1185a909d45cf81925d0d5fb0ec104d61f4bf556/status/Status/5d763ae7370e12ef1df5141dca932e910814620559cf5872d2197190f4e2bc9f/elite_status_is_hereditary/Polity/AfDurrn/social_mobility/Polity/AfDurrn/social_mobility/SocialMobility/0b8e66af33f2102a98292ebc1185a909d45cf81925d0d5fb0ec104d61f4bf556/status/Polity/AfDurrn/social_mobility/Polity/AfDurrn/social_mobility/SocialMobility/0b8e66af33f2102a98292ebc1185a909d45cf81925d0d5fb0ec104d61f4bf556/status/Status/5d763ae7370e12ef1df5141dca932e910814620559cf5872d2197190f4e2bc9f/elite_status_is_hereditary/EliteStatusIsHereditary/85d2cf27024ed6838cee6642d3f67f6b81b10b06e2944c8b248a8e432be454c7/known/PresenceValue/48b1ead00d4bacc18a101df03d141f8db88e35229a43f54b8a3be9e2821045d5",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ]
	   }
	},
	"warfare_variables":{
	   "@id":"Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971",
	   "@type":"WarfareVariables",
	   "military_technologies":{
		  "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f",
		  "@type":"MilitaryTechnologies",
		  "atlatl":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/atlatl/Atlatl/efa12cc75ae2e193af937890a9e22e2b9b40812dc2c15a7fd6abdb836e05ccf3",
				"@type":"Atlatl",
				"inferred":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/atlatl/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/atlatl/Atlatl/efa12cc75ae2e193af937890a9e22e2b9b40812dc2c15a7fd6abdb836e05ccf3/inferred/PresenceValue/2bb0ea8ad0a355f435fe3c0bef2d8c74b2078b1a1d7d4ad00b2ac2157b12e8f0",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "battle_axes":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/battle_axes/BattleAxes/ed07f4b9a8dc02f3b61f681827831bee1db6c9e4cc701083ad74344c3fc922f7",
				"@type":"BattleAxes",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/battle_axes/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/battle_axes/BattleAxes/ed07f4b9a8dc02f3b61f681827831bee1db6c9e4cc701083ad74344c3fc922f7/known/PresenceValue/14d8df1702f6e3d5dbfeea28a7ee2bdd205d7b9c6994a2382f9449c894c0549d",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "breastplates":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/breastplates/Breastplates/1cbc29b7d8797c40c191d025dd36429eea5c6aff12c5155b3c4052687310135e",
				"@type":"Breastplates",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/breastplates/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/breastplates/Breastplates/1cbc29b7d8797c40c191d025dd36429eea5c6aff12c5155b3c4052687310135e/known/PresenceValue/4c0ac3033ca2913c30cff44d39efdc841b4cf1bfb43bc4bbbd97324efcdc3904",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "bronze":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/bronze/Bronze/c02fc0c0446cc9fafc4a4de6c4a03768b7efb5e652ec0578cb8b5bc660c6e932",
				"@type":"Bronze",
				"inferred":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/bronze/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/bronze/Bronze/c02fc0c0446cc9fafc4a4de6c4a03768b7efb5e652ec0578cb8b5bc660c6e932/inferred/PresenceValue/596a5abbe593e6cc3538025766faa04a7a69e6c27aef031221d2a0604c366f74",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "camels":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/camels/Camels/eff580de60839d1ac6e22bc4a13ab14ead76f9aa137f3a375a795603d2083233",
				"@type":"Camels",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/camels/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/camels/Camels/eff580de60839d1ac6e22bc4a13ab14ead76f9aa137f3a375a795603d2083233/known/PresenceValue/c7c0dcc10e71d581e3a04d40716864a2f4c55c12e1ffbf5917c191fac95c3fc7",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "complex_fortifications":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/complex_fortifications/ComplexFortifications/73ad54997341ab052e5b76d5f101154746c0697b9360e82ae6c39447945ea917",
				"@type":"ComplexFortifications",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/complex_fortifications/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/complex_fortifications/ComplexFortifications/73ad54997341ab052e5b76d5f101154746c0697b9360e82ae6c39447945ea917/known/PresenceValue/7a6752af8e7f4dc88a3be1199d83ea71e598c6215b0eed9e6fa1203a8f79f992",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "composite_bow":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/composite_bow/CompositeBow/87b98ae226cc07333ee2da7b228feb7ba7f4eedd2305ac36e0a427e1a932b005",
				"@type":"CompositeBow",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/composite_bow/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/composite_bow/CompositeBow/87b98ae226cc07333ee2da7b228feb7ba7f4eedd2305ac36e0a427e1a932b005/known/PresenceValue/d5257bb5460ef854fd17b57e08c725923f04e0c229e9c8aabe176fa0e6ae869b",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "copper":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/copper/Copper/833eea22ce28ec1a22a2dcdb33bc89b2b10880012d0193811410dcc85c126c71",
				"@type":"Copper",
				"inferred":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/copper/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/copper/Copper/833eea22ce28ec1a22a2dcdb33bc89b2b10880012d0193811410dcc85c126c71/inferred/PresenceValue/151d41802baedee38be61c5f6afce088b5ed398f1908abb7505a098c02084e05",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "crossbow":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/crossbow/Crossbow/4842325fbb4dc901296414c606910676210417b3322756b8c811d70c35f80c81",
				"@type":"Crossbow",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/crossbow/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/crossbow/Crossbow/4842325fbb4dc901296414c606910676210417b3322756b8c811d70c35f80c81/known/PresenceValue/19402ae2dc27335e1624b41dbba136aa721b9c73f1ee3140f38ff78933174d62",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "daggers":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/daggers/Daggers/69c9ea2847b39a092e375b758ed92d59dbb844e34c784670d356da44a528bb1c",
				"@type":"Daggers",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/daggers/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/daggers/Daggers/69c9ea2847b39a092e375b758ed92d59dbb844e34c784670d356da44a528bb1c/known/PresenceValue/77af43891f926673a9b747234465c4687c65c6ff5c485aa86d0429cd5e1fc70b",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "ditch":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/ditch/Ditch/fe33998fe677e6d41ebbf6ce73346c58897c0e4b4fc9322ee021bc4185e69682",
				"@type":"Ditch"
			 }
		  ],
		  "dogs":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/dogs/Dogs/8bb1f65708741da6112f3d7813d19711ad211f148f166f7d9fae3020fcd0328c",
				"@type":"Dogs"
			 }
		  ],
		  "donkeys":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/donkeys/Donkeys/3924d5a07491495bb30ca6294ac74694ac984a7a075c25397c625e97bf164879",
				"@type":"Donkeys",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/donkeys/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/donkeys/Donkeys/3924d5a07491495bb30ca6294ac74694ac984a7a075c25397c625e97bf164879/known/PresenceValue/04f71252814d9b53d01fa53d3be1016d4992e07a16c01bd390c29842d8e6ff10",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "earth_ramparts":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/earth_ramparts/EarthRamparts/c838ccaf7e6e265d657caf05fc19a5468e3f60a65651f4281fb21fcbe5ce83bd",
				"@type":"EarthRamparts",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/earth_ramparts/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/earth_ramparts/EarthRamparts/c838ccaf7e6e265d657caf05fc19a5468e3f60a65651f4281fb21fcbe5ce83bd/known/PresenceValue/1a18cfeb744c49866ad4ac7dfc1976eb887c212377b444124323a707d3eefdea",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "fortified_camps":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/fortified_camps/FortifiedCamps/e3652a37fb663827547a7f4e9ec771799f5aed5b715986f5a7b43b89b683f64d",
				"@type":"FortifiedCamps",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/fortified_camps/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/fortified_camps/FortifiedCamps/e3652a37fb663827547a7f4e9ec771799f5aed5b715986f5a7b43b89b683f64d/known/PresenceValue/0df5dd8ef1ea1487e6b52e52d72622019434fab067c92bf37cf204f1ea86fb2d",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "gunpowder_siege_artillery":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/gunpowder_siege_artillery/GunpowderSiegeArtillery/758faeb30b01e76165b7958aca6832b975112435d9a6146f91a8f2899a0440e9",
				"@type":"GunpowderSiegeArtillery",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/gunpowder_siege_artillery/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/gunpowder_siege_artillery/GunpowderSiegeArtillery/758faeb30b01e76165b7958aca6832b975112435d9a6146f91a8f2899a0440e9/known/PresenceValue/4cc3796848870d2bf41c38bb2608dfb406aaefac36612145e6ef09605a6bc08b",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "handheld_firearms":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/handheld_firearms/HandheldFirearms/7accbf292116f3977012f174320d8fca3570110f67029af50c2e7b2495348725",
				"@type":"HandheldFirearms",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/handheld_firearms/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/handheld_firearms/HandheldFirearms/7accbf292116f3977012f174320d8fca3570110f67029af50c2e7b2495348725/known/PresenceValue/6cb9cef09392b150b67c15fe46c56bc61f6b6fad72116762edf3c1c96d6132f2",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "helmets":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/helmets/Helmets/45bb5cebebd6e01d98d55596851ee53e89dda95cb57d37dc7e4b4f1c7848461d",
				"@type":"Helmets",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/helmets/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/helmets/Helmets/45bb5cebebd6e01d98d55596851ee53e89dda95cb57d37dc7e4b4f1c7848461d/known/PresenceValue/75f9c26bca058f0c19c2ab882e821cdbe6c0969d82975f67326d96e0608a7adf",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "horses":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/horses/Horses/df95e2b2151ac14218b10df8f393b8e2c4b81a1e889a70bea34f8249a23bb7b2",
				"@type":"Horses",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/horses/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/horses/Horses/df95e2b2151ac14218b10df8f393b8e2c4b81a1e889a70bea34f8249a23bb7b2/known/PresenceValue/f27ffd350b2804822cbc3a280400a87518068761097456ff5b13bfd055259a48",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "iron":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/iron/Iron/a12440d89557c4536bf405c1fcdf225a3a3e840aa960fb4a137dab7393f0335b",
				"@type":"Iron",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/iron/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/iron/Iron/a12440d89557c4536bf405c1fcdf225a3a3e840aa960fb4a137dab7393f0335b/known/PresenceValue/674e18360f833137ba5e164f31c47d3bb085e5538c9dec473cdc5c5a6125aeef",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "javelins":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/javelins/Javelins/49779b0735f0014fcbebc571efd629a84e1011f0aef20d41a3a942f4ffbf1cfc",
				"@type":"Javelins",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/javelins/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/javelins/Javelins/49779b0735f0014fcbebc571efd629a84e1011f0aef20d41a3a942f4ffbf1cfc/known/PresenceValue/8622e4686ecefe6dfb9ef190d1fa9038d54e3ff293bd62684c03ed738b23e2fc",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "laminar_armor":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/laminar_armor/LaminarArmor/66ad42b37424773b794f1156453842b41a88830cdf0df1459b1225bd10c757a5",
				"@type":"LaminarArmor",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/laminar_armor/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/laminar_armor/LaminarArmor/66ad42b37424773b794f1156453842b41a88830cdf0df1459b1225bd10c757a5/known/PresenceValue/1255e43976dcb58efd667753cafd3cf7edf57ead42bbf19a87b7428fe7036e22",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "leather_cloth":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/leather_cloth/LeatherCloth/dc0d078a11085214458015c3805ce610fa8fe6266c2a1e3bae89cd47c34e2e29",
				"@type":"LeatherCloth",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/leather_cloth/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/leather_cloth/LeatherCloth/dc0d078a11085214458015c3805ce610fa8fe6266c2a1e3bae89cd47c34e2e29/known/PresenceValue/2b8f61575755e7c2eca6fd76891a63d9772d34d773dcbdd369d2f70d114f9f91",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "limb_protection":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/limb_protection/LimbProtection/6b44b2fa7f38b4485d5352d76c903fcfdfd05440f548ec10e8de5ac6e399347e",
				"@type":"LimbProtection",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/limb_protection/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/limb_protection/LimbProtection/6b44b2fa7f38b4485d5352d76c903fcfdfd05440f548ec10e8de5ac6e399347e/known/PresenceValue/826d6b85926b68986f90b56c22752a4cd7521de176f877992c9a853631b236fe",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "long_walls":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/long_walls/LongWalls/243ad29aa2829edbb72d29d67d5bc91dfa5f2ef619e4aadede7d69218756e626",
				"@type":"LongWalls",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/long_walls/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/long_walls/LongWalls/243ad29aa2829edbb72d29d67d5bc91dfa5f2ef619e4aadede7d69218756e626/known/IntegerValue/0f49eaece3598a5c22687cbc675a3f5118d7cfe769ed1bb1169994501c53d732",
				   "@type":"IntegerValue",
				   "value":0
				}
			 }
		  ],
		  "merchant_ships_pressed_into_service":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/merchant_ships_pressed_into_service/MerchantShipsPressedIntoService/2394c0ae7ab24cdaabefd9090536dfc3705e0fdc5d86774f785acf64e5233a01",
				"@type":"MerchantShipsPressedIntoService",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/merchant_ships_pressed_into_service/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/merchant_ships_pressed_into_service/MerchantShipsPressedIntoService/2394c0ae7ab24cdaabefd9090536dfc3705e0fdc5d86774f785acf64e5233a01/known/PresenceValue/25602d7d75fe1f59eb234336b142701d68f46902cd6c352c6d3b8784b9d971ad",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "moat":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/moat/Moat/ac353549739bfc28fb589b211b22988c2681adc964a78116c5f0a784f858ff61",
				"@type":"Moat",
				"inferred":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/moat/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/moat/Moat/ac353549739bfc28fb589b211b22988c2681adc964a78116c5f0a784f858ff61/inferred/PresenceValue/df11787777de91d21d1aea523ea8aba9b2e080de0a0edd487a43c90aa78f3e33",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "modern_fortifications":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/modern_fortifications/ModernFortifications/ea428b20de863829f89d2e6d06964a003f66fc5aa0cdaf02055ae8fb11453712",
				"@type":"ModernFortifications",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/modern_fortifications/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/modern_fortifications/ModernFortifications/ea428b20de863829f89d2e6d06964a003f66fc5aa0cdaf02055ae8fb11453712/known/PresenceValue/512c3353f9ac51b25d8e47c0db24597255c2bc276ed737a11e61d5ea9280adf2",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "plate_armor":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/plate_armor/PlateArmor/3b9bdb68fca957f5425bfc2c52ef08053dfaea4eb1147deb92f8e9b18584d319",
				"@type":"PlateArmor",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/plate_armor/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/plate_armor/PlateArmor/3b9bdb68fca957f5425bfc2c52ef08053dfaea4eb1147deb92f8e9b18584d319/known/PresenceValue/e4cf3c8b18aa561ecc096cbb9fa028979981351855f915f7427f3404760c246f",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "polearms":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/polearms/Polearms/e0ad3fd20c2cdc1efbd174c8e8d6b4f4aa7d599cd42934dd5a193e398e14b267",
				"@type":"Polearms"
			 }
		  ],
		  "scaled_armor":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/scaled_armor/ScaledArmor/e66cef3540b8456a0ec01e3011622855da36811f42a80dde2a78341bb08d8d83",
				"@type":"ScaledArmor",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/scaled_armor/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/scaled_armor/ScaledArmor/e66cef3540b8456a0ec01e3011622855da36811f42a80dde2a78341bb08d8d83/known/PresenceValue/2290cdbbf3b3a8a50eb741680a58f2d419e667884029c494d68649a11860cc4e",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "self_bow":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/self_bow/SelfBow/cae9b355ddad09ee970cdee5776e1120eeca056b1087d6d512b65b0317d31458",
				"@type":"SelfBow",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/self_bow/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/self_bow/SelfBow/cae9b355ddad09ee970cdee5776e1120eeca056b1087d6d512b65b0317d31458/known/PresenceValue/4dc15fb257e49e5f46267e061e02aade7f2ffccddfc5bc38e1df7b2058cde952",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "settlements_in_a_defensive_position":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/settlements_in_a_defensive_position/SettlementsInADefensivePosition/3dec709ebb8082eebe7976c4c0cbb22248f901114a5cc53bf0345bbc2189607d",
				"@type":"SettlementsInADefensivePosition",
				"inferred":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/settlements_in_a_defensive_position/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/settlements_in_a_defensive_position/SettlementsInADefensivePosition/3dec709ebb8082eebe7976c4c0cbb22248f901114a5cc53bf0345bbc2189607d/inferred/PresenceValue/b26f13df9ba3c063841f750aff372b2a77095181f853268db4e8c9b07600178f",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "shields":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/shields/Shields/b35bdc6c105ec58bc2003efa63f6692f36536c50de83db947d35de619c519d23",
				"@type":"Shields",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/shields/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/shields/Shields/b35bdc6c105ec58bc2003efa63f6692f36536c50de83db947d35de619c519d23/known/PresenceValue/f7b3c08c21b35a8cfedb3bf98f02a1981881adbf8455683dae56eca1dc018bb7",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "sling_siege_engines":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/sling_siege_engines/SlingSiegeEngines/c09f7cd61fb1de667987bfe5daf559320f0517369ed63e667bc3ef30ec128106",
				"@type":"SlingSiegeEngines",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/sling_siege_engines/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/sling_siege_engines/SlingSiegeEngines/c09f7cd61fb1de667987bfe5daf559320f0517369ed63e667bc3ef30ec128106/known/PresenceValue/0d5cd9b5084799bbe65ee7bcee796301108b420e1cb3e6755809a1174547dffc",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "slings":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/slings/Slings/5cfcb05e6a82b3579344fe905e95d91ad7a77b5a47d6a78ca8495869e28ff52f",
				"@type":"Slings",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/slings/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/slings/Slings/5cfcb05e6a82b3579344fe905e95d91ad7a77b5a47d6a78ca8495869e28ff52f/known/PresenceValue/d9de0373994bbe65c9b2f51477f05d4c33bb27ba6052ef3cb289053048150b06",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "small_vessels_%28canoes_etc%29":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/small_vessels_%28canoes_etc%29/SmallVessels%28CanoesEtc%29/a5b209c4ea7049e823a9298e1303a3b4abd2dd83e15d4a9f69343c4717927407",
				"@type":"SmallVessels%28CanoesEtc%29",
				"inferred":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/small_vessels_%28canoes_etc%29/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/small_vessels_%28canoes_etc%29/SmallVessels%28CanoesEtc%29/a5b209c4ea7049e823a9298e1303a3b4abd2dd83e15d4a9f69343c4717927407/inferred/PresenceValue/2316170d5eb96b9fc953cf82609f0d2efa92adc4429f07f79f043198525677ba",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "spears":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/spears/Spears/6b2fc1db7050b372b96290168001c118af2e9736cafb297f2f257647b2f8d2c0",
				"@type":"Spears",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/spears/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/spears/Spears/6b2fc1db7050b372b96290168001c118af2e9736cafb297f2f257647b2f8d2c0/known/PresenceValue/03b5e33c679368e467fe4905f6435afa005d00e7634f2608a048bf66aefff18d",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "specialized_military_vessels":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/specialized_military_vessels/SpecializedMilitaryVessels/33106c013d4e340b07986e7ff9a0497df74e779f16542382303d6389b75d0923",
				"@type":"SpecializedMilitaryVessels",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/specialized_military_vessels/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/specialized_military_vessels/SpecializedMilitaryVessels/33106c013d4e340b07986e7ff9a0497df74e779f16542382303d6389b75d0923/known/PresenceValue/ec98731ab339ba10bf6f91a3689ab7ae17cceec55b352b91a69787b805407816",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "steel":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/steel/Steel/7d4cc062e50d1f96fe6520996ed75bf79c7d0f203d6a1ebccaf2e7935ebce623",
				"@type":"Steel",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/steel/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/steel/Steel/7d4cc062e50d1f96fe6520996ed75bf79c7d0f203d6a1ebccaf2e7935ebce623/known/PresenceValue/a667b70df1b9ff94387887b476de7d018c45d1202f2e8f3217659ea8063c78da",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "stone_walls_%28mortared%29":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/stone_walls_%28mortared%29/StoneWalls%28Mortared%29/4b10735f5215c131f01792db2805ee5982ec56e5a1ca961759cdeae673ead753",
				"@type":"StoneWalls%28Mortared%29",
				"inferred":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/stone_walls_%28mortared%29/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/stone_walls_%28mortared%29/StoneWalls%28Mortared%29/4b10735f5215c131f01792db2805ee5982ec56e5a1ca961759cdeae673ead753/inferred/PresenceValue/984bc088fc170ab76237fc48b00d1bed33f6366731764d745be47b08604094ee",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "stone_walls_%28non-mortared%29":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/stone_walls_%28non-mortared%29/StoneWalls%28Non-Mortared%29/052d6baec5f3d2825abbbc2d4cb0a73737b674a04f6691c80cce7943f342d3b0",
				"@type":"StoneWalls%28Non-Mortared%29"
			 }
		  ],
		  "swords":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/swords/Swords/3ffa277d68ec2c9c838c803d1d0158a9239bbd99bfd1ea2c475ea3dd498b023b",
				"@type":"Swords",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/swords/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/swords/Swords/3ffa277d68ec2c9c838c803d1d0158a9239bbd99bfd1ea2c475ea3dd498b023b/known/PresenceValue/228566c50d0b682e819bafbed144f056b0ed53cad377a6c6f574fc461b1893bd",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "tension_siege_engines":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/tension_siege_engines/TensionSiegeEngines/e614288d6709148148ae9e17da6da7809f6a7ff8821a1dbe994d242c32aceeb9",
				"@type":"TensionSiegeEngines",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/tension_siege_engines/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/tension_siege_engines/TensionSiegeEngines/e614288d6709148148ae9e17da6da7809f6a7ff8821a1dbe994d242c32aceeb9/known/PresenceValue/a8ccd2b42648f455bb34b2f785f7e288efd20ec715252610b52399b540bc06a8",
				   "@type":"PresenceValue",
				   "value":"absent"
				}
			 }
		  ],
		  "war_clubs":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/war_clubs/WarClubs/7bb322d0f3c3887d9e9ba69f86a6bbcaf2985b816e8ee6b83e0de846998f7e99",
				"@type":"WarClubs"
			 }
		  ],
		  "wood_bark_etc":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/wood_bark_etc/WoodBarkEtc/52541c976e26ab740cef75fe6a75e8f78fb6b777c2b5a258823e6f18984a756f",
				"@type":"WoodBarkEtc",
				"known":{
				   "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/wood_bark_etc/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/wood_bark_etc/WoodBarkEtc/52541c976e26ab740cef75fe6a75e8f78fb6b777c2b5a258823e6f18984a756f/known/PresenceValue/e7eacadf5b41a6137167af77c1b7b4388f112fb118a116b5328740f4d5e1e625",
				   "@type":"PresenceValue",
				   "value":"present"
				}
			 }
		  ],
		  "wooden_palisades":[
			 {
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/military_technologies/MilitaryTechnologies/4c3f6dd9ed413aa46e919627f94b3ead38038ad3b8c5905417ff327191fd1e7f/wooden_palisades/WoodenPalisades/f07fffe2cf3a27409d88fc80620e0597a58c49522b5f1366d8cbe245dda37383",
				"@type":"WoodenPalisades"
			 }
		  ]
	   },
	   "ra":[
		  {
			 "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Ra/3bc90a39893831868ab47abb4e5fa7158adeb33ca3d9fff49369b63ca914c55a",
			 "@type":"Ra",
			 "known":{
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Ra/3bc90a39893831868ab47abb4e5fa7158adeb33ca3d9fff49369b63ca914c55a/known/StringValue/4bf42d2b7c223636f810aee11d50c81df915480c53689a0581ec6da4f2c9e539",
				"@type":"StringValue",
				"value":"Stephen Dean"
			 }
		  },
		  {
			 "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Ra/417ed2751fb4408995aeec0b9a4b8d7fabf6e77564f3037d2cb2a9162180c7c4",
			 "@type":"Ra",
			 "known":{
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Ra/417ed2751fb4408995aeec0b9a4b8d7fabf6e77564f3037d2cb2a9162180c7c4/known/StringValue/4151f260fe30e7a53af9865a1afa2e4df776fc1fc5b4e143aa33f855540dfa42",
				"@type":"StringValue",
				"value":"K Basava"
			 }
		  },
		  {
			 "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Ra/a535c00e5525133f6f112ef2d7974cef7d7a5342b2ec012e0f1a4b6153d8cb08",
			 "@type":"Ra",
			 "known":{
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Ra/a535c00e5525133f6f112ef2d7974cef7d7a5342b2ec012e0f1a4b6153d8cb08/known/StringValue/155f39592c95a8586f3a9425874901c19fddadd2c11151b9afdd458b46ac644b",
				"@type":"StringValue",
				"value":"Edward A L Turner"
			 }
		  },
		  {
			 "@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Ra/ef6e81c6ce3ef06e3c72be44f77980ac4b4c2a8500ad5aff1308c0d1c953c21e",
			 "@type":"Ra",
			 "known":{
				"@id":"Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Polity/AfDurrn/warfare_variables/Polity/AfDurrn/warfare_variables/WarfareVariables/93857a812a94e018a0baf53dfff19bb66825a88e59f5fe19324068b1708cd971/ra/Ra/ef6e81c6ce3ef06e3c72be44f77980ac4b4c2a8500ad5aff1308c0d1c953c21e/known/StringValue/d9bc91b131d550f744bd0ac4e0e4309b7dab8332dce3f8e1a66434d0a04c9db9",
				"@type":"StringValue",
				"value":"Alice Williams"
			 }
		  }
	   ]
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
	  "alternative_names": {
		"@class": {
		  "@class": "AlternativeNames",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
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







export const DEMO_DOCUMENT_TYPE="Organization"

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
	  /*"owned_by": "User",*/
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


//crete seshat
export const JUNK = {
	"@type": "Polity",
	"general_variables": {
	  "@type": "GeneralVariables",
	  "alternative_names": [
		{
		  "@type": "AlternativeNames",
		  "inferred": {
			"@type": "StringValue",
			"value": "Last Afghan Empire",
			"date_range": {
			  "from": "1400",
			  "to": "1500",
			  "@type": "DateRange"
			}
		  }
		},
		{
		  "@type": "AlternativeNames",
		  "known": {
			"@type": "StringValue",
			"value": "Sadozai Kingdom",
			"date_range": {
			  "from": "1700",
			  "to": "1800",
			  "@type": "DateRange"
			}
		  }
		},
		{
		  "@type": "AlternativeNames",
		  "known": {
			"@type": "StringValue",
			"value": "Dislney Kingdom",
			"date_range": {
			  "from": "1947",
			  "to": "1989",
			  "@type": "DateRange"
			}
		  }
		}
	  ]
	}
  }

  export const PROFILE_VIEW_3_INIVITAION ={"invitations":[{"@type":"Invitation","creation_date":"2011-01-01 01:00:37","email_to":"kitzkan@gmail.com","status":"needs_invite"},{"@type":"Invitation","creation_date":"2011-01-01 01:00:37","email_to":"kitty@terminusdb.com","status":"active"},{"@type":"Invitation","creation_date":"2011-01-01 01:00:37","email_to":"reyhan@gmail.com","status":"active"}],"stripe_subscription":{"@type":"StripeSubscription","stripe_id":"2123213","billing_email":"kitty@gmail.com","status":"inactive","stripe_quantity":"2","stripe_referrer":"HELO","stripe_user":"User/BLUEME","subscription_id":"asasasa"},"creation_date":"2011-01-01 01:00:37","organization_name":"RK","owned_by":"User/WHO","status":"needs_invite","@type":"Organization"}

  export const MRP_SCHEMA = {
	"terminusdb:///schema#Address": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "city": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "coordinate": {
		"@class": {
		  "@class": "Coordinate",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "country": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "coutry": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "geocode_accuracy": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "metro_area": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "post_code": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  },
	  "state": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "stress_address": "xsd:string"
	},
	"terminusdb:///schema#ContactCounts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "num_of_it_contacts": "xsd:integer",
	  "num_of_sales_contacts": "xsd:integer",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#Coordinate": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "latitude": "xsd:decimal",
	  "longtitude": "xsd:decimal"
	},
	"terminusdb:///schema#Currency": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "type": {
		"@id": "CurrencyType",
		"@type": "Enum",
		"@values": [
		  "hkd",
		  "usd",
		  "eur",
		  "gbp"
		]
	  },
	  "value": "xsd:decimal"
	},
	"terminusdb:///schema#CurrencyType": {
	  "@type": "Enum",
	  "@values": [
		"hkd",
		"usd",
		"eur",
		"gbp"
	  ]
	},
	"terminusdb:///schema#Domain": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  },
	  "url": "xsd:string"
	},
	"terminusdb:///schema#EmployeeCount": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "employee_count_band": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "max": {
		"@class": "xsd:integer",
		"@type": "Optional"
	  },
	  "min": {
		"@class": "xsd:integer",
		"@type": "Optional"
	  },
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  },
	  "value": "xsd:integer"
	},
	"terminusdb:///schema#Industry": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "industry_code": "xsd:string",
	  "industry_code_desc": "xsd:string",
	  "industry_code_type": "xsd:string",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#IsPublic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "is_public": "xsd:boolean",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#Location": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "address": {
		"@class": {
		  "@class": "Address",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "contact_counts": {
		"@class": {
		  "@class": "ContactCounts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "location_type": {
		"@class": {
		  "@class": "LocationType",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "phone_num": {
		"@class": {
		  "@class": "PhoneNumber",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"terminusdb:///schema#LocationType": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  },
	  "value": {
		"@id": "LocationTypeValue",
		"@type": "Enum",
		"@values": [
		  "hq",
		  "decision_making_location",
		  "branch"
		]
	  }
	},
	"terminusdb:///schema#LocationTypeValue": {
	  "@type": "Enum",
	  "@values": [
		"hq",
		"decision_making_location",
		"branch"
	  ]
	},
	"terminusdb:///schema#Name": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "name": "xsd:string",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#Organization": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "domain": {
		"@class": {
		  "@class": "Domain",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "employee_count": {
		"@class": {
		  "@class": "EmployeeCount",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "industry": {
		"@class": {
		  "@class": "Industry",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "location": {
		"@class": "Location",
		"@type": "Set"
	  },
	  "name": {
		"@class": {
		  "@class": "Name",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "parent": {
		"@class": "Organization",
		"@type": "Set"
	  },
	  "public": {
		"@class": {
		  "@class": "IsPublic",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "revenue": {
		"@class": {
		  "@class": "Revenue",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"terminusdb:///schema#PhoneNumber": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "phone_num": "xsd:string",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#Revenue": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "max": {
		"@class": {
		  "@class": "Currency",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "min": {
		"@class": {
		  "@class": "Currency",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "revenue_band": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  },
	  "value": {
		"@class": "Currency",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#Source": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "file": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "name": "xsd:string"
	},
	"terminusdb:///schema#Sourced": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "source": {
		"@class": "Source",
		"@subdocument": []
	  }
	},
	"terminusdb:///schema#TemporalScoping": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "date_from": "xsd:dateTime",
	  "date_to": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  }
	}
  }

  export const MRP_SCHEMA_FORM_DATA = {
	"@id": "Organization/0b20e34a1ff51c19ebd96ebdc3df889c775e1e332f1a4ec154f5e58ffcc832fd",
	"@type": "Organization",
	"domain": [
	  {
		"@id": "Organization/0b20e34a1ff51c19ebd96ebdc3df889c775e1e332f1a4ec154f5e58ffcc832fd/domain/Domain/39fe8f782b3faf6a08ed4e98ad7ed0cb8cab3b2dce4b18c5137a11d725ce79e4",
		"@type": "Domain",
		"date_from": "2022-02-10T13:17:11.153464Z",
		"date_to": "2022-02-10T13:17:11.153464Z",
		"source": {
		  "@id": "Organization/0b20e34a1ff51c19ebd96ebdc3df889c775e1e332f1a4ec154f5e58ffcc832fd/domain/Organization/0b20e34a1ff51c19ebd96ebdc3df889c775e1e332f1a4ec154f5e58ffcc832fd/domain/Domain/39fe8f782b3faf6a08ed4e98ad7ed0cb8cab3b2dce4b18c5137a11d725ce79e4/source/Source/078c7fb38d8d210af850731f0c6ad6e78ecb747f6415b21c6dd8617935a7b7bf",
		  "@type": "Source",
		  "name": "../stockopedia_data.csv"
		},
		"url": "alstom.com"
	  }
	],
	"employee_count": [
	  {
		"@id": "Organization/0b20e34a1ff51c19ebd96ebdc3df889c775e1e332f1a4ec154f5e58ffcc832fd/employee_count/EmployeeCount/fa29d60589546ba11e572b58c40dd38d08f1500ee80e73d03fd10f598c73b1a2",
		"@type": "EmployeeCount",
		"date_from": "2022-02-10T13:17:11.153464Z",
		"date_to": "2022-02-10T13:17:11.153464Z",
		"employee_count_band": "12",
		"source": {
		  "@id": "Organization/0b20e34a1ff51c19ebd96ebdc3df889c775e1e332f1a4ec154f5e58ffcc832fd/employee_count/Organization/0b20e34a1ff51c19ebd96ebdc3df889c775e1e332f1a4ec154f5e58ffcc832fd/employee_count/EmployeeCount/fa29d60589546ba11e572b58c40dd38d08f1500ee80e73d03fd10f598c73b1a2/source/Source/06b982a7e49a1970652668e10b360de59331c9729eedbcdd3584456e498debff",
		  "@type": "Source",
		  "name": "../stockopedia_data.csv"
		},
		"value": 44830
	  }
	],
	"location": [
	  "Location/0254518b6cd853e561e63aa1e43ced36fd2193b2f986240668e41cb1314567fc"
	],
	"name": [
	  {
		"@id": "Organization/0b20e34a1ff51c19ebd96ebdc3df889c775e1e332f1a4ec154f5e58ffcc832fd/name/Name/d0b3ade462fcb05c1d9759f874c44ac9e9072650d7bf4664de6107f7b71abfc2",
		"@type": "Name",
		"date_from": "2022-02-10T13:17:11.153464Z",
		"date_to": "2022-02-10T13:17:11.153464Z",
		"name": "Alstom SA (PAR)",
		"source": {
		  "@id": "Organization/0b20e34a1ff51c19ebd96ebdc3df889c775e1e332f1a4ec154f5e58ffcc832fd/name/Organization/0b20e34a1ff51c19ebd96ebdc3df889c775e1e332f1a4ec154f5e58ffcc832fd/name/Name/d0b3ade462fcb05c1d9759f874c44ac9e9072650d7bf4664de6107f7b71abfc2/source/Source/3f316cf906ec01c5cb21149bd24340355d45f9960b9b3138c7dcc1d472fbc95b",
		  "@type": "Source",
		  "file": "editing this field",
		  "name": "Alstom SA (PAR)"
		}
	  }
	]
  }