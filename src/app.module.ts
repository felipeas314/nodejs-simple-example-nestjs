import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FruitsModule } from './fruit/fruit.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        "type": "postgres",
        "host": "172.17.0.3",
        "port": 5432,
        "username": "postgres",
        "password": "postgres",
        "database": "nestjs_example",
        "entities": ["dist/**/*.entity{.ts,.js}"],
        "synchronize": true
      }),
    FruitsModule,
    UsersModule
  ],
  exports:[
    TypeOrmModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }



}
