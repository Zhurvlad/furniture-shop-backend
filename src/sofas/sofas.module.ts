import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { SofasService } from './sofas.service';
import { SofasController } from './sofas.controller';
import { Sofas} from './sofas.model';

@Module({
  imports: [SequelizeModule.forFeature([Sofas])],
  controllers: [SofasController],
  providers: [SofasService],
  exports: [SofasService]
})
export class SofasModule {}
