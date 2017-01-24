'use strict';
module.exports = function(sequelize, DataTypes) {
  var Diary = sequelize.define('diary', {
    title: {
      type: DataTypes.STRING,
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
        Diary.belongsTo(models.user);
        Diary.hasMany(models.exercise);
      }
    }
  });
  return Diary;
};
