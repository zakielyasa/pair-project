'use strict';
module.exports = (sequelize, DataTypes) => {
  var Places = sequelize.define('Places', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Places;
};