import { IsBoolean, IsMongoId } from 'class-validator';

export class RemoveProduct {
  @IsMongoId()
  id: string;
  @IsBoolean()
  state: boolean;
}
