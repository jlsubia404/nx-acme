import { Module } from '@nestjs/common';
import { MathService } from '../math/math.service';

@Module({
  controllers: [],
  providers: [MathService],
  exports: [MathService],
})
export class NestLibModule {}
