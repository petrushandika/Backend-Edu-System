import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthenticationMiddleware } from './middlewares/authentication.middleware';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ScheduleModule } from './schedule/schedule.module';
import { SubjectModule } from './subject/subject.module';
import { LecturerModule } from './lecturer/lecturer.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, ScheduleModule, SubjectModule, LecturerModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude({ path: '/auth/register', method: RequestMethod.POST })
      .exclude({ path: '/auth/login', method: RequestMethod.POST })
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
