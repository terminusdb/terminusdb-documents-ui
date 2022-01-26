export const SCHEMA = {
	"terminusdb:///schema#Address": {
	  "@key": {
		"@fields": [
		  "building"
		],
		"@type": "Lexical"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "building": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "street": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "zipcode": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#GeoCoordinates": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "Latitude": {
		"@class": "xsd:decimal",
		"@type": "Optional"
	  },
	  "Longitude": {
		"@class": "xsd:decimal",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Restaurant": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "address": {
		"@class": {
		  "@class": "Address",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "borough": {
		"@class": {
		  "@id": "borough",
		  "@type": "Enum",
		  "@values": [
			"Manhattan",
			"Staten Island",
			"Bronx",
			"Brooklyn",
			"Queens"
		  ]
		},
		"@type": "Optional"
	  },
	  "cuisine": {
		"@class": {
		  "@id": "cuisine",
		  "@type": "Enum",
		  "@values": [
			"Tex-Mex",
			"American",
			"Bakery",
			"Greek",
			"Pizza",
			"Not Listed/Not Applicable",
			"Jewish/Kosher",
			"Spanish",
			"Donuts",
			"Italian",
			"Irish",
			"Bagels/Pretzels",
			"Ice Cream, Gelato, Yogurt, Ices",
			"German",
			"Delicatessen",
			"Chinese",
			"Mexican",
			"African",
			"French",
			"Hotdogs",
			"Pizza/Italian",
			"Chicken",
			"Hamburgers",
			"Steak",
			"Seafood",
			"Café/Coffee/Tea",
			"Latin (Cuban, Dominican, Puerto Rican, South & Central American)"
		  ]
		},
		"@type": "Optional"
	  },
	  "location": {
		"@class": {
		  "@class": "GeoCoordinates",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "name": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "restaurant_id": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "review_count": {
		"@class": "xsd:decimal",
		"@type": "Optional"
	  },
	  "stars": {
		"@class": "xsd:decimal",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#borough": {
	  "@type": "Enum",
	  "@values": [
		"Manhattan",
		"Staten Island",
		"Bronx",
		"Brooklyn",
		"Queens"
	  ]
	},
	"terminusdb:///schema#cuisine": {
	  "@type": "Enum",
	  "@values": [
		"Tex-Mex",
		"American",
		"Bakery",
		"Greek",
		"Pizza",
		"Not Listed/Not Applicable",
		"Jewish/Kosher",
		"Spanish",
		"Donuts",
		"Italian",
		"Irish",
		"Bagels/Pretzels",
		"Ice Cream, Gelato, Yogurt, Ices",
		"German",
		"Delicatessen",
		"Chinese",
		"Mexican",
		"African",
		"French",
		"Hotdogs",
		"Pizza/Italian",
		"Chicken",
		"Hamburgers",
		"Steak",
		"Seafood",
		"Café/Coffee/Tea",
		"Latin (Cuban, Dominican, Puerto Rican, South & Central American)"
	  ]
	}
  }

