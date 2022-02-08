// function to extract latitude and longitude from query results
export function extractLocations(results) {
    let docs = []
    if(!Array.isArray(results)) return docs
    results.map(item => {
        docs.push({
            latitude: item["Latitude"]["@value"] ? item["Latitude"]["@value"] : null,
            longitude: item["Longitude"]["@value"] ? item["Longitude"]["@value"] : null,
            id: item["@id"]? item["@id"] : null
        })
    })
    return docs
}