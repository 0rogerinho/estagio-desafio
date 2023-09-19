import { Module } from '@nestjs/common';
import { FinancialService } from './financial.service';
import { FinancialController } from './financial.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FinancialSchema } from './entities/financial.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Financial', schema: FinancialSchema }]),
  ],
  controllers: [FinancialController],
  providers: [FinancialService],
  exports: [FinancialService],
})
export class FinancialModule {}
