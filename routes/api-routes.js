var db = require("../models");
module.exports = function(app) {
  app.post("/api/new", function(req, res) {
    db.Burger.create({ burger_name: req.body.burger_name })
      .then(function(result) {
        res.json({ id: result.insertId });
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  });

  app.put("/api/:id", function(req, res) {
    db.Customer.create({ customer_name: req.body.customer })
      .then(function(customer) {
        db.Burger.update(
          { devoured: req.body.boolean, CustomerId: customer.id },
          {
            where: {
              id: req.params.id
            }
          }
        ).then(function() {
          res.render("index");
        });
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  });
};
