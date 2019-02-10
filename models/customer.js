module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer_name: {
      type: DataTypes.STRING,
      validate: { len: [1] },
      allowNull: false
    }
  });
  Customer.associate = function(models) {
    Customer.hasMany(models.Burger, {});
  };
  return Customer;
};
