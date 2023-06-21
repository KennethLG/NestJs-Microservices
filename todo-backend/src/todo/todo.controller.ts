import { Body, Controller, Get, HttpException, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
  @UsePipes(new ValidationPipe())
  create(@Body() todo: Todo) {
    return this.todoService.create(todo);
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string) {
    if (!id) {
      throw new HttpException('Please provide an id', 400)
    }
    return this.todoService.getTodoById(id);
  }
}
