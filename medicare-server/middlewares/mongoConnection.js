const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://pankajkumar:pankaj001@cluster0.o3sjy.mongodb.net/MEDI-CARE?retryWrites=true&w=majority";

function mongoConn() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((client) => {
      resolve(client.db());
    });
  });
}

module.exports = mongoConn;

// const { MongoClient } = require("mongodb");
// const uri =
//   "mongodb+srv://pankajkumar:pankaj001@cluster0.o3sjy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
