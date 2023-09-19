import { IsString, MinLength } from 'class-validator';

export class SearchProductDto {
  @IsString()
  @MinLength(2)
  name: string;
}
