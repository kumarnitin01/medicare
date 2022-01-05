const commonModel = require("../models/common.model");
const mongodb = require("mongodb");
const objectId = mongodb.ObjectId;

const user = {
  register: async (req, res) => {
    const { name, email, address, gender, phone, password } = {
      ...req.body,
    };
    let params = {
      name: name,
      email: email,
      address: address,
      gender: gender,
      phone: phone,
      password: password,
    };
    await commonModel.insertData(req.db, params, "userDetails");
    res.status(200).json({ status: true, msg: "user added successfully" });
  },
  loginUser: async (req, res) => {
    console.log(req.body);
    let { email, password } = { ...req.body };
    let params = {
      email: email,
      password: password,
    };
    let user = await commonModel.login(req.db, params, "userDetails");
    if (user) {
      res.status(200).json({ data: user[0] });
    } else
      res.json({
        status: false,
      });
  },
};

module.exports = user;
