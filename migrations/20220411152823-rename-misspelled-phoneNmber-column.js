'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.renameColumn('businesses', 'phoneNmber', 'phoneNumber')
  },

  async down(queryInterface, Sequelize) {
    queryInterface.renameColumn('businesses', 'phoneNumber', 'phoneNmber')
  }
}
