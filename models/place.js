'use strict';
module.exports = (sequelize, DataTypes) => {
  var Place = sequelize.define('Place', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Place;
};