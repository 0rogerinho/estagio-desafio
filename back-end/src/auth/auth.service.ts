import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { compareSync } from 'bcrypt';
import { FinancialService } from 'src/financial/financial.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private financialService: FinancialService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const newUser = await this.userService.create(createUserDto);

    await this.financialService.create(newUser['_id']);

    const payload = { sub: newUser['_id'], username: newUser.username };

    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async signIn(authData: { email: string; password: string }) {
    const user = await this.userService.findOne({ email: authData.email });

    if (user === null) throw new NotFoundException('User Not Found');

    const pass_bcrypt = compareSync(authData.password, user.password);

    if (!pass_bcrypt) throw new UnauthorizedException('invalid credential');

    const payload = { sub: user['_id'], username: user.username };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
