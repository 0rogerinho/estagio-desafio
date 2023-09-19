import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUsernameDto } from './dto/update-username.dto';
import { User } from './user.scheme';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { compareSync, hash } from 'bcrypt';
import { RemoveUserDto } from './dto/remove-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create({ username, email, password }: CreateUserDto): Promise<User> {
    const userExist = await this.userModel.findOne({ email: email });
    console.log(userExist);

    if (userExist !== null) throw new ConflictException('User already exists');

    const pass_bcrypt = await hash(password, 10);

    const user = await this.userModel.create({
      username,
      email,
      password: pass_bcrypt,
    });

    return user;
  }

  async findAll() {
    const user = await this.userModel.find();
    return user;
  }

  findById(id: string) {
    return this.userModel
      .findById({ _id: id }, '-password')
      .populate('products');
  }

  findOne(user: { email: string }) {
    return this.userModel.findOne(user);
  }

  async updateUsername(id: string, updateUsernameDto: UpdateUsernameDto) {
    await this.userModel.findOneAndUpdate({ _id: id }, updateUsernameDto);

    return { message: 'updated successfully' };
  }

  async remove(id: string, removeUserDto: RemoveUserDto) {
    const user = await this.userModel.findOne({ _id: id });

    console.log(id);

    console.log(removeUserDto.password);

    if (user === null) {
      throw new NotFoundException('Something bad happened', {
        cause: new Error(),
        description: 'invalid credential',
      });
    }

    const pass_bcrypt = compareSync(removeUserDto.password, user.password);

    if (!pass_bcrypt) {
      throw new NotFoundException('Something bad happened', {
        cause: new Error(),
        description: 'invalid credential',
      });
    }

    await this.userModel.findByIdAndDelete({ _id: id });
    return { message: 'deleted successful' };
  }
}
