export const DEMO_SCHEMA = {
	"terminusdb:///schema#Address": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "AddressLine1": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "AddressLine2": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "Country": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Person": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "age": {
		"@class": "xsd:decimal",
		"@type": "Optional"
	  },
	  "lives_in": {
		"@class": "Address",
		"@subdocument": []
	  },
	  "name": "xsd:string",
	  "nicknames": {
		"@class": "xsd:string",
		"@type": "Set"
	  }
	}
  }

export const DEMO_SCHEMA_UI = {
  "placeholder": "xsd:dateTime"
}
