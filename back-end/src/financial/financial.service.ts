import { Injectable } from '@nestjs/common';
import { CreateFinancialDto } from './dto/create-financial.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Financial } from './entities/financial.entity';
import { SearchFinancialDto } from './dto/search-financial.dto';
import { UpdateFinancialDto } from './dto/update-financial.dto';

@Injectable()
export class FinancialService {
  constructor(
    @InjectModel(Financial.name)
    private financialModel: Model<Financial>,
  ) {}

  async create(createFinancialDto: CreateFinancialDto) {
    return await this.financialModel.create({ _id: createFinancialDto });
  }

  async findOne(searchFinancialDto: SearchFinancialDto) {
    return await this.financialModel.findById(searchFinancialDto);
  }

  async update(id: string, updateFinancialDto: UpdateFinancialDto) {
    await this.financialModel.findOneAndUpdate(updateFinancialDto);

    return await this.financialModel.findById(id);
  }
}
