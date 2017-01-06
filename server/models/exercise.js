'use strict';
module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define('Exercise', {
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    }
  }, {
    tableName: 'exercises',
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Exercise.belongsTo(models.Diary);
        Exercise.hasMany(models.ExerciseSet);
      }
    }
  });
  return Exercise;
};
