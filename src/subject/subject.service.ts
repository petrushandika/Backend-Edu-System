import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubjectService {
  constructor(private prismaService: PrismaService) {}

  async createSubject(createSubjectDto: CreateSubjectDto) {
    return await this.prismaService.subject.create({
      data: {
        ...createSubjectDto,
        timePost: createSubjectDto.timePost ?? new Date(),
      },
    });
  }

  async findAll() {
    return await this.prismaService.subject.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.subject.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return await this.prismaService.subject.update({
      where: { id },
      data: updateSubjectDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.subject.delete({
      where: { id },
    });
  }
}
