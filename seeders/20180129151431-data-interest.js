'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Interest', [{
        interest: 'Shopping'
      },{
        interest: 'Sports'
      },{
        interest: 'Music'
      },{
        interest: 'Culinary'
      },
        interest: 'Nature'
      },


    ], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
