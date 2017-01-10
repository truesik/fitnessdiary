'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('exercise_sets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      reps: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      warm_up: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      exercise_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'exercises',
          key: 'id'
        }
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('exercise_sets');
  }
};
