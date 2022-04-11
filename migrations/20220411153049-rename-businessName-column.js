'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('businesses', 'businessName', 'name')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('businesses', 'name', 'businessName')
  }
}
