import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import hasher from 'src/utils/hasher';
import { User } from 'src/types/user-type';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as jwt from 'jsonwebtoken';
import CONFIG from 'src/configs/config';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async register(registerAuthDto: RegisterAuthDto) {
    const hashedPassword = await hasher.hashPassword(registerAuthDto.password);

    const createdUser: User = await this.prismaService.user.create({
      data: {
        ...registerAuthDto,
        password: hashedPassword,
      },
    });

    return { message: 'User registered successfully', user: createdUser };
  }

  async login(loginAuthDto: LoginAuthDto) {
    const requestedUser: User = await this.prismaService.user.findFirst({
      where: {
        email: loginAuthDto.email,
      },
    });

    if (!requestedUser) {
      return {
        status: 'Wrong Username / Password.',
      };
    }

    const isPasswordMatch = await hasher.comparePassword(
      loginAuthDto.password,
      requestedUser.password,
    );

    if (!isPasswordMatch) {
      return {
        status: 'Wrong Username / Password.',
      };
    }

    delete requestedUser.email;
    delete requestedUser.phone;
    delete requestedUser.password;

    return {
      token: jwt.sign(requestedUser, CONFIG.SECRET_SAUCE),
    };
  }
}
