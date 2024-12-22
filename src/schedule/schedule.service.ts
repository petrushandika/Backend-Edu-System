import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private prismaService: PrismaService) {}

  async createSchedule(createScheduleDto: CreateScheduleDto) {
    return await this.prismaService.schedule.create({
      data: {
        ...createScheduleDto,
        startTime: createScheduleDto.startTime ?? new Date(),
        endTime: createScheduleDto.endTime ?? new Date(),
      },
    });
  }

  async findAll() {
    return await this.prismaService.schedule.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.schedule.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return await this.prismaService.schedule.update({
      where: { id },
      data: updateScheduleDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.schedule.delete({
      where: { id },
    });
  }
}
