var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      var object = {
        burgers: data
      };
      console.log(object);
      res.render("index", object);
    });
  });
};
