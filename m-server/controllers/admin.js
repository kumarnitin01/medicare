const commonModel = require("../models/common.model");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectID;

const admin = {
  login: async (req, res) => {
    console.log("admin")
    const { username, password } = { ...req.body };

    let params = {
      username: username,
      password: password,
    };

    let user = await commonModel.login(req.db, params, "Admin");

    if (user.length > 0) {
      res.json({
        status: true,
        data: user[0],
      });
    } else {
      res.json({ status: false, msg: "Invalid Credentials!" });
    }
  },
  addhospital: async (req, res) => {
    const { hospitalname, location, email, bed, phone, specilization } = {
      ...req.body,
    };

    let params = {
      hospitalName: hospitalname,
      Location: location,
      Email: email,
      bedAvailble: bed,
      Phone: phone,
      Specilization: specilization,
    };
    await commonModel.insertData(req.db, params, "HospitalDetails");
    res.json({ status: true, msg: "Details Added Successfully" });
  },
  adddoctor: async (req, res) => {
    const {
      firstname,
      lastname,
      specilizeField,
      hospital,
      city,
      phonenumber,
      weekdays,
      expr,
    } = {
      ...req.body,
    };

    let params = {
      name: firstname + " " + lastname,
      Specilization: specilizeField,
      Hospital: hospital,
      City: city,
      Contact: phonenumber,
      Weekday: weekdays,
      Experience: expr,
    };
    await commonModel.insertData(req.db, params, "DoctorDetails");
    res.json({ status: true, msg: "Details Added Successfully" });
  },
  listHospital: async (req, res) => {
    let params = [];

    let listHospitals = await commonModel.getDataByQuery(
      req.db,
      params,
      "HospitalDetails",
      null,
      1
    );

    res.json({ status: true, data: listHospitals });
  },
  listdoc: async (req, res) => {
    try {
      let params = [];

      let docs = await commonModel.getDataByQuery(
        req.db,
        params,
        "DoctorDetails",
        null,
        1
      );

      res.status(200).json({ status: true, data: docs });
    } catch (err) {
      res.status(404).json({ status: false, message: err.message });
    }
  },
  deletedetail: async (req, res) => {
    let request = await commonModel.deleteDataByQuery(
      req.db,
      { _id: ObjectId(req.body._id) },
      "HospitalDetails"
    );
    res.json({ status: true, msg: "User Deleted Successfully" });
  },
  deletedoc: async (req, res) => {
    let request = await commonModel.deleteDataByQuery(
      req.db,
      { _id: ObjectId(req.body._id) },
      "DoctorDetails"
    );
    res.json({ status: true, msg: "User Deleted Successfully" });
  },

  editdetails: async (req, res) => {
    const { _id } = { ...req.body };

    let params = [
      {
        $match: {
          _id: ObjectId(req.body._id),
        },
      },
    ];
    let data = await commonModel.getDataByQuery(
      req.db,
      params,
      "HospitalDetails"
    );
    res.json({ status: true, listdata: data });
  },
  updatedetails: async (req, res) => {
    const {
      hospitalname,
      location,
      email,
      bed,
      phone,
      specilization,
      edit_id,
    } = { ...req.body };
    let where = {
      _id: ObjectId(edit_id),
    };
    let set = {
      $set: {
        hospitalName: hospitalname,
        Location: location,
        Email: email,
        bedAvailble: bed,
        Phone: phone,
        Specilization: specilization,
      },
    };

    let data = await commonModel.updateData(
      req.db,
      where,
      set,
      "HospitalDetails"
    );
    res.json({ status: true, msg: "Data Updated Successfully" });
  },
};

module.exports = admin;
