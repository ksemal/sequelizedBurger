var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({
      include: [db.Customer],
      order: [["burger_name", "ASC"]]
    }).then(function(data) {
      var object = {
        burgers: data
      };
      res.render("index", object);
    });
  });
};
