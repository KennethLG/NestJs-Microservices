import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getTodo() {
    return ['todos list'];
  }
}
