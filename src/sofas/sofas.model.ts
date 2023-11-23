import { Column, DataType, Model, Table } from 'sequelize-typescript';


@Table
export class Sofas extends Model{

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  initialRating: number;

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
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  furniture_brand: string;

  @Column({
    type: DataType.INTEGER,
  })
  oldPrice?: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  images: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  bestseller: boolean

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  new: boolean

}
