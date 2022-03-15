const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
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

// connect to mongodb
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected !"))
  .catch((err) => console.log(err));

// set port and listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server active on port : ", PORT));
