import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelizaConfig.service';
import { databaseConfig } from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { FurnitureModule } from './furniture/furniture.module';
import { TopPageModule } from './top-page/top-page.module';
import { SofasModule } from './sofas/sofas.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { PaymentModule } from './payment/payment.module';


@Module({
  imports: [SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    useClass: SequelizeConfigService,
  }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    UsersModule,
    AuthModule,
    FurnitureModule,
    TopPageModule,
    SofasModule,
    ShoppingCartModule,
    PaymentModule,
  ],
})
export class AppModule {
}
