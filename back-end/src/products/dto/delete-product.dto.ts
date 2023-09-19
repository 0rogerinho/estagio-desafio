import { IsMongoId } from 'class-validator';

export class DeleteProductDto {
  @IsMongoId()
  id: string;
}
