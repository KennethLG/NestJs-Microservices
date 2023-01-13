import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getTodos() {
    return ['todos list'];
  }

  getTodoById(id: string) {
    return `todo ${id}`;
  }
}
