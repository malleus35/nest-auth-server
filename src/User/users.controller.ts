import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.findAll();
  }
}
