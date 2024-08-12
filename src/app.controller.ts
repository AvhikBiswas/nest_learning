import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getHelloo(): any {
    try {
      // Perform some operation that might fail
      const success = false; // Replace with your actual logic

      if (!success) {
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
      }

      return {
        mess: 'hello world',
      };
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
