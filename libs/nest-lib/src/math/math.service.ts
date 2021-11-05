import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  sumFromNestService(a: number, b: number): number {
    return a + b;
  }
}
