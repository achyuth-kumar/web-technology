const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/controller");

router.get("/", controller.getHome);

router.get("/announcements", controller.getAnnouncements);

router.get("/registrations", controller.getRegistrations);

router.get("/contacts", controller.getContacts);

module.exports = router;
