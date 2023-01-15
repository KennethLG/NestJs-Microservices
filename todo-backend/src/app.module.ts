import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import config from 'config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
