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
    try {
      const response = await lastValueFrom(this.httpService.post(endpoint, todo));
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      // throw new CustomHttpException(error.response.data, error.response.status);
    }
  }

  async getAll() {
    const endpoint = this.configService.endpoints.db.getAll;
    console.log(endpoint)
    try {
      const response = await lastValueFrom(this.httpService.get(endpoint));
      console.log(response)
      return response.data;
    } catch (error) {
      console.error(error);
      // throw new CustomHttpException(error.response.data, error.response.status);
    }
  }

  getTodoById(id: string) {
    return `todo ${id}`;
  }
}
