
export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"


export const DEMO_SCHEMA ={
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
	/*"http://lib.terminusdb.com/nuclear#AnnualCapacityFactor": {
	  "@documentation": {
		"@comment": "Annual Capacity Factor of a Nuclear Power Plant",
		"@properties": {
		  "capacity_factor": "Fraction of maximum output.",
		  "year": "Year of annual recorded data."
		}
	  },
	  "@key": {
		"@fields": [
		  "year"
		],
		"@type": "Lexical"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "capacity_factor": "xsd:decimal",
	  "year": "xsd:gYear"
	},*/
	/*"http://lib.terminusdb.com/nuclear#AnnualOutput": {
	  "@documentation": {
		"@comment": "Annual Total Output of a Nuclear Power Plant",
		"@properties": {
		  "output": "Total energy output.",
		  "year": "Year of annual recorded data."
		}
	  },
	  "@key": {
		"@fields": [
		  "year"
		],
		"@type": "Lexical"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "Aoutput": {
		"@class": "Quantity",
		"@subdocument": []
	  },
	  "year": "xsd:gYear"
	},*/
	/*"http://lib.terminusdb.com/nuclear#Compound": {
	  "@type": "Class",
	  "elements": {
		"@class": "Element",
		"@type": "Set"
	  },
	  "formula": "xsd:string",
	  "name": "xsd:string"
	},
	"http://lib.terminusdb.com/nuclear#Country": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "name": "xsd:string"
	},
	"http://lib.terminusdb.com/nuclear#Dimension": {
	  "@type": "Enum",
	  "@values": [
		"currency",
		"time",
		"length",
		"mass",
		"area",
		"space",
		"temperature",
		"energy",
		"power",
		"force",
		"torque",
		"speed",
		"rotational_speed",
		"acceleration",
		"charge",
		"electric_potential",
		"electric_current",
		"electric_resistance",
		"momentum",
		"angular_momentum",
		"dimensionless"
	  ]
	},
	"http://lib.terminusdb.com/nuclear#Element": {
	  "@type": "Class",
	  "atomic_number": "xsd:nonNegativeInteger",
	  "element_name": {
		"@id": "ElementName",
		"@type": "Enum",
		"@values": [
		  "Hydrogen",
		  "Helium",
		  "Lithium",
		  "Beryllium",
		  "Boron",
		  "Carbon",
		  "Nitrogen",
		  "Oxygen",
		  "Fluorine",
		  "Neon",
		  "Sodium",
		  "Magnesium",
		  "Aluminum",
		  "Silicon",
		  "Phosphorus",
		  "Sulphur",
		  "Chlorine",
		  "Argon",
		  "Potassium",
		  "Calcium",
		  "Scandium",
		  "Titanium",
		  "Vanadium",
		  "Chromium",
		  "Manganese",
		  "Iron",
		  "Cobalt",
		  "Nickel",
		  "Copper",
		  "Zinc",
		  "Gallium",
		  "Germanium",
		  "Arsenic",
		  "Selenium",
		  "Bromine",
		  "Krypton",
		  "Rubidium",
		  "Strontium",
		  "Yttrium",
		  "Zirconium",
		  "Niobium",
		  "Molybdenum",
		  "Technetium",
		  "Ruthenium",
		  "Rhodium",
		  "Palladium",
		  "Silver",
		  "Cadmium",
		  "Indium",
		  "Tin",
		  "Antimony",
		  "Tellurium",
		  "Iodine",
		  "Xenon",
		  "Cesium",
		  "Barium",
		  "Lanthanum",
		  "Cerium",
		  "Praseodymium",
		  "Neodymium",
		  "Promethium",
		  "Samarium",
		  "Europium",
		  "Gadolinium",
		  "Terbium",
		  "Dysprosium",
		  "Holmium",
		  "Erbium",
		  "Thulium",
		  "Ytterbium",
		  "Lutetium",
		  "Hafnium",
		  "Tantalum",
		  "Tungsten",
		  "Rhenium",
		  "Osmium",
		  "Iridium",
		  "Platinum",
		  "Gold",
		  "Mercury",
		  "Thallium",
		  "Lead",
		  "Bismuth",
		  "Polonium",
		  "Astatine",
		  "Radon",
		  "Francium",
		  "Radium",
		  "Actinium",
		  "Thorium",
		  "Protactinium",
		  "Uranium",
		  "Neptunium",
		  "Plutonium",
		  "Americium",
		  "Curium",
		  "Berkelium",
		  "Californium",
		  "Einsteinium",
		  "Fermium",
		  "Mendelevium",
		  "Nobelium",
		  "Lawrencium",
		  "Rutherfordium",
		  "Dubnium",
		  "Seaborgium",
		  "Bohrium",
		  "Hassium",
		  "Meitnerium",
		  "Ununnilium",
		  "Unununium",
		  "Ununbium",
		  "Ununquadium",
		  "Ununhexium",
		  "Ununoctium"
		]
	  },
	  "element_symbol": {
		"@id": "ElementSymbol",
		"@type": "Enum",
		"@values": [
		  "H",
		  "He",
		  "Li",
		  "Be",
		  "B",
		  "C",
		  "N",
		  "O",
		  "F",
		  "Ne",
		  "Na",
		  "Mg",
		  "Al",
		  "Si",
		  "P",
		  "S",
		  "Cl",
		  "Ar",
		  "K",
		  "Ca",
		  "Sc",
		  "Ti",
		  "V",
		  "Cr",
		  "Mn",
		  "Fe",
		  "Co",
		  "Ni",
		  "Cu",
		  "Zn",
		  "Ga",
		  "Ge",
		  "As",
		  "Se",
		  "Br",
		  "Kr",
		  "Rb",
		  "Sr",
		  "Y",
		  "Zr",
		  "Nb",
		  "Mo",
		  "Tc",
		  "Ru",
		  "Rh",
		  "Pd",
		  "Ag",
		  "Cd",
		  "In",
		  "Sn",
		  "Sb",
		  "Te",
		  "I",
		  "Xe",
		  "Cs",
		  "Ba",
		  "La",
		  "Ce",
		  "Pr",
		  "Nd",
		  "Pm",
		  "Sm",
		  "Eu",
		  "Gd",
		  "Tb",
		  "Dy",
		  "Ho",
		  "Er",
		  "Tm",
		  "Yb",
		  "Lu",
		  "Hf",
		  "Ta",
		  "W",
		  "Re",
		  "Os",
		  "Ir",
		  "Pt",
		  "Au",
		  "Hg",
		  "Tl",
		  "Pb",
		  "Bi",
		  "Po",
		  "At",
		  "Rn",
		  "Fr",
		  "Ra",
		  "Ac",
		  "Th",
		  "Pa",
		  "U",
		  "Np",
		  "Pu",
		  "Am",
		  "Cm",
		  "Bk",
		  "Cf",
		  "Es",
		  "Fm",
		  "Md",
		  "No",
		  "Lr",
		  "Rf",
		  "Db",
		  "Sg",
		  "Bh",
		  "Hs",
		  "Mt",
		  "Uun",
		  "Uuu",
		  "Uub",
		  "Uuq",
		  "Uuh",
		  "Uuo"
		]
	  },
	  "isotopes": {
		"@class": "Isotope",
		"@type": "Set"
	  },
	  "name": "xsd:string"
	},
	"http://lib.terminusdb.com/nuclear#ElementName": {
	  "@type": "Enum",
	  "@values": [
		"Hydrogen",
		"Helium",
		"Lithium",
		"Beryllium",
		"Boron",
		"Carbon",
		"Nitrogen",
		"Oxygen",
		"Fluorine",
		"Neon",
		"Sodium",
		"Magnesium",
		"Aluminum",
		"Silicon",
		"Phosphorus",
		"Sulphur",
		"Chlorine",
		"Argon",
		"Potassium",
		"Calcium",
		"Scandium",
		"Titanium",
		"Vanadium",
		"Chromium",
		"Manganese",
		"Iron",
		"Cobalt",
		"Nickel",
		"Copper",
		"Zinc",
		"Gallium",
		"Germanium",
		"Arsenic",
		"Selenium",
		"Bromine",
		"Krypton",
		"Rubidium",
		"Strontium",
		"Yttrium",
		"Zirconium",
		"Niobium",
		"Molybdenum",
		"Technetium",
		"Ruthenium",
		"Rhodium",
		"Palladium",
		"Silver",
		"Cadmium",
		"Indium",
		"Tin",
		"Antimony",
		"Tellurium",
		"Iodine",
		"Xenon",
		"Cesium",
		"Barium",
		"Lanthanum",
		"Cerium",
		"Praseodymium",
		"Neodymium",
		"Promethium",
		"Samarium",
		"Europium",
		"Gadolinium",
		"Terbium",
		"Dysprosium",
		"Holmium",
		"Erbium",
		"Thulium",
		"Ytterbium",
		"Lutetium",
		"Hafnium",
		"Tantalum",
		"Tungsten",
		"Rhenium",
		"Osmium",
		"Iridium",
		"Platinum",
		"Gold",
		"Mercury",
		"Thallium",
		"Lead",
		"Bismuth",
		"Polonium",
		"Astatine",
		"Radon",
		"Francium",
		"Radium",
		"Actinium",
		"Thorium",
		"Protactinium",
		"Uranium",
		"Neptunium",
		"Plutonium",
		"Americium",
		"Curium",
		"Berkelium",
		"Californium",
		"Einsteinium",
		"Fermium",
		"Mendelevium",
		"Nobelium",
		"Lawrencium",
		"Rutherfordium",
		"Dubnium",
		"Seaborgium",
		"Bohrium",
		"Hassium",
		"Meitnerium",
		"Ununnilium",
		"Unununium",
		"Ununbium",
		"Ununquadium",
		"Ununhexium",
		"Ununoctium"
	  ]
	},
	"http://lib.terminusdb.com/nuclear#ElementSymbol": {
	  "@type": "Enum",
	  "@values": [
		"H",
		"He",
		"Li",
		"Be",
		"B",
		"C",
		"N",
		"O",
		"F",
		"Ne",
		"Na",
		"Mg",
		"Al",
		"Si",
		"P",
		"S",
		"Cl",
		"Ar",
		"K",
		"Ca",
		"Sc",
		"Ti",
		"V",
		"Cr",
		"Mn",
		"Fe",
		"Co",
		"Ni",
		"Cu",
		"Zn",
		"Ga",
		"Ge",
		"As",
		"Se",
		"Br",
		"Kr",
		"Rb",
		"Sr",
		"Y",
		"Zr",
		"Nb",
		"Mo",
		"Tc",
		"Ru",
		"Rh",
		"Pd",
		"Ag",
		"Cd",
		"In",
		"Sn",
		"Sb",
		"Te",
		"I",
		"Xe",
		"Cs",
		"Ba",
		"La",
		"Ce",
		"Pr",
		"Nd",
		"Pm",
		"Sm",
		"Eu",
		"Gd",
		"Tb",
		"Dy",
		"Ho",
		"Er",
		"Tm",
		"Yb",
		"Lu",
		"Hf",
		"Ta",
		"W",
		"Re",
		"Os",
		"Ir",
		"Pt",
		"Au",
		"Hg",
		"Tl",
		"Pb",
		"Bi",
		"Po",
		"At",
		"Rn",
		"Fr",
		"Ra",
		"Ac",
		"Th",
		"Pa",
		"U",
		"Np",
		"Pu",
		"Am",
		"Cm",
		"Bk",
		"Cf",
		"Es",
		"Fm",
		"Md",
		"No",
		"Lr",
		"Rf",
		"Db",
		"Sg",
		"Bh",
		"Hs",
		"Mt",
		"Uun",
		"Uuu",
		"Uub",
		"Uuq",
		"Uuh",
		"Uuo"
	  ]
	},
	"http://lib.terminusdb.com/nuclear#ExperimentalReactor": {
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
	  "coolant": {
		"@class": "Substance",
		"@type": "Optional"
	  },
	  "moderator": {
		"@class": "Substance",
		"@type": "Optional"
	  },
	  "name": "xsd:string",
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
	"http://lib.terminusdb.com/nuclear#GeoCoordinate": {
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
	"http://lib.terminusdb.com/nuclear#GeoPerimeter": {
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
	"http://lib.terminusdb.com/nuclear#Isotope": {
	  "@type": "Class",
	  "abundance": {
		"@class": {
		  "@class": "Quantity",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "isotope_name": {
		"@id": "IsotopeName",
		"@type": "Enum",
		"@values": [
		  "1H",
		  "2H",
		  "3H",
		  "3He",
		  "He",
		  "6Li",
		  "7Li",
		  "9Be",
		  "10B",
		  "11B",
		  "12C",
		  "13C",
		  "14C",
		  "14N",
		  "15N",
		  "16O",
		  "17O",
		  "18O",
		  "19F",
		  "20Ne",
		  "21Ne",
		  "22Ne",
		  "23Na",
		  "24Mg",
		  "25Mg",
		  "26Mg",
		  "27Al",
		  "28Si",
		  "29Si",
		  "30Si",
		  "31P",
		  "32S",
		  "33S",
		  "34S",
		  "36S",
		  "35Cl",
		  "37Cl",
		  "36Ar",
		  "38Ar",
		  "40Ar",
		  "39K",
		  "40K",
		  "41K",
		  "40Ca",
		  "42Ca",
		  "43Ca",
		  "44Ca",
		  "46Ca",
		  "48Ca",
		  "45Sc",
		  "46Ti",
		  "47Ti",
		  "48Ti",
		  "49Ti",
		  "50Ti",
		  "50V",
		  "51V",
		  "50Cr",
		  "52Cr",
		  "53Cr",
		  "54Cr",
		  "55Mn",
		  "54Fe",
		  "56Fe",
		  "57Fe",
		  "58Fe",
		  "59Co",
		  "58Ni",
		  "60Ni",
		  "61Ni",
		  "62Ni",
		  "64Ni",
		  "63Cu",
		  "65Cu",
		  "64Zn",
		  "66Zn",
		  "67Zn",
		  "68Zn",
		  "70Zn",
		  "69Ga",
		  "71Ga",
		  "70Ge",
		  "72Ge",
		  "73Ge",
		  "74Ge",
		  "76Ge",
		  "75As",
		  "74Se",
		  "76Se",
		  "77Se",
		  "78Se",
		  "80Se",
		  "82Se",
		  "79Br",
		  "81Br",
		  "78Kr",
		  "80Kr",
		  "82Kr",
		  "83Kr",
		  "84Kr",
		  "86Kr",
		  "85Rb",
		  "87Rb",
		  "84Sr",
		  "86Sr",
		  "87Sr",
		  "88Sr",
		  "89Y",
		  "90Zr",
		  "91Zr",
		  "92Zr",
		  "94Zr",
		  "96Zr",
		  "93Nb",
		  "92Mo",
		  "94Mo",
		  "95Mo",
		  "96Mo",
		  "97Mo",
		  "98Mo",
		  "100Mo",
		  "98Tc",
		  "96Ru",
		  "98Ru",
		  "99Ru",
		  "100Ru",
		  "101Ru",
		  "102Ru",
		  "104Ru",
		  "103Rh",
		  "102Pd",
		  "104Pd",
		  "105Pd",
		  "106Pd",
		  "108Pd",
		  "110Pd",
		  "107Ag",
		  "109Ag",
		  "106Cd",
		  "108Cd",
		  "110Cd",
		  "111Cd",
		  "112Cd",
		  "113Cd",
		  "114Cd",
		  "116Cd",
		  "113In",
		  "115In",
		  "112Sn",
		  "114Sn",
		  "115Sn",
		  "116Sn",
		  "117Sn",
		  "118Sn",
		  "119Sn",
		  "120Sn",
		  "122Sn",
		  "124Sn",
		  "121Sb",
		  "123Sb",
		  "120Te",
		  "122Te",
		  "123Te",
		  "124Te",
		  "125Te",
		  "126Te",
		  "128Te",
		  "130Te",
		  "127I",
		  "124Xe",
		  "126Xe",
		  "128Xe",
		  "129Xe",
		  "130Xe",
		  "131Xe",
		  "132Xe",
		  "134Xe",
		  "136Xe",
		  "133Cs",
		  "130Ba",
		  "132Ba",
		  "134Ba",
		  "135Ba",
		  "136Ba",
		  "137Ba",
		  "138Ba",
		  "138La",
		  "139La",
		  "136Ce",
		  "138Ce",
		  "140Ce",
		  "142Ce",
		  "141Pr",
		  "142Nd",
		  "143Nd",
		  "144Nd",
		  "145Nd",
		  "146Nd",
		  "148Nd",
		  "150Nd",
		  "145Pm",
		  "144Sm",
		  "147Sm",
		  "148Sm",
		  "149Sm",
		  "150Sm",
		  "152Sm",
		  "154Sm",
		  "151Eu",
		  "153Eu",
		  "152Gd",
		  "154Gd",
		  "155Gd",
		  "156Gd",
		  "157Gd",
		  "158Gd",
		  "160Gd",
		  "159Tb",
		  "156Dy",
		  "158Dy",
		  "160Dy",
		  "161Dy",
		  "162Dy",
		  "163Dy",
		  "164Dy",
		  "165Ho",
		  "162Er",
		  "164Er",
		  "166Er",
		  "167Er",
		  "168Er",
		  "170Er",
		  "169Tm",
		  "168Yb",
		  "170Yb",
		  "171Yb",
		  "172Yb",
		  "173Yb",
		  "174Yb",
		  "176Yb",
		  "175Lu",
		  "176Lu",
		  "174Hf",
		  "176Hf",
		  "177Hf",
		  "178Hf",
		  "179Hf",
		  "180Hf",
		  "180Ta",
		  "181Ta",
		  "180W",
		  "182W",
		  "183W",
		  "184W",
		  "186W",
		  "185Re",
		  "187Re",
		  "184Os",
		  "186Os",
		  "187Os",
		  "188Os",
		  "189Os",
		  "190Os",
		  "192Os",
		  "191Ir",
		  "193Ir",
		  "190Pt",
		  "192Pt",
		  "194Pt",
		  "195Pt",
		  "196Pt",
		  "198Pt",
		  "197Au",
		  "196Hg",
		  "198Hg",
		  "199Hg",
		  "200Hg",
		  "201Hg",
		  "202Hg",
		  "204Hg",
		  "203Tl",
		  "205Tl",
		  "204Pb",
		  "206Pb",
		  "207Pb",
		  "208Pb",
		  "209Bi",
		  "209Po",
		  "210At",
		  "222Rn",
		  "223Fr",
		  "226Ra",
		  "227Ac",
		  "232Th",
		  "231Pa",
		  "234U",
		  "235U",
		  "238U",
		  "237Np",
		  "244Pu",
		  "243Am",
		  "247Cm",
		  "247Bk",
		  "251Cf",
		  "252Es",
		  "257Fm",
		  "258Md",
		  "259No",
		  "262Lr",
		  "263Rf",
		  "262Db",
		  "266Sg",
		  "264Bh",
		  "269Hs",
		  "268Mt",
		  "272Uun",
		  "272Uuu",
		  "277Uub",
		  "289Uuq",
		  "289Uuh",
		  "293Uuo"
		]
	  },
	  "mass": {
		"@class": "Quantity",
		"@subdocument": []
	  },
	  "name": "xsd:string"
	},
	"http://lib.terminusdb.com/nuclear#IsotopeName": {
	  "@type": "Enum",
	  "@values": [
		"1H",
		"2H",
		"3H",
		"3He",
		"He",
		"6Li",
		"7Li",
		"9Be",
		"10B",
		"11B",
		"12C",
		"13C",
		"14C",
		"14N",
		"15N",
		"16O",
		"17O",
		"18O",
		"19F",
		"20Ne",
		"21Ne",
		"22Ne",
		"23Na",
		"24Mg",
		"25Mg",
		"26Mg",
		"27Al",
		"28Si",
		"29Si",
		"30Si",
		"31P",
		"32S",
		"33S",
		"34S",
		"36S",
		"35Cl",
		"37Cl",
		"36Ar",
		"38Ar",
		"40Ar",
		"39K",
		"40K",
		"41K",
		"40Ca",
		"42Ca",
		"43Ca",
		"44Ca",
		"46Ca",
		"48Ca",
		"45Sc",
		"46Ti",
		"47Ti",
		"48Ti",
		"49Ti",
		"50Ti",
		"50V",
		"51V",
		"50Cr",
		"52Cr",
		"53Cr",
		"54Cr",
		"55Mn",
		"54Fe",
		"56Fe",
		"57Fe",
		"58Fe",
		"59Co",
		"58Ni",
		"60Ni",
		"61Ni",
		"62Ni",
		"64Ni",
		"63Cu",
		"65Cu",
		"64Zn",
		"66Zn",
		"67Zn",
		"68Zn",
		"70Zn",
		"69Ga",
		"71Ga",
		"70Ge",
		"72Ge",
		"73Ge",
		"74Ge",
		"76Ge",
		"75As",
		"74Se",
		"76Se",
		"77Se",
		"78Se",
		"80Se",
		"82Se",
		"79Br",
		"81Br",
		"78Kr",
		"80Kr",
		"82Kr",
		"83Kr",
		"84Kr",
		"86Kr",
		"85Rb",
		"87Rb",
		"84Sr",
		"86Sr",
		"87Sr",
		"88Sr",
		"89Y",
		"90Zr",
		"91Zr",
		"92Zr",
		"94Zr",
		"96Zr",
		"93Nb",
		"92Mo",
		"94Mo",
		"95Mo",
		"96Mo",
		"97Mo",
		"98Mo",
		"100Mo",
		"98Tc",
		"96Ru",
		"98Ru",
		"99Ru",
		"100Ru",
		"101Ru",
		"102Ru",
		"104Ru",
		"103Rh",
		"102Pd",
		"104Pd",
		"105Pd",
		"106Pd",
		"108Pd",
		"110Pd",
		"107Ag",
		"109Ag",
		"106Cd",
		"108Cd",
		"110Cd",
		"111Cd",
		"112Cd",
		"113Cd",
		"114Cd",
		"116Cd",
		"113In",
		"115In",
		"112Sn",
		"114Sn",
		"115Sn",
		"116Sn",
		"117Sn",
		"118Sn",
		"119Sn",
		"120Sn",
		"122Sn",
		"124Sn",
		"121Sb",
		"123Sb",
		"120Te",
		"122Te",
		"123Te",
		"124Te",
		"125Te",
		"126Te",
		"128Te",
		"130Te",
		"127I",
		"124Xe",
		"126Xe",
		"128Xe",
		"129Xe",
		"130Xe",
		"131Xe",
		"132Xe",
		"134Xe",
		"136Xe",
		"133Cs",
		"130Ba",
		"132Ba",
		"134Ba",
		"135Ba",
		"136Ba",
		"137Ba",
		"138Ba",
		"138La",
		"139La",
		"136Ce",
		"138Ce",
		"140Ce",
		"142Ce",
		"141Pr",
		"142Nd",
		"143Nd",
		"144Nd",
		"145Nd",
		"146Nd",
		"148Nd",
		"150Nd",
		"145Pm",
		"144Sm",
		"147Sm",
		"148Sm",
		"149Sm",
		"150Sm",
		"152Sm",
		"154Sm",
		"151Eu",
		"153Eu",
		"152Gd",
		"154Gd",
		"155Gd",
		"156Gd",
		"157Gd",
		"158Gd",
		"160Gd",
		"159Tb",
		"156Dy",
		"158Dy",
		"160Dy",
		"161Dy",
		"162Dy",
		"163Dy",
		"164Dy",
		"165Ho",
		"162Er",
		"164Er",
		"166Er",
		"167Er",
		"168Er",
		"170Er",
		"169Tm",
		"168Yb",
		"170Yb",
		"171Yb",
		"172Yb",
		"173Yb",
		"174Yb",
		"176Yb",
		"175Lu",
		"176Lu",
		"174Hf",
		"176Hf",
		"177Hf",
		"178Hf",
		"179Hf",
		"180Hf",
		"180Ta",
		"181Ta",
		"180W",
		"182W",
		"183W",
		"184W",
		"186W",
		"185Re",
		"187Re",
		"184Os",
		"186Os",
		"187Os",
		"188Os",
		"189Os",
		"190Os",
		"192Os",
		"191Ir",
		"193Ir",
		"190Pt",
		"192Pt",
		"194Pt",
		"195Pt",
		"196Pt",
		"198Pt",
		"197Au",
		"196Hg",
		"198Hg",
		"199Hg",
		"200Hg",
		"201Hg",
		"202Hg",
		"204Hg",
		"203Tl",
		"205Tl",
		"204Pb",
		"206Pb",
		"207Pb",
		"208Pb",
		"209Bi",
		"209Po",
		"210At",
		"222Rn",
		"223Fr",
		"226Ra",
		"227Ac",
		"232Th",
		"231Pa",
		"234U",
		"235U",
		"238U",
		"237Np",
		"244Pu",
		"243Am",
		"247Cm",
		"247Bk",
		"251Cf",
		"252Es",
		"257Fm",
		"258Md",
		"259No",
		"262Lr",
		"263Rf",
		"262Db",
		"266Sg",
		"264Bh",
		"269Hs",
		"268Mt",
		"272Uun",
		"272Uuu",
		"277Uub",
		"289Uuq",
		"289Uuh",
		"293Uuo"
	  ]
	},*/
	"http://lib.terminusdb.com/nuclear#NuclearPowerPlant": {
	  "@documentation": {
		"@comment": "A Nuclear Power Plant",
		"@properties": {
		  "capacity": "Maximum power capacity",
		  "capacity_factor": "Fraction of total capacity in a given year",
		  "commissioning_year": "Year of commissioning of the plant",
		  "country": "A link to the country in which the plant exists.",
		  "gppd_idnr": "Global Power Plant Database ID Number",
		  "location": "A geo-location of the plant location.",
		  "name": "The name of the plant.",
		  "owner": "Owner of the power plant",
		  "reactors": "Reactors that are present at the power plant",
		  "url": "URL of power plant"
		}
	  },
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  /*"capacity": {
		"@class": "Quantity",
		"@subdocument": []
	  },
	  "capacity_factor": {
		"@class": {
		  "@class": "AnnualCapacityFactor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "commissioning_year": {
		"@class": "xsd:gYear",
		"@type": "Optional"
	  },
	  "country": "Country",
	  "gppd_idnr": "xsd:string",
	  "location": {
		"@class": "GeoCoordinate",
		"@subdocument": []
	  },
	  "name": "xsd:string", */
	  /*"output": {
		"@class": {
		  "@class": "AnnualOutput",
		  "@subdocument": []
		},
		"@type": "Set"
	  },*/
	  /*"owner": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },*/
	  "reactors": {
		"@class": [
		  "ExperimentalReactor",
		  "PowerReactor",
		  "ResearchReactor"
		],
		"@type": "Set"
	  },
	  /*"url": "xsd:string"*/
	},
	/*"http://lib.terminusdb.com/nuclear#PowerReactor": {
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
	  "coolant": {
		"@class": "Substance",
		"@type": "Optional"
	  },
	  "moderator": {
		"@class": "Substance",
		"@type": "Optional"
	  },
	  "name": "xsd:string",
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
	},*/
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
	/*"http://lib.terminusdb.com/nuclear#Reactor": {
	  "@abstract": [],
	  "@documentation": {
		"@comment": "A Nuclear Power Plant",
		"@properties": {
		  "coolant": "What substance is used as a coolant",
		  "moderator": "What substance is used as a moderator.",
		  "name": "The name of the reactor.",
		  "type": "The type of the reactor."
		}
	  },
	  "@type": "Class",
	  "capacity": {
		"@class": {
		  "@class": "Quantity",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "coolant": {
		"@class": "Substance",
		"@type": "Optional"
	  },
	  "moderator": {
		"@class": "Substance",
		"@type": "Optional"
	  },
	  "name": "xsd:string",
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
	"http://lib.terminusdb.com/nuclear#ReactorType": {
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
	"http://lib.terminusdb.com/nuclear#ResearchReactor": {
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
	  "coolant": {
		"@class": "Substance",
		"@type": "Optional"
	  },
	  "moderator": {
		"@class": "Substance",
		"@type": "Optional"
	  },
	  "name": "xsd:string",
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
	"http://lib.terminusdb.com/nuclear#ScrapedSource": {
	  "@documentation": {
		"@comment": "Source of data scraped from a URL on the internet.",
		"@properties": {
		  "name": "Name of the scraped source.",
		  "scraped_at": "Date time at which the resource was scraped.",
		  "url": "The URL of the scraped resource."
		}
	  },
	  "@key": {
		"@fields": [
		  "url",
		  "scraped_at"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "name": "xsd:string",
	  "scraped_at": "xsd:dateTime",
	  "url": "xsd:string"
	},
	"http://lib.terminusdb.com/nuclear#Source": {
	  "@documentation": {
		"@comment": "The Source of some data."
	  },
	  "@type": "Class"
	},
	"http://lib.terminusdb.com/nuclear#SourcedQuantity": {
	  "@documentation": {
		"@comment": "A data point which has a recorded source",
		"@properties": {
		  "source": "The source from which the quantity was found."
		}
	  },
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
	  "source": "Source",
	  "unit": "Unit"
	},
	"http://lib.terminusdb.com/nuclear#Substance": {
	  "@type": "Class",
	  "name": "xsd:string"
	},*/
	"http://lib.terminusdb.com/nuclear#Unit": {
	  "@key": {
		"@fields": [
		  "symbol"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "alternative_name": {
		"@class": "xsd:string",
		"@type": "Set"
	  },
	  "derived_from": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "dimension": {
		"@id": "Dimension",
		"@type": "Enum",
		"@values": [
		  "currency",
		  "time",
		  "length",
		  "mass",
		  "area",
		  "space",
		  "temperature",
		  "energy",
		  "power",
		  "force",
		  "torque",
		  "speed",
		  "rotational_speed",
		  "acceleration",
		  "charge",
		  "electric_potential",
		  "electric_current",
		  "electric_resistance",
		  "momentum",
		  "angular_momentum",
		  "dimensionless"
		]
	  },
	  "name": "xsd:string",
	  "plural": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "symbol": "xsd:string"
	}
  }

export const NUCLEAR_FORM_DATA = {
   "@id":"NuclearPowerPlant/ASCO%20GR",
   "@type":"NuclearPowerPlant",
   "capacity":{
      "@id":"NuclearPowerPlant/ASCO%20GR/capacity/Quantity/http%3A%2F%2Flib.terminusdb.com%2Fnuclear%2FUnit%2FMWe+1990.5",
      "@type":"Quantity",
      "quantity":1990.5,
      "unit":"Unit/MWe"
   },
   "commissioning_year":"1983",
   "country":"Country/Spain",
   "gppd_idnr":"WRI1006213",
   "location":{
      "@id":"NuclearPowerPlant/ASCO%20GR/location/GeoCoordinate/41.2008+0.5679",
      "@type":"GeoCoordinate",
      "latitude":41.2008,
      "longitude":0.5679
   },
   "name":"ASCO GR",
   "output":[
      {
         "@id":"NuclearPowerPlant/ASCO%20GR/output/AnnualOutput/2015",
         "@type":"AnnualOutput",
         "output":{
            "@id":"NuclearPowerPlant/ASCO%20GR/output/NuclearPowerPlant/ASCO%20GR/output/AnnualOutput/2015/output/Quantity/http%3A%2F%2Flib.terminusdb.com%2Fnuclear%2FUnit%2FGWh+15802.182",
            "@type":"Quantity",
            "quantity":15802.182,
            "unit":"Unit/GWh"
         },
         "year":"2015"
      },
      {
         "@id":"NuclearPowerPlant/ASCO%20GR/output/AnnualOutput/2016",
         "@type":"AnnualOutput",
         "output":{
            "@id":"NuclearPowerPlant/ASCO%20GR/output/NuclearPowerPlant/ASCO%20GR/output/AnnualOutput/2016/output/Quantity/http%3A%2F%2Flib.terminusdb.com%2Fnuclear%2FUnit%2FGWh+16029.262",
            "@type":"Quantity",
            "quantity":16029.262,
            "unit":"Unit/GWh"
         },
         "year":"2016"
      },
      {
         "@id":"NuclearPowerPlant/ASCO%20GR/output/AnnualOutput/2017",
         "@type":"AnnualOutput",
         "output":{
            "@id":"NuclearPowerPlant/ASCO%20GR/output/NuclearPowerPlant/ASCO%20GR/output/AnnualOutput/2017/output/Quantity/http%3A%2F%2Flib.terminusdb.com%2Fnuclear%2FUnit%2FGWh+15241.801",
            "@type":"Quantity",
            "quantity":15241.801,
            "unit":"Unit/GWh"
         },
         "year":"2017"
      }
   ],
   "owner":"ENDESA GENERACION S.A.",
   "url":"http://www.ree.es/en/statistical-data-of-spanish-electrical-system/annual-report/preliminary-report-spanish-electricity-system-2015"
}


export const SESHAT_SCHEMA = {
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
	  }
	},
	"http://lib.seshatdatabank.info/schema#AlternativeNames": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "CapitalValue",
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
	  "capital": {
		"@class": {
		  "@class": "Capital",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
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

export const SESHAT_FORM_DATA = {
	"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687",
	"@type": "Polity",
	"general_variables": {
		"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0",
		"@type": "GeneralVariables",
		"alternative_names": [{
			"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a",
			"@type": "AlternativeNames",
			"inferred": {
				"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a/inferred/StringValue/30f5a7097ab3bfa78df534949cc844fe6ae9b2cf3c69a689f1901e27cad436de",
				"@type": "StringValue",
				"date_range": {
					"@id": "Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a/inferred/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/Polity/1af5de7224879855816895ecb1b004d4d7e22cc194bd10ba3f20077dc0dae687/general_variables/GeneralVariables/46e8c13099fefb04791447e0e3742214747e907b4aebd557195e2fc7e1c5daa0/alternative_names/AlternativeNames/8be6d82fe88b62a7a3a0ecf003b99bd1c990d6fde1fbd0b880b72bebdaabbe4a/inferred/StringValue/30f5a7097ab3bfa78df534949cc844fe6ae9b2cf3c69a689f1901e27cad436de/date_range/DateRange/5daa08807967b8fc4bce3e9738f89b0f626e521984eb5b11ac0b417e88c559e8",
					"@type": "DateRange",
					"from": 67,
					"to": 7
				},
				"value": "magic"
			}
		}]
	}
}




export const DEMO_DOCUMENT_TYPE="Polity"

export const DEMO_FORM_DATA= {
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

export const PROFILE_FORM_DATA = {
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

 export const PROFILE_FORM_DATA_USER= {
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

