const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  routes = require("./routes/route");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(routes);

app.get("*", (req, res, next) => {
  res.status(404).render("404");
});

// set port and listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server active on port : ", PORT));
