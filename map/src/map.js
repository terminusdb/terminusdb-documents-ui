



export const CAMS_SCHEMA = {
    "iri://CAMS#Area": {
      "@type": "Class",
      "extent": {
        "@class": {
          "@class": "AreaExtent",
          "@subdocument": []
        },
        "@type": "Optional"
      },
      "hazard_history": {
        "@class": {
          "@class": "HazardEvent",
          "@subdocument": []
        },
        "@type": "Set"
      },
      "hazards": {
        "@class": {
          "@id": "Hazard",
          "@type": "Enum",
          "@values": [
            "Volcanos (incl. lahars, pyroclastic flows, volcanic activity)",
            "Landslides (incl. post wildfire landslides) and Avalanches",
            "Hurricanes, Typhoons, or Cyclones",
            "Tropical/Extra Tropical of other extreme storms",
            "Coast Storm Surge",
            "Pluvial and Fluvial Flooding",
            "\"Sunny Day\" Tidal Flooding",
            "Tornadoes, Derechos, Micro-Bursts",
            "Lightning Strikes",
            "Wildfires",
            "Drought",
            "Geologic Sink Holes",
            "Pest Infestations",
            "Famine",
            "High Temperature Event",
            "Low Temperature Event",
            "Cyber Attack or Failure",
            "Other Terrorism",
            "Industrial Accident (Emissions, Releases, Spills, Ect.)"
          ]
        },
        "@type": "Set"
      },
      "name": "xsd:string",
      "population": {
        "@class": "xsd:integer",
        "@type": "Optional"
      }
    },
    "iri://CAMS#AreaExtent": {
      "@key": {
        "@type": "ValueHash"
      },
      "@subdocument": [],
      "@type": "Class",
      "perimeter": {
        "@class": "xsd:integer",
        "@type": "Optional"
      }
    },
    "iri://CAMS#Asset": {
      "@type": "Class",
      "applicable_hazards": {
        "@class": {
          "@id": "Hazard",
          "@type": "Enum",
          "@values": [
            "Volcanos (incl. lahars, pyroclastic flows, volcanic activity)",
            "Landslides (incl. post wildfire landslides) and Avalanches",
            "Hurricanes, Typhoons, or Cyclones",
            "Tropical/Extra Tropical of other extreme storms",
            "Coast Storm Surge",
            "Pluvial and Fluvial Flooding",
            "\"Sunny Day\" Tidal Flooding",
            "Tornadoes, Derechos, Micro-Bursts",
            "Lightning Strikes",
            "Wildfires",
            "Drought",
            "Geologic Sink Holes",
            "Pest Infestations",
            "Famine",
            "High Temperature Event",
            "Low Temperature Event",
            "Cyber Attack or Failure",
            "Other Terrorism",
            "Industrial Accident (Emissions, Releases, Spills, Ect.)"
          ]
        },
        "@type": "Set"
      },
      "asset_history": {
        "@class": [
          {
            "@class": "HazardEvent",
            "@subdocument": []
          },
          {
            "@class": "UpdateEvent",
            "@subdocument": []
          }
        ],
        "@type": "Set"
      },
      "asset_identifier": "xsd:string",
      "asset_update_history": {
        "@class": {
          "@class": "UpdateEvent",
          "@subdocument": []
        },
        "@type": "Set"
      },
      "commisioning_date": "xsd:dateTime",
      "design_standards": "xsd:string",
      "funding_source": [],
      "last_maintained": "xsd:dateTime",
      "last_modified": "xsd:dateTime",
      "location": "Location",
      "name": "xsd:string",
      "owner": "Owner",
      "sources_of_data": {
        "@class": [],
        "@type": "Set"
      },
      "spatial_web_identifier": {
        "@class": "SpatialWebIdentifier",
        "@type": "Optional"
      },
      "type": []
    },
    "iri://CAMS#AssetType": {
      "@abstract": [],
      "@type": "Class",
      "name": "xsd:string"
    },
    "iri://CAMS#DependencyRelation": {
      "@type": "Class",
      "comment": "xsd:string",
      "critical": "xsd:boolean",
      "dependent": "Asset",
      "depends_on": "Asset"
    },
    "iri://CAMS#Event": {
      "@abstract": [],
      "@subdocument": [],
      "@type": "Class",
      "date": "xsd:dateTime"
    },
    "iri://CAMS#FundingSource": {
      "@abstract": [],
      "@type": "Class"
    },
    "iri://CAMS#GeoCoordinate": {
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
    "iri://CAMS#GeoPerimeter": {
      "@key": {
        "@fields": [
          "perimeter"
        ],
        "@type": "Lexical"
      },
      "@subdocument": [],
      "@type": "Class",
      "perimeter": {
        "@class": {
          "@class": "GeoCoordinate",
          "@subdocument": []
        },
        "@type": "List"
      }
    },
    "iri://CAMS#Hazard": {
      "@type": "Enum",
      "@values": [
        "Volcanos (incl. lahars, pyroclastic flows, volcanic activity)",
        "Landslides (incl. post wildfire landslides) and Avalanches",
        "Hurricanes, Typhoons, or Cyclones",
        "Tropical/Extra Tropical of other extreme storms",
        "Coast Storm Surge",
        "Pluvial and Fluvial Flooding",
        "\"Sunny Day\" Tidal Flooding",
        "Tornadoes, Derechos, Micro-Bursts",
        "Lightning Strikes",
        "Wildfires",
        "Drought",
        "Geologic Sink Holes",
        "Pest Infestations",
        "Famine",
        "High Temperature Event",
        "Low Temperature Event",
        "Cyber Attack or Failure",
        "Other Terrorism",
        "Industrial Accident (Emissions, Releases, Spills, Ect.)"
      ]
    },
    "iri://CAMS#HazardEvent": {
      "@documentation": {
        "@comment": "Historical hazard",
        "@properties": {
          "comment": "A comment relating to an historic hazard incident.",
          "date": "The date at which the incident occurred."
        }
      },
      "@key": {
        "@fields": [
          "hazard",
          "date"
        ],
        "@type": "Lexical"
      },
      "@subdocument": [],
      "@type": "Class",
      "comment": "xsd:string",
      "date": "xsd:dateTime",
      "hazard": {
        "@id": "Hazard",
        "@type": "Enum",
        "@values": [
          "Volcanos (incl. lahars, pyroclastic flows, volcanic activity)",
          "Landslides (incl. post wildfire landslides) and Avalanches",
          "Hurricanes, Typhoons, or Cyclones",
          "Tropical/Extra Tropical of other extreme storms",
          "Coast Storm Surge",
          "Pluvial and Fluvial Flooding",
          "\"Sunny Day\" Tidal Flooding",
          "Tornadoes, Derechos, Micro-Bursts",
          "Lightning Strikes",
          "Wildfires",
          "Drought",
          "Geologic Sink Holes",
          "Pest Infestations",
          "Famine",
          "High Temperature Event",
          "Low Temperature Event",
          "Cyber Attack or Failure",
          "Other Terrorism",
          "Industrial Accident (Emissions, Releases, Spills, Ect.)"
        ]
      }
    },
    "iri://CAMS#Location": {
      "@type": "Class",
      "city": "xsd:string",
      "geo_location": {
        "@class": {
          "@class": "GeoCoordinate",
          "@subdocument": []
        },
        "@type": "Optional"
      },
      "postal_code": {
        "@class": "xsd:string",
        "@type": "Optional"
      },
      "state": "xsd:string",
      "street": "xsd:string"
    },
    "iri://CAMS#Owner": {
      "@type": "Class",
      "contact_person": "Person",
      "name": "xsd:string"
    },
    "iri://CAMS#Person": {
      "@type": "Class",
      "email_address": {
        "@class": "xsd:string",
        "@type": "Optional"
      },
      "first_name": "xsd:string",
      "job_title": {
        "@class": "xsd:string",
        "@type": "Optional"
      },
      "last_name": "xsd:string",
      "organization": {
        "@class": "xsd:string",
        "@type": "Optional"
      },
      "phone_number": {
        "@class": "xsd:string",
        "@type": "Optional"
      }
    },
    "iri://CAMS#Source": {
      "@abstract": [],
      "@type": "Class"
    },
    "iri://CAMS#SpatialWebIdentifier": {
      "@type": "Class",
      "id": "xsd:string"
    },
    "iri://CAMS#UpdateEvent": {
      "@documentation": {
        "@comment": "Update history",
        "@properties": {
          "comment": "A comment relating to an historic hazard incident.",
          "date": "The date at which the update occurred."
        }
      },
      "@key": {
        "@fields": [
          "comment",
          "date"
        ],
        "@type": "Lexical"
      },
      "@subdocument": [],
      "@type": "Class",
      "comment": "xsd:string",
      "date": "xsd:dateTime"
    }
}

export const CAMS_FORM_DATA = {
  "@id": "Asset/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918",
  "@type": "Asset",
  "asset_identifier": "Hospital",
  "commisioning_date": "2011-01-01T01:00:37Z",
  "design_standards": "abc",
  "last_maintained": "2011-01-01T01:00:37Z",
  "last_modified": "2011-01-01T01:00:37Z",
  "location": "Location/325a7080f9d37b2a4dab1e22a7516ac674e5e2efb9cbfa59ec932c39d723b198",
  "name": "HazzardVolcano",
  "owner": "Owner/5c2c7cd4e5145853aa0a289fd3c9656be84724bc033949e47bfa7fa63b932a2c",
  "spatial_web_identifier": "SpatialWebIdentifier/2e7c4d3e781fff00e303cf0541ed09a7079f2d4af0afce4aef538ba049c0efdf"
}


export const ASSET_ID="Asset/55fe9b775c235e4bc5f3364f6050af6de6ea662e7a44efaed8be599eab151d62"



export const CAMS_TYPE = "Asset"