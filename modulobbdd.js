// CLASE: - EJEMPLO. Módulo que se utilizará para hacer consultas a las bbdd. - Documento creado 14/09
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

//Create.

const connect =  async () => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => { console.log(err); })
    return client;
}   

exports.createCustomers = async ( newListing) => {
    const client = await connect();
    const result = await client.db("mydb")
        .collection("customers")
        .insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}
//Read
exports.readCustomers = async (nombre)  => {
    const client = await connect();
    result = await client
        .db("mydb")
        .collection("customers")
        .findOne({ name: nombre });
    console.log(result)
    if (result) {
        console.log(`Found a listing in the collection with the name '${nombre}':`);
        return(result);
    } else {
        console.log(`No listings found with the name '${nombre}'`);
        return null
    }
}
/*
Update
exports.updateCustomers = () => {

}
//Delete
exports.deleteCustomers = () => {

}
*/
