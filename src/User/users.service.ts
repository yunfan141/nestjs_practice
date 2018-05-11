import { Component , Inject} from '@nestjs/common';
import {Repository, getRepository, getConnection} from 'typeorm';
import {UsersEntity} from './users.entity';

@Component()
export class UsersService {
    constructor(
        @Inject('UsersRepository') private readonly usersRepository: Repository<UsersEntity>,
    ){}

    public async getUsers(): Promise<Array<UsersEntity>>{
        return await this.usersRepository.find();
    }

    public async addUsers(users: any): Promise<UsersEntity>{
        return await this.usersRepository.save(users);
    }

    public async loginValidate(users: any): Promise<boolean>{
        if (await this.usersRepository.findOne({where: {username : users.username, password : users.password, role: users.role}})){
            return true;
        }
        else{
            return false;
        }
    }

}