import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Furniture extends Model<Furniture>{
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string

  @Column({
    type: DataType.NUMBER,
    allowNull: false
  })
  price: number

  @Column({
    type: DataType.ENUM,
    values: ['1', '2', '3', '4', '5']
  })
  rating: string

  @Column({
    type: DataType.STRING,
  })
  color: string

  @Column({
    type:DataType.NUMBER
  })
  is_stocks: number

  @Column({
    type: DataType.STRING
  })
  description: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  furniture_brand: string

  @Column({
    type: DataType.STRING,
  })
  category: string

  @Column({
    type: DataType.STRING
  })
  sub_category: string
}