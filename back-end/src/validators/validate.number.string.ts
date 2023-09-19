import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'isNumberStringValidation', async: false })
export class IsNumberStringValidationConstraint
  implements ValidatorConstraintInterface
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(value: any, args: ValidationArguments) {
    if (+value <= 0) return false;

    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultMessage(args: ValidationArguments) {
    return 'not <= 0.';
  }
}

export function IsNumberStringValidation() {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isNumberStringValidation',
      target: object.constructor,
      propertyName: propertyName,
      options: {},
      validator: IsNumberStringValidationConstraint,
    });
  };
}
