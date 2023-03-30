import { Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return this.authService.singup();
  }
  @Post('signin')
  singin() {
    return this.authService.singin();
  }
  @Get('test')
  test() {
    return this.authService.test();
  }
}
