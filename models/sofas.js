'use strict';
import { DataType } from 'sequelize-typescript';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sofas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sofas.init({
    name: DataTypes.STRING,
    category:DataTypes.STRING,
    initialRating:DataTypes.INTEGER,
    price:DataTypes.INTEGER,
    color:DataTypes.STRING,
    in_stocks:DataTypes.INTEGER,
    size:DataTypes.STRING,
    description:DataTypes.STRING,
    furniture_brand:DataTypes.STRING,
    oldPrice:DataTypes.INTEGER,
    bestseller: DataTypes.BOOLEAN,
    new: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Sofas',
  });
  return Sofas;
};