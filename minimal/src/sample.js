export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"

export const MINIMAL_DOCUMENT="Person"

export const MINIMAL_SCHEMA =  {
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

export const MINIMAL_FORM_DATA = {
	"@id": "Person/Peter%20+terminusdb%3A%2F%2F%2Fdata%2FJob%2Fadmin",
	"@type": "Person",
	"likes": "blue",
	"lives_in": {
		"@id": "Person/Peter%20+terminusdb%3A%2F%2F%2Fdata%2FJob%2Fadmin/lives_in/Address/c94a3dde75563839ec3d14ad4f40efaf0aa97995df0f57388483023a5337b63a",
		"@type": "Address",
		"AddressLine1": "5 beverly leinster square ",
		"AddressLine2": "rathmines dublin 6",
		"Country": "Ireland",
		"address_code": "Codes/002"
	},
	"name": "Peter ",
	"nicknames": ["Mr P", "Peterrrrrrr"],
	"works_as": "Job/admin"
}
