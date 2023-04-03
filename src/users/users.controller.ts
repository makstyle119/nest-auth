import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { Users } from './users.entity';
import { LoginReturnInterface, RegisterInterface } from 'src/interfaces';
import { UpdateResult } from 'typeorm';
import { RegisterDto, UsersLoginDto } from 'src/dtos';
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async register(
    @Body() body: RegisterDto
  ): Promise<Partial<RegisterInterface> | Error> {
    return await this.userService.register(body);
  }

  @Get(':id')
  get(@Param('id') id: number): Promise<Users | Error> {
    return this.userService.findOne({ where: { id } });
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  async login(
    @Body() body: UsersLoginDto,
    @Res({ passthrough: true }) response: Response
  ): Promise<LoginReturnInterface | Error> {
    return this.userService.login(body);
  }

  @Get()
  all(): Promise<Users[] | Error> {
    return this.userService.all();
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id') id: number,
    @Body() body: Partial<RegisterDto>
  ): Promise<UpdateResult | Error> {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<UpdateResult | Error> {
    return this.userService.delete(id);
  }
}
