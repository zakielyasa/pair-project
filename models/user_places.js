'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_places = sequelize.define('user_places', {
    user_id: DataTypes.INTEGER,
    places_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_places;
};