import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}



  async create(createUserDto: CreateUserDto): Promise<User | {warningMessage: string}>{

    return this.userRepository.create(createUserDto)

   /* const user = new User()

    const x:any = Object.assign(user, createUserDto)

    const existingByUserName = await this.userRepository.findOne({where: {username: createUserDto.username}})
    const existingByEmail = await this.userRepository.findOne({where: {email: createUserDto.email}})

    if(existingByUserName){
      return {warningMessage: 'Пользователь с таким именем существует'}
    }

    if(existingByEmail){
      return {warningMessage: 'Пользователь с таким email уже существует'}
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)

    user.email = createUserDto.email
    user.password =  hashedPassword
    user.username = createUserDto.username

    const { password, ...result } = user['dataValues'];

    return user.save()*/
  }


  findOne(filter: {where: {id?: string, username?: string, email?: string}}): Promise<User> {
    return this.userRepository.findOne({...filter});
  }
}
