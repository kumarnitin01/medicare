const commonModel = require("../models/common.model");
const mongodb = require("mongodb");
const objectId = mongodb.ObjectId;

const user = {
  register: async (req, res) => {
    try {
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
    } catch (err) {
      res.status(500).json({ status: false, msg: err.message });
    }
  },
  loginUser: async (req, res) => {
    try {
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
          msg: "User not found",
        });
    } catch (err) {
      res.status(500).json({ status: false, msg: err.message });
    }
  },
  contactus: async (req, res) => {
    try {
      let { name, email, phone, message } = { ...req.body };
      let params = {
        name: name,
        email: email,
        phone: phone,
        message: message,
      };
      await commonModel.insertData(req.db, params, "UserResponse");
      res.status(200).json({ status: true, msg: "user added successfully" });
    } catch (err) {
      res.status(500).json({ status: false, msg: err.message });
    }
  },
};

module.exports = user;
