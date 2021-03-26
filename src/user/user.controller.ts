import { Body, Controller, Post } from '@nestjs/common';
import { LoginByPhoneDto, RegisterByPhoneDto } from './models/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService:UserService
    ){}

    @Post('/register-by-phone')
    registerByPhone( @Body() registerByPhoneDto: RegisterByPhoneDto){
        return this.userService.registerByPhone(registerByPhoneDto)
    }

    @Post('/login-by-phone')
    loginByPhone( @Body() loginByPhoneDto: LoginByPhoneDto){
        return this.userService.loginByPhone(loginByPhoneDto)
    }

}
