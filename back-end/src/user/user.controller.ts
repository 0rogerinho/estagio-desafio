import { Controller, Get, Body, Patch, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUsernameDto } from './dto/update-username.dto';
import { RemoveUserDto } from './dto/remove-user.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/id')
  findById(@Req() request: Request) {
    const User_id = request['User']._id;
    return this.userService.findById(User_id);
  }

  @Patch('/update')
  updateUsername(
    @Req() request: Request,
    @Body() updateUsernameDto: UpdateUsernameDto,
  ) {
    const user_id = request['User']._id;
    return this.userService.updateUsername(user_id, updateUsernameDto);
  }

  @Delete()
  remove(@Body() { password }: RemoveUserDto, @Req() req: Request) {
    const user_id = req['User']._id;

    return this.userService.remove(user_id, { password });
  }
}
