'use strict';
module.exports = function(sequelize, DataTypes) {
  var Diary = sequelize.define('diary', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        min: 3
      }
    },
    description: DataTypes.TEXT
  }, {
    tableName: 'diaries',
    underscored: true,
    timestamps: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Diary.belongsTo(models.User)
        Diary.hasMany(models.exercise);
      }
    }
  });
  return Diary;
};
