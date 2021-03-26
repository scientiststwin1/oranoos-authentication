import { Injectable } from '@nestjs/common';
import { LoginByPhoneDto } from './models/user.dto';
import { UserEntity } from './models/user.entity';
import { Role } from './models/user.enum';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository){}

    registerByPhone(loginByPhoneDto: LoginByPhoneDto){
        const {phone, password} = loginByPhoneDto
        return new Promise(async (resolve, reject) => {
            try{
                let user = new UserEntity()
                user.phone = phone
                user.password = password
                user.role = Role.USER

                user = await this.userRepository.save<UserEntity>(user)

                
            }catch(err){

            }
        })
    }

}
