import { Injectable } from '@nestjs/common';

@Injectable()
export class TmpService {
    getHello(): string {
        return 'hello world';
    }
}
