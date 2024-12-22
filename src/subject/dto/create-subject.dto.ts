import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  image: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsDate()
  @IsOptional()
  timePost?: Date;

  @IsInt()
  @IsOptional()
  likes?: number;
}
