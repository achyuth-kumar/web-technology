const Teacher = require("../models/teacher");

exports.getAddTeacher = (req, res, next) => {
  res.render("form");
};

exports.postAddTeacher = (req, res, next) => {
  let teacher = {
    name: req.body.name,
    title: req.body.title,
    dept: req.body.dept,
  };

  let newTeacher = new Teacher(teacher);
  newTeacher
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });

  console.log(teacher);
};

exports.getAllTeachers = async (req, res, next) => {
  let teachers = await Teacher.find({dept: "CSE", title: "PROFESSOR"});
  res.status(200).render("collection", {
    teachers: teachers,
  });
};
