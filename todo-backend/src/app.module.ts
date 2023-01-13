import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import config from 'config';

@Module({
  imports: [
    TodoModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
