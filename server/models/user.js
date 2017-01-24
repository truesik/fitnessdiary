'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        min: 3
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.diary);
      }
    }
  });
  return User;
};
