import React from 'react'
const TerminusDBClient = require("@terminusdb/terminusdb-client")


//custom field for <FormViewer/>
export function CustomCuisineFieldTemplate(props) {
    const {id, classNames, label, help, required, description, errors, children} = props

    var css = "d-none"
    if(props.schema.title === "cuisine") css = "d-flex"
    if(props.id === "root") css="d-flex"

    return (
        <div className={css}>
            <label htmlFor={id}>{label}{required ? "*" : null}</label>
            {description}
            {children}
            {errors}
            {help}
        </div>
    )
}

export function CustomBoroughFieldTemplate(props) {
    const {id, classNames, label, help, required, description, errors, children} = props

    console.log("props", props)

    var css = "d-none"
    if(props.schema.title === "borough") css = "d-flex"
    if(props.id === "root") css="d-flex"

    return (
        <div className={css}>
            <label htmlFor={id}>{label}{required ? "*" : null}</label>
            {description}
            {children}
            {errors}
            {help}
        </div>
    )
}


function getFilterByQuery (cuisine, borough) {
    let WOQL= TerminusDBClient.WOQL
    let q = WOQL.triple("v:R", "rdf:type", "@schema:Restaurant")
    q.triple("v:R", "@schema:location", "v:location")
        .triple("v:location", "@schema:Latitude", "v:lat")
        .triple("v:location", "@schema:Longitude", "v:long")
        .triple("v:R", "@schema:cuisine", "v:cuisine")
        .triple("v:R", "@schema:borough", "v:borough")
    if(cuisine) {
        let sCuisine = `@schema:cuisine/${cuisine}`
        q.triple("v:R", "@schema:cuisine", sCuisine)
    }
    if(borough) {
        let sBorough = `@schema:borough/${borough}`
        q.triple("v:R", "@schema:borough", sBorough)
    }

    return q
}




//get documents which matches selected cuisine
export async function getDocuments (client, setResults, cuisine, borough)  {
    try {
        let WOQL= TerminusDBClient.WOQL
        let q = getFilterByQuery(cuisine, borough)
        let results = await q.execute(client, "run")
            .then((response) => {
                let docs = []
                if(Array.isArray(response.bindings)){
                    response.bindings.map(item => {
                        docs.push({
                            latitude: item["lat"]["@value"] ? item["lat"]["@value"] : null,
                            longitude: item["long"]["@value"] ? item["long"]["@value"] : null,
                            cuisine: item["cuisine"],
                            borough: item["borough"]
                        })
                    })
                }
                setResults(docs)
            })
    } catch (err) {
        console.error("Error in connecting to TerminusDB", err)
    }
}


