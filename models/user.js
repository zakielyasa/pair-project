'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  })

  User.associate = (models) => {
    User.hasMany(models.user_interest, {
      foreignKey: 'user_id'
    })
    User.hasMany(models.user_places, {
      foreignKey: 'user_id'
    })
  }

  return User;
};