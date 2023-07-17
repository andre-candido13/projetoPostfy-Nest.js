import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Users } from './entity/emtity';
import { CreateUserDTO } from './DTO/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) { }
  user: Users[] = [];
  
  async addUser(data: CreateUserDTO) {
    const existingUser = await this.prisma.user.findUnique({where: {email: data.email}})
    const hashPassword = bcrypt.hashSync(data.password, 10)
    
    if (existingUser) throw new HttpException('Usuário já cadastrado', HttpStatus.CONFLICT)
    
    const hash = ({ ...data, password: hashPassword })
    await this.prisma.user.create({ data: hash })
    return data
  }
  
    async findUserById(id: number) {
      const user =  await this.prisma.user.findFirst({ where: { id } });
      if (!user) throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
      return user


    }

  }


