import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TmpService } from './tmp.service';

@Module({
  imports: [],
  controllers: [AppController],
  // providers: [AppService, TmpService], // 这样控制台不报错
  providers: [
    AppService,
    {
      // provide: 'TmpService', // 类型为 string 这样控制台报错 说找不到对应 模块 (编辑器不报错)
      provide: TmpService,
      useClass: TmpService,
    }
  ],
})
export class AppModule { }

