import { Body, Injectable } from '@nestjs/common';
import { Users } from './entity/emtity';

@Injectable()
export class UsersService {
user = []

    addUser(nome: string, email: string, password: string, avatar: string) {
        const users = new Users(nome, email, password, avatar)
      this.user.push(users)
    }

    getUser(): Users[] {
     return this.user;
    }
}
