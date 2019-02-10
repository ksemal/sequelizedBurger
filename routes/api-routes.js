var db = require("../models");
module.exports = function(app) {
  app.post("/api/new", function(req, res) {
    db.Burger.create({ burger_name: req.body.burger_name }).then(function(
      result
    ) {
      res.json({ id: result.insertId });
    });
  });

  app.put("/api/:id", function(req, res) {
    db.Burger.update(
      { devoured: req.body.boolean },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(result) {
      res.json({ id: result.affectedRows });
    });
  });
};
