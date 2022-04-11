'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameTable('Locations', 'locations')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameTable('locations', 'Locations')
  }
}
