import { Controller, Get, Post, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get()
  async getOneUser(): Promise<void> {}

  @Post()
  async signIn(): Promise<void> {}

  @Post()
  async signUp(): Promise<void> {}

  @Get()
  async verify(): Promise<void> {}

  @Get()
  async refresh(): Promise<void> {}
}
