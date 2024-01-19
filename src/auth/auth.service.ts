import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {
  }

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne({where: {username}})

    if(!user) {
      throw new UnauthorizedException('*Неправильный логин или пароль!')
    }

    const passwordMach = await bcrypt.compare(password, user.password)

    if(!passwordMach){
      throw new UnauthorizedException('*Неправильный логин или пароль!')
    }

    if(user && passwordMach){
      return {
        userId: user.id,
        username: user.username,
        email: user.email,
        id: user.id
      }
    }

    return null
  }

  async register(userDto: CreateUserDto){
    const hashedPassword = await bcrypt.hash(userDto.password, 10)


    const existingByUserName = await this.usersService.findOne({where: {username: userDto.username}})
    const existingByEmail = await this.usersService.findOne({where: {email: userDto.email}})

    if(existingByUserName && existingByEmail ){
      throw new HttpException('Пользователь с таким именем и email уже существует', HttpStatus.FORBIDDEN);
    }

    if(existingByUserName){
      throw new HttpException('Пользователь с таким именем существует', HttpStatus.FORBIDDEN);
      /*return {warningMessage: 'Пользователь с таким именем существует'}*/
    }

    if(existingByEmail){
      throw new HttpException('Пользователь с таким email уже существует', HttpStatus.FORBIDDEN);
      /*return {warningMessage: 'Пользователь с таким email уже существует'}*/
    }

    const newUser = await this.usersService.create({...userDto, password: hashedPassword})

    const {password, ...result} = newUser['dataValues']

    return result
  }

}
