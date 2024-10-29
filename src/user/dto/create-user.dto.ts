import { IsString, IsOptional, IsEnum, IsEmail } from 'class-validator';
import { Role } from '../../types/role-type';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsString()
  password: string;

  @IsEnum(Role)
  role: Role;
}
