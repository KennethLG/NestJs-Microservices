import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';
import { take } from 'rxjs';

@Controller('example')
export class ExampleController {
  constructor(
    private readonly exampleService: ExampleService
  ){}

  @Get('/')
  getExample() {
    console.log("running example")
    const numbers = this.exampleService.getHello();
    const takeFourNumbers = numbers.pipe(take(4));

    takeFourNumbers.subscribe((x) => console.log('Next: ', x));
  }
}
