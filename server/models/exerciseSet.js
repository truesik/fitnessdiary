'use strict';
module.exports = function (sequelize, DataTypes) {
  var ExerciseSet = sequelize.define('ExerciseSet', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    warmUp: {
      type: DataTypes.BOOLEAN,
      field: 'warm_up',
      allowNull: false,
      defaultValue: false,
    }
  }, {
    tableName: 'exercise_sets',
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        ExerciseSet.belongsTo(models.Exercise)
      }
    }
  });
  return ExerciseSet;
};
