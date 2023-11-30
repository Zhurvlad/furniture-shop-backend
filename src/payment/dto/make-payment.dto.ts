import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';


export class MakePaymentDto {
  @ApiProperty({ example: 100 })
  @IsNotEmpty()
  @IsNumber()
  readonly amount: number;

  @ApiProperty({example: 'Заказ №1'})
  @IsOptional()
  readonly description?: string
}