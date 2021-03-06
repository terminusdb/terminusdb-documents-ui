
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
	  /*"@documentation": {
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
	  },*/
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
   /*"capacity":{
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
   "name":"ASCO GR",*/
   "output":[
      {
         "@id":"NuclearPowerPlant/ASCO%20GR/output/AnnualOutput/2015",
         "@type":"AnnualOutput",
         "Aoutput":{
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
         "Aoutput":{
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
         "Aoutput":{
            "@id":"NuclearPowerPlant/ASCO%20GR/output/NuclearPowerPlant/ASCO%20GR/output/AnnualOutput/2017/output/Quantity/http%3A%2F%2Flib.terminusdb.com%2Fnuclear%2FUnit%2FGWh+15241.801",
            "@type":"Quantity",
            "quantity":15241.801,
            "unit":"Unit/GWh"
         },
         "year":"2017"
      }
   ],
   //"owner":"ENDESA GENERACION S.A.",
   //"url":"http://www.ree.es/en/statistical-data-of-spanish-electrical-system/annual-report/preliminary-report-spanish-electricity-system-2015"
}



/*** FULL  ***/
export const NUCLEAR_SCHEMA ={
	"http://lib.terminusdb.com/nuclear#AnnualCapacityFactor": {
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
	},
	"http://lib.terminusdb.com/nuclear#AnnualOutput": {
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
	  "output": {
		"@class": "Quantity",
		"@subdocument": []
	  },
	  "year": "xsd:gYear"
	},
	"http://lib.terminusdb.com/nuclear#Compound": {
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
	},
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
	  "capacity": {
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
	  "name": "xsd:string",
	  "output": {
		"@class": {
		  "@class": "AnnualOutput",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "owner": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "reactors": {
		"@class": [
		  "ExperimentalReactor",
		  "PowerReactor",
		  "ResearchReactor"
		],
		"@type": "Set"
	  },
	  "url": "xsd:string"
	},
	"http://lib.terminusdb.com/nuclear#PowerReactor": {
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
	"http://lib.terminusdb.com/nuclear#Reactor": {
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
	},
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
	"http://lib.seshatdatabank.info/schema#AdministrativeLevels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#AlternativeNames": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Articles": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Atlatl": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#BattleAxes": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Breastplates": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Bridges": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Bronze": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#BureaucracyCharacteristics": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "examination_system": {
		"@class": {
		  "@class": "ExaminationSystem",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "full-time_bureaucrats": {
		"@class": {
		  "@class": "Full-TimeBureaucrats",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "merit_promotion": {
		"@class": {
		  "@class": "MeritPromotion",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "specialized_government_buildings": {
		"@class": {
		  "@class": "SpecializedGovernmentBuildings",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Calendar": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Camels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Canals": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
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
	"http://lib.seshatdatabank.info/schema#CapitalEpistemic": {
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
	  "date_range": {
		"@class": {
		  "@class": "DateRange",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "value": "City"
	},
	"http://lib.seshatdatabank.info/schema#Centralization": {
	  "@type": "Enum",
	  "@values": [
		"none",
		"loose",
		"nominal",
		"unitary state",
		"confederated state",
		"nominal allegiance",
		"polity",
		"quasi-polity"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#CentralizationEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "CentralizationValue",
		  "known": "CentralizationValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CentralizationValue": {
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
	  "value": {
		"@id": "Centralization",
		"@type": "Enum",
		"@values": [
		  "none",
		  "loose",
		  "nominal",
		  "unitary state",
		  "confederated state",
		  "nominal allegiance",
		  "polity",
		  "quasi-polity"
		]
	  }
	},
	"http://lib.seshatdatabank.info/schema#Chainmail": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#City": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "alternative_names": {
		"@class": "xsd:string",
		"@type": "Set"
	  },
	  "location": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "name": "xsd:string"
	},
	"http://lib.seshatdatabank.info/schema#ComplexFortifications": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#CompositeBow": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ConstraintOnExecutiveByGovernment": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ConstraintOnExecutiveByNon-Government": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Copper": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Couriers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Courts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Crossbow": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Daggers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
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
	"http://lib.seshatdatabank.info/schema#DateRangeEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "DateRangeValue",
		  "known": "DateRangeValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DateRangeValue": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "value": {
		"@class": "DateRange",
		"@subdocument": []
	  }
	},
	"http://lib.seshatdatabank.info/schema#DegreeOfCentralization": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "CentralizationValue",
		  "known": "CentralizationValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DeificationOfRulers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "rulers_are_gods": {
		"@class": {
		  "@class": "RulersAreGods",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "rulers_are_legitimated_by_gods": {
		"@class": {
		  "@class": "RulersAreLegitimatedByGods",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Ditch": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Dogs": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Donkeys": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#DrinkingWaterSupplySystems": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Duration": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "DateRangeValue",
		  "known": "DateRangeValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#EarthRamparts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Elephants": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#EliteStatusIsHereditary": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ExaminationSystem": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Fiction": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#FoodStorageSites": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ForeignCoins": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#FormalLegalCode": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#FortifiedCamps": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Full-TimeBureaucrats": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#GeneralPostalService": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
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
	  },
	  "capital": {
		"@class": {
		  "@class": "Capital",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "degree_of_centralization": {
		"@class": {
		  "@class": "DegreeOfCentralization",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "language": {
		"@class": {
		  "@class": "Language",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "original_name": {
		"@class": {
		  "@class": "OriginalName",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "peak_date": {
		"@class": {
		  "@class": "PeakDate",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "preceding_%28quasi%29polity": {
		"@class": {
		  "@class": "Preceding%28Quasi%29Polity",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "relationship_to_preceding_%28quasi%29polity": {
		"@class": {
		  "@class": "RelationshipToPreceding%28Quasi%29Polity",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scale_of_supra-cultural_interaction": {
		"@class": {
		  "@class": "ScaleOfSupra-CulturalInteraction",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "succeeding_%28quasi%29polity": {
		"@class": {
		  "@class": "Succeeding%28Quasi%29Polity",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "supra-polity_relations": {
		"@class": {
		  "@class": "Supra-PolityRelations",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "supracultural_entity": {
		"@class": {
		  "@class": "SupraculturalEntity",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GeoCoordinate": {
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
	"http://lib.seshatdatabank.info/schema#GeoMultiCoordinate": {
	  "@key": {
		"@fields": [
		  "coordinates"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "coordinates": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GeoPolygon": {
	  "@key": {
		"@fields": [
		  "polygon"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "polygon": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "List"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GeoPolyline": {
	  "@key": {
		"@fields": [
		  "polyline"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "polyline": {
		"@class": {
		  "@class": "GeoCoordinate",
		  "@subdocument": []
		},
		"@type": "List"
	  }
	},
	"http://lib.seshatdatabank.info/schema#GunpowderSiegeArtillery": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#HandheldFirearms": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Helmets": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#HierarchicalComplexity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "administrative_levels": {
		"@class": {
		  "@class": "AdministrativeLevels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "military_levels": {
		"@class": {
		  "@class": "MilitaryLevels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "religious_levels": {
		"@class": {
		  "@class": "ReligiousLevels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "settlement_hierarchy": {
		"@class": {
		  "@class": "SettlementHierarchy",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#History": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Horses": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologicalReinforcementOfEquality": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologicalThoughtEquatesElitesAndCommoners": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologicalThoughtEquatesRulersAndCommoners": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IdeologyReinforcesProsociality": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Impeachment": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IndigenousCoins": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Information": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "articles": {
		"@class": {
		  "@class": "Articles",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "calendar": {
		"@class": {
		  "@class": "Calendar",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "couriers": {
		"@class": {
		  "@class": "Couriers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "fiction": {
		"@class": {
		  "@class": "Fiction",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "foreign_coins": {
		"@class": {
		  "@class": "ForeignCoins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "general_postal_service": {
		"@class": {
		  "@class": "GeneralPostalService",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "history": {
		"@class": {
		  "@class": "History",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "indigenous_coins": {
		"@class": {
		  "@class": "IndigenousCoins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "lists_tables_and_classifications": {
		"@class": {
		  "@class": "ListsTablesAndClassifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "mnemonic_devices": {
		"@class": {
		  "@class": "MnemonicDevices",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "non-phonetic_writing": {
		"@class": {
		  "@class": "Non-PhoneticWriting",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "nonwritten_records": {
		"@class": {
		  "@class": "NonwrittenRecords",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "paper_currency": {
		"@class": {
		  "@class": "PaperCurrency",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "philosophy": {
		"@class": {
		  "@class": "Philosophy",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "phonetic_alphabetic_writing": {
		"@class": {
		  "@class": "PhoneticAlphabeticWriting",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "postal_stations": {
		"@class": {
		  "@class": "PostalStations",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "practical_literature": {
		"@class": {
		  "@class": "PracticalLiterature",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "precious_metals": {
		"@class": {
		  "@class": "PreciousMetals",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "religious_literature": {
		"@class": {
		  "@class": "ReligiousLiterature",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "sacred_texts": {
		"@class": {
		  "@class": "SacredTexts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scientific_literature": {
		"@class": {
		  "@class": "ScientificLiterature",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "script": {
		"@class": {
		  "@class": "Script",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "tokens": {
		"@class": {
		  "@class": "Tokens",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "written_records": {
		"@class": {
		  "@class": "WrittenRecords",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#InstitutionalVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "limits_on_power_of_the_chief_executive": {
		"@class": {
		  "@class": "LimitsOnPowerOfTheChiefExecutive",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#IntegerEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IntegerRange": {
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
	"http://lib.seshatdatabank.info/schema#IntegerRangeEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerRangeValue",
		  "known": "IntegerRangeValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IntegerRangeValue": {
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
	  "value": {
		"@class": "IntegerRange",
		"@subdocument": []
	  }
	},
	"http://lib.seshatdatabank.info/schema#IntegerValue": {
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
	  "value": "xsd:integer"
	},
	"http://lib.seshatdatabank.info/schema#Iron": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#IrrigationSystems": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Javelins": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Judges": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LaminarArmor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Language": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LargestScaleCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Law": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "courts": {
		"@class": {
		  "@class": "Courts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "formal_legal_code": {
		"@class": {
		  "@class": "FormalLegalCode",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "judges": {
		"@class": {
		  "@class": "Judges",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "professional_lawyers": {
		"@class": {
		  "@class": "ProfessionalLawyers",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#LeatherCloth": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LimbProtection": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LimitsOnPowerOfTheChiefExecutive": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "constraint_on_executive_by_government": {
		"@class": {
		  "@class": "ConstraintOnExecutiveByGovernment",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "constraint_on_executive_by_non-government": {
		"@class": {
		  "@class": "ConstraintOnExecutiveByNon-Government",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "impeachment": {
		"@class": {
		  "@class": "Impeachment",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#ListsTablesAndClassifications": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#LongWalls": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Markets": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MerchantShipsPressedIntoService": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MeritPromotion": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MilitaryLevels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MilitaryTechnologies": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "atlatl": {
		"@class": {
		  "@class": "Atlatl",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "battle_axes": {
		"@class": {
		  "@class": "BattleAxes",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "breastplates": {
		"@class": {
		  "@class": "Breastplates",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "bronze": {
		"@class": {
		  "@class": "Bronze",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "camels": {
		"@class": {
		  "@class": "Camels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "chainmail": {
		"@class": {
		  "@class": "Chainmail",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "complex_fortifications": {
		"@class": {
		  "@class": "ComplexFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "composite_bow": {
		"@class": {
		  "@class": "CompositeBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "copper": {
		"@class": {
		  "@class": "Copper",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "crossbow": {
		"@class": {
		  "@class": "Crossbow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "daggers": {
		"@class": {
		  "@class": "Daggers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ditch": {
		"@class": {
		  "@class": "Ditch",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "dogs": {
		"@class": {
		  "@class": "Dogs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "donkeys": {
		"@class": {
		  "@class": "Donkeys",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "earth_ramparts": {
		"@class": {
		  "@class": "EarthRamparts",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "elephants": {
		"@class": {
		  "@class": "Elephants",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "fortified_camps": {
		"@class": {
		  "@class": "FortifiedCamps",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "gunpowder_siege_artillery": {
		"@class": {
		  "@class": "GunpowderSiegeArtillery",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "handheld_firearms": {
		"@class": {
		  "@class": "HandheldFirearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "helmets": {
		"@class": {
		  "@class": "Helmets",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "horses": {
		"@class": {
		  "@class": "Horses",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "iron": {
		"@class": {
		  "@class": "Iron",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "javelins": {
		"@class": {
		  "@class": "Javelins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "laminar_armor": {
		"@class": {
		  "@class": "LaminarArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "leather_cloth": {
		"@class": {
		  "@class": "LeatherCloth",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "limb_protection": {
		"@class": {
		  "@class": "LimbProtection",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "long_walls": {
		"@class": {
		  "@class": "LongWalls",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "merchant_ships_pressed_into_service": {
		"@class": {
		  "@class": "MerchantShipsPressedIntoService",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moat": {
		"@class": {
		  "@class": "Moat",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "modern_fortifications": {
		"@class": {
		  "@class": "ModernFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "plate_armor": {
		"@class": {
		  "@class": "PlateArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "polearms": {
		"@class": {
		  "@class": "Polearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scaled_armor": {
		"@class": {
		  "@class": "ScaledArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "self_bow": {
		"@class": {
		  "@class": "SelfBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "settlements_in_a_defensive_position": {
		"@class": {
		  "@class": "SettlementsInADefensivePosition",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "shields": {
		"@class": {
		  "@class": "Shields",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "sling_siege_engines": {
		"@class": {
		  "@class": "SlingSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "slings": {
		"@class": {
		  "@class": "Slings",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "small_vessels_%28canoes_etc%29": {
		"@class": {
		  "@class": "SmallVessels%28CanoesEtc%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "spears": {
		"@class": {
		  "@class": "Spears",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "specialized_military_vessels": {
		"@class": {
		  "@class": "SpecializedMilitaryVessels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "steel": {
		"@class": {
		  "@class": "Steel",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28non-mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Non-Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "swords": {
		"@class": {
		  "@class": "Swords",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "tension_siege_engines": {
		"@class": {
		  "@class": "TensionSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "war_clubs": {
		"@class": {
		  "@class": "WarClubs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "wood_bark_etc": {
		"@class": {
		  "@class": "WoodBarkEtc",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "wooden_palisades": {
		"@class": {
		  "@class": "WoodenPalisades",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MinesOrQuarries": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MnemonicDevices": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Moat": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ModernFortifications": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralConcernIsPrimary": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementInAfterlife": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementInThisLife": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementIsAgentic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementIsCertain": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementIsTargeted": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingEnforcementOfRulers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingNormsAreBroad": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingReligionAdoptedByCommoners": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingReligionAdoptedByElites": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#MoralizingSupernaturalPowers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "moral_concern_is_primary": {
		"@class": {
		  "@class": "MoralConcernIsPrimary",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_in_afterlife": {
		"@class": {
		  "@class": "MoralizingEnforcementInAfterlife",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_in_this_life": {
		"@class": {
		  "@class": "MoralizingEnforcementInThisLife",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_is_agentic": {
		"@class": {
		  "@class": "MoralizingEnforcementIsAgentic",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_is_certain": {
		"@class": {
		  "@class": "MoralizingEnforcementIsCertain",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_is_targeted": {
		"@class": {
		  "@class": "MoralizingEnforcementIsTargeted",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_enforcement_of_rulers": {
		"@class": {
		  "@class": "MoralizingEnforcementOfRulers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_norms_are_broad": {
		"@class": {
		  "@class": "MoralizingNormsAreBroad",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_religion_adopted_by_commoners": {
		"@class": {
		  "@class": "MoralizingReligionAdoptedByCommoners",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "moralizing_religion_adopted_by_elites": {
		"@class": {
		  "@class": "MoralizingReligionAdoptedByElites",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostDysphoricCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostEuphoricCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostFrequentCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#MostWidespreadCollectiveRitualOfTheOfficialCult": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "duration": {
		"@class": {
		  "@class": "Duration",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Non-PhoneticWriting": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#NonwrittenRecords": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#NormativeIdeologicalAspectsOfEquityAndProsociality": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "ideological_reinforcement_of_equality": {
		"@class": {
		  "@class": "IdeologicalReinforcementOfEquality",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ideological_thought_equates_elites_and_commoners": {
		"@class": {
		  "@class": "IdeologicalThoughtEquatesElitesAndCommoners",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ideological_thought_equates_rulers_and_commoners": {
		"@class": {
		  "@class": "IdeologicalThoughtEquatesRulersAndCommoners",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ideology_reinforces_prosociality": {
		"@class": {
		  "@class": "IdeologyReinforcesProsociality",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "production_of_public_goods": {
		"@class": {
		  "@class": "ProductionOfPublicGoods",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#OriginalName": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PaperCurrency": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PeakDate": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "DateRangeValue",
		  "known": "DateRangeValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Philosophy": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PhoneticAlphabeticWriting": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PlateArmor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Polearms": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Polity": {
	  "@type": "Class",
	  "general_variables": {
		"@class": {
		  "@class": "GeneralVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "institutional_variables": {
		"@class": {
		  "@class": "InstitutionalVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "religion_and_normative_ideology": {
		"@class": {
		  "@class": "ReligionAndNormativeIdeology",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "social_complexity_variables": {
		"@class": {
		  "@class": "SocialComplexityVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "social_mobility": {
		"@class": {
		  "@class": "SocialMobility",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "warfare_variables": {
		"@class": {
		  "@class": "WarfareVariables",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#PolityPopulation": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PolityTerritory": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PopulationOfTheLargestSettlement": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Ports": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PostalStations": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PracticalLiterature": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Preceding%28Quasi%29Polity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PrecedingPolity": {
	  "@type": "Class",
	  "polity": "Polity",
	  "preceding": "Polity",
	  "relationship": {
		"@class": {
		  "@id": "PrecedingPolityRelationship",
		  "@type": "Enum",
		  "@values": [
			"continuity",
			"hostile",
			"population migration",
			"replacement",
			"continuity",
			"disruption",
			"vassalage",
			"elite migration",
			"cultural assimilation",
			"indigenous revolt"
		  ]
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#PrecedingPolityRelationship": {
	  "@type": "Enum",
	  "@values": [
		"continuity",
		"hostile",
		"population migration",
		"replacement",
		"continuity",
		"disruption",
		"vassalage",
		"elite migration",
		"cultural assimilation",
		"indigenous revolt"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#PreciousMetals": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Presence": {
	  "@type": "Enum",
	  "@values": [
		"present",
		"absent"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#PresenceEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#PresenceValue": {
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
	  "value": {
		"@id": "Presence",
		"@type": "Enum",
		"@values": [
		  "present",
		  "absent"
		]
	  }
	},
	"http://lib.seshatdatabank.info/schema#ProductionOfPublicGoods": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalLawyers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalMilitaryOfficers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalPriesthood": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ProfessionalSoldiers": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Professions": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "professional_military_officers": {
		"@class": {
		  "@class": "ProfessionalMilitaryOfficers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "professional_priesthood": {
		"@class": {
		  "@class": "ProfessionalPriesthood",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "professional_soldiers": {
		"@class": {
		  "@class": "ProfessionalSoldiers",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Ra": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#RelationshipToPreceding%28Quasi%29Polity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ReligionAndNormativeIdeology": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "deification_of_rulers": {
		"@class": {
		  "@class": "DeificationOfRulers",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "moralizing_supernatural_powers": {
		"@class": {
		  "@class": "MoralizingSupernaturalPowers",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "normative_ideological_aspects_of_equity_and_prosociality": {
		"@class": {
		  "@class": "NormativeIdeologicalAspectsOfEquityAndProsociality",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#ReligiousLevels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ReligiousLiterature": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Roads": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#RulersAreGods": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#RulersAreLegitimatedByGods": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SacredTexts": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ScaleOfSupra-CulturalInteraction": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ScaledArmor": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#ScientificLiterature": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Script": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SelfBow": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SettlementHierarchy": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "IntegerValue",
		  "known": "IntegerValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SettlementsInADefensivePosition": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Shields": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SlingSiegeEngines": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Slings": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SmallVessels%28CanoesEtc%29": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SocialComplexityVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "bureaucracy_characteristics": {
		"@class": {
		  "@class": "BureaucracyCharacteristics",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "hierarchical_complexity": {
		"@class": {
		  "@class": "HierarchicalComplexity",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "information": {
		"@class": {
		  "@class": "Information",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "law": {
		"@class": {
		  "@class": "Law",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "professions": {
		"@class": {
		  "@class": "Professions",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "social_scale": {
		"@class": {
		  "@class": "SocialScale",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "specialized_buildings%3A_polity_owned": {
		"@class": {
		  "@class": "SpecializedBuildings%3APolityOwned",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#SocialMobility": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "status": {
		"@class": {
		  "@class": "Status",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#SocialScale": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "polity_population": {
		"@class": {
		  "@class": "PolityPopulation",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "polity_territory": {
		"@class": {
		  "@class": "PolityTerritory",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "population_of_the_largest_settlement": {
		"@class": {
		  "@class": "PopulationOfTheLargestSettlement",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Spears": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SpecializedBuildings%3APolityOwned": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "bridges": {
		"@class": {
		  "@class": "Bridges",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "canals": {
		"@class": {
		  "@class": "Canals",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "drinking_water_supply_systems": {
		"@class": {
		  "@class": "DrinkingWaterSupplySystems",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "food_storage_sites": {
		"@class": {
		  "@class": "FoodStorageSites",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "irrigation_systems": {
		"@class": {
		  "@class": "IrrigationSystems",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "markets": {
		"@class": {
		  "@class": "Markets",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "mines_or_quarries": {
		"@class": {
		  "@class": "MinesOrQuarries",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ports": {
		"@class": {
		  "@class": "Ports",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "roads": {
		"@class": {
		  "@class": "Roads",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#SpecializedGovernmentBuildings": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SpecializedMilitaryVessels": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Status": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "elite_status_is_hereditary": {
		"@class": {
		  "@class": "EliteStatusIsHereditary",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Steel": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StoneWalls%28Mortared%29": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StoneWalls%28Non-Mortared%29": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#StringEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
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
	"http://lib.seshatdatabank.info/schema#Succeeding%28Quasi%29Polity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Supra-PolityRelations": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "SupraPolityRelationsValue",
		  "known": "SupraPolityRelationsValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SupraPolityRelations": {
	  "@type": "Enum",
	  "@values": [
		"none",
		"alliance",
		"vassalage",
		"nominal",
		"personal union"
	  ]
	},
	"http://lib.seshatdatabank.info/schema#SupraPolityRelationsEpistemic": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "SupraPolityRelationsValue",
		  "known": "SupraPolityRelationsValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#SupraPolityRelationsValue": {
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
	  "value": {
		"@id": "SupraPolityRelations",
		"@type": "Enum",
		"@values": [
		  "none",
		  "alliance",
		  "vassalage",
		  "nominal",
		  "personal union"
		]
	  }
	},
	"http://lib.seshatdatabank.info/schema#SupraculturalEntity": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Swords": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#TemporalScope": {
	  "@abstract": [],
	  "@type": "Class",
	  "date_range": {
		"@class": {
		  "@class": "DateRange",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#TensionSiegeEngines": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Tokens": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#Value": {
	  "@abstract": [],
	  "@subdocument": [],
	  "@type": "Class",
	  "date_range": {
		"@class": {
		  "@class": "DateRange",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"http://lib.seshatdatabank.info/schema#Variable": {
	  "@abstract": [],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WarClubs": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WarfareVariables": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "atlatl": {
		"@class": {
		  "@class": "Atlatl",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "battle_axes": {
		"@class": {
		  "@class": "BattleAxes",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "breastplates": {
		"@class": {
		  "@class": "Breastplates",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "bronze": {
		"@class": {
		  "@class": "Bronze",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "camels": {
		"@class": {
		  "@class": "Camels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "chainmail": {
		"@class": {
		  "@class": "Chainmail",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "complex_fortifications": {
		"@class": {
		  "@class": "ComplexFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "composite_bow": {
		"@class": {
		  "@class": "CompositeBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "copper": {
		"@class": {
		  "@class": "Copper",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "crossbow": {
		"@class": {
		  "@class": "Crossbow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "daggers": {
		"@class": {
		  "@class": "Daggers",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "dogs": {
		"@class": {
		  "@class": "Dogs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "donkeys": {
		"@class": {
		  "@class": "Donkeys",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "elephants": {
		"@class": {
		  "@class": "Elephants",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "gunpowder_siege_artillery": {
		"@class": {
		  "@class": "GunpowderSiegeArtillery",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "handheld_firearms": {
		"@class": {
		  "@class": "HandheldFirearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "helmets": {
		"@class": {
		  "@class": "Helmets",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "horses": {
		"@class": {
		  "@class": "Horses",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "iron": {
		"@class": {
		  "@class": "Iron",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "javelins": {
		"@class": {
		  "@class": "Javelins",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "laminar_armor": {
		"@class": {
		  "@class": "LaminarArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "largest_scale_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "LargestScaleCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "leather_cloth": {
		"@class": {
		  "@class": "LeatherCloth",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "limb_protection": {
		"@class": {
		  "@class": "LimbProtection",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "long_walls": {
		"@class": {
		  "@class": "LongWalls",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "merchant_ships_pressed_into_service": {
		"@class": {
		  "@class": "MerchantShipsPressedIntoService",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "military_technologies": {
		"@class": {
		  "@class": "MilitaryTechnologies",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "moat": {
		"@class": {
		  "@class": "Moat",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "modern_fortifications": {
		"@class": {
		  "@class": "ModernFortifications",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "most_dysphoric_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostDysphoricCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "most_euphoric_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostEuphoricCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "most_frequent_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostFrequentCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "most_widespread_collective_ritual_of_the_official_cult": {
		"@class": {
		  "@class": "MostWidespreadCollectiveRitualOfTheOfficialCult",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "plate_armor": {
		"@class": {
		  "@class": "PlateArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "polearms": {
		"@class": {
		  "@class": "Polearms",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "ra": {
		"@class": {
		  "@class": "Ra",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "scaled_armor": {
		"@class": {
		  "@class": "ScaledArmor",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "self_bow": {
		"@class": {
		  "@class": "SelfBow",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "settlements_in_a_defensive_position": {
		"@class": {
		  "@class": "SettlementsInADefensivePosition",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "shields": {
		"@class": {
		  "@class": "Shields",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "sling_siege_engines": {
		"@class": {
		  "@class": "SlingSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "slings": {
		"@class": {
		  "@class": "Slings",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "small_vessels_%28canoes_etc%29": {
		"@class": {
		  "@class": "SmallVessels%28CanoesEtc%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "spears": {
		"@class": {
		  "@class": "Spears",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "specialized_military_vessels": {
		"@class": {
		  "@class": "SpecializedMilitaryVessels",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "steel": {
		"@class": {
		  "@class": "Steel",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "stone_walls_%28non-mortared%29": {
		"@class": {
		  "@class": "StoneWalls%28Non-Mortared%29",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "swords": {
		"@class": {
		  "@class": "Swords",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "tension_siege_engines": {
		"@class": {
		  "@class": "TensionSiegeEngines",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "war_clubs": {
		"@class": {
		  "@class": "WarClubs",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "wood_bark_etc": {
		"@class": {
		  "@class": "WoodBarkEtc",
		  "@subdocument": []
		},
		"@type": "Set"
	  }
	},
	"http://lib.seshatdatabank.info/schema#WoodBarkEtc": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WoodenPalisades": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "StringValue",
		  "known": "StringValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	},
	"http://lib.seshatdatabank.info/schema#WrittenRecords": {
	  "@key": {
		"@type": "Random"
	  },
	  "@oneOf": [
		{
		  "inferred": "PresenceValue",
		  "known": "PresenceValue",
		  "suspected_unknown": "sys:Unit",
		  "unknown": "sys:Unit"
		}
	  ],
	  "@subdocument": [],
	  "@type": "Class"
	}
  }



  export const DUM = [
	{
	  "@base": "http://lib.terminusdb.com/nuclear/",
	  "@schema": "http://lib.terminusdb.com/nuclear#",
	  "@type": "@context"
	},
	{
	  "@abstract": [],
	  "@id": "Reactor",
	  "@type": "Class",
	  "test": "xsd:string",
	  "name": "xsd:string"
	},
	{
	  "@id": "NuclearPowerPlant",
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "reactors": {
		"@class": "Reactor",
		"@type": "Set"
	  }
	},
	{
	  "@id": "PowerReactor",
	  "@inherits": "Reactor",
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class"
	},
	{
	  "@id": "ExperimentalReactor",
	  "@inherits": "Reactor",
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class"
	},
	{
	  "@id": "ResearchReactor",
	  "@inherits": "Reactor",
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class"
	}
  ]