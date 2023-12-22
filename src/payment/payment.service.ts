import { ForbiddenException, Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/make-payment.dto';
import axios from 'axios';
import { checkPaymentDto } from './dto/check-payment.dto';

@Injectable()
export class PaymentService {
  async makePayment(makePaymentDto: MakePaymentDto) {
    try {
      const {data} = await axios({
        method: 'POST',
        url: 'https://api.yookassa.ru/v3/payments',
        headers:{
          'Content-Type': 'application/json',
          'Idempotence-Key': Date.now(),
        },
        auth: {
          username: '241873',
          password: 'test_HQrsEJy6uZtrZ0N83abDN1DhD_KWHlGDXGurVxC3_Kg',
        },
        data: {
          amount: {
            value: makePaymentDto.amount,
            currency: "RUB"
          },
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'http://localhost:3003/cart'
          },
          description: makePaymentDto.description
        }
      })

      return data

    } catch (e) {
      throw new ForbiddenException(e)
    }
  }

  async checkPayment(checkPaymentDto: checkPaymentDto) {
    try {
      const {data} = await axios({
        method: 'GET',
        url: `https://api.yookassa.ru/v3/payments/${checkPaymentDto.paymentId}`,

        auth: {
          username: '241873',
          password: 'test_HQrsEJy6uZtrZ0N83abDN1DhD_KWHlGDXGurVxC3_Kg',
        },
      })

      return data

    } catch (e) {
      throw new ForbiddenException(e)
    }
  }
}
