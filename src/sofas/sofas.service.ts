import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sofas as SofasModel} from './sofas.model';
import { ISofasQuery } from './types';
import { Op } from 'sequelize';
import { CreateSofasDto } from './dto/create-sofa.dto';

@Injectable()
export class SofasService {
  constructor(
    @InjectModel(SofasModel)
    private sofasRepository: typeof SofasModel
  ) {}

  async paginateAndFilter(query: ISofasQuery): Promise<{ rows: SofasModel[]; count: number }>{
    const limit = +query.limit
    const offset = +query.offset * 20

    return this.sofasRepository.findAndCountAll({limit, offset})
  }


  async bestsellers(query: ISofasQuery): Promise<{ rows: SofasModel[]; count: number }>{
    const limit = +query.limit
    const offset = +query.offset * 20

    return await this.sofasRepository.findAndCountAll({where: {bestseller: true}, limit, offset})
  }

  async new(): Promise<{ rows: SofasModel[]; count: number }>{
    return await this.sofasRepository.findAndCountAll({where: {new: true}})
  }

  async findOne(id: number | string): Promise<SofasModel> {
    return await this.sofasRepository.findOne<SofasModel>({where: {id}});
  }

  async findByName(name:  string): Promise<SofasModel> {
    return await this.sofasRepository.findOne<SofasModel>({where: {name}});
  }

  async findByString(str:  string): Promise<{ rows: SofasModel[]; count: number }> {
    return await this.sofasRepository.findAndCountAll({
      limit: 20,
      where: {name: {[Op.like]: `%${str}%`}}
    });
  }
}
