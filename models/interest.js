'use strict';
module.exports = (sequelize, DataTypes) => {
  var Interest = sequelize.define('Interest', {
    beach: DataTypes.STRING,
    shopping: DataTypes.STRING,
    sport: DataTypes.STRING,
    music: DataTypes.STRING,
    culinary: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Interest;
};