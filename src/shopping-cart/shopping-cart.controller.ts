import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SofasService } from '../sofas/sofas.service';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  AddToCartResponse,
  GetAllResponse, TotalPriceRequest,
  TotalPriceResponse,
  UpdateCountRequest,
  UpdateCountResponse,
} from './types';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @ApiTags('ShoppingCart')
  @ApiOkResponse({type: [GetAllResponse]})
  @UseGuards(AuthenticatedGuard)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getAll(@Param('id') userId: string){
    return this.shoppingCartService.findAll(userId)
  }

  @ApiTags('ShoppingCart')
  @ApiOkResponse({type: AddToCartResponse})
  @UseGuards(AuthenticatedGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('/add')
  addToCartItem(@Body() addToCartDto: AddToCartDto){
    return this.shoppingCartService.addToCartItem(addToCartDto)
  }

  @ApiTags('ShoppingCart')
  @ApiOkResponse({type: UpdateCountResponse})
  @ApiBody({type: UpdateCountRequest})
  @UseGuards(AuthenticatedGuard)
  @HttpCode(HttpStatus.OK)
  @Patch('/count/:id')
  updateItemCount(@Body() {count} : {count: number}, @Param('id') itemId: string){
    return this.shoppingCartService.updateCount(count, itemId)
  }

  @ApiTags('ShoppingCart')
  @ApiOkResponse({type: TotalPriceResponse})
  @ApiBody({type: TotalPriceRequest})
  @UseGuards(AuthenticatedGuard)
  @HttpCode(HttpStatus.OK)
  @Patch('/total-price/:id')
  updateItemTotalPrice(@Body() {total_price} : {total_price: number}, @Param('id') itemId: string){
    return this.shoppingCartService.updateTotalPrice(total_price, itemId)
  }

  @ApiTags('ShoppingCart')
  @UseGuards(AuthenticatedGuard)
  @HttpCode(HttpStatus.OK)
  @Delete('/one/:id')
  removeOne(@Param('id') itemId: string){
    return this.shoppingCartService.remove(itemId)
  }

  @ApiTags('ShoppingCart')
  @UseGuards(AuthenticatedGuard)
  @HttpCode(HttpStatus.OK)
  @Delete('/all/:id')
  removeAll(@Param('id') userId: string){
    return this.shoppingCartService.removeAll(userId)
  }

}
