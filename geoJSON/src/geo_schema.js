export const TYPE="Polygon"

export const GEO_JSON_FRAMES={
  "@context": {
    "@base": "terminusdb:///data/",
    "@schema": "terminusdb:///schema#",
    "@type": "Context"
  },
  "CRS84": {
    "@type": "Class",
    "name": {
      "@id": "CRS84_Type",
      "@type": "Enum",
      "@values": [
        "urn:ogc:def:crs:OGC:1.3:CRS84"
      ]
    }
  },
  "CRS84_Type": {
    "@type": "Enum",
    "@values": [
      "urn:ogc:def:crs:OGC:1.3:CRS84"
    ]
  },
  "Feature": {
    "@type": "Class",
    "bbox": {
      "@class": "xsd:string",
      "@dimensions": 1,
      "@type": "Array"
    }, 
    "centerline": {
      "@class": [
        "GeometryCollection",
        "LineString",
        "MultiPolygon",
        "Point",
        "Polygon"
      ],
      "@type": "Optional"
    },
    "geometry": [
      "GeometryCollection",
      "LineString",
      "MultiPolygon",
      "Point",
      "Polygon"
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
  "FeatureCollection": {
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
  "FeatureCollection_Type": {
    "@type": "Enum",
    "@values": [
      "FeatureCollection"
    ]
  },
  "Feature_Type": {
    "@type": "Enum",
    "@values": [
      "Feature"
    ]
  },
  "Geometry": {
    "@abstract": [],
    "@type": "Class"
  },
  "GeometryCollection": {
    "@type": "Class",
    "geometries": {
      "@class": [
        "GeometryCollection",
        "LineString",
        "MultiPolygon",
        "Point",
        "Polygon"
      ],
      "@type": "Set"
    },
    "type": {
      "@id": "GeometryCollection_Type",
      "@type": "Enum",
      "@values": [
        "GeometryCollection"
      ]
    }
  },
  "GeometryCollection_Type": {
    "@type": "Enum",
    "@values": [
      "GeometryCollection"
    ]
  },
  "LineString": {
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
  "LineString_Type": {
    "@type": "Enum",
    "@values": [
      "LineString"
    ]
  },
  "MultiPolygon": {
    "@type": "Class",
    "coordinates": {
      "@class": "xsd:decimal",
      "@dimensions": 3,
      "@type": "Array"
    },
    "type": {
      "@id": "MultiPolygon_Type",
      "@type": "Enum",
      "@values": [
        "MultiPolygon"
      ]
    }
  },
  "MultiPolygon_Type": {
    "@type": "Enum",
    "@values": [
      "MultiPolygon"
    ]
  },
  "Name_Type": {
    "@type": "Enum",
    "@values": [
      "name"
    ]
  },
  "OSiProperties": {
    "@type": "Class",
    "NAMN1": "xsd:string",
    "OBJECTID": "xsd:integer"
  },
  "Point": {
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
  "Point_Type": {
    "@type": "Enum",
    "@values": [
      "Point"
    ]
  }, 
  "Polygon": {
    "@type": "Class",
    "coordinates": {
      "@class": "xsd:decimal",
      "@dimensions": 3,
      "@type": "Array"
    },
    "type": {
      "@id": "Polygon_Type",
      "@type": "Enum",
      "@values": [
        "Polygon"
      ]
    }
  },
  "Polygon_Type": {
    "@type": "Enum",
    "@values": [
      "Polygon"
    ]
  },
  "Properties": {
    "@abstract": [],
    "@type": "Class"
  },
  "name": {
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

export const GEO_JSON_FORM_DATA={
  "@id": "Polygon/2bbfb24b924e88f570990d6b05c3e02145777b887c53325d5e16b90c59f5037b",
  "@type": "Polygon",
  "coordinates": [
    [
      [
        51.51,
        -0.12
      ],
      [
        51.51,
        -0.13
      ],
      [
        51.53,
        -0.13
      ]
    ],
    [
      [
        51.51,
        -0.05
      ],
      [
        51.51,
        -0.07
      ],
      [
        51.53,
        -0.07
      ]
    ]
  ],
  "type": "Polygon"
}