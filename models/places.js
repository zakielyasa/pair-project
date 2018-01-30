'use strict';
module.exports = (sequelize, DataTypes) => {
  var Places = sequelize.define('Places', {
    name: DataTypes.STRING
  });

  Places.associate = (models) => {
    Places.hasMany(models.places_interest, {
      foreignKey: 'places_id'
    })
    Places.hasMany(models.user_places, {
      foreignKey: 'places_id'
    })
  }
  return Places;
};