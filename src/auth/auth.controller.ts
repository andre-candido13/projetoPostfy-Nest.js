import { Controller, Post, Body, Get } from '@nestjs/common';
import { SignInDto } from './auth-signIn.dto';
import { AuthService } from './auth.service';
import { AuthSignUpDto } from './auth-signUp.dto';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('sign-in')
    async signIn(@Body() body: SignInDto) {
        return this.authService.signIn(body)

    }

    @Post('sign-up') 
        async signUp(@Body() body: AuthSignUpDto) {
            return await this.authService.signUp(body)
        }

    @Get()
    async getSignIn(@Body() body: SignInDto) {
        return this.authService.signIn(body)
    }    
    
}
