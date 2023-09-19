import { IsString } from 'class-validator';

export class CreateFinancialDto {
  @IsString()
  _id: string;
}
