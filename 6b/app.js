const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  routes = require("./routes/route");

const URI =
  "mongodb+srv://<id>:<password>@cluster0.asp3w.mongodb.net/<db>?retryWrites=true&w=majority";

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.get("*", (req, res, next) => {
  res.status(404).render("404");
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const errorVar = {
    status: status,
    message: message,
  };
  res.status(500).render("500", errorVar);
});

mongoose
  .connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((result) => {
    console.log("Connected to DB!");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
