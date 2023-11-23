import { Column, DataType, Model, Table } from 'sequelize-typescript';


@Table
export class ShoppingCart extends Model{

  @Column({
    type: DataType.INTEGER,
  })
  userId:number

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  itemId:number

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  price: number;

  @Column({
    type: DataType.STRING,
  })
  color: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  in_stocks: number;

  @Column({
    type: DataType.STRING,
  })
  size: string[];

  @Column({
    type: DataType.STRING,
  })
  furniture_brand: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  oldPrice: number;

  @Column({
    type: DataType.STRING,
  })
  image: string;

  @Column({
    defaultValue: 1,
    type: DataType.INTEGER
  })
  count: number;

  @Column({
    defaultValue: 0,
    type: DataType.INTEGER
  })
  total_price: number;
}
