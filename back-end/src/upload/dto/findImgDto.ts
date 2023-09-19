import { IsString } from 'class-validator';

export class FindImgDto {
  @IsString()
  path: string;
}
