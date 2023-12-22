import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { MakePaymentDto } from './dto/make-payment.dto';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MakePaymentRequest, MakePaymentResponse } from './types';
import { SearchRequest } from '../sofas/types';
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
