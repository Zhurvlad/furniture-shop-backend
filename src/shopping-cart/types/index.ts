import { ApiProperty } from '@nestjs/swagger';
import {faker} from '@faker-js/faker'

class ShoppingCartItem {
  @ApiProperty({example: 10})
  id: number

  @ApiProperty({example: 5})
  userId: number

  @ApiProperty({example: 22})
  itemId: number

  @ApiProperty({ example: 'Динс Velvet Yellow' })
  name: string;

  @ApiProperty({ example: 196486 })
  price: number;

  @ApiProperty({ example: 'Yellow' })
  color: string;

  @ApiProperty({ example: 56 })
  in_stocks: number;

  @ApiProperty({ example: '218.95.90' })
  size: string;

  @ApiProperty({example: 'Динс'})
  furniture_brand: string

  @ApiProperty({example: 37990})
  oldPrice: number

  @ApiProperty({example: 2})
  count: number

  @ApiProperty({example: 12500})
  total_price: number

  @ApiProperty({example: faker.image.city()})
  images: string

  @ApiProperty({example: '2023-08-10T05:09:22.000Z'})
  createdAt: string

  @ApiProperty({example: '2023-08-10T05:09:22.000Z'})
  updatedAt: string
}

export class GetAllResponse extends  ShoppingCartItem{}

export class AddToCartResponse extends  ShoppingCartItem{}

export class UpdateCountResponse {
  @ApiProperty({example: 2})
  count: number
}

export class UpdateCountRequest extends UpdateCountResponse{}




export class TotalPriceResponse {
  @ApiProperty({example: 2500})
  total_price: number
}

export class TotalPriceRequest extends TotalPriceResponse{}

