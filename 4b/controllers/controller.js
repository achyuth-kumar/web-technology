exports.getHome = (req, res, next) => {
  res.render("home");
};

exports.getAnnouncements = (req, res, next) => {
  res.render("announcements");
};

exports.getContacts = (req, res, next) => {
  res.render("contacts");
};

exports.getRegistrations = (req, res, next) => {
  res.render("registrations");
};
