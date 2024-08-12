import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import users, { User } from './data';

@Injectable()
export class UserService {
  GetAllUser(): User[] {
    if (!users || users.length === 0) {
      throw new HttpException('No Data Found', HttpStatus.NOT_FOUND);
    }
    return users;
  }

  GetUserByID(id: number): User {
    const userData = users.find((item) => item.id === id);
    if (!userData) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    return userData;
  }

  CreateUser(userData: User): any {
    const data = users.push(userData);
    return data;
  }
}
