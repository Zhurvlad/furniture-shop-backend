import { Controller, Get, UseGuards, Request, } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { LoginCheckResponse, } from './types';

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
