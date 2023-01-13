import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  async getTodos() {
    const endpoint = this.configService.endpoints.db.getTodos;
    const response = await lastValueFrom(this.httpService.get(endpoint));
    return response.data;
  }

  getTodoById(id: string) {
    return `todo ${id}`;
  }
}
