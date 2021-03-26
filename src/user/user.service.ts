import { Injectable } from '@nestjs/common';
import { LoginByPhoneDto } from './models/user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {

    constructor(private userRepository: UserRepository){}

    registerByPhone(loginByPhoneDto: LoginByPhoneDto){
        return new Promise((resolve, reject) => {
            
        })
    }

}
