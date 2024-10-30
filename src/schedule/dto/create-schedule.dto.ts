import { IsString, IsDate, IsInt, IsOptional } from 'class-validator';

export class CreateScheduleDto {
  @IsString()
  day: string;

  @IsString()
  image: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  code: string;

  @IsDate()
  @IsOptional()
  startTime?: Date;

  @IsDate()
  @IsOptional()
  endTime?: Date;

  @IsInt()
  subjectId: number;

  @IsInt()
  lecturerId: number;
}
