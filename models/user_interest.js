'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_interest = sequelize.define('user_interest', {
    user_id: DataTypes.INTEGER,
    interest_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_interest;
};