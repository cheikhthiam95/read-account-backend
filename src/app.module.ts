import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationsModule } from './operations/operations.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware'
import { OperationsController } from './operations/operations.controller'


@Module({
  imports: [OperationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(OperationsController)
  }
}
