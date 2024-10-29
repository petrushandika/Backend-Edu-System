import { IsEnum, IsString } from 'class-validator';
import { Role } from 'src/types/role-type';

export class LoginAuthDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsEnum(Role)
  role: Role;
}
