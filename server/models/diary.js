'use strict';
module.exports = function(sequelize, DataTypes) {
  var Diary = sequelize.define('Diary', {
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
    startDate: {
      type: DataTypes.DATEONLY,
      field: 'start_date',
      allowNull: false,
      validate: {
        isDate: true
      },
      get: function(date) {
        const formattedDate = require('moment')(this.getDataValue(date)).format('YYYY-MM-DD');
        var newVar = new (Date.parse(formattedDate));
        return newVar;
      }
    },
    description: DataTypes.TEXT
  }, {
    tableName: 'diaries',
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Diary.belongsTo(models.User)
        Diary.hasMany(models.Exercise);
      }
    }
  });
  return Diary;
};
