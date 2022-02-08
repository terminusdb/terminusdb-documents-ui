
export const TYPE = "LineString"

export const SCHEMA = {
  "terminusdb:///schema#CRS84": {
    "@type": "Class",
    "name": {
      "@id": "CRS84_Type",
      "@type": "Enum",
      "@values": [
        "urn:ogc:def:crs:OGC:1.3:CRS84"
      ]
    }
  },
  "terminusdb:///schema#CRS84_Type": {
    "@type": "Enum",
    "@values": [
      "urn:ogc:def:crs:OGC:1.3:CRS84"
    ]
  },
  "terminusdb:///schema#Feature": {
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
  "terminusdb:///schema#FeatureCollection": {
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
  "terminusdb:///schema#FeatureCollection_Type": {
    "@type": "Enum",
    "@values": [
      "FeatureCollection"
    ]
  },
  "terminusdb:///schema#Feature_Type": {
    "@type": "Enum",
    "@values": [
      "Feature"
    ]
  },
  "terminusdb:///schema#Geometry": {
    "@abstract": [],
    "@type": "Class"
  },
  "terminusdb:///schema#GeometryCollection": {
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
  "terminusdb:///schema#GeometryCollection_Type": {
    "@type": "Enum",
    "@values": [
      "GeometryCollection"
    ]
  },
  "terminusdb:///schema#LineString": {
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
  "terminusdb:///schema#LineString_Type": {
    "@type": "Enum",
    "@values": [
      "LineString"
    ]
  },
  "terminusdb:///schema#MultiPolygon": {
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
  "terminusdb:///schema#MultiPolygon_Type": {
    "@type": "Enum",
    "@values": [
      "MultiPolygon"
    ]
  },
  "terminusdb:///schema#Name_Type": {
    "@type": "Enum",
    "@values": [
      "name"
    ]
  },
  "terminusdb:///schema#OSiProperties": {
    "@type": "Class",
    "NAMN1": "xsd:string",
    "OBJECTID": "xsd:integer"
  },
  "terminusdb:///schema#Point": {
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
  "terminusdb:///schema#Point_Type": {
    "@type": "Enum",
    "@values": [
      "Point"
    ]
  },
  "terminusdb:///schema#Polygon": {
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
  "terminusdb:///schema#Polygon_Type": {
    "@type": "Enum",
    "@values": [
      "Polygon"
    ]
  },
  "terminusdb:///schema#Properties": {
    "@abstract": [],
    "@type": "Class"
  },
  "terminusdb:///schema#name": {
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
  },
  "terminusdb:///schema#Location": {
    "@type": "Class",
    "city": "xsd:string",
    "geo_location": {
      "@class": {
        "@class": "GeoCoordinate",
        "@subdocument": []
      },
      "@type": "Optional"
    },
    "geometry_location": {
      "@class": [
        "GeometryCollection",
        "LineString",
        "MultiPolygon",
        "Point",
        "Polygon"
      ],
      "@type": "Optional"
    },
    "postal_code": {
      "@class": "xsd:string",
      "@type": "Optional"
    },
    "state": "xsd:string",
    "street": "xsd:string"
  }
}

export const FORM_DATA_POINT = {
  "@id":"Point/50c0c397820f95f0b87a9dc0e17afecf040d8ac50fdb9d34114a5adc83dc3a53",
  "@type":"Point",
  "coordinates":[
    53.350140,
    -6.266155
  ],
  "type":"Point"
}

export const FORM_DATA_POINT_LINE_STRING= {
  "@id":"LineString/69e05d7f27c5a7be512f7457fd3512fd45c91355af65092229134ed5356257f0",
  "@type":"LineString",
  "coordinates":[
     [
        51,
        6
     ],
     [
        54,
        -6
     ],
     [
      54,
      3
    ],
    [
      51,
      6
   ]
  ],
  "type":"LineString"
}

export const TEMP = {
  "@id":"LineString/03c4e48a056d5cb4f8f3b0b156e23370016616b608594d821f595a431ddaf2e7",
  "@type":"LineString",
  "coordinates":[
     [
        15.58333,
        -61.46667
     ],
     [	15.53743, -61.282],
     [
        15.4,
        -61.43333
     ],
     [
        15.43689,
        -61.43637
     ],
     [
        15.30174,
        -61.38808
     ],

  ],
  "type":"LineString"
}