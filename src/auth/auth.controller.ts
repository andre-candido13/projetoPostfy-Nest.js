import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { SignInDto } from './DTO/auth-signIn.dto';
import { AuthService } from './auth.service';
import { AuthSignUpDto } from './DTO/auth-signUp.dto';
import { User } from '@prisma/client';
import { AuthGuard } from './authGuard/auth.guard';


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


    @UseGuards(AuthGuard)
    @Get('me')
    async userLogged(user: User) {
        return user
        
    }    
    
}
