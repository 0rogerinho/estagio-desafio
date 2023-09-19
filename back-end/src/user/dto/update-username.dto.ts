import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdateUsernameDto extends PartialType(CreateUserDto) {
  @IsString()
  @MinLength(3)
  username: string;
}
