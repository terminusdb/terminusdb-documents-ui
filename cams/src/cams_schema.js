

export const CAMS_SCHEMA_EVENTS = {

  "iri://CAMS#Asset": {
    "@key": {
      "@fields": [
        "asset_identifier"
      ],
      "@type": "Lexical"
    },
    "@type": "Class",
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
    }
  },
  "iri://CAMS#Event": {
    "@abstract": [],
    "@subdocument": [],
    "@type": "Class",
    "date": "xsd:dateTime"
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
    "@key": {
      "@fields": [
        "asset_identifier"
      ],
      "@type": "Lexical"
    },
    "@type": "Class",
    "asset_identifier": "xsd:string",
    "location": {
      "@class": "Location",
      "@subdocument": []
    }
  },
  "iri://CAMS#AssetType": {
    "@abstract": [],
    "@type": "Class",
    "name": "xsd:string"
  },
  "iri://CAMS#CRS84": {
    "@type": "Class",
    "name": {
      "@id": "CRS84_Type",
      "@type": "Enum",
      "@values": [
        "urn:ogc:def:crs:OGC:1.3:CRS84"
      ]
    }
  },
  "iri://CAMS#CRS84_Type": {
    "@type": "Enum",
    "@values": [
      "urn:ogc:def:crs:OGC:1.3:CRS84"
    ]
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
  "iri://CAMS#Feature": {
    "@type": "Class",
    "bbox": {
      "@class": "xsd:string",
      "@dimensions": 1,
      "@type": "Array"
    },
    "centerline": {
      "@class": [
        {
          "@class": "LineString",
          "@subdocument": []
        },
        {
          "@class": "Point",
          "@subdocument": []
        }
      ],
      "@type": "Optional"
    },
    "geometry": [
      {
        "@class": "LineString",
        "@subdocument": []
      },
      {
        "@class": "Point",
        "@subdocument": []
      }
    ],
    "id": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "properties": [
      "CRS84",
      "OSiProperties"
    ],
    "title": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "type": {
      "@id": "Feature_Type",
      "@type": "Enum",
      "@values": [
        "Feature"
      ]
    }
  },
  "iri://CAMS#FeatureCollection": {
    "@type": "Class",
    "crs": {
      "@class": "name",
      "@type": "Optional"
    },
    "features": {
      "@class": "Feature",
      "@type": "Set"
    },
    "name": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "type": {
      "@id": "FeatureCollection_Type",
      "@type": "Enum",
      "@values": [
        "FeatureCollection"
      ]
    }
  },
  "iri://CAMS#FeatureCollection_Type": {
    "@type": "Enum",
    "@values": [
      "FeatureCollection"
    ]
  },
  "iri://CAMS#Feature_Type": {
    "@type": "Enum",
    "@values": [
      "Feature"
    ]
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
  "iri://CAMS#Geometry": {
    "@abstract": [],
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class"
  },
  "iri://CAMS#GeometryCollection_Type": {
    "@type": "Enum",
    "@values": [
      "GeometryCollection"
    ]
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
  "iri://CAMS#LineString": {
    "@key": {
      "@fields": [
        "comment"
      ],
      "@type": "Lexical"
    },
    "@subdocument": [],
    "@type": "Class",
    "comment": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "coordinates": {
      "@class": "xsd:decimal",
      "@dimensions": 2,
      "@type": "Array"
    },
    "type": {
      "@id": "LineString_Type",
      "@type": "Enum",
      "@values": [
        "LineString"
      ]
    }
  },
  "iri://CAMS#LineString_Type": {
    "@type": "Enum",
    "@values": [
      "LineString"
    ]
  },
  "iri://CAMS#Location": {
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
      "@class": [
        {
          "@class": "LineString",
          "@subdocument": []
        },
        {
          "@class": "Point",
          "@subdocument": []
        }
      ],
      "@type": "Optional"
    }
  },
  "iri://CAMS#MultiPolygon_Type": {
    "@type": "Enum",
    "@values": [
      "MultiPolygon"
    ]
  },
  "iri://CAMS#Name_Type": {
    "@type": "Enum",
    "@values": [
      "name"
    ]
  },
  "iri://CAMS#OSiProperties": {
    "@type": "Class",
    "NAMN1": "xsd:string",
    "OBJECTID": "xsd:integer"
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
  "iri://CAMS#Point": {
    "@key": {
      "@fields": [
        "comment"
      ],
      "@type": "Lexical"
    },
    "@subdocument": [],
    "@type": "Class",
    "comment": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "coordinates": {
      "@class": "xsd:decimal",
      "@dimensions": 1,
      "@type": "Array"
    },
    "type": {
      "@id": "Point_Type",
      "@type": "Enum",
      "@values": [
        "Point"
      ]
    }
  },
  "iri://CAMS#Point_Type": {
    "@type": "Enum",
    "@values": [
      "Point"
    ]
  },
  "iri://CAMS#Polygon_Type": {
    "@type": "Enum",
    "@values": [
      "Polygon"
    ]
  },
  "iri://CAMS#Properties": {
    "@abstract": [],
    "@type": "Class"
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
  },
  "iri://CAMS#name": {
    "@type": "Class",
    "properties": [
      "CRS84",
      "OSiProperties"
    ],
    "type": {
      "@id": "Name_Type",
      "@type": "Enum",
      "@values": [
        "name"
      ]
    }
  }
}

export const CAMS_SCHEMA_FULL_ASSET = {
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
    "@key": {
      "@fields": [
        "asset_identifier"
      ],
      "@type": "Lexical"
    },
    "@type": "Class",
    /*"applicable_hazards": {
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
    },*/
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
    /*"asset_identifier": "xsd:string",
    "asset_update_history": {
      "@class": {
        "@class": "UpdateEvent",
        "@subdocument": []
      },
      "@type": "Set"
    },
    "commisioning_date": "xsd:dateTime",
    "design_standards": "xsd:string",
    "last_maintained": "xsd:dateTime",
    "last_modified": "xsd:dateTime",
    "location": {
      "@class": "Location",
      "@subdocument": []
    },
    "name": "xsd:string",
    "owner": {
      "@class": "Owner",
      "@type": "Set"
    },
    "spatial_web_identifier": {
      "@class": "SpatialWebIdentifier",
      "@type": "Optional"
    }*/
  },
  "iri://CAMS#AssetType": {
    "@abstract": [],
    "@type": "Class",
    "name": "xsd:string"
  },
  "iri://CAMS#CRS84": {
    "@type": "Class",
    "name": {
      "@id": "CRS84_Type",
      "@type": "Enum",
      "@values": [
        "urn:ogc:def:crs:OGC:1.3:CRS84"
      ]
    }
  },
  "iri://CAMS#CRS84_Type": {
    "@type": "Enum",
    "@values": [
      "urn:ogc:def:crs:OGC:1.3:CRS84"
    ]
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
  "iri://CAMS#Feature": {
    "@type": "Class",
    "bbox": {
      "@class": "xsd:string",
      "@dimensions": 1,
      "@type": "Array"
    },
    "centerline": {
      "@class": [
        {
          "@class": "LineString",
          "@subdocument": []
        },
        {
          "@class": "Point",
          "@subdocument": []
        }
      ],
      "@type": "Optional"
    },
    "geometry": [
      {
        "@class": "LineString",
        "@subdocument": []
      },
      {
        "@class": "Point",
        "@subdocument": []
      }
    ],
    "id": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "properties": [
      "CRS84",
      "OSiProperties"
    ],
    "title": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "type": {
      "@id": "Feature_Type",
      "@type": "Enum",
      "@values": [
        "Feature"
      ]
    }
  },
  "iri://CAMS#FeatureCollection": {
    "@type": "Class",
    "crs": {
      "@class": "name",
      "@type": "Optional"
    },
    "features": {
      "@class": "Feature",
      "@type": "Set"
    },
    "name": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "type": {
      "@id": "FeatureCollection_Type",
      "@type": "Enum",
      "@values": [
        "FeatureCollection"
      ]
    }
  },
  "iri://CAMS#FeatureCollection_Type": {
    "@type": "Enum",
    "@values": [
      "FeatureCollection"
    ]
  },
  "iri://CAMS#Feature_Type": {
    "@type": "Enum",
    "@values": [
      "Feature"
    ]
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
  "iri://CAMS#Geometry": {
    "@abstract": [],
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class"
  },
  "iri://CAMS#GeometryCollection_Type": {
    "@type": "Enum",
    "@values": [
      "GeometryCollection"
    ]
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
  "iri://CAMS#LineString": {
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class",
    "coordinates": {
      "@class": "xsd:decimal",
      "@dimensions": 2,
      "@type": "Array"
    },
    "type": {
      "@id": "LineString_Type",
      "@type": "Enum",
      "@values": [
        "LineString"
      ]
    }
  },
  "iri://CAMS#LineString_Type": {
    "@type": "Enum",
    "@values": [
      "LineString"
    ]
  },
  "iri://CAMS#Location": {
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class",
    "city": "xsd:string",
    "geometry_location": {
      "@class": [
        {
          "@class": "LineString",
          "@subdocument": []
        },
        {
          "@class": "Point",
          "@subdocument": []
        }
      ],
      "@type": "Optional"
    },
    "postal_code": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "state": "xsd:string",
    "street": "xsd:string"
  },
  "iri://CAMS#MultiPolygon_Type": {
    "@type": "Enum",
    "@values": [
      "MultiPolygon"
    ]
  },
  "iri://CAMS#Name_Type": {
    "@type": "Enum",
    "@values": [
      "name"
    ]
  },
  "iri://CAMS#OSiProperties": {
    "@type": "Class",
    "NAMN1": "xsd:string",
    "OBJECTID": "xsd:integer"
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
  "iri://CAMS#Point": {
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class",
    "coordinates": {
      "@class": "xsd:decimal",
      "@dimensions": 1,
      "@type": "Array"
    },
    "type": {
      "@id": "Point_Type",
      "@type": "Enum",
      "@values": [
        "Point"
      ]
    }
  },
  "iri://CAMS#Point_Type": {
    "@type": "Enum",
    "@values": [
      "Point"
    ]
  },
  "iri://CAMS#Polygon_Type": {
    "@type": "Enum",
    "@values": [
      "Polygon"
    ]
  },
  "iri://CAMS#Properties": {
    "@abstract": [],
    "@type": "Class"
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
  },
  "iri://CAMS#name": {
    "@type": "Class",
    "properties": [
      "CRS84",
      "OSiProperties"
    ],
    "type": {
      "@id": "Name_Type",
      "@type": "Enum",
      "@values": [
        "name"
      ]
    }
  }
}

export const CAMS_SCHEMA_SPAT= {
  "iri://CAMS#Asset": {
    "@type": "Class",
    "name": "xsd:string",
    "spatial_web_identifier": "SpatialWebIdentifier"
  },
  "iri://CAMS#SpatialWebIdentifier": {
      "@type": "Class",
      "id": "xsd:string"
    }
}

//FULL_ASSET
export const CAMS_SCHEMA_LOCATION = {
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
    }
}

export const CAMS_SCHEMA_FULL = {
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
          "Industrial Accident (Emissions, Releases, Spills, Ect.)",
          "Earthquakes"
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
    "@key": {
      "@fields": [
        "asset_identifier"
      ],
      "@type": "Lexical"
    },
    "@type": "Class",
    "applicable_hazards": {
      "@class": {
        "@class": "GradedHazard",
        "@subdocument": []
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
    /*"asset_identifier": "xsd:string",*/
    "asset_update_history": {
      "@class": {
        "@class": "UpdateEvent",
        "@subdocument": []
      },
      "@type": "Set"
    },
    /*"commisioning_date": "xsd:dateTime",*/
    "description": {
      "@class": "xsd:string",
      "@type": "Set"
    },
    /*"design_standards": "xsd:string",
    "last_maintained": "xsd:dateTime",
    "last_modified": "xsd:dateTime",*/
    "location": {
      "@class": "Location",
      "@subdocument": []
    },
    /*"name": "xsd:string",
    "owner": {
      "@class": "Owner",
      "@type": "Set"
    },
    "spatial_web_identifier": {
      "@class": "SpatialWebIdentifier",
      "@type": "Optional"
    }*/
  },
  "iri://CAMS#AssetType": {
    "@abstract": [],
    "@type": "Class",
    "name": "xsd:string"
  },
  "iri://CAMS#CRS84": {
    "@type": "Class",
    "name": {
      "@id": "CRS84_Type",
      "@type": "Enum",
      "@values": [
        "urn:ogc:def:crs:OGC:1.3:CRS84"
      ]
    }
  },
  "iri://CAMS#CRS84_Type": {
    "@type": "Enum",
    "@values": [
      "urn:ogc:def:crs:OGC:1.3:CRS84"
    ]
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
  "iri://CAMS#Feature": {
    "@type": "Class",
    "bbox": {
      "@class": "xsd:string",
      "@dimensions": 1,
      "@type": "Array"
    },
    "centerline": {
      "@class": [
        {
          "@class": "LineString",
          "@subdocument": []
        },
        {
          "@class": "Point",
          "@subdocument": []
        }
      ],
      "@type": "Optional"
    },
    "geometry": [
      {
        "@class": "LineString",
        "@subdocument": []
      },
      {
        "@class": "Point",
        "@subdocument": []
      }
    ],
    "id": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "properties": [
      "CRS84",
      "OSiProperties"
    ],
    "title": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "type": {
      "@id": "Feature_Type",
      "@type": "Enum",
      "@values": [
        "Feature"
      ]
    }
  },
  "iri://CAMS#FeatureCollection": {
    "@type": "Class",
    "crs": {
      "@class": "name",
      "@type": "Optional"
    },
    "features": {
      "@class": "Feature",
      "@type": "Set"
    },
    "name": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "type": {
      "@id": "FeatureCollection_Type",
      "@type": "Enum",
      "@values": [
        "FeatureCollection"
      ]
    }
  },
  "iri://CAMS#FeatureCollection_Type": {
    "@type": "Enum",
    "@values": [
      "FeatureCollection"
    ]
  },
  "iri://CAMS#Feature_Type": {
    "@type": "Enum",
    "@values": [
      "Feature"
    ]
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
  "iri://CAMS#Geometry": {
    "@abstract": [],
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class"
  },
  "iri://CAMS#GeometryCollection_Type": {
    "@type": "Enum",
    "@values": [
      "GeometryCollection"
    ]
  },
  "iri://CAMS#GradedHazard": {
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class",
    "Grade": {
      "@class": "xsd:decimal",
      "@type": "Optional"
    },
    "hazard": {
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
          "Industrial Accident (Emissions, Releases, Spills, Ect.)",
          "Earthquakes"
        ]
      },
      "@type": "Optional"
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
      "Industrial Accident (Emissions, Releases, Spills, Ect.)",
      "Earthquakes"
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
        "Industrial Accident (Emissions, Releases, Spills, Ect.)",
        "Earthquakes"
      ]
    }
  },
  "iri://CAMS#HazardScale": {
    "@key": {
      "@type": "Random"
    },
    "@type": "Class",
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
        "Industrial Accident (Emissions, Releases, Spills, Ect.)",
        "Earthquakes"
      ]
    },
    "max": "xsd:decimal",
    "min": "xsd:decimal"
  },
  "iri://CAMS#LineString": {
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class",
    "coordinates": {
      "@class": "xsd:decimal",
      "@dimensions": 2,
      "@type": "Array"
    },
    "type": {
      "@id": "LineString_Type",
      "@type": "Enum",
      "@values": [
        "LineString"
      ]
    }
  },
  "iri://CAMS#LineString_Type": {
    "@type": "Enum",
    "@values": [
      "LineString"
    ]
  },
  "iri://CAMS#Location": {
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class",
    "city": "xsd:string",
    "geometry_location": {
      "@class": [
        {
          "@class": "LineString",
          "@subdocument": []
        },
        {
          "@class": "Point",
          "@subdocument": []
        }
      ],
      "@type": "Optional"
    },
    "postal_code": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "state": "xsd:string",
    "street": "xsd:string"
  },
  "iri://CAMS#MultiPolygon_Type": {
    "@type": "Enum",
    "@values": [
      "MultiPolygon"
    ]
  },
  "iri://CAMS#Name_Type": {
    "@type": "Enum",
    "@values": [
      "name"
    ]
  },
  "iri://CAMS#OSiProperties": {
    "@type": "Class",
    "NAMN1": "xsd:string",
    "OBJECTID": "xsd:integer"
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
  "iri://CAMS#Point": {
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class",
    "coordinates": {
      "@class": "xsd:decimal",
      "@dimensions": 1,
      "@type": "Array"
    },
    "type": {
      "@id": "Point_Type",
      "@type": "Enum",
      "@values": [
        "Point"
      ]
    }
  },
  "iri://CAMS#Point_Type": {
    "@type": "Enum",
    "@values": [
      "Point"
    ]
  },
  "iri://CAMS#Polygon_Type": {
    "@type": "Enum",
    "@values": [
      "Polygon"
    ]
  },
  "iri://CAMS#Properties": {
    "@abstract": [],
    "@type": "Class"
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
  },
  "iri://CAMS#name": {
    "@type": "Class",
    "properties": [
      "CRS84",
      "OSiProperties"
    ],
    "type": {
      "@id": "Name_Type",
      "@type": "Enum",
      "@values": [
        "name"
      ]
    }
  }
}

export const CAMS_FORM_DATA_OLD = {
  "@id": "Asset/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918",
  "@type": "Asset",
  /*"asset_history":
    {
      "@id": "Asset/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918/asset_history/HazardEvent/iri%3A%2F%2FCAMS%23Hazard%2FVolcanos%2520(incl.%2520lahars,%2520pyroclastic%2520flows,%2520volcanic%2520activity)+2011-01-01T01%3A00%3A37Z",
      "@type": "HazardEvent",
      "comment": "Hazzard",
      "date": "2011-01-01T01:00:37Z",
      "hazard": "Volcanos (incl. lahars, pyroclastic flows, volcanic activity)"
    }/*,
    {
      "@id": "Asset/e8be3b68397b2bdbeab147c7f2b993e3abc69dadf893defcebde5761cfe52539/asset_history/UpdateEvent/UE+2011-01-01T01%3A00%3A37Z",
      "@type": "UpdateEvent",
      "comment": "UE",
      "date": "2011-01-01T01:00:37Z"
    }*/
  //,
  "asset_history": [
    {
      "@id": "Asset/e8be3b68397b2bdbeab147c7f2b993e3abc69dadf893defcebde5761cfe52539/asset_history/UpdateEvent/UE+2011-01-01T01%3A00%3A37Z",
      "@type": "UpdateEvent",
      "comment": "UE",
      "date": "2011-01-01T01:00:37Z"
    },
    {
      "@id": "Asset/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918/asset_history/HazardEvent/iri%3A%2F%2FCAMS%23Hazard%2FVolcanos%2520(incl.%2520lahars,%2520pyroclastic%2520flows,%2520volcanic%2520activity)+2011-01-01T01%3A00%3A37Z",
      "@type": "HazardEvent",
      "comment": "Hazzard",
      "date": "2011-01-01T01:00:37Z",
      "hazard": "Volcanos (incl. lahars, pyroclastic flows, volcanic activity)"
    },
    {
      "@id": "Asset/345e3b68397b2bdbeab147c7f2b993e3abc69dadf893defcebde5761cfe52539/asset_history/UpdateEvent/UE+2011-01-01T01%3A00%3A37Z",
      "@type": "UpdateEvent",
      "comment": "UEMiddle",
      "date": "2011-01-01T01:00:37Z"
    }

  ],
  "asset_identifier": "Hospital ",
  "commisioning_date": "2011-01-01T01:00:37Z",
  "design_standards": "abc",
  "last_maintained": "2011-01-01T01:00:37Z",
  "last_modified": "2011-01-01T01:00:37Z",
  "location": "Location/325a7080f9d37b2a4dab1e22a7516ac674e5e2efb9cbfa59ec932c39d723b198",
  "name": "HazzardVolcano",
  "owner": "Owner/5c2c7cd4e5145853aa0a289fd3c9656be84724bc033949e47bfa7fa63b932a2c",
  "spatial_web_identifier": "SpatialWebIdentifier/2e7c4d3e781fff00e303cf0541ed09a7079f2d4af0afce4aef538ba049c0efdf"
}

export const CAMS_FORM_DATA = {
  "@id":"Asset/Marigot",
  "@type":"Asset",
  "asset_history": [
    {
      "@id": "Asset/e8be3b68397b2bdbeab147c7f2b993e3abc69dadf893defcebde5761cfe52539/asset_history/UpdateEvent/UE+2011-01-01T01%3A00%3A37Z",
      "@type": "UpdateEvent",
      "comment": "UE",
      "date": "2011-01-01T01:00:37Z"
    },
    {
      "@id": "Asset/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918/asset_history/HazardEvent/iri%3A%2F%2FCAMS%23Hazard%2FVolcanos%2520(incl.%2520lahars,%2520pyroclastic%2520flows,%2520volcanic%2520activity)+2011-01-01T01%3A00%3A37Z",
      "@type": "HazardEvent",
      "comment": "Hazzard",
      "date": "2011-01-01T01:00:37Z",
      "hazard": "Volcanos (incl. lahars, pyroclastic flows, volcanic activity)"
    },
    {
      "@id": "Asset/345e3b68397b2bdbeab147c7f2b993e3abc69dadf893defcebde5761cfe52539/asset_history/UpdateEvent/UE+2011-01-01T01%3A00%3A37Z",
      "@type": "UpdateEvent",
      "comment": "UEMiddle",
      "date": "2011-01-01T01:00:37Z"
    }

  ]
  /*"asset_identifier":"Marigot",
  "commisioning_date":"2011-01-01T01:00:37Z",
  "design_standards":"Marigot",
  "last_maintained":"2011-01-01T01:00:37Z",
  "last_modified":"2011-01-01T01:00:37Z",
  "location":{
     "@id":"Asset/Marigot/location/Location/cbf3d8956432778d2c3db84533eac02bff76326aa3407436e483361fdf55fd0c",
     "@type":"Location",
     "city":"Marigot",
     "geometry_location":{
        "@id":"Asset/Marigot/location/Asset/Marigot/location/Location/cbf3d8956432778d2c3db84533eac02bff76326aa3407436e483361fdf55fd0c/geometry_location/Point/3ec3de24dab9a66311ff5010df341b05d67bbcd764537f6f3484a8d03d235843",
        "@type":"Point",
        "coordinates":[
           15.53743,
           -61.282
        ],
        "type":"Point"
     },
     "state":"Marigot",
     "street":"Marigot"
  },
  "name":"Marigot",
  "spatial_web_identifier":"SpatialWebIdentifier/927c5a4328352aa3f43648932a23749b180ad8826375ed3ff26e00e0fcc1e2c6"
  */
}


export const CAMS_SCHEMA_LATEST_LOCATION = {
  "iri://CAMS#Asset": {
    "@key": {
      "@fields": [
        "asset_identifier"
      ],
      "@type": "Lexical"
    },
    "@type": "Class",
    "location": {
      "@class": "Location",
      "@subdocument": []
    }
  },
  "iri://CAMS#Geometry": {
    "@abstract": [],
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class"
  },
  "iri://CAMS#LineString": {
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class",
    "coordinates": {
      "@class": "xsd:decimal",
      "@dimensions": 2,
      "@type": "Array"
    },
    "type": {
      "@id": "LineString_Type",
      "@type": "Enum",
      "@values": [
        "LineString"
      ]
    }
  },
  "iri://CAMS#LineString_Type": {
    "@type": "Enum",
    "@values": [
      "LineString"
    ]
  },
  "iri://CAMS#Location": {
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class",
    "city": "xsd:string",
    "geometry_location": {
      "@class": [
        {
          "@class": "LineString",
          "@subdocument": []
        },
        {
          "@class": "Point",
          "@subdocument": []
        }
      ],
      "@type": "Optional"
    },
    "postal_code": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "state": "xsd:string",
    "street": "xsd:string"
  },
  "iri://CAMS#Point": {
    "@key": {
      "@type": "Random"
    },
    "@subdocument": [],
    "@type": "Class",
    "coordinates": {
      "@class": "xsd:decimal",
      "@dimensions": 1,
      "@type": "Array"
    },
    "type": {
      "@id": "Point_Type",
      "@type": "Enum",
      "@values": [
        "Point"
      ]
    }
  },
  "iri://CAMS#Point_Type": {
    "@type": "Enum",
    "@values": [
      "Point"
    ]
  }
}

export const LOCATION_FORM_DATA = {
  location: {
    "@id": "Asset/Portsmouth/location/Location/084aa8f65af81a000625d235b5399c3fe6142ed55570207a94a6acc3478b1e54",
    "@type": "Location",
    "city": "Portsmouth City",
    "geometry_location": {
      "@id": "Asset/Portsmouth/location/Asset/Portsmouth/location/Location/084aa8f65af81a000625d235b5399c3fe6142ed55570207a94a6acc3478b1e54/geometry_location/Point/8b2335e9eb5322590f9b42cde88c070231c2b12f1d2ab3d1244105be052b7004",
      "@type": "Point",
      "coordinates": [15.5562, -61.4581],
      "type": "Point"
    },
    "postal_code": "Portsmouth City",
    "state": "Portsmouth City",
    "street": "Portsmouth City"
},"asset_history": [
  {
    "@id": "Asset/e8be3b68397b2bdbeab147c7f2b993e3abc69dadf893defcebde5761cfe52539/asset_history/UpdateEvent/UE+2011-01-01T01%3A00%3A37Z",
    "@type": "UpdateEvent",
    "comment": "UE",
    "date": "2011-01-01T01:00:37Z"
  },
  {
    "@id": "Asset/908cdf8db2fa9f843f063669171280eb448e3403d837cb440726ab394043e918/asset_history/HazardEvent/iri%3A%2F%2FCAMS%23Hazard%2FVolcanos%2520(incl.%2520lahars,%2520pyroclastic%2520flows,%2520volcanic%2520activity)+2011-01-01T01%3A00%3A37Z",
    "@type": "HazardEvent",
    "comment": "Hazzard",
    "date": "2011-01-01T01:00:37Z",
    "hazard": "Volcanos (incl. lahars, pyroclastic flows, volcanic activity)"
  },
  {
    "@id": "Asset/345e3b68397b2bdbeab147c7f2b993e3abc69dadf893defcebde5761cfe52539/asset_history/UpdateEvent/UE+2011-01-01T01%3A00%3A37Z",
    "@type": "UpdateEvent",
    "comment": "UEMiddle",
    "date": "2011-01-01T01:00:37Z"
  }

]
}


export const CAMS_FORM_DATA_LOCATION = {
  "@id": "Location/325a7080f9d37b2a4dab1e22a7516ac674e5e2efb9cbfa59ec932c39d723b198",
  "@type": "Location",
  "city": "Dublin",
  "geo_location": {
    "@id": "Location/325a7080f9d37b2a4dab1e22a7516ac674e5e2efb9cbfa59ec932c39d723b198/geo_location/GeoCoordinate/52.5595+-8.0432",
    "@type": "GeoCoordinate",
    "latitude": 52.5595,
    "longitude": -8.0432
  },
  "postal_code": "D16 K797",
  "state": "Dublin",
  "street": "Dundrum Gate"
}



export const CAMS_TYPE = "Asset"

/*
{
   "location":{
      "geometry_location":{
         "@type":"LineString",
         "coordinates":[
            [
               [
                  15.58333,
                  -61.46667
               ],
               [
                  15.30174,
                  -61.38808
               ]
            ]
         ],
         "comment":"HazzardHELLO",
         "type":"LineString"
      },
      "@type":"Location",
      "city":"dublin",
      "postal_code":"6",
      "state":"Dublin",
      "street":"5 beverly leinster square rathmines dublin 6"
   },
   "asset_identifier":"gas station",
   "commisioning_date":"2011-01-01T01:00:37Z",
   "design_standards":"abc",
   "last_maintained":"2011-01-01T01:00:37Z",
   "last_modified":"2011-01-01T01:00:37Z",
   "name":"Kitty Jose",
   "spatial_web_identifier":"SpatialWebIdentifier/927c5a4328352aa3f43648932a23749b180ad8826375ed3ff26e00e0fcc1e2c6",
   "@type":"Asset"
}*/