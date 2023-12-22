import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Header,
  UseGuards, Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LocalAuthGuard } from '../auth/local.auth.guard';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { ApiBody, ApiCookieAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  LoginCheckResponse,
  LoginUserRequest,
  LoginUserResponse,
  LogOutUserResponse,
  SignUpUserResponse,
} from './types';

@Controller('users')
export class UsersController {


  @ApiTags('User')
  @ApiOkResponse({type: LoginCheckResponse})
  @Get('/login-check')
  @UseGuards(AuthenticatedGuard)
  loginCheck(@Request() req) {
    return {user: req.user};
  }

}
