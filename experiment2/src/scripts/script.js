
const TerminusDBClient = require("@terminusdb/terminusdb-client")
const {data} = require("./restaurants")
const {token} = require("./ref")
const {transform} = require("./transform")

//constants
const team = "team2022", dataProduct = "Restaurants"

// connect to client
const client = new TerminusDBClient.WOQLClient(`https://cloud.terminusdb.com/${team}/`, {
    user: "kitty@terminusdb.com",
    organization: team
});

client.setApiKey(token)
client.db(dataProduct)



const addDocuments = async (transformed) => {
    try {
        client.addDocument(transformed, null , dataProduct ,"add new doc")
        console.log(`Successfully added doc ${JSON.stringify(transformed, null, 2)}`)
    } catch (err) {
        console.error(`Error in connecting to ${dataProduct}`, err)
    }
}

let transformed = transform(data)
addDocuments(transformed)


