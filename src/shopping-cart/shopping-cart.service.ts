import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sofas as SofasModel } from '../sofas/sofas.model';
import { ShoppingCart } from './shopping-cart.model';
import { UsersService } from '../users/users.service';
import { SofasService } from '../sofas/sofas.service';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart)
    private shoppingCartRepository: typeof ShoppingCart,
    private readonly usersService: UsersService,
    private readonly sofasService: SofasService
  ) {}

  async findAll(userId: number | string): Promise<ShoppingCart[]>{
    return this.shoppingCartRepository.findAll({where: {userId}})
  }


  async addToCartItem(addToCartDto: AddToCartDto){
    const cart = new ShoppingCart()
    const user = await this.usersService.findOne({where: {username: addToCartDto.username}})
    const item = await this.sofasService.findOne(addToCartDto.itemId)

    cart.userId = user.id
    cart.itemId = item.id
    cart.name = item.name
    cart.price = item.price
    cart.color = item.color
    cart.in_stocks = item.in_stocks
    cart.size = item.size
    cart.furniture_brand = item.furniture_brand
    cart.oldPrice = item.oldPrice
    cart.image = JSON.parse(item.images)[0]
    cart.total_price = item.price

    return cart.save()
  }

  async updateCount(count: number, itemId: number | string):Promise<{count: number}>{
    await this.shoppingCartRepository.update({count}, {where: {itemId}})

    const item = await this.shoppingCartRepository.findOne({where: {itemId}})

    return {count : item.count}
  }

  async updateTotalPrice(total_price: number, itemId: number | string):Promise<{total_price: number}>{
    await this.shoppingCartRepository.update({total_price}, {where: {itemId}})

    const item = await this.shoppingCartRepository.findOne({where: {itemId}})

    return {total_price : item.total_price}
  }

  async remove(itemId: number | string):Promise<void>{
    const item = await this.shoppingCartRepository.findOne({where: {itemId}})
    return item.destroy()
  }

  async removeAll(userId: number | string): Promise<void> {
    await this.shoppingCartRepository.destroy({where: {userId}})
  }

}
