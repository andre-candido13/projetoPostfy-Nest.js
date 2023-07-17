import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInDto } from './auth-signIn.dto';
import { AuthSignUpDto } from './auth-signUp.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDTO } from 'src/users/DTO/create-user.dto';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
constructor( 
    private readonly userService: UsersService, 
    private readonly prisma: PrismaService, 
    private readonly jwtService: JwtService
    ) {}

    async signUp(body: AuthSignUpDto) {
        const user = await this.userService.addUser(body)
        return this.createToken(user)

    }
    
    createToken(user: CreateUserDTO) {
        const token = this.jwtService.sign({
           name: user.name,
           email: user.email
    
        })
        return { token }
    }

    async signIn({email, password}: SignInDto) {
       const user = await this.prisma.user.findFirst({where: {email}})
       if (!user) throw new HttpException('e-mail ou password invalido', HttpStatus.BAD_REQUEST)
       
       
       const validPassword =  bcrypt.compareSync(password, user.password)
       if (!validPassword) throw new HttpException('e-mail ou password invalido', HttpStatus.UNAUTHORIZED)
       return this.createToken(user);
}

}
