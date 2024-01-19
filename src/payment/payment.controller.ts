import { Body, Controller,Post} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { PaymentService } from './payment.service';
import { MakePaymentDto } from './dto/make-payment.dto';
import { MakePaymentRequest, MakePaymentResponse } from './types';
import { checkPaymentDto } from './dto/check-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {
  }

  @ApiTags('Payment')
  @ApiOkResponse({type : MakePaymentResponse})
  @ApiBody({ type: MakePaymentRequest })
  /*@UseGuards(AuthenticatedGuard)*/
  @Post()
  makePayment(@Body() makePaymentDto: MakePaymentDto){
    return this.paymentService.makePayment(makePaymentDto)
  }

  @ApiTags('Payment')
 /* @ApiOkResponse({type : MakePaymentResponse})
  @ApiBody({ type: MakePaymentRequest })*/
  /*@UseGuards(AuthenticatedGuard)*/
  @Post('/info')
  checkPayment(@Body() checkPaymentDto: checkPaymentDto){
    return this.paymentService.checkPayment(checkPaymentDto)
  }
}
