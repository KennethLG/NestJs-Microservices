import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import config from 'config';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
