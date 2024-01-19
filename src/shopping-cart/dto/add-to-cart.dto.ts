import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';


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
  readonly itemId: number;
}