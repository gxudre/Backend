const { MongoClient } = require("mongodb");

const url = "mongodb+srv://gxudre:iesbanda@cluster0.vcqxfh9.mongodb.net/";

let db = null;

async  function conectarDb(){
    if(db){
        return db;
    }
    const client = new MongoClient(url);
await client.connect();
db = client.db('agenda');
return db;
};



module.exports = conectarDb;