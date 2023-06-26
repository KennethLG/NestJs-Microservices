import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'config';
import { lastValueFrom } from 'rxjs';
import User from 'src/schemas/user.schema';

@Injectable()
export class UserService {

  constructor(
     private readonly httpService: HttpService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  async findByUsername(username: string): Promise<User | undefined> {
    const endpoint = this.configService.endpoints.user.findByUsername;
    const url = endpoint.replace(":username", username);
    const response = await lastValueFrom(
      this.httpService.get(url)
    );
    return response.data;
  }
}
