'use strict';
module.exports = (sequelize, DataTypes) => {
  var places_interest = sequelize.define('places_interest', {
    places_id: DataTypes.INTEGER,
    interest_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return places_interest;
};