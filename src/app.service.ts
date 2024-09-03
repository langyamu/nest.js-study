import { Inject, Injectable } from '@nestjs/common';
import { TmpService } from './tmp.service';

@Injectable()
export class AppService {

  constructor(
    @Inject('Tmp')  // 充当注入的 Key
    private readonly tmpService: TmpService 
    // TmpService 之前的作用  即是类型也是 Key (通过 Key 去容器中找到服务、服务实例化、服务注入)
    // TmpService 现在的作用：仅作为类型
  ) {}
  getHello(): string {
    return this.tmpService.getHello();
  }
}
