import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './DTO/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post()
  addUser(@Body() body: CreateUserDTO) {
    
    return this.usersService.addUser(body);
  }

  @Get()
  getUser() {
    return this.usersService.getUser();
  }
}
