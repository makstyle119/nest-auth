import { Password } from 'src/services';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import * as authConstants from 'src/constant';
import { Users } from './users.entity';
import {
  LoginInterface,
  LoginReturnInterface,
  RegisterInterface,
  UpdateInterface
} from 'src/interfaces';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
    private jwtService: JwtService
  ) {}

  async findOne(condition: {}): Promise<Users> {
    try {
      return await this.userRepository.findOne(condition);
    } catch (e) {
      return e;
    }
  }

  async register(
    data: Partial<Users>
  ): Promise<Partial<RegisterInterface> | Error> {
    try {
      const existingUser = await this.findOne({
        where: [
          {
            username: data?.username
          },
          {
            email: data?.email
          }
        ]
      });
      if (existingUser) {
        throw new BadRequestException(authConstants?.ExistingUserError);
      }
      const hashPassword = await Password.hashPassword(data?.password);
      const user = await this.userRepository.save({
        ...data,
        password: hashPassword
      });
      delete user?.password;
      return user;
    } catch (e) {
      return e;
    }
  }

  async login(data: LoginInterface): Promise<LoginReturnInterface | Error> {
    try {
      const existingUser: Users = await this.findOne({
        where: [
          {
            email: data?.email
          }
        ]
      });
      if (!existingUser) {
        throw new BadRequestException(authConstants?.UserNotFound);
      }
      const hashPassword = await Password.comparePassword(
        existingUser?.password,
        data?.password
      );
      if (!hashPassword) {
        throw new BadRequestException(authConstants?.InvalidCredentials);
      }
      const jwt = await this.jwtService.signAsync({ id: existingUser?.id });
      let user = {
        ...existingUser,
        token: jwt
      };
      delete user?.password;
      return user;
    } catch (e) {
      return e;
    }
  }

  async all(): Promise<Users[]> {
    try {
      return await this.userRepository.find();
    } catch (e) {
      return e;
    }
  }

  async update(
    id: number,
    data: Partial<UpdateInterface>
  ): Promise<UpdateResult | Error> {
    try {
      return await this.userRepository.update(id, data);
    } catch (e) {
      return e;
    }
  }

  async delete(id: number): Promise<UpdateResult | Error> {
    try {
      return await this.userRepository.softDelete(id);
    } catch (e) {
      return e;
    }
  }
}
