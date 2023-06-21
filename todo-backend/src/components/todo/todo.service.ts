import { HttpService } from '@nestjs/axios';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'config';
import { lastValueFrom } from 'rxjs';
import Todo from 'src/schemas/todo.schema';

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
      return response.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async getAll() {
    const endpoint = this.configService.endpoints.db.getAll;
    try {
      const response = await lastValueFrom(this.httpService.get(endpoint));
      return response.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  getTodoById(id: string) {
    return `todo ${id}`;
  }
}
