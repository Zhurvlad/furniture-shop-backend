import { ApiProperty } from '@nestjs/swagger';
import {faker} from '@faker-js/faker'
import { Constructor } from 'sequelize-typescript/dist/shared/types';


/*type Wrapper<T = object> = { new(): (T & any), prototype: T };
type DecoratorOptions = { name: string };
type ApiSchemaDecorator = <T extends Constructor<any>>(options: DecoratorOptions) => (constructor: T) => Wrapper<T>;


const ApiSchema: ({ name }: { name: any }) => (constructor) => { new(): any; prototype: {} } = ({ name }) => {
  return (constructor) => {
    const wrapper = class extends constructor { };
    Object.defineProperty(wrapper, 'name', {
      value: name,
      writable: false,
    });
    return wrapper;
  }
}*/

class Sofa {
  @ApiProperty({example: 10})
  id: number

  @ApiProperty({ example: 'Динс Velvet Yellow' })
  name: string;

  @ApiProperty({ example: 'Диваны' })
  category: string;

  @ApiProperty({ example: 1 })
  initialRating: number;

  @ApiProperty({ example: 4690 })
  price: number;

  @ApiProperty({ example: 'Yellow' })
  color: string;

  @ApiProperty({ example: 56 })
  in_stocks: number;

  @ApiProperty({ example: '218.95.90' })
  size: string[];

  @ApiProperty({ example: 'Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс»' })
  description: string;

  @ApiProperty({example: 'Динс'})
  furniture_brand: string

  @ApiProperty({example: 37990})
  oldPrice?: number


  @ApiProperty({example: true})
  bestseller: boolean;


  @ApiProperty({example: true})
  new: boolean;

  @ApiProperty({example: faker.image.city()})
  images: string

  @ApiProperty({example: '2023-08-10T05:09:22.000Z'})
  createdAt: string

  @ApiProperty({example: '2023-08-10T05:09:22.000Z'})
  updatedAt: string
}


export interface ISofasQuery {
  limit: string,
  offset: string
}


export class PaginationAndFilterResponse {
  @ApiProperty({example: 10})
  count: number

  @ApiProperty({type: Sofa, isArray: true})
  rows: Sofa
}

//FindOne

/*@ApiSchema({ name: 'zzzzzzzz' })*/
export class FindOneRequest {
  @ApiProperty({example: 10})
  id: number
}

export class FindOneResponse extends Sofa{}


//Bestsellers

export class Bestsellers extends Sofa{
  @ApiProperty({example: true})
  bestseller: boolean
}

export class BestsellersResponse {
  @ApiProperty({example: 1})
  count: number

  @ApiProperty({type: Sofa, isArray: true})
  rows: Bestsellers
}

//New

export class New extends Sofa{
  @ApiProperty({example: true})
  new: boolean
}

export class NewResponse {
  @ApiProperty({example: 1})
  count: number

  @ApiProperty({type: Sofa, isArray: true})
  rows: New
}

//SearchByString

export class SearchByString extends Sofa{
  @ApiProperty({example: 'Динс'})
  search: string
}

export class SearchResponse {
  @ApiProperty({example: 1})
  count: number

  @ApiProperty({type: Sofa, isArray: true})
  rows: SearchByString
}

export class SearchRequest {
  @ApiProperty({example: 'Динс'})
  search: string
}

//FindByName

export class FindByName extends Sofa{
  @ApiProperty({example: 'Динс Velvet Yellow'})
  name: string
}

export class NameResponse {
  @ApiProperty({type: Sofa, isArray: true})
  rows: FindByName
}

export class NameRequest {
  @ApiProperty({example: 'Динс Velvet Yellow'})
  name: string
}