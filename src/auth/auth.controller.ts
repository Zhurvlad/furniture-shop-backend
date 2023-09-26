import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }



  @Post('/signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }
}
