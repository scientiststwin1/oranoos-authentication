import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Result, ResultError, RpcResultError } from 'src/shared/main.helper';
import { In } from 'typeorm';
import { LoginByPhoneDto, RegisterByPhoneDto } from './models/user.dto';
import { UserEntity } from './models/user.entity';
import { UserRole } from './models/user.enum';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {

    constructor(
        private readonly userRepository: UserRepository,
        private jwtService: JwtService
    ){}

    registerByPhone(registerByPhoneDto: RegisterByPhoneDto){
        const {phone, password} = registerByPhoneDto
        return new Promise(async (resolve, reject) => {
            try{
                let user = new UserEntity()
                user.phone = phone
                user.password = password
                user.role = UserRole.USER

                await this.userRepository.save<UserEntity>(user)
                const jwt = this.createJwt(user)

                resolve(new Result({access_token: jwt},))                
                
            }catch(err){
                console.log(err)
                if(err.code == "ER_DUP_ENTRY") reject(new ResultError(null, 400, 400, "phone existed"))
                reject(new ResultError(err?.data))
            }
        })
    }

    loginByPhone(loginByPhoneDto:LoginByPhoneDto){
        const {phone, password} = loginByPhoneDto
        return new Promise(async (resolve, reject) => {
            try{
                const user = await this.userRepository.findOne({phone, password})
                if(!user) reject(new ResultError(null,400,400, 'invalid phone or password'))

                const jwt = this.createJwt(user)
                resolve(new Result({access_token: jwt}))
            }catch(err){
                reject(new ResultError(err))
            }
        })
    }

    userInformation(userId: string){
        return new Promise((resolve, reject) => {
            try{
                const user = this.userRepository.findOne(userId)

                resolve(new Result(user, {message: "user information", code: 200}))
            }catch(err){
                reject(new RpcResultError(null,500,err?.message))
            }
        })
    }

    usersInformation(userIds: string[]){
        return new Promise((resolve, reject)=>{
            try{
                const users = this.userRepository.find({id: In(userIds)});
                
                resolve(new Result(users, {message: "users information", code: 200}))
            }catch(err){
                reject(new RpcResultError(null,500,err?.message))
            }
        })
    }

    private createJwt(user: UserEntity): string{
        const jwt = this.jwtService.sign({
            id: user.id,
            role: user.role
        })

        return jwt
    }
}
