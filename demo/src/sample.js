export const DEMO_SCHEMA = {
	"@id": "Person",
	"@key": {
	  "@fields": [
		"name"
	  ],
	  "@type": "Lexical"
	},
	"@type": "Class",
	"DOB": "xsd:dateTime",
	"lives_in": "Address",
	"name": "xsd:string"
}

export const SUBDOCUMENT_FRAME = {
	"@id": "Address",
	"@key": {
	  "@fields": [
		"City"
	  ],
	  "@type": "Lexical"
	},
	"@subdocument": [],
	"@type": "Class",
	"AddressLine1": "xsd:string",
	"AddressLine2": "xsd:string",
	"City": "xsd:string",
	"Country": "xsd:string"
  }

export const DEMO_SCHEMA_UI = {
  "placeholder": "xsd:dateTime"
}
