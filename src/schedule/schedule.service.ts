import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScheduleService {
  constructor(private readonly prismaService: PrismaService) {}

  createSchedule(createScheduleDto: CreateScheduleDto) {
    return this.prismaService.schedule.create({
      data: {
        ...createScheduleDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.schedule.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.schedule.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return this.prismaService.schedule.update({
      where: {
        id,
      },
      data: updateScheduleDto,
    });
  }

  remove(id: number) {
    return this.prismaService.schedule.delete({
      where: {
        id,
      },
    });
  }
}
