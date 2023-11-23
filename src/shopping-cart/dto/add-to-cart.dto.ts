import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, MinLength } from 'class-validator';


export class AddToCartDto {
  @ApiProperty({ example: 'Ivan' })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({ example: 1 })
  @IsString()
  @IsOptional()
  readonly userId?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly itemId: number;
}