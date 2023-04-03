import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  MinLength
} from 'class-validator';

export class UsersDto {
  @IsNotEmpty({ message: 'first name can not be empty' })
  @MaxLength(255, {
    message: 'first name is too long'
  })
  first_name: string;
  @IsNotEmpty({ message: 'last name can not be empty' })
  @MaxLength(255, {
    message: 'last name is too long'
  })
  last_name: string;
  @IsNotEmpty({ message: 'username can not be empty' })
  @MaxLength(255, {
    message: 'username is too long'
  })
  username: string;
  @IsNotEmpty({ message: 'email can not be empty' })
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: 'password can not be empty' })
  @MinLength(6, {
    message: 'password is too short'
  })
  @MaxLength(255, {
    message: 'password is too long'
  })
  password: string;
  @IsNumber()
  created_by: number;
  @IsNumber()
  updated_by: number;
}

export class RegisterDto {
  @IsNotEmpty({ message: 'first name can not be empty' })
  @MaxLength(255, {
    message: 'first name is too long'
  })
  first_name: string;
  @IsNotEmpty({ message: 'last name can not be empty' })
  @MaxLength(255, {
    message: 'last name is too long'
  })
  last_name: string;
  @IsNotEmpty({ message: 'username can not be empty' })
  @MaxLength(255, {
    message: 'username is too long'
  })
  username: string;
  @IsNotEmpty({ message: 'email can not be empty' })
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: 'password can not be empty' })
  @MinLength(6, {
    message: 'password is too short'
  })
  @MaxLength(255, {
    message: 'password is too long'
  })
  password: string;
  @IsNumber()
  created_by: number;
  @IsNumber()
  updated_by: number;
}

export class UsersLoginDto {
  @IsNotEmpty({ message: 'email can not be empty' })
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: 'password can not be empty' })
  @MinLength(6, {
    message: 'password is too short'
  })
  @MaxLength(255, {
    message: 'password is too long'
  })
  password: string;
}
