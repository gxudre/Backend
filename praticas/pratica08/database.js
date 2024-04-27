import { MongoClient } from "mongodb";

const url = "mongodb+srv://gxudre:Xudre123426!@cluster0.vcqxfh9.mongodb.net/";

let client = new MongoClient(url);

async  function conectarDb(){
    client.connect();
    return client.db('agenda');

};

module.exports = conectarDb;