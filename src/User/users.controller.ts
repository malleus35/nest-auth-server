import { Controller, Get, Post, Headers, Body, Delete } from '@nestjs/common';
import { SignInDto } from 'src/dto/SignInDto';
import { SignUpDto } from 'src/dto/SignUpDto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('verify')
  async verify(@Headers('authorization') token: string): Promise<void> {}

  @Post('signin')
  async signIn(@Body() signInBody: SignInDto): Promise<void> {}

  @Post()
  async signUp(@Body() signUpBody: SignUpDto): Promise<void> {}

  @Post()
  async logOut(@Headers('authorization') token: string): Promise<void> {}

  @Post('refresh')
  async refresh(@Headers('authorization') token: string): Promise<void> {}

  @Delete()
  async delete(@Headers('authorization') token: string): Promise<void> {}
}
