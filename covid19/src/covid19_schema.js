


export const DATA_PRODUCT = "covid19"

export const COVID19_SCHEMA = {
  "terminusdb:///schema#Country": {
    "@key": {
      "@fields": [
        "name"
      ],
      "@type": "Lexical"
    },
    "@type": "Class",
    "coordinates": {
      "@class": {
        "@class": "GeoCoordinates",
        "@subdocument": []
      },
      "@type": "Set"
    },
    "name": {
      "@class": "xsd:string",
      "@type": "Optional"
    }
  },
  "terminusdb:///schema#GeoCoordinates": {
    "@key": {
      "@fields": [
        "location"
      ],
      "@type": "Lexical"
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
    },
    "location": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "total_cases": {
      "@class": "xsd:decimal",
      "@type": "Optional"
    }
  }
}


export const COVID19_FORM_DATA_INDIA = {
	"@id":"Country/India",
	"@type":"Country",
	"coordinates":[
	   {
		  "@id":"Country/India/coordinates/GeoCoordinates/Delhi",
		  "@type":"GeoCoordinates",
		  "Latitude":28.38,
		  "Longitude":77.216721,
		  "location":"Delhi",
		  "total_cases":287423874743
	   },
	   {
		  "@id":"Country/India/coordinates/GeoCoordinates/Kerala",
		  "@type":"GeoCoordinates",
		  "Latitude":10.850516,
		  "Longitude":76.27108,
		  "location":"Kerala",
		  "total_cases":10000000000
	   }
	],
	"name":"India"
 }


export const COVID19_FORM_DATA_IRELAND = {
	"@id":"Country/Ireland",
	"@type":"Country",
	"coordinates":[
	   {
		  "@id":"Country/Ireland/coordinates/GeoCoordinates/Crumlin",
		  "@type":"GeoCoordinates",
		  "Latitude":53.32843,
		  "Longitude":-6.304864,
		  "location":"Crumlin",
		  "total_cases":5000
	   },
	   {
		  "@id":"Country/Ireland/coordinates/GeoCoordinates/Dublin",
		  "@type":"GeoCoordinates",
		  "Latitude":53.35014,
		  "Longitude":-6.266155,
		  "location":"Dublin",
		  "total_cases":30894
	   },
	   {
		  "@id":"Country/Ireland/coordinates/GeoCoordinates/Galway",
		  "@type":"GeoCoordinates",
		  "Latitude":53.270962,
		  "Longitude":-9.062691,
		  "location":"Galway",
		  "total_cases":239084
	   },
	   {
		  "@id":"Country/Ireland/coordinates/GeoCoordinates/Limerick",
		  "@type":"GeoCoordinates",
		  "Latitude":52.668018,
		  "Longitude":-8.630498,
		  "location":"Limerick",
		  "total_cases":23424
	   }
	],
	"name":"Ireland"
 }

 export const COVID19_FORM_DATA_ITALY = {
	"@id":"Country/Italy",
	"@type":"Country",
	"coordinates":[
	   {
		  "@id":"Country/Italy/coordinates/GeoCoordinates/Rome",
		  "@type":"GeoCoordinates",
		  "Latitude":41.902782,
		  "Longitude":12.496366,
		  "location":"Rome",
		  "total_cases":9238
	   },
	   {
		  "@id":"Country/Italy/coordinates/GeoCoordinates/Tuscany",
		  "@type":"GeoCoordinates",
		  "Latitude":43.75,
		  "Longitude":11.166667,
		  "location":"Tuscany",
		  "total_cases":213213213
	   }
	],
	"name":"Italy"
 }



export const COVID19_TYPE = "Country"




/*
{
  "@type": "Organization",
  "organization_name": "HELLO",
  "coordinates": [
      {
          "latitude": "kitzkan@gmail.com",
          "longitude": "User_apple",
      },
      {
          "latitude": "reyhan@gmail.com",
          "longitude": "User_apple",
      }
  ]
}*/