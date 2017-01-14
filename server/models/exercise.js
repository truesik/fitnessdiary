'use strict';
module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define('exercise', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3
      }
    },
    muscleGroup: {
      type: DataTypes.STRING,
      field: 'muscle_group'
    },
    diaryId: {
      type: DataTypes.INTEGER,
      field: 'diary_id',
      allowNull: false
    }
  }, {
    tableName: 'exercises',
    underscored: true,
    timestamps: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Exercise.belongsTo(models.diary);
        Exercise.hasMany(models.exerciseSet);
      }
    }
  });
  return Exercise;
};
