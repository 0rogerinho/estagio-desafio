import {
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateProductDto {
  @IsMongoId()
  id: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  img?: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  price?: number;

  @IsString()
  @IsOptional()
  state?: string;
}
