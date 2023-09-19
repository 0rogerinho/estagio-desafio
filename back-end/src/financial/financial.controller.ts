import { Body, Controller, Get, Patch, Req } from '@nestjs/common';
import { Request } from 'express';
import { FinancialService } from './financial.service';
import { UpdateFinancialDto } from './dto/update-financial.dto';

@Controller('financial')
export class FinancialController {
  constructor(private readonly financialService: FinancialService) {}

  @Get()
  findOne(@Req() req: Request) {
    const user_id = req['User']._id;

    return this.financialService.findOne(user_id);
  }

  @Patch()
  update(@Body() updateFinancialDto: UpdateFinancialDto, @Req() req: Request) {
    const user_id = req['User']._id;
    return this.financialService.update(user_id, updateFinancialDto);
  }
}
