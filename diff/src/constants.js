import L from "leaflet";

export default L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

export const newJSON = {
  "output": {
    "template": "kodu-letter.sdt",
    "theme": "themes/paged-base-kodu.html"
  },
  "Contact": {
    "Age": 20,
    "FirstName": "Jane",
    "LastName": "Duke",
    "Language": "EN",
    "Gender": "M",
    "Interests": {
      "Garden": "no",
      "Porch": "no",
      "CarPort": "no",
      "GardenShed": "no",
      "RealEstateInvestment": "yes",
      "SellingHouse": "yes"
    },
    "Type": 2,
    "": null,
    "Relationships": {
      "Partner": "no",
      "Children": "no"
    },
    "Address": {
      "Street": "Rue Eugène Denis",
      "Zipcode": 1170,
      "City": "Watermael-Boitsfort",
      "Country": "Netherlands",
      "Countrycode": "NL"
    },
    "EmailAddress": "jane@gmail.com"
  },
  "Sender": {
    "Name": "Kodu",
    "Address": {
      "Street": "Steenstraat 12",
      "Zipcode": 2130,
      "City": "Ekeren",
      "Country": "Belgium",
      "Countrycode": "BE"
    },
    "Website": "https://www.koduconstruct.com",
    "Twitter": "https://twitter.com/KoduConstruct",
    "FacebookPage": "https://www.facebook.com/KoduConstruct",
    "Contact": {
      "FirstName": "Sofie",
      "LastName": "Schoenmaeckers",
      "Gender": "F",
      "EmailAddress": "dirk.deschrijver@kodu.com",
      "Picture": "https://randomuser.me/api/portraits/women/65.jpg"
    }
  },
  "Projects": [
    {
      "City": "Perth, Australia",
      "Description": {
        "Dutch": "Een zonnecollector is een apparaat dat zonlicht omzet in warmte (voor omzetting van zonlicht naar elektriciteit wordt een zonnepaneel gebruikt). Deze warmte kan vervolgens gebruikt worden voor proceswarmte, het verwarmen van ruimtes of (tap)water.",
        "French": "Un capteur solaire thermique (ou capteur hélio-thermique ou collecteur solaire ou simplement capteur solaire) est un dispositif conçu pour recueillir l'énergie solaire transmise par rayonnement et la communiquer à un fluide caloporteur (gaz ou liquide) sous forme de chaleur.",
        "English": "Solar water heating (SWH) is the conversion of sunlight into heat for water heating using a solar thermal collector. A variety of configurations are available at varying cost to provide solutions in different climates and latitudes."
      },
      "Picture": "http://koduconstruct.com/images/zonneboiler.jpg"
    }
  ],
  "achievements": ["best runner"]
}

export const oldJSON = {
  "output": {
    "template": "kodu-letter.sdt",
    "theme": "themes/paged-base-kodu.html"
  },
  "Contact": {
    "Age": 41,
    "FirstName": "John",
    "LastName": "Duke",
    "Language": "EN",
    "Gender": "M",
    "Interests": {
      "Garden": "no",
      "Porch": "no",
      "CarPort": "no",
      "GardenShed": "no",
      "RealEstateInvestment": "yes",
      "SellingHouse": "yes"
    },
    "Type": 2,
    "": null,
    "Relationships": {
      "Partner": "no",
      "Children": "no"
    },
    "Address": {
      "Street": "Rue Eugène Denis",
      "Zipcode": 1170,
      "City": "Watermael-Boitsfort",
      "Country": "Belgium",
      "Countrycode": "BE"
    },
    "EmailAddress": "Contact@gmail.com"
  },
  "Sender": {
    "Name": "Kodu",
    "Address": {
      "Street": "Steenstraat 12",
      "Zipcode": 2130,
      "City": "Ekeren",
      "Country": "Belgium",
      "Countrycode": "BE"
    },
    "Website": "https://www.koduconstruct.com",
    "Twitter": "https://twitter.com/KoduConstruct",
    "FacebookPage": "https://www.facebook.com/KoduConstruct",
    "Contact": {
      "FirstName": "Sofie",
      "LastName": "Schoenmaeckers",
      "Gender": "F",
      "EmailAddress": "dirk.deschrijver@kodu.com",
      "Picture": "https://randomuser.me/api/portraits/women/65.jpg"
    }
  },
  "Projects": [
    {
      "City": "Perth, Australia",
      "Description": {
        "Dutch": "Een zonnecollector is een apparaat dat zonlicht omzet in warmte (voor omzetting van zonlicht naar elektriciteit wordt een zonnepaneel gebruikt). Deze warmte kan vervolgens gebruikt worden voor proceswarmte, het verwarmen van ruimtes of (tap)water.",
        "French": "Un capteur solaire thermique (ou capteur hélio-thermique ou collecteur solaire ou simplement capteur solaire) est un dispositif conçu pour recueillir l'énergie solaire transmise par rayonnement et la communiquer à un fluide caloporteur (gaz ou liquide) sous forme de chaleur.",
        "English": "Solar water heating (SWH) is the conversion of sunlight into heat for water heating using a solar thermal collector. A variety of configurations are available at varying cost to provide solutions in different climates and latitudes."
      },
      "Picture": "http://koduconstruct.com/images/zonneboiler.jpg"
    },
    {
      "City": "Cologne, Germany",
      "Description": {
        "Dutch": "Een passiefhuis is een gebouw dat voldoet aan de eisen van het passiefhuis-certificaat. Alle passiefhuizen mogen niet meer dan 15 kWh/m² per jaar verbruiken voor ruimteverwarming.",
        "French": "L'habitat passif est une notion désignant un bâtiment dont la consommation énergétique au mètre carré est très basse, voire entièrement compensée par les apports solaires ou par les calories émises par les apports internes (matériel électrique et habitants).",
        "English": "Passive house (German: Passivhaus) is a rigorous, voluntary standard for energy efficiency in a building, reducing its ecological footprint. It results in ultra-low energy buildings that require little energy for space heating or cooling."
      },
      "Picture": "http://koduconstruct.com/images/passiefhuis.jpg"
    }
  ]
}


export const jane = {
    "@id": "Person/Jane",
    "@type": "Person",
    age: 18,
    name: "Jane",
  };
  
export const janine = {
    "@id": "Person/Jane",
    "@type": "Person",
    age: 18,
    name: "Janine",
    new: "thing"
  };