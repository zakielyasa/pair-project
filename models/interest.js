'use strict';
module.exports = (sequelize, DataTypes) => {
  var Interest = sequelize.define('Interest', {
    interest: DataTypes.STRING
  });

  Interest.associate = (models) => {
    Interest.hasMany(models.user_interest, {
      foreignKey: 'interest_id'
    })
    Interest.hasMany(models.places_interest, {
      foreignKey: 'interest_id'
    })
  }
  return Interest;
};