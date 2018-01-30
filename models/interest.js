'use strict';
module.exports = (sequelize, DataTypes) => {
  var Interest = sequelize.define('Interest', {
    interest: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Interest;
};