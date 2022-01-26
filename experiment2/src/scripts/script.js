
const TerminusDBClient = require("@terminusdb/terminusdb-client")
const {data} = require("./restaurants")
const token = require("./ref")
const {transform} = require("./transform")

//constants
const team = "team2022", dataProduct = "Restaurants"

// connect to client
const client = new TerminusDBClient.WOQLClient(`https://cloud.terminusdb.com/${team}/`, {
    user: "kitty@terminusdb.com",
    organization: team
});

client.setApiKey(token)


const connect = async () => {
    try {
        client.db(dataProduct)
        console.log(`Successfully connected to ${dataProduct}`)
    } catch (err) {
        console.error(`Error in connecting to ${dataProduct}`, err)
    }
}

const addDocuments = async (transformed) => {
    try {
        client.addDocument(transformed[0], null , dataProduct ,"add new doc")
        console.log(`Successfully added doc ${JSON.stringify(transformed[0], null, 2)}`)
    } catch (err) {
        console.error(`Error in connecting to ${dataProduct}`, err)
    }
}

let transformed = transform(data)
connect()
addDocuments(transformed)


