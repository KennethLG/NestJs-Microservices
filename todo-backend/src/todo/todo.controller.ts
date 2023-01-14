import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import Todo from 'src/schemas/todo.schema';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/')
  getTodos() {
    return this.todoService.getAll();
  }

  @Post('/')
  create(@Body() todo: Todo) {
    return this.todoService.create(todo);
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.getTodoById(id);
  }
}
