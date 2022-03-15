const Student = require("../models/student");

exports.getAddStudent = (req, res, next) => {
  res.render("form");
};

exports.postAddStudent = (req, res, next) => {
  let student = {
    usn: req.body.usn,
    name: req.body.name,
    company: req.body.company,
  };
  console.log(student);
  let newStudent = new Student(student);
  newStudent
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
  console.log(student);
};

exports.getAllStudents = async (req, res, next) => {
  let students = await Student.find({ company: "Infosys" });
  res.status(200).render("collection", {
    students: students,
  });
};
