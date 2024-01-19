import { Body, Controller, Get, Header, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserRequest, LoginUserResponse, LogOutUserResponse, SignUpUserResponse } from '../users/types';
import { LocalAuthGuard } from './local.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }


  @ApiTags('Auth')
  @ApiOkResponse({type: SignUpUserResponse})
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  @Post('/signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }

  @ApiTags('Auth')
  @ApiBody({type: LoginUserRequest})
  @ApiOkResponse({type: LoginUserResponse})
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  login(@Request() req) {
    return {user: req.user, msg: 'Выполнен вход'};
  }

  @ApiTags('Auth')
  @ApiOkResponse({type: LogOutUserResponse})
  @Get('/logout')
  logout(@Request() req) {
    req.session.destroy()
    return {msg: `Сессия пользователя ${req.user.username} завершена`};
  }

}
