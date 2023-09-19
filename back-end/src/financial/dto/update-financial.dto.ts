import { IsNumber, IsOptional } from 'class-validator';

export class UpdateFinancialDto {
  @IsNumber()
  @IsOptional()
  shopping?: number;

  @IsNumber()
  @IsOptional()
  sales?: number;
}
