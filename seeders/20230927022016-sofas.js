const {faker} = require('@faker-js/faker')
'use strict';

const sofaManufacturers = [
  'SCANDICA',
  'DREAMART',
  'ESTA',
  'PUSHE',
  'Rivalli',
  'SOLANA',
  'BRADEX',
  'FINSOFFA'
]

const sofaColor = [
  'white',
  'black',
  'blue',
  'green',
  'grey',
  'ivory',
  'maroon',
  'olive',
  'orange',
  'red',
  'turquoise',
  'yellow'
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Sofas', [...Array(200)].map(() => ({
      name:faker.commerce.productName(),
      category: 'sofas',
      initialRating:faker.number.int({min: 1, max: 5}),
      price: faker.number.int({min: 5000, max: 200000}),
      color:faker.helpers.arrayElement(sofaColor),
      in_stocks: faker.number.int({min: 0, max: 10}),
      size: `${faker.number.int({min: 100, max: 300})}.${faker.number.int({min: 100, max: 300})}.${faker.number.int({min: 100, max: 300})}`,
      description:faker.commerce.productDescription(),
      furniture_brand: faker.helpers.arrayElement(sofaManufacturers),
      oldPrice: faker.number.int({min: 5000, max: 200000}),
      images: JSON.stringify([...Array(7)].map(() =>
      `${faker.image.technics()}?random=${faker.string.numeric(30)}` )),
      new: faker.datatype.boolean(),
      bestseller: faker.datatype.boolean(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })));
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Sofas', null, {});
  }
};
