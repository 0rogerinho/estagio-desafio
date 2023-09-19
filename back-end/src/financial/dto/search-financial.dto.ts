import { IsString } from 'class-validator';

export class SearchFinancialDto {
  @IsString()
  _id: string;
}
