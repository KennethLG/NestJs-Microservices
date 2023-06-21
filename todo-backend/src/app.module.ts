import { Module } from '@nestjs/common';
import { TodoModule } from './components/todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { ExampleModule } from './components/example/example.module';
import config from 'config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TodoModule,
    ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
