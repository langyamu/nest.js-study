import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TmpService } from './tmp/tmp.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TmpService],
})
export class AppModule {}
