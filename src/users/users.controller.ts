import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { Get, UsePipes } from '@nestjs/common/decorators';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user';
import { User } from './users.model';
import { UsersService } from './users.service';
import {InjectModel} from "@nestjs/sequelize";


@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @UsePipes(ValidationPipe)
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  // @Get(':id')
  // @ApiResponse({ status: 200, type: User })
  // @UsePipes(ValidationPipe)
  // findOne(@Body() userDto: CreateUserDto) {
  //   return this.usersService.f(userDto);
  // }
}
