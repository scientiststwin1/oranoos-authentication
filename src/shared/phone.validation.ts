import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator'
  
  @ValidatorConstraint({ name: 'customText', async: false })
  export class IRMobileValidator implements ValidatorConstraintInterface {
    validate(text: string): boolean {
      return /^09\d{9}$/g.test(text)
    }
  
    defaultMessage(args: ValidationArguments): string {
      return `Phone (${args.value}) is not valid!`
    }
  }
  