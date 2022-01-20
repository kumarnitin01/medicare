var express = require("express");
const res = require("express/lib/response");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hello World!" });
});

// controller routes
const admin = require("../controllers/admin");
const user = require("../controllers/users");

// admin routes
router.post("/admin/login", admin.login);
router.post("/admin/addhospital", admin.addhospital);
router.post("/admin/adddoctor", admin.adddoctor);
router.post("/admin/listhospital", admin.listHospital);
router.post("/admin/listdoctor", admin.listdoc);
router.post("/admin/deletedetail", admin.deletedetail);
router.post("/admin/deletedoc", admin.deletedoc);
router.post("/admin/editdetails", admin.editdetails);
router.post("/admin/updatedetails", admin.updatedetails);

router.get("/docs", admin.listdoc);
router.get("/hospitals", admin.listHospital);

//user routes
router.post("/register", user.register);
router.post("/loginUser", user.loginUser);
router.post("/contactus", user.contactus);

module.exports = router;
