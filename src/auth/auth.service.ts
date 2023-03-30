import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test() {
    console.log('Soy un test');
  }

  singup() {
    return { msg: 'I have signup' };
  }

  singin() {
    return { msg: 'I have signin' };
  }
}
