import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo/todo.controller';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import config from 'config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ConfigModule.forRoot({
      load: [config],
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
