import { IsString, IsInt, IsDate } from 'class-validator';

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

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;

  //   @IsInt()
  //   subjectId: number;

  //   @IsInt()
  //   lecturerId: number;
}
