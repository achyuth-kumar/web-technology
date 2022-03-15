const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/controller");

router.post("/add-student", controller.postAddStudent);

router.get("/get-students", controller.getAllStudents);

router.get("/edit-students", controller.getEditStudents);

router.post("/edit-students", controller.postEditStudents);

router.get("/", controller.getAddStudent);

module.exports = router;
