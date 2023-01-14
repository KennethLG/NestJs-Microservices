import { Body, Controller, Get, Post } from '@nestjs/common';
import { Todo } from 'src/schemas/todo.schema';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('/')
  create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Get('/')
  getTodos() {
    return this.todoService.getAll();
  }
}
