import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './DTO/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post()
  addUser(@Body() createdUserDTO: CreateUserDTO) {
    const { nome, email, password, avatar} = createdUserDTO
    return this.usersService.addUser(nome, email, password, avatar);
  }

  @Get()
  getUser() {
    return this.usersService.getUser();
  }
}
