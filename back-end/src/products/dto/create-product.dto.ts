import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  description?: string;

  @IsString()
  @IsOptional()
  img?: string;

  @IsNumber()
  @Min(1)
  price: number;
}
