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

@Module({
  imports: [PrismaModule, AuthModule, UserModule, ScheduleModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude({ path: '/auth/register', method: RequestMethod.POST })
      .exclude({ path: '/auth/login', method: RequestMethod.POST })
      .exclude({ path: '/user/:id', method: RequestMethod.GET })
      .exclude({ path: '/user/:id', method: RequestMethod.PATCH })
      .exclude({ path: '/user/:id', method: RequestMethod.DELETE })
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
