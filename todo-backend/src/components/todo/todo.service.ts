import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'config';
import { lastValueFrom } from 'rxjs';
import Todo from 'src/schemas/todo.schema';
import { CustomHttpException } from 'src/util/customError';

@Injectable()
export class TodoService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  async create(todo: Todo) {
    const endpoint = this.configService.endpoints.db.create;
    const response = await lastValueFrom(this.httpService.post(endpoint, todo));
    return response.data;
  }

  async getAll() {
    const endpoint = this.configService.endpoints.db.getAll;
    const response = await lastValueFrom(this.httpService.get(endpoint));
    return response.data;
  }

  getTodoById(id: string) {
    return `todo ${id}`;
  }
}
