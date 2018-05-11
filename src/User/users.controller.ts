import {Controller, Post, Param, Body, Get} from '@nestjs/common';
import {UsersService} from './users.service';

@Controller('Users')
export class UsersController{
    constructor(private usersService: UsersService){}

    @Get()
    public async getUsers(){
        return await this.usersService.getUsers();
    }

    @Post('register')
    public async addUsers(@Body() users: any){
        return await this.usersService.addUsers(users);
    }

    @Post('login')
    public async Login(@Body() users: any){
        if (await this.usersService.loginValidate(users)){
            return 'login sucess';
        }
        else{
            return 'login fail';
        }
    }
}
