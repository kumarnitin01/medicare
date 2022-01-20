const commonModel = {
  login(conn, params, collection) {
    try {
      return new Promise((resolve, reject) => {
        let data = conn.collection(collection).find(params).toArray();
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  },
  insertData(conn, params, collection) {
    try {
      return new Promise((resolve, reject) => {
        let data = conn.collection(collection).insertOne(params);

        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  },
  getDataByQuery(conn, params, collection, sortField, sortby = -1) {
    try {
      console.log("get data by query");
      return new Promise((resolve, reject) => {
        let data = [];
        if (sortField) {
          data = conn
            .collection(collection)
            .aggregate(params)
            .sort({ [sortField]: sortby })
            .toArray();
          resolve(data);
        } else {
          data = conn.collection(collection).aggregate(params).toArray();
          resolve(data);
        }
      });
    } catch (error) {
      reject(error);
    }
  },
  deleteDataByQuery(conn, params, collection) {
    try {
      return new Promise((resolve, reject) => {
        let data = conn.collection(collection).deleteOne(params);
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  },
  updateData(conn, where, set, collection) {
    try {
      return new Promise((resolve, reject) => {
        let data = conn.collection(collection).updateOne(where, set);
        resolve(data);
      });
    } catch (error) {
      reject(error);
      console.log(reject(error));
    }
  },
};
module.exports = commonModel;
