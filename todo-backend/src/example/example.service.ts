import { Injectable } from '@nestjs/common';
import { Observable, interval } from 'rxjs';

@Injectable()
export class ExampleService {
  getHello(): Observable<number> {
    return interval(1000)
  }
}
