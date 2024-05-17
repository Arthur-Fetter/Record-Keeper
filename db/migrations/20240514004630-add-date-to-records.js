'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'records',
          'createdAt',
          {
            type: Sequelize.DataTypes.DATE,
          },
          { transaction: t },
        ),
        queryInterface.addColumn(
          'records',
          'updatedAt',
          {
            type: Sequelize.DataTypes.DATE,
          },
          { transaction: t },
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('records', 'createdAt', { transaction: t }),
        queryInterface.removeColumn('records', 'updatedAt', { transaction: t }),
      ]);
    });
  },
};

