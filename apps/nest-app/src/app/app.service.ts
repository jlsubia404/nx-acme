import { Injectable } from '@nestjs/common';
import { sum } from '@acme/util-math';
import { MathService } from '@acme/nest-lib';
@Injectable()
export class AppService {
  constructor(private readonly mathService: MathService) {}

  getData(): { message: string } {
    console.log('Sumando valores randomicos');

    return {
      message: `Welcome to nest-app!, sumWorkSpace: ${sum(
        Math.random(),
        Math.random()
      )}, sumNestLib: ${this.mathService.sumFromNestService(
        Math.random(),
        Math.random()
      )}`,
    };
  }

  sumFromWorkSpaceLib(x: number, y: number): number {
    return sum(x, y);
  }
}
