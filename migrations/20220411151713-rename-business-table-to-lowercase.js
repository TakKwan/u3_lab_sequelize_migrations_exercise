'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameTable('Businesses', 'businesses')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameTable('businesses', 'Businesses')
  }
}
