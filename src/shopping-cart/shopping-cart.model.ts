import { Column, DataType, Model, Table } from 'sequelize-typescript';


@Table
export class ShoppingCart extends Model{

  @Column({
    type: DataType.NUMBER,
    allowNull: false
  })
  userId:number

  @Column({
    type: DataType.NUMBER,
    allowNull: false
  })
  itemId:number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  in_stocks: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  size: string[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  furniture_brand: string;

  @Column({
    type: DataType.INTEGER,
  })
  oldPrice: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @Column({defaultValue: 1})
  count: number;

  @Column({defaultValue: 0})
  total_price: number;
}
