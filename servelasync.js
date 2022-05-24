//EJEMPLO DE ASYNC.
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

async function findOne() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db("mydb");
        let collection = db.collection('customers');
        let query = { name: 'Peter' }
        let res = await collection.findOne(query);
        console.log(res);
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}

findOne();