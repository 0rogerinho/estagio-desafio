import {
  IsNumberString,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { IsNumberStringValidation } from 'src/validators/validate.number.string';

export class CreateProductDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  description?: string;

  @IsString()
  @IsOptional()
  img?: string;

  @IsNumberString()
  @IsNumberStringValidation()
  price: number;

  constructor() {
    this.price = +this.price;
  }
}
