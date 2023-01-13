import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getTodos() {
    return 'Get all todos';
  }
}
