import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty({example: 'Va1'})
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly username: string

  @ApiProperty({example: '123456'})
  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  readonly password: string

  @ApiProperty({example: 'va1@mail.ru'})
  @IsNotEmpty()
  @IsString()
  @IsEmail(undefined, {message: 'Enter the correct email address'})
  readonly email: string
}
