import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { User } from './data';
import { UserService } from './user.service';
import { Throttle } from '@nestjs/throttler';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Throttle({ default: { limit: 3, ttl: 60000 } })
  @Get('/')
  users(): User[] {
    console.log('route hitted');
    return this.userService.GetAllUser();
  }

  @Get(':id')
  findUser(@Param('id', ParseIntPipe) id: number): User {
    console.log(`Looking for user with id: ${id}`);
    return this.userService.GetUserByID(id);
  }
  @Post('/')
  addUser(@Body() userData: User): any {
    console.log('userData', userData);
    try {
      return this.userService.CreateUser(userData);
    } catch (error) {
      console.log('error', error);
    }
  }
}
