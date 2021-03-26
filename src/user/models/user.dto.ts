import { ApiProperty } from '@nestjs/swagger'
import {IsNotEmpty, IsNumber, IsString, Length, Validate} from 'class-validator'
import { Match } from 'src/shared/decorators/match.decorator'
import {IRMobileValidator} from '../../shared/phone.validation'


export class LoginByPhoneDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Validate(IRMobileValidator)    
    phone: string

    @ApiProperty()
    @IsNotEmpty()
    @Length(6, 100)
    @IsString()
    password: string
  
    @ApiProperty()
    @IsNotEmpty()
    @Length(6, 100)
    @IsString()
    @Match('password')
    repeat_password: string
}
