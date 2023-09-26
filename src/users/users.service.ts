import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';

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

 /* update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }*/
}
