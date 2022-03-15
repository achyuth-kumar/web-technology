const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/controller");

router.post("/add-vote", controller.postAddVote);

router.get("/get-votes", controller.getAllVotes);

router.get("/", controller.getAddVote);

module.exports = router;
