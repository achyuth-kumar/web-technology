const Vote = require("../models/vote");

exports.getAddVote = (req, res, next) => {
  res.render("form");
};

exports.postAddVote = (req, res, next) => {
  let vote = {
    name: req.body.name,
    party: req.body.party,
  };
  console.log(vote);
  let newVote = new Vote(vote);
  newVote
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
  console.log(vote);
};

exports.getAllVotes = async (req, res, next) => {
  let votes = await Vote.find({});
  res.status(200).render("collection", {
    votes: votes,
  });
};
