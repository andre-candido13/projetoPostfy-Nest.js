import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './DTO/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post()
  addUser(@Body() body: CreateUserDTO) {
    
    return this.usersService.addUser(body);
  }

  @Get(':id/publication')
  findUserById(@Param('id', ParseIntPipe) user_id: number) {
    return this.usersService.findUserById(user_id);
  }
}
