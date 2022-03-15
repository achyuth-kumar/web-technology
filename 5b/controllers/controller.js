const Student = require("../models/student");

exports.getAddStudent = (req, res, next) => {
  res.render("form");
};

exports.postAddStudent = (req, res, next) => {
  let student = {
    name: req.body.name,
    usn: req.body.usn,
    dept: req.body.dept,
    grade: req.body.grade,
  };

  let newStudent = new Student(student);
  newStudent
    .save()
    .then((result) => {
      res.redirect("/get-students");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });

  console.log(student);
};

exports.getAllStudents = async (req, res, next) => {
  let students = await Student.find({});
  res.status(200).render("collection", {
    students: students,
  });
};

exports.getEditStudents = (req, res, next) => {
  res.render("edit", {
    error: false,
  });
};

exports.postEditStudents = async (req, res, next) => {
  let name = req.body.name;
  let grade = req.body.grade;

  try {
    let newStudent = await Student.findOne({ name: name });
    if (newStudent == null) {
      res.render("edit", {
        error: true,
      });
    } else {
      console.log(newStudent)
      newStudent.grade = grade;
      newStudent
        .save()
        .then((result) => {
          res.redirect("/get-students");
        })
        .catch((err) => {
          const error = new Error(err);
          error.httpStatusCode = 500;
          return next(error);
        });
    }
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};
