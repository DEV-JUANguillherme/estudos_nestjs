import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('signUp')
    // vamos então criar nosso método de sign up
    signUp(@Body() body: any){
        // aqui vamos criar um novo usuário
        const {email, password} = body;
        return this.authService.singUp(email, password);
    }
}
