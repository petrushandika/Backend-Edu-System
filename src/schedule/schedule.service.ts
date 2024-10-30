import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async createSchedule(createScheduleDto: CreateScheduleDto) {
    return await this.prisma.schedule.create({
      data: {
        ...createScheduleDto,
        startTime: createScheduleDto.startTime ?? new Date(),
        endTime: createScheduleDto.endTime ?? new Date(),
      },
    });
  }

  async findAll() {
    return await this.prisma.schedule.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.schedule.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return await this.prisma.schedule.update({
      where: { id },
      data: updateScheduleDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.schedule.delete({
      where: { id },
    });
  }
}
