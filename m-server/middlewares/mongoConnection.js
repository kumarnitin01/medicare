const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const DB = process.env.URI.replace("<password>", process.env.KEY);

function mongoConn() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((client) => {
      resolve(client.db());
    });
  });
}

module.exports = mongoConn;
