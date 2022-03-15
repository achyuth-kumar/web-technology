const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/controller");

router.post("/add-teacher", controller.postAddTeacher);

router.get("/get-teachers", controller.getAllTeachers);

router.get("/", controller.getAddTeacher);

module.exports = router;
