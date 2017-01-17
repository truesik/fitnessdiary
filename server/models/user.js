'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      tableName: 'users',
      underscored: true,
      timestamps: true,
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};
