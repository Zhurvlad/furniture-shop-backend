import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { MakePaymentDto } from './dto/make-payment.dto';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MakePaymentRequest, MakePaymentResponse } from './types';
import { SearchRequest } from '../sofas/types';

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
}
