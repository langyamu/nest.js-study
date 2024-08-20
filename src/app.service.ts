import { Injectable } from '@nestjs/common';
import { TmpService } from './tmp/tmp.service';

@Injectable()
export class AppService {

  constructor(private readonly tmpService: TmpService) {}
  getHello(): string {
    return this.tmpService.getHello();
  }
}
