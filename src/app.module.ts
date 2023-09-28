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
  ],
})
export class AppModule {
}
