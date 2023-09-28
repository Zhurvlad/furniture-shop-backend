import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType } from 'sequelize-typescript';

//TODO: МБ добавить New и Bestsellers

export class CreateFurnitureDto {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sub_category: string;

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
  is_stocks: number;

  @Column({
    type: DataType.ARRAY,
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
  images: string[];
}
