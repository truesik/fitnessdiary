'use strict';
module.exports = function (sequelize, DataTypes) {
  var ExerciseSet = sequelize.define('exerciseSet', {
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
    },
    exerciseId: {
      type: DataTypes.INTEGER,
      field: 'exercise_id',
      allowNull: false
    }
  }, {
    tableName: 'exercise_sets',
    underscored: true,
    timestamps: true,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        ExerciseSet.belongsTo(models.exercise)
      }
    }
  });
  return ExerciseSet;
};
