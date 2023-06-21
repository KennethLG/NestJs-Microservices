import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [HttpModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
