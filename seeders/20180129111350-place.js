'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Places', [
        {
        name: 'Aceh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Banten',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bengkulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gorontalo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jambi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jawa Barat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jawa Tengah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jawa Timur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kalimantan Selatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kalimntan Barat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kalimantan Tengah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kalimantan Timur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kalimantan Utara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bangka Belitung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kepulauan Riau',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lampung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maluku',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maluku Utara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nusa Tenggara Barat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nusa Tenggara Timur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Riau',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sulawesi Barat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sulawesi Tengah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sulawesi Selatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sulawesi Tenggara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sulawesi Utara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sumatera Barat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sumatera Selatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sumatera Utara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yogyakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Papua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Papua Barat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
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
