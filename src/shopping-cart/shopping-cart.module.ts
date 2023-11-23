import { Module } from '@nestjs/common';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShoppingCart } from './shopping-cart.model';
import { UsersModule } from '../users/users.module';
import { SofasModule } from '../sofas/sofas.module';

@Module({
  imports: [SequelizeModule.forFeature([ShoppingCart]), UsersModule, SofasModule],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService]
})
export class ShoppingCartModule {}
